import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/layout/PageShell.jsx'
import Seo from '../components/shared/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Icon from '../components/ui/Icon.jsx'
import { Check, ArrowLeft, Phone } from 'lucide-react'
import { contact } from '../data/site.js'
import { endpoints } from '../data/forms.js'

const field =
  'w-full rounded-btn border border-line bg-white px-4 py-3 text-sm text-heading placeholder:text-muted focus:border-prestige-blue focus:outline-none'

const steps = ['About you', 'Your goals']

const expectations = [
  { icon: 'PhoneCall', title: 'A short, no-obligation conversation', body: 'We talk through your goals and current challenges.' },
  { icon: 'ScanSearch', title: 'A tailored view of how we can help', body: 'We show the training and platform capabilities most relevant to you.' },
  { icon: 'Map', title: 'A clear next step', body: 'You leave with a recommended way forward, at your pace.' },
]

export default function BookConsultation() {
  const [step, setStep] = useState(0)
  // status: idle | submitting | success | fallback
  const [status, setStatus] = useState('idle')
  const last = steps.length - 1
  const formRef = { current: null }

  async function submit(e) {
    e?.preventDefault?.()
    if (!endpoints.consultation) {
      setStatus('fallback')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(endpoints.consultation, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formRef.current),
      })
      setStatus(res.ok ? 'success' : 'fallback')
    } catch {
      setStatus('fallback')
    }
  }

  const next = () => (step === last ? submit() : setStep((s) => s + 1))
  const done = status === 'success' || status === 'fallback'

  return (
    <PageShell>
      <Seo
        title="Request a Consultation"
        description="Request a consultation with Prestige Tutelage to discuss corporate training and workforce development. Call 010 065 0822."
        path="/book-consultation"
      />
      <section className="border-b border-line bg-mist pb-16 pt-32 sm:pt-40">
        <div className="container-px grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left */}
          <div>
            <Reveal>
              <p className="section-label">Request a consultation</p>
              <h1 className="text-display-lg font-semibold text-heading">
                Let’s plan practical development for your people
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-body">
                Tell us a little about your organisation and goals. We will arrange a convenient time to talk.
              </p>
            </Reveal>

            <div className="mt-9 space-y-5">
              {expectations.map((e, i) => (
                <Reveal key={e.title} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-3">
                    <Icon name={e.icon} className="mt-0.5 h-5 w-5 shrink-0 text-prestige-blue" strokeWidth={1.8} />
                    <div>
                      <h3 className="text-base font-semibold text-heading">{e.title}</h3>
                      <p className="mt-1 text-sm text-body">{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.35}>
              <p className="mt-8 text-sm text-body">
                Prefer to call? Speak to Prestige on{' '}
                <a href={contact.phoneHref} className="font-semibold text-prestige-blue hover:text-prestige-blue-deep">
                  {contact.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <div className="card p-7 sm:p-9">
              {done ? (
                <div className="flex min-h-[22rem] flex-col items-center justify-center text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-prestige-blue/10 text-prestige-blue">
                    <Phone className="h-7 w-7" />
                  </span>
                  {status === 'success' ? (
                    <>
                      <h2 className="mt-4 text-2xl font-semibold text-heading">Request received</h2>
                      <p className="mt-2 max-w-sm text-body">
                        Thank you. A confirmed consultation time will be arranged with you.
                      </p>
                    </>
                  ) : (
                    <>
                      <h2 className="mt-4 text-2xl font-semibold text-heading">Let’s arrange your consultation</h2>
                      <p className="mt-2 max-w-sm text-body">
                        Online requests are temporarily unavailable. Please call Prestige on{' '}
                        <a href={contact.phoneHref} className="font-semibold text-prestige-blue">{contact.phoneDisplay}</a>{' '}
                        and we will arrange a convenient time.
                      </p>
                      <div className="mt-5">
                        <Button href={contact.phoneHref}>Call Prestige</Button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <form ref={(el) => (formRef.current = el)} onSubmit={submit}>
                  <div className="mb-6 flex items-center gap-2">
                    {steps.map((s, i) => (
                      <div key={s} className="flex flex-1 items-center gap-2">
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                            i <= step ? 'bg-prestige-blue text-white' : 'border border-line text-muted'
                          }`}
                        >
                          {i < step ? <Check className="h-4 w-4" /> : i + 1}
                        </span>
                        {i < last && <span className={`h-px flex-1 ${i < step ? 'bg-prestige-blue' : 'bg-line'}`} />}
                      </div>
                    ))}
                  </div>
                  <h2 className="text-xl font-semibold text-heading">{steps[step]}</h2>

                  <div className="mt-5 min-h-[15rem]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-4"
                      >
                        {step === 0 ? (
                          <>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <input name="firstName" className={field} placeholder="First name" />
                              <input name="lastName" className={field} placeholder="Last name" />
                            </div>
                            <input name="email" className={field} type="email" placeholder="Work email" />
                            <input name="company" className={field} placeholder="Company" />
                          </>
                        ) : (
                          <>
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
                            <textarea name="notes" className={`${field} min-h-[7rem] resize-y`} placeholder="Anything you would like us to know?" />
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setStep((s) => Math.max(0, s - 1))}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 px-2 py-2 text-sm font-medium text-body hover:text-heading disabled:opacity-30"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <Button type="button" onClick={next} disabled={status === 'submitting'}>
                      {step === last ? (status === 'submitting' ? 'Sending…' : 'Request consultation') : 'Continue'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
