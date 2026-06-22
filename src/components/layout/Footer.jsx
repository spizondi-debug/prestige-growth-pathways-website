import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from 'lucide-react'
import Logo from '../shared/Logo.jsx'
import Button from '../ui/Button.jsx'
import { site, nav, primaryCta } from '../../data/site.js'

const footerCols = [
  {
    title: 'Platform',
    links: [
      { label: 'Overview', to: '/platform' },
      { label: 'Training Solutions', to: '/training-solutions' },
      { label: 'Industries', to: '/industries' },
      { label: 'Resources', to: '/resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Prestige', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Book a Consultation', to: '/book-consultation' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-ink-800/40">
      {/* CTA strip */}
      <div className="container-px">
        <div className="relative -translate-y-1/2">
          <div className="frame-gradient noise overflow-hidden p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h3 className="text-display-md font-bold text-white">
                  Ready to make growth <span className="text-gradient">measurable?</span>
                </h3>
                <p className="mt-3 text-cloud-200/75">
                  Book a consultation and see how Prestige Growth Pathways turns potential into performance.
                </p>
              </div>
              <Button to={primaryCta.to} size="lg" icon="ArrowRight">
                {primaryCta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-px -mt-10 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cloud-200/65">
              {site.shortPitch}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cloud-200/40">
              A platform by {site.parent}
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cloud-200/50">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-cloud-200/75 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-cloud-200/50">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cloud-200/75">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-prestige-green-bright" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-prestige-green-bright" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-prestige-green-bright" />
                <span>{site.address}</span>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Linkedin, href: site.social.linkedin, label: 'LinkedIn' },
                { Icon: Twitter, href: site.social.x, label: 'X' },
                { Icon: Youtube, href: site.social.youtube, label: 'YouTube' },
                { Icon: Instagram, href: site.social.instagram, label: 'Instagram' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-cloud-200/70 transition-all hover:-translate-y-0.5 hover:text-white hover:shadow-glow-blue"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hairline mt-10" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 text-xs text-cloud-200/45 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <span>Placeholder content — ready for your copy.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
