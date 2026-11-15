# BagShop — Reference-matched Next.js storefront

This project is a responsive Next.js 15 / React 19 storefront. The home page has been refined against the supplied BagShop screenshot and uses locally bundled crops from that screenshot for the hero, featured products, sale banner, review portraits, and newsletter artwork.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production check

```bash
npm run build
npm start
```

## Included routes

- `/` Home
- `/shop` Shop
- `/product/[slug]` Product detail
- `/cart` Cart
- `/wishlist` Wishlist
- `/about` About
- `/reviews` Reviews
- `/contact` Contact
- `/faq`, `/shipping`, `/returns`, `/support`, `/privacy`, `/terms`

Cart and wishlist state use browser local storage. Contact/newsletter forms are frontend demos and need a backend/email service for real submissions. Checkout is a frontend demo and does not process payments.

## Notes

- The home page imagery is bundled in `public/` so it does not depend on remote image hosts.
- The screenshot is 1024px wide; the layout is tuned to that desktop composition and adapts for smaller screens.
- Exact visual matching can vary with browser font rendering and viewport size.
