// ============================================================
// GLOBAL SITE CONFIG — edit brand-level copy & contact details
// ============================================================

// -- Official Prestige Tutelage contact details (single source of truth) --
// Reused across the Contact page, Footer, mobile menu, proposal &
// consultation sections, schema markup and the map / directions links.
// Do NOT hard-code these anywhere else.
export const contact = {
  company: 'Prestige Tutelage (Pty) Ltd',
  phoneDisplay: '010 065 0822',
  phoneHref: 'tel:+27100650822',
  phoneIntl: '+27 10 065 0822',
  addressLine1: '64 Hill Street',
  suburb: 'Ferndale',
  city: 'Randburg',
  postalCode: '2194',
  country: 'South Africa',
}

// Full address as a single string (e.g. for map queries / schema)
export const fullAddress = `${contact.addressLine1}, ${contact.suburb}, ${contact.city}, ${contact.postalCode}, ${contact.country}`

// Google Maps helpers — reference the actual Prestige office location.
const mapsQuery = encodeURIComponent(
  `${contact.addressLine1}, ${contact.suburb}, ${contact.city}, ${contact.postalCode}`,
)
export const maps = {
  // Keyless embeddable map centred on the office address.
  embed: `https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`,
  // "Get Directions" deep link.
  directions: `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`,
  // Plain link to view the location.
  view: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
}

export const site = {
  name: 'Prestige Growth Pathways',
  parent: 'Prestige Tutelage',
  legalName: contact.company,
  tagline: 'Workforce Growth Intelligence',
  shortPitch:
    'A workforce growth intelligence and training platform that turns employee potential into measurable business performance.',
  // Kept for backwards-compatibility; prefer the `contact` object above.
  phone: contact.phoneDisplay,
  address: fullAddress,
  social: {
    linkedin: '#',
    x: '#',
    youtube: '#',
    instagram: '#',
  },
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
