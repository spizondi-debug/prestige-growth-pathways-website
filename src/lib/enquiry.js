import { contact } from '../data/site.js'

export function openEmailDraft(subject, fields) {
  const body = Object.entries(fields)
    .filter(([, value]) => String(value || '').trim())
    .map(([label, value]) => `${label}: ${String(value).trim()}`)
    .join('\n')

  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

