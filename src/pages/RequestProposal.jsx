import { useState } from 'react'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { Check, MessageSquare } from 'lucide-react'
import { contact } from '../data/site.js'

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-heading placeholder:text-muted transition-colors focus:border-prestige-blue focus:outline-none'

export default function RequestProposal() {
  const [sent, setSent] = useState(false)

  return (
    <PageShell>
      <PageHero
        eyebrow="Request a Proposal"
        title="Get a tailored proposal for your organisation"
        highlight="tailored proposal"
        intro="Tell us about your workforce and goals, and we’ll prepare a proposal covering the platform, training solutions and a recommended rollout."
      />

      <section className="bg-paper py-10">
        <div className="container-px grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* Proposal form */}
          <Reveal>
            <div className="card p-7 sm:p-9">
              {sent ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-gradient">
                    <Check className="h-8 w-8 text-white" />
                  </span>
                  <h3 className="mt-5 text-2xl font-bold text-heading">Request received</h3>
                  <p className="mt-2 max-w-sm text-body">
                    This is a demo submission. Once wired to your CRM, the Prestige team would follow
                    up with a tailored proposal.
                  </p>
                  <Button className="mt-6" variant="secondary" onClick={() => setSent(false)}>
                    Submit another
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
                  <h2 className="text-xl font-bold text-heading">Proposal details</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={field} placeholder="First name" required />
                    <input className={field} placeholder="Last name" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input className={field} type="email" placeholder="Work email" required />
                    <input className={field} placeholder="Company" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <select className={field} defaultValue="">
                      <option value="" disabled>Workforce size</option>
                      <option>1 – 100</option>
                      <option>100 – 1,000</option>
                      <option>1,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                    <select className={field} defaultValue="">
                      <option value="" disabled>Primary focus</option>
                      <option>Leadership & management</option>
                      <option>Technical & functional skills</option>
                      <option>Behavioural & power skills</option>
                      <option>Compliance & onboarding</option>
                    </select>
                  </div>
                  <textarea
                    className={`${field} min-h-[9rem] resize-y`}
                    placeholder="Tell us about your training or workforce-development requirements"
                  />
                  <Button type="submit" className="w-full" icon="ArrowRight">Request proposal</Button>
                  <p className="text-center text-xs text-muted">
                    Demo form — not connected to a backend. Wire up to your provider of choice.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          {/* Small contact panel */}
          <Reveal delay={0.1}>
            <div className="frame-gradient p-7 sm:p-8">
              <IconTile name="MessagesSquare" accent="green" size="lg" />
              <h3 className="mt-5 text-lg font-bold text-heading">
                Need to discuss your requirements first?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Speak to Prestige about your organisation’s training or workforce-development
                requirements.
              </p>
              <a
                href={contact.phoneHref}
                className="mt-4 block text-2xl font-bold text-heading transition-colors hover:text-prestige-blue"
              >
                {contact.phoneDisplay}
              </a>
              <div className="mt-5">
                <Button href={contact.phoneHref} icon="Phone">Call Prestige</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
