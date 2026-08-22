// ============================================================
// GLOBAL SITE CONFIG — brand-level copy & official contact details
// ============================================================

// -- Official Prestige Tutelage contact details (single source of truth) --
// Reused across the Contact page, Footer, mobile menu, proposal &
// consultation sections, structured data and the map / directions links.
// Do NOT hard-code these anywhere else. Do not invent extra numbers/offices.
export const contact = {
  company: 'Prestige Tutelage (Pty) Ltd',
  phoneDisplay: '010 065 0822',
  phoneHref: 'tel:+27100650822',
  phoneIntl: '+27 10 065 0822',
  addressLine1: '64 Hill Street',
  suburb: 'Ferndale',
  city: 'Randburg',
  region: 'Gauteng',
  postalCode: '2194',
  country: 'South Africa',
}

export const fullAddress = `${contact.addressLine1}, ${contact.suburb}, ${contact.city}, ${contact.region}, ${contact.postalCode}, ${contact.country}`

// Google Maps helpers — reference the actual Prestige office location.
const mapsQuery = encodeURIComponent(
  `${contact.addressLine1}, ${contact.suburb}, ${contact.city}, ${contact.postalCode}`,
)
export const maps = {
  embed: `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  view: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
}

// Base URL for canonical / Open Graph links (GitHub Pages project site).
export const siteUrl = 'https://spizondi-debug.github.io/prestige-growth-pathways-website'

export const site = {
  name: 'Prestige Growth Pathways',
  parent: 'Prestige Tutelage',
  legalName: contact.company,
  tagline: 'Corporate training and workforce development',
  shortPitch:
    'Prestige Tutelage helps South African organisations train their people, build workplace skills and develop capable, accountable teams. Prestige Growth Pathways is our platform for assessment, development and workplace application.',
  phone: contact.phoneDisplay,
  address: fullAddress,
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Platform', to: '/platform' },
  { label: 'Training Solutions', to: '/training-solutions' },
  { label: 'Industries', to: '/industries' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export const primaryCta = { label: 'Book a Consultation', to: '/book-consultation' }
