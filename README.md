# MPKBK — Portfolio Site

A one-page React site built with Vite: hero, about, photos, videos, sponsors,
merch (showcase only, no cart yet), and contacts — with a soft light that
slowly drifts toward your cursor over a dark, grainy background.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build a production bundle:

```bash
npm run build   # outputs to dist/
npm run preview # serve that build locally to double-check it
```

## Where to edit things

Almost everything you'll want to change lives in **`src/data/content.js`**:
tagline, about text/stats, video embed links, sponsor names/links, merch
items (name, price, buy link), email and social links, nav labels. Change
the text there first — layout and styling shouldn't need to change for
normal content updates.

- **Photos** (`src/components/Photos.jsx`): currently placeholder tiles.
  Drop real images into `src/assets/photos/`, import them, and swap the
  placeholder `<div className="photo-tile">` for an `<img>`.
- **Videos** (`src/data/content.js`): paste a real embed URL into a video's
  `embedUrl` field (e.g. `https://www.youtube.com/embed/VIDEO_ID`) and that
  card automatically switches from a placeholder to a live player.
- **Merch** (`src/data/content.js` + `src/components/Merch.jsx`): this is a
  *showcase* — each "Buy" button just links out to whatever you put in
  `href` (an external store, a Discord/DM link, or a "coming soon" page).
  There's no cart or payment logic yet. When you're ready to sell directly
  on the site, the natural next step is wiring this section up to a
  provider like Stripe Checkout / Shopify Buy Button / Snipcart, plus a
  small backend or serverless function to handle orders.
- **Logo / banners** (`src/assets/`): `logo-mark.webp` (the balaclava mark),
  `hero-banner.webp` (hero background), `wordmark-banner.webp` (the MPKBK
  logotype), `scene-texture.webp` and `gradient-texture.webp` (currently
  used behind the About image / as design texture). Swap any of these for
  new exports and keep the same filenames, or update the `import` paths in
  the component that uses them.

## The cursor light effect

`src/components/CursorLight.jsx` renders a fixed, full-screen layer with two
radial-gradient glows. On every animation frame it eases the glow position a
little closer to the cursor (`lerp` factor `0.045` for the big glow, `0.09`
for a smaller trailing one), which is what gives it that slow, floaty
"catching up" feel instead of snapping straight to the mouse. To make it:

- **Faster/snappier**: raise those two numbers (try `0.08` / `0.15`).
- **Slower/heavier**: lower them (try `0.02` / `0.05`).
- **Bigger or brighter**: edit the `.cursor-light` gradient sizes/opacities
  in `src/index.css`.

It also responds to `touchmove`, so it still does something on mobile/tablet
as you drag a finger, though the effect matters most on desktop.

## Project structure

```
src/
  data/content.js     ← edit text, links, and lists here
  components/          ← one file per section (Nav, Hero, About, Photos, …)
  assets/              ← logo, banners, textures
  index.css            ← all styling (design tokens at the top)
  App.jsx              ← assembles the page
```

## Deploying

This is a static Vite app, so it deploys to any static host: Vercel,
Netlify, Cloudflare Pages, GitHub Pages, etc. Point the host at this
repo/folder with build command `npm run build` and output directory `dist`.

## Notes

- Fonts (Oswald + Inter) load from Google Fonts via a `<link>` in
  `index.html` — remove that and self-host if you need a fully offline
  build.
- All placeholder copy is intentionally obvious (e.g. "Placeholder tagline…",
  "€00", "Sponsor 1") so nothing looks like real content by accident. Search
  the codebase for "placeholder" if you want to find every spot that still
  needs real content.
