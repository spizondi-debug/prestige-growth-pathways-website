import { useState } from 'react'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import { Phone, MapPin, Check, Navigation } from 'lucide-react'
import { contact, maps } from '../data/site.js'
import { faqs } from '../data/pages.js'

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-heading placeholder:text-muted transition-colors focus:border-prestige-blue focus:outline-none'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your workforce"
        highlight="your workforce"
        intro="Whether you’re exploring the platform or ready to roll out, our team is here to help you build a measurable growth strategy."
      />

      <section className="bg-paper py-10">
        <div className="container-px grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Office + phone */}
          <div className="space-y-4">
            {/* Our Office */}
            <Reveal>
              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <IconTile name="MapPin" accent="blue" size="lg" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-blue">Our Office</p>
                    <address className="mt-2 not-italic leading-relaxed text-heading">
                      <span className="font-semibold">{contact.company}</span>
                      <br />
                      {contact.addressLine1}
                      <br />
                      {contact.suburb}
                      <br />
                      {contact.city}
                      <br />
                      {contact.postalCode}
                      <br />
                      {contact.country}
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Call Prestige */}
            <Reveal delay={0.08}>
              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <IconTile name="Phone" accent="green" size="lg" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-deep">Call Prestige</p>
                    <a
                      href={contact.phoneHref}
                      className="mt-1 block text-2xl font-bold text-heading transition-colors hover:text-prestige-blue"
                    >
                      {contact.phoneDisplay}
                    </a>
                    <div className="mt-4">
                      <Button href={contact.phoneHref} icon="Phone">Call Prestige</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="card p-7 sm:p-9">
              {sent ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient">
                    <Check className="h-8 w-8 text-white" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-heading">Thank you</h3>
                  <p className="mt-2 max-w-sm text-body">
                    Your message has been received (demo only). Our team will be in touch shortly.
                  </p>
                  <Button className="mt-6" variant="secondary" onClick={() => setSent(false)}>
                    Send another
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setSent(true)
                  }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-heading">Send us a message</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={field} placeholder="First name" required />
                    <input className={field} placeholder="Last name" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={field} type="email" placeholder="Work email" required />
                    <input className={field} placeholder="Company" />
                  </div>
                  <select className={field} defaultValue="">
                    <option value="" disabled>How can we help?</option>
                    <option>Platform demo</option>
                    <option>Training solutions</option>
                    <option>Partnership</option>
                    <option>Something else</option>
                  </select>
                  <textarea className={`${field} min-h-[8rem] resize-y`} placeholder="Your message" />
                  <Button type="submit" className="w-full" icon="ArrowRight">Send message</Button>
                  <p className="text-center text-xs text-muted">
                    Demo form — not connected to a backend. Wire up to your provider of choice.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map — actual Prestige office location */}
      <section className="bg-mist py-16">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                Find us
              </span>
              <h2 className="text-display-md font-bold text-heading">Visit the Prestige office</h2>
              <p className="mt-2 text-body">
                {contact.addressLine1}, {contact.suburb}, {contact.city}, {contact.postalCode}
              </p>
            </div>
            <Button href={maps.directions} icon="Navigation" className="shrink-0">
              Get Directions
            </Button>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-line shadow-card">
            <iframe
              title={`Map of ${contact.company} — ${contact.addressLine1}, ${contact.suburb}, ${contact.city}`}
              src={maps.embed}
              width="100%"
              height="440"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-16">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-display-md font-bold text-heading">Frequently asked</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 4) * 0.05}>
                  <details className="group card p-5 [&_summary]:cursor-pointer">
                    <summary className="flex items-center justify-between text-base font-semibold text-heading marker:content-['']">
                      {f.q}
                      <span className="ml-4 text-prestige-green-deep transition-transform group-open:rotate-45">＋</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-body">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
