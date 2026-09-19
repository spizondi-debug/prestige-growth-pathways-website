# CLAUDE.md — Prestige Growth Pathways

Guidance for Claude Code (and any developer) working in this repository.

---

## 1. Project purpose

**Prestige Growth Pathways** is the premium marketing website for a **workforce
growth intelligence and training platform** built by **Prestige Tutelage**.

The site exists to position Prestige as a credible, enterprise-ready partner and
to convert visitors into **Book a Consultation** leads. Core messaging pillars:

- **Workforce growth intelligence** — data over guesswork
- **Personalised employee development** — role-aware pathways
- **Manager accountability** — leaders own growth
- **Workplace application** — learning that changes behaviour
- **Measurable outcomes** — ROI leadership can see

This is a **static marketing site** (no backend). Forms are demo-only and ready
to be wired to a provider (HubSpot, Calendly, Formspree, etc.).

---

## 2. Tech stack

| Area | Choice |
|------|--------|
| Build | Vite 5 |
| UI | React 18 |
| Routing | React Router v6 (`BrowserRouter`) |
| Styling | Tailwind CSS 3 + custom tokens |
| Animation | Framer Motion |
| Icons | lucide-react (via an **explicit registry** — see below) |
| Fonts | Sora / Space Grotesk (display) + Inter (body) |

Commands: `npm run dev`, `npm run build`, `npm run preview`.

---

## 3. Branding & design rules

These are non-negotiable for keeping the site premium and on-brand.

### Colour
- **Prestige Blue** `#1E4FD8` (deep `#0A2A6B`, soft `#3B6BF0`)
- **Prestige Green** `#0FB87A` (bright `#37E2A5`, deep `#0A8A5C`)
- Deep ink backgrounds (`ink.900` `#070C1B` → `ink.600`)
- Off-white text (`cloud.50/100/200`)
- The brand gradient is **blue → green** (`bg-brand-gradient`).

### Aesthetic
- Confident, high-end, **enterprise** — never a generic training-company look.
- **Frosted glass** surfaces (`.glass`, `.glass-soft`), **gradient-framed** cards
  (`.frame-gradient`), soft gradient meshes, subtle noise (`.noise`).
- Dark-first with selective light contrast; soft glows (`shadow-glow-blue/green`).
- **Selective 3D / depth**: the hero uses a perspective-tilted glass dashboard
  (`HeroVisual`). Use depth sparingly — it should feel refined, not busy.

### Typography
- Display headings: `font-display` (Sora). Body: `font-sans` (Inter).
- Use the fluid display sizes: `text-display-xl / -lg / -md`.
- Apply `text-balance` to headings. Tight tracking on large type.

### Motion
- Entrance reveals via the `Reveal` component (ease `[0.22, 1, 0.36, 1]`, ~0.5–0.6s).
- Respect `prefers-reduced-motion` (handled globally in `styles/index.css`).
- No bouncy / gimmicky animation. Smooth, purposeful, premium.

### Do NOT
- Use stock-photo-style layouts or basic AI-template cards.
- Introduce new accent colours outside the Prestige palette.
- Add heavy 3D libraries or autoplay media that hurts performance.

---

## 4. Project structure

```
src/
├─ components/
│  ├─ layout/    Navbar, Footer, PageShell, PageHero, ScrollProgress
│  ├─ ui/        Button, GlassCard, SectionHeading, Reveal, Icon
│  ├─ shared/    Logo, Aurora, IconTile, StatCounter
│  └─ home/      HeroSlider, HeroVisual, PlatformGrid, MessagingBand,
│                Credibility, TrainingHighlights, HowItWorks, ClosingCTA
├─ data/         site.js, modules.js, content.js, pages.js   ← ALL editable copy
├─ pages/        Home, About, Platform, TrainingSolutions, Industries,
│                Resources, Contact, BookConsultation
├─ styles/       index.css (base + component utilities)
├─ App.jsx       routes + layout
└─ main.jsx      entry
```

### Where to edit content
**All marketing copy lives in `src/data/`.** Prefer editing data files over
hard-coding strings in components:
- `site.js` — brand name, contact details, nav, primary CTA
- `modules.js` — the 11 platform modules
- `content.js` — hero slides, stats, how-it-works, credibility, training highlights
- `pages.js` — industries, resources, values, timeline, delivery formats, FAQs

---

## 5. Conventions

- **Icons**: reference by string name in data files (e.g. `icon: 'Gauge'`). Any
  new icon must be added to the registry in `src/components/ui/Icon.jsx` — this
  keeps the bundle small. Components may also import named lucide icons directly.
- **Routes**: add to `App.jsx` and to `nav` in `src/data/site.js`.
- **New sections**: compose from `SectionHeading`, `Reveal`, `GlassCard`,
  `IconTile`, `Button` to stay visually consistent.
- **Accents** alternate `blue` / `green` for rhythm.
- Keep components small and presentational; data drives content.

---

## 6. Deployment notes

- Static output in `dist/` after `npm run build`.
- SPA routing: configure host to rewrite all paths to `index.html`
  (see `README.md` for Vercel / Netlify / GitHub Pages specifics).
- For GitHub Pages project sites, set `base` in `vite.config.js`.
