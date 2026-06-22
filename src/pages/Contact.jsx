import { useState } from 'react'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import { Mail, Phone, MapPin, Check } from 'lucide-react'
import { site } from '../data/site.js'
import { faqs } from '../data/pages.js'

const field =
  'w-full rounded-xl border border-white/12 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder:text-cloud-200/40 transition-colors focus:border-prestige-green/50 focus:outline-none'

const channels = [
  { icon: 'Mail', title: 'Email us', value: site.email, href: `mailto:${site.email}` },
  { icon: 'Phone', title: 'Call us', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { icon: 'MapPin', title: 'Visit us', value: site.address, href: '#' },
]

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

      <section className="py-10">
        <div className="container-px grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Channels */}
          <div className="space-y-4">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <a
                  href={c.href}
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-white/20"
                >
                  <IconTile name={c.icon} accent={i % 2 ? 'green' : 'blue'} size="lg" />
                  <div>
                    <p className="text-sm text-cloud-200/55">{c.title}</p>
                    <p className="text-base font-semibold text-white">{c.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div className="flex h-44 items-center justify-center bg-mesh-hero bg-ink-800/60">
                  <span className="text-sm uppercase tracking-[0.2em] text-cloud-200/45">Map placeholder</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="glass p-7 sm:p-9">
              {sent ? (
                <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient">
                    <Check className="h-8 w-8 text-white" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-white">Thank you</h3>
                  <p className="mt-2 max-w-sm text-cloud-200/70">
                    Your message has been received (demo only). Our team will be in touch shortly.
                  </p>
                  <Button className="mt-6" variant="ghost" onClick={() => setSent(false)}>
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
                  <h3 className="text-xl font-bold text-white">Send us a message</h3>
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
                  <p className="text-center text-xs text-cloud-200/45">
                    Demo form — not connected to a backend. Wire up to your provider of choice.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container-px">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-display-md font-bold text-white">Frequently asked</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={(i % 4) * 0.05}>
                  <details className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 [&_summary]:cursor-pointer">
                    <summary className="flex items-center justify-between text-base font-semibold text-white marker:content-['']">
                      {f.q}
                      <span className="ml-4 text-prestige-green-bright transition-transform group-open:rotate-45">＋</span>
                    </summary>
                    <p className="mt-3 text-sm leading-relaxed text-cloud-200/70">{f.a}</p>
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
