# Front Door Flow — Sales Website

A static responsive landing page for the Front Door Flow digital products. The site presents the three offers and sends customers to the corresponding KlikWoi product checkout.

## Products and checkout links

- **eBook only — RM69.90:** https://front-door-flow120.klikwoi.net/product/b42d95b8-efc9-4eb0-9e35-734d107a461e
- **Code template only — RM99.90:** https://front-door-flow120.klikwoi.net/product/0c0702dd-0baa-4b14-b5fd-40342738db42
- **Complete bundle — RM159.90:** https://front-door-flow120.klikwoi.net/product/717b8983-d022-4e54-9c14-d13ba3eb60c3
- **Storefront:** https://front-door-flow120.klikwoi.net/shop

The bundle saves RM9.90 (about 5.8%) compared with buying the eBook and code template separately (RM169.80).

## Run locally

Open `index.html` in a browser, or serve the directory:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deployment notes

This is a static HTML/CSS/JavaScript website. Keep the `css/`, `js/`, and referenced image/video assets alongside `index.html` when deploying.

## Payment and digital delivery

The Buy buttons open the matching hosted KlikWoi product checkout. This website does **not** process payments, verify orders, or grant downloads itself. Configure and test the product prices, payment methods, post-payment delivery, and customer emails in KlikWoi before launch. Never treat a visit to this landing page as proof of payment.

## SEO and content

The page includes a title, meta description, canonical URL, and Open Graph/Twitter metadata. Ensure the canonical domain matches the final production domain and submit the live URL/sitemap in Google Search Console once deployed.
