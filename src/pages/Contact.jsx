import { useState } from 'react'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import { Phone, MapPin, Check, Navigation } from 'lucide-react'
import { contact, maps } from '../data/site.js'
import { endpoints } from '../data/forms.js'
import { faqs } from '../data/pages.js'

const field =
  'w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-prestige-blue focus:outline-none'

export default function Contact() {
  // status: idle | submitting | success | fallback
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!endpoints.contact) {
      // No endpoint configured — never fake a success.
      setStatus('fallback')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(endpoints.contact, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      })
      setStatus(res.ok ? 'success' : 'fallback')
    } catch {
      setStatus('fallback')
    }
  }

  return (
    <PageShell>
      <Seo
        title="Contact"
        description="Contact Prestige Tutelage in Randburg, Gauteng. Call 010 065 0822 to discuss corporate training and workforce development."
        path="/contact"
      />
      <PageHero
        label="Contact"
        title="Let’s talk about your workforce"
        highlight="your workforce"
        intro="Whether you are exploring options or ready to start, we are happy to help you plan practical training and development."
      />

      <section className="bg-white py-14">
        <div className="container-px grid gap-6 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Office + phone */}
          <div className="space-y-6">
            <Reveal>
              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-prestige-blue" strokeWidth={1.7} />
                  <div>
                    <p className="section-label">Our office</p>
                    <address className="not-italic leading-relaxed text-heading">
                      <span className="font-semibold">{contact.company}</span>
                      <br />
                      {contact.addressLine1}
                      <br />
                      {contact.suburb}
                      <br />
                      {contact.city}
                      <br />
                      {contact.region}
                      <br />
                      {contact.postalCode}
                      <br />
                      {contact.country}
                    </address>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="card p-7">
                <div className="flex items-start gap-4">
                  <Phone className="mt-0.5 h-6 w-6 shrink-0 text-prestige-green-deep" strokeWidth={1.7} />
                  <div>
                    <p className="section-label">Call Prestige</p>
                    <a href={contact.phoneHref} className="block text-2xl font-semibold text-heading hover:text-prestige-blue">
                      {contact.phoneDisplay}
                    </a>
                    <div className="mt-4">
                      <Button href={contact.phoneHref}>Call Prestige</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.08}>
            <div className="card p-7 sm:p-9">
              {status === 'success' ? (
                <div className="flex min-h-[18rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-prestige-green/10 text-prestige-green-deep">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-heading">Thank you</h3>
                  <p className="mt-2 max-w-sm text-body">Your message has been sent. We will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-semibold text-heading">Send us a message</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="firstName" className={field} placeholder="First name" required />
                    <input name="lastName" className={field} placeholder="Last name" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="email" className={field} type="email" placeholder="Work email" required />
                    <input name="company" className={field} placeholder="Company" />
                  </div>
                  <textarea name="message" className={`${field} min-h-[8rem] resize-y`} placeholder="How can we help?" />

                  {status === 'fallback' && (
                    <p className="rounded-btn border border-line bg-mist p-3 text-sm text-body">
                      Online enquiries are temporarily unavailable. Please call Prestige on{' '}
                      <a href={contact.phoneHref} className="font-semibold text-prestige-blue">{contact.phoneDisplay}</a>.
                    </p>
                  )}

                  <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send message'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-mist py-16">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="section-label">Find us</p>
              <h2 className="text-display-md font-semibold text-heading">Visit the Prestige office</h2>
              <p className="mt-2 text-body">
                {contact.addressLine1}, {contact.suburb}, {contact.city}, {contact.postalCode}
              </p>
            </div>
            <Button href={maps.directions} icon="Navigation" variant="secondary" className="shrink-0">
              Get directions
            </Button>
          </div>
          <div className="mt-8 overflow-hidden rounded-[16px] border border-line shadow-card">
            <iframe
              title={`Map of ${contact.company}, ${contact.addressLine1}, ${contact.suburb}, ${contact.city}`}
              src={maps.embed}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="container-px mx-auto max-w-3xl">
          <h2 className="text-display-md font-semibold text-heading">Common questions</h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-4 [&_summary]:cursor-pointer">
                <summary className="flex items-center justify-between text-base font-semibold text-heading marker:content-['']">
                  {f.q}
                  <span className="ml-4 text-prestige-blue transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-body">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
