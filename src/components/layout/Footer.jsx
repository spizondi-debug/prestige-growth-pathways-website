import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Instagram, Phone, MapPin, Mail } from 'lucide-react'
import Logo from '../shared/Logo.jsx'
import Button from '../ui/Button.jsx'
import { site, primaryCta, contact } from '../../data/site.js'

const footerCols = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', to: '/platform' },
      { label: 'Training Solutions', to: '/training-solutions' },
      { label: 'Industries', to: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Prestige', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Book a Consultation', to: '/book-consultation' },
      { label: 'Request a Proposal', to: '/request-proposal' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-24">
      {/* CTA strip — light card floating above the navy footer */}
      <div className="container-px">
        <div className="relative z-10 -mb-16 translate-y-[-2.5rem]">
          <div className="frame-gradient noise overflow-hidden p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h3 className="text-display-md font-bold text-heading">
                  Ready to make growth <span className="text-prestige-blue">measurable?</span>
                </h3>
                <p className="mt-3 text-body">
                  Book a consultation and see how Prestige Growth Pathways turns potential into performance.
                </p>
              </div>
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <Button to={primaryCta.to} size="lg" icon="ArrowRight">
                  {primaryCta.label}
                </Button>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted">
              Prefer to speak to us? Call{' '}
              <a href={contact.phoneHref} className="font-semibold text-prestige-blue hover:text-prestige-blue-deep">
                {contact.phoneDisplay}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Navy footer body */}
      <div className="surface-dark pb-10 pt-28">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
            <div>
              <Logo tone="dark" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-cloud-200/70">
                {site.shortPitch}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cloud-200/45">
                A platform by {site.parent}
              </p>
            </div>

            {footerCols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-bright">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm text-cloud-200/75 transition-colors hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Dedicated contact column */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-bright">
                Contact
              </h4>
              <address className="mt-4 space-y-3 not-italic text-sm text-cloud-200/75">
                <p className="font-semibold text-white">{contact.company}</p>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-prestige-green-bright" />
                  <span>
                    {contact.addressLine1}
                    <br />
                    {contact.suburb}
                    <br />
                    {contact.city}
                    <br />
                    {contact.postalCode}
                  </span>
                </div>
                <a href={contact.phoneHref} className="flex items-center gap-3 font-medium text-cloud-100 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-prestige-green-bright" />
                  {contact.phoneDisplay}
                </a>
                <a href={contact.emailHref} className="flex items-center gap-3 font-medium text-cloud-100 transition-colors hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-prestige-green-bright" />
                  {contact.email}
                </a>
              </address>

              <div className="mt-5 flex items-center gap-3">
                {[
                  { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, href: site.social.x, label: 'X' },
                  { Icon: Youtube, href: site.social.youtube, label: 'YouTube' },
                  { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
                ].filter(({ href }) => href).map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-cloud-200/70 transition-all hover:-translate-y-0.5 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="hairline-on-dark mt-10" />
          <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-cloud-200/50 sm:flex-row">
            <p>© {new Date().getFullYear()} {contact.company}. All rights reserved.</p>
            <a href={contact.emailHref} className="hover:text-white">Privacy enquiries: {contact.email}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
