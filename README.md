# Complete Clinic System Without the Chaos — Sales Funnel Webstore

A static, ready-to-deploy sales funnel page for the "Complete Clinic System Without the Chaos" lead magnet ebook.

## What's included

```
clinic-system-webstore/
├── index.html        # All markup: storefront + member/access page
├── css/
│   └── styles.css     # All styling (colors, layout, components)
├── js/
│   └── main.js        # Interactivity (buy flow, chapter accordion, tabs, toasts)
└── README.md
```

No build step, no dependencies to install — it's plain HTML/CSS/JS. The only external
resource loaded is Google Fonts (Space Grotesk, Inter, IBM Plex Mono) via a `<link>` tag
in `index.html`.

## Running it locally

Just open `index.html` directly in a browser, or serve the folder:

```bash
cd clinic-system-webstore
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying

This is a static site, so it works on any static host. A few common options:

**Netlify / Vercel (drag-and-drop)**
- Zip contents (or the folder itself) and drag it onto the Netlify "Deploys" page,
  or run `vercel` / `netlify deploy` from inside this folder.

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. In repo Settings → Pages, set the source branch/folder to the repo root.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

**Any web host / cPanel / S3**
- Upload `index.html`, `css/`, and `js/` to your web root (e.g. `public_html/`) keeping
  the folder structure intact.

## What's a placeholder vs. functional

- **Layout, styling, copy, and all client-side interactions** (buy button flow, chapter
  accordion, before/after tabs, download/upsell/support buttons, toasts) are fully
  working in the browser.
- **Checkout, real file delivery, community posts, and the support inbox** are visual
  placeholders — clicking "Buy" simulates a purchase and reveals the mock member/access
  page. To go live, wire these up to real services, e.g.:
  - Checkout → Stripe Checkout, Lemon Squeezy, Gumroad, etc.
  - File delivery → your checkout provider's built-in file delivery, or an S3/CDN link
    gated behind purchase confirmation.
  - Community/Q&A → a Discourse, Circle, or simple comments embed.
  - Support inbox → a shared inbox tool (Help Scout, Front) or a contact form wired to
    email.

## Editing content

- Chapter titles/descriptions: edit the `chapters` array at the top of `js/main.js`.
- Colors: edit the CSS custom properties in the `:root { ... }` block at the top of
  `css/styles.css`.
- Copy (headline, tagline, pricing, welcome post): edit directly in `index.html`.
