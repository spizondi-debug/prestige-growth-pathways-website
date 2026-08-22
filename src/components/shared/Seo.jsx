import { useEffect } from 'react'
import { siteUrl } from '../../data/site.js'

/**
 * Seo — lightweight, dependency-free per-route SEO.
 * Sets document title, meta description, canonical URL and Open Graph tags
 * on mount / prop change. Suitable for this React + Vite SPA.
 */
function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Prestige Growth Pathways`
      : 'Prestige Growth Pathways | Corporate Training & Workforce Development'
    const canonical = `${siteUrl}${path === '/' ? '/' : path}`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setLink('canonical', canonical)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonical)
  }, [title, description, path])

  return null
}
