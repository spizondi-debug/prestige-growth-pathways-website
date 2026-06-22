<div align="center">

# Prestige Growth Pathways

**Workforce Growth Intelligence — a premium marketing site by Prestige Tutelage.**

Personalised development · Manager accountability · Workplace application · Measurable outcomes

</div>

---

A modern, futuristic, enterprise-grade marketing website built with **Vite + React + Tailwind CSS + Framer Motion**. Dark-first design with the Prestige blue→green brand gradient, frosted glass surfaces, soft glows, selective 3D depth and smooth, purposeful motion.

## ✨ Highlights

- **Striking 3-slide hero** with an animated, perspective-tilted glass dashboard
- **11-module platform overview** (Assessment Centre → Risk Engine)
- Messaging on manager accountability, workplace application & measurable ROI
- Credibility section with animated stat counters + partner placeholders
- Training-solution highlights, an animated **“How it works”** flow and strong CTAs
- 8 fully built pages, **mobile-first** responsive design
- All copy lives in editable data files; bespoke SVG/gradient art (no stock photos)

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About Prestige |
| `/platform` | Prestige Growth Pathways Platform |
| `/training-solutions` | Training Solutions |
| `/industries` | Industries |
| `/resources` | Resources |
| `/contact` | Contact |
| `/book-consultation` | Book a Consultation (multi-step) |

## 🚀 Getting started

**Requirements:** Node.js 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to dist/)
npm run build

# 4. Preview the production build locally
npm run preview
```

## ✏️ Editing content

All marketing copy is centralised in **`src/data/`** so you rarely touch
components:

| File | Controls |
|------|----------|
| `site.js` | Brand name, contact details, navigation, primary CTA |
| `modules.js` | The 11 platform modules |
| `content.js` | Hero slides, stats, how-it-works, credibility, training highlights |
| `pages.js` | Industries, resources, values, timeline, delivery formats, FAQs |

**Icons** are referenced by name (e.g. `icon: 'Gauge'`). To use a new one, add it
to the registry in `src/components/ui/Icon.jsx`.

**Images** are intentionally bespoke SVG/gradient art to keep the futuristic feel.
To add real photography, drop assets in `public/placeholders/` and reference them
(see that folder’s README for recommended sizes).

> See **`CLAUDE.md`** for the full design system, branding rules and structure.

## 🌐 Deployment

The build produces a static site in `dist/`. Because this is a single-page app,
your host must rewrite unknown paths to `index.html`.

### Vercel
- Import the repo. Framework preset: **Vite**.
- Build command `npm run build`, output directory `dist`.
- SPA rewrites are handled automatically.

### Netlify
- Build command `npm run build`, publish directory `dist`.
- Add a `_redirects` file (or `netlify.toml`) with:
  ```
  /*  /index.html  200
  ```

### GitHub Pages
1. Set the base path in `vite.config.js`:
   ```js
   base: '/<your-repo-name>/',
   ```
2. `npm run build`, then publish the `dist/` folder (e.g. via the
   `gh-pages` branch or a GitHub Actions workflow).
3. Add a `404.html` copy of `index.html` for SPA fallback.

### Any static host
Upload the contents of `dist/` and configure an SPA fallback to `index.html`.

## 🔌 Wiring up forms

The Contact form and Book-a-Consultation flow are **demo-only**. Connect them to
your provider of choice — e.g. HubSpot, Calendly, Formspree or a serverless
function — by handling the submit in `src/pages/Contact.jsx` and
`src/pages/BookConsultation.jsx`.

## 🧱 Tech stack

Vite · React 18 · React Router v6 · Tailwind CSS 3 · Framer Motion · lucide-react

---

© Prestige Growth Pathways. Placeholder content — ready for your copy.
