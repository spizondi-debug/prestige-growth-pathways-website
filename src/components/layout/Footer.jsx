import { Link } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import Logo from '../shared/Logo.jsx'
import { site, contact } from '../../data/site.js'

const footerCols = [
  {
    title: 'Prestige Growth Pathways',
    links: [
      { label: 'The platform', to: '/platform' },
      { label: 'Training solutions', to: '/training-solutions' },
      { label: 'Industries', to: '/industries' },
      { label: 'Insights', to: '/resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Prestige', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Book a consultation', to: '/book-consultation' },
      { label: 'Request a proposal', to: '/request-proposal' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="surface-dark">
      <div className="container-px py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cloud-200">
              {site.shortPitch}
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-cloud-200 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <address className="mt-4 space-y-3 not-italic text-sm text-cloud-200">
              <p className="font-medium text-white">{contact.company}</p>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-prestige-blue-soft" />
                <span>
                  {contact.addressLine1}
                  <br />
                  {contact.suburb}, {contact.city}
                  <br />
                  {contact.region}, {contact.postalCode}
                </span>
              </div>
              <a href={contact.phoneHref} className="flex items-center gap-3 font-medium text-cloud-100 transition-colors hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-prestige-blue-soft" />
                {contact.phoneDisplay}
              </a>
            </address>
          </div>
        </div>

        <div className="hairline-on-dark mt-12" />
        <p className="mt-6 text-xs text-cloud-200">
          © {new Date().getFullYear()} {contact.company}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
