import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const origin = 'https://growthpathways.prestigetutelage.co.za'

const pages = {
  '/': {
    title: 'Prestige Growth Pathways | Workforce Growth Intelligence',
    description: 'Connect workforce assessment, development and measurable outcomes with Prestige Growth Pathways by Prestige Tutelage.',
  },
  '/about': {
    title: 'About | Prestige Growth Pathways',
    description: 'Discover the thinking, values and workforce-development experience behind Prestige Growth Pathways.',
  },
  '/platform': {
    title: 'Platform | Prestige Growth Pathways',
    description: 'Explore a connected workforce growth platform for assessment, development pathways, workplace application and reporting.',
  },
  '/training-solutions': {
    title: 'Training Solutions | Prestige Growth Pathways',
    description: 'Explore leadership, technical, behavioural, compliance and onboarding solutions tailored to your organisation.',
  },
  '/industries': {
    title: 'Industries | Prestige Growth Pathways',
    description: 'Workforce development solutions designed around the realities of South African organisations and sectors.',
  },
  '/contact': {
    title: 'Contact | Prestige Growth Pathways',
    description: 'Contact Prestige Tutelage in Ferndale, Randburg to discuss Prestige Growth Pathways.',
  },
  '/book-consultation': {
    title: 'Book a Consultation | Prestige Growth Pathways',
    description: 'Request a no-obligation consultation about your organisation’s workforce development priorities.',
  },
  '/request-proposal': {
    title: 'Request a Proposal | Prestige Growth Pathways',
    description: 'Request a tailored Prestige Growth Pathways proposal for your workforce and organisational goals.',
  },
}

function setMeta(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export default function RouteMeta() {
  const { pathname } = useLocation()

  useEffect(() => {
    const page = pages[pathname] || {
      title: 'Page Not Found | Prestige Growth Pathways',
      description: 'Return to Prestige Growth Pathways to explore workforce growth intelligence and training solutions.',
    }
    const canonical = `${origin}${pathname === '/' ? '/' : pathname}`

    document.title = page.title
    setMeta('meta[name="robots"]', 'content', pages[pathname] ? 'index, follow, max-image-preview:large' : 'noindex, follow')
    setMeta('meta[name="description"]', 'content', page.description)
    setMeta('meta[property="og:title"]', 'content', page.title)
    setMeta('meta[property="og:description"]', 'content', page.description)
    setMeta('meta[property="og:url"]', 'content', canonical)
    setMeta('meta[name="twitter:title"]', 'content', page.title)
    setMeta('meta[name="twitter:description"]', 'content', page.description)
    setMeta('link[rel="canonical"]', 'href', canonical)
  }, [pathname])

  return null
}
