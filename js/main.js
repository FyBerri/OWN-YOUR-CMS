const chapters = [
  ["Separate New Patients, Not The Entire Site","Give new visitors their own lane, without duplicating the whole site."],
  ["Map Intake, Not Paperwork First","Start from the patient's path — let forms slot into that, not the reverse."],
  ["Separate Pages From Tools, Not Tool From Page","Keep the portal and scheduler distinct from your public pages."],
  ["Route Messages, Not Pages, Before Staff Rekeys Anything","Send messages to the right inbox the first time — no copy-pasting."],
  ["Keep Return Access Visible, Not Buried","Make the portal link obvious on every page, every time."]
];
const list = document.getElementById('chapter-list');
chapters.forEach((c,i)=>{
  const div = document.createElement('div');
  div.className = 'chapter' + (i===0?' open':'');
  div.innerHTML = `
    <button class="chapter-head" onclick="this.parentElement.classList.toggle('open')">
      <span class="chnum">${i+1}</span>
      <h4>${c[0]}</h4>
      <svg class="chevron" viewBox="0 0 20 20" fill="none"><path d="M5 8l5 5 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </button>
    <div class="chapter-body"><p>${c[1]}</p></div>`;
  list.appendChild(div);
});

function showView(name){
  document.getElementById('view-store').classList.toggle('active', name==='store');
  document.getElementById('view-member').classList.toggle('active', name==='member');
  window.scrollTo({top:0, behavior:'smooth'});
}
function buyNow(btn){
  const original = btn.innerHTML;
  btn.setAttribute('data-state','loading');
  btn.innerHTML = 'Processing…';
  showToast('Redirecting to checkout…');
  setTimeout(()=>{ showView('member'); btn.removeAttribute('data-state'); btn.innerHTML = original; }, 650);
}
function scrollToId(id){ document.getElementById(id).scrollIntoView({behavior:'smooth'}); }
function showTab(btn, name){
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active', p.dataset.panel===name));
}
function fakeDownload(btn){ const t=btn.textContent; btn.textContent='Downloaded ✓'; showToast('File downloaded'); setTimeout(()=>btn.textContent=t,1400); }
function fakeUpsell(btn){ btn.textContent='Added ✓'; showToast('Code template added — RM99.90'); }
function fakePost(btn){ showToast('Question posted to discussion'); }
function fakeSupport(btn){ showToast('Support message started'); }
function showToast(msg){
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>t.classList.remove('show'), 2200);
}
window.addEventListener('scroll', ()=>{
  const cta = document.getElementById('stickyCta');
  if(document.getElementById('view-store').classList.contains('active')){
    cta.classList.toggle('show', window.scrollY > 520);
  } else {
    cta.classList.remove('show');
  }
});
