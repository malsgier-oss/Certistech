# CertisTech Website (Next.js + Cloudflare Pages)

Dark premium, bilingual (AR default + EN auto-detect), enterprise aesthetic.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Routing
- `/` redirects to `/ar` (default) or `/en` based on browser + saved cookie.
- Manual: `/ar`, `/en`

## Assets
- Hero visual treatment: tokenized gradients in `app/globals.css` and `components/Hero.tsx`
- Logo mark: `public/logo/certistech.svg`
- Optional new hero/demo assets can be added under `public/img/` and swapped in through section-level wrappers when required.

## Redesign migration checklist
- Confirm required brand assets are available in `public/` (hero art, social share images, trust badges).
- Verify Arabic and English spacing in:
  - `components/Navbar.tsx`
  - `components/ui/Section.tsx`
  - `components/Hero.tsx`
- Validate motion timing and reduced-motion behavior if a stricter accessibility policy is required later.
- If you add screenshots/illustrations, prefer WebP/AVIF and set explicit `alt` text on every media element.
