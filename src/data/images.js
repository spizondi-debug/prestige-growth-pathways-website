// ============================================================
// IMAGE MANIFEST — real photography only.
//
// This project must use REAL licensed photography (e.g. Pexels, Unsplash,
// Pixabay) or genuine Prestige Tutelage photography. It must NOT use any
// AI-generated imagery.
//
// HOW TO ADD IMAGES
// 1. Download an optimised, real photo (prefer .webp, ~1600px wide, < ~250KB).
// 2. Save it to /public/images/ using the filename shown in `src` below.
// 3. Keep the descriptive `alt` text (edit if the photo differs).
// 4. Record the source + photographer in /IMAGE-CREDITS.md.
//
// Any slot left with an empty `src` renders a clean branded panel instead of
// a placeholder photo — so the site never displays an unverified or AI image.
// Set `src` to the /images/... path once the real file is in place.
// ============================================================

const base = import.meta.env.BASE_URL // respects the GitHub Pages sub-path

const img = (file, alt) => ({ src: file ? `${base}images/${file}` : '', alt })

export const images = {
  // Home
  heroWorkplace: img('', 'A South African workplace training session in progress'),
  homeTraining: img('', 'A facilitator working with a group of learners during corporate training'),
  homeIndustry: img('', 'Operators working together on a manufacturing production line'),

  // About
  aboutTraining: img('', 'Colleagues collaborating during a workplace development session'),

  // Training Solutions
  trainingFacilitation: img('', 'A trainer facilitating a corporate learning session'),
  trainingProduction: img('', 'A supervisor coaching a team member in a production environment'),

  // Industries (real sector photography)
  ind_manufacturing: img('', 'Engineers and operators on a manufacturing floor'),
  ind_agriculture: img('', 'Workers in an agriculture or agri-processing environment'),
  ind_logistics: img('', 'A logistics and supply-chain team in a warehouse'),
  ind_retail: img('', 'Retail team members on the shop floor'),
  ind_professional: img('', 'Professionals meeting in a modern office'),
  ind_public: img('', 'A public-sector team working together'),

  // Platform
  platformWorkplace: img('', 'A manager reviewing team development with a colleague'),

  // Insights / Resources
  insight_qcto: img('', 'Learners in a structured training environment'),
  insight_learnerships: img('', 'A workplace mentor guiding a learner'),
  insight_manufacturing: img('', 'A training session on a factory floor'),
  insight_agriculture: img('', 'Skills development in an agricultural setting'),
}

export default images
