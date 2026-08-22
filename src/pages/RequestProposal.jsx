import { useState } from 'react'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { Check } from 'lucide-react'
import { contact } from '../data/site.js'
import { endpoints } from '../data/forms.js'

const field =
  'w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-prestige-blue focus:outline-none'

export default function RequestProposal() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!endpoints.proposal) {
      setStatus('fallback')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(endpoints.proposal, {
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
        title="Request a Proposal"
        description="Request a tailored training and workforce-development proposal from Prestige Tutelage. Call 010 065 0822 to discuss your requirements."
        path="/request-proposal"
      />
      <PageHero
        label="Request a proposal"
        title="A tailored proposal for your organisation"
        highlight="tailored proposal"
        intro="Tell us about your workforce and goals, and we will prepare a proposal covering training, development and a suggested way forward."
      />

      <section className="bg-white py-14">
        <div className="container-px grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          {/* Form */}
          <Reveal>
            <div className="card p-7 sm:p-9">
              {status === 'success' ? (
                <div className="flex min-h-[20rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-prestige-green/10 text-prestige-green-deep">
                    <Check className="h-7 w-7" />
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-heading">Request received</h3>
                  <p className="mt-2 max-w-sm text-body">Thank you. We will prepare a proposal and be in touch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-semibold text-heading">Proposal details</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="firstName" className={field} placeholder="First name" required />
                    <input name="lastName" className={field} placeholder="Last name" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input name="email" className={field} type="email" placeholder="Work email" required />
                    <input name="company" className={field} placeholder="Company" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <select name="size" className={field} defaultValue="">
                      <option value="" disabled>Workforce size</option>
                      <option>1 – 100</option>
                      <option>100 – 1,000</option>
                      <option>1,000 – 10,000</option>
                      <option>10,000+</option>
                    </select>
                    <select name="focus" className={field} defaultValue="">
                      <option value="" disabled>Primary focus</option>
                      <option>Leadership and management</option>
                      <option>Technical and functional skills</option>
                      <option>Behavioural skills</option>
                      <option>Compliance and onboarding</option>
                    </select>
                  </div>
                  <textarea name="requirements" className={`${field} min-h-[9rem] resize-y`} placeholder="Tell us about your training or workforce-development requirements" />

                  {status === 'fallback' && (
                    <p className="rounded-btn border border-line bg-mist p-3 text-sm text-body">
                      Online requests are temporarily unavailable. Please call Prestige on{' '}
                      <a href={contact.phoneHref} className="font-semibold text-prestige-blue">{contact.phoneDisplay}</a>.
                    </p>
                  )}

                  <Button type="submit" className="w-full" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Request proposal'}
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Contact panel */}
          <Reveal delay={0.08}>
            <div className="card p-7 sm:p-8">
              <p className="section-label">Rather talk first?</p>
              <h3 className="text-lg font-semibold text-heading">Need to discuss your requirements first?</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                Speak to Prestige about your organisation’s training or workforce-development requirements.
              </p>
              <a href={contact.phoneHref} className="mt-4 block text-2xl font-semibold text-heading hover:text-prestige-blue">
                {contact.phoneDisplay}
              </a>
              <div className="mt-5">
                <Button href={contact.phoneHref}>Call Prestige</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
