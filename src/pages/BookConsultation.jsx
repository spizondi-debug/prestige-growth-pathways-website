import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/layout/PageShell.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Aurora from '../components/shared/Aurora.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import { Check, ArrowLeft, CalendarCheck, Phone } from 'lucide-react'
import { contact } from '../data/site.js'
import { openEmailDraft } from '../lib/enquiry.js'

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-heading placeholder:text-muted transition-colors focus:border-prestige-blue focus:outline-none'

const steps = ['About you', 'Your goals', 'Preferred time']

const expectations = [
  { icon: 'PhoneCall', title: 'A focused 30-minute call', body: 'No hard sell — a conversation about your workforce growth goals.' },
  { icon: 'ScanSearch', title: 'A tailored walkthrough', body: 'See the modules most relevant to your sector and challenges.' },
  { icon: 'Map', title: 'A clear next step', body: 'Leave with a recommended path, whether that’s a pilot or a wider rollout.' },
]

const initialDetails = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  workforceSize: '',
  goal: '',
  notes: '',
  day: '',
  time: '',
}

export default function BookConsultation() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')
  const [details, setDetails] = useState(initialDetails)
  const last = steps.length - 1

  const update = ({ target: { name, value } }) => {
    setDetails((current) => ({ ...current, [name]: value }))
    setError('')
  }

  const stepIsValid = () => {
    if (step === 0) {
      return details.firstName && details.lastName && details.company && /\S+@\S+\.\S+/.test(details.email)
    }
    if (step === 1) return details.workforceSize && details.goal
    return details.day && details.time
  }

  const next = () => {
    if (!stepIsValid()) {
      setError('Please complete the required fields before continuing.')
      return
    }

    if (step < last) {
      setStep((current) => current + 1)
      setError('')
      return
    }

    openEmailDraft('Prestige Growth Pathways consultation request', {
      Name: `${details.firstName} ${details.lastName}`,
      Email: details.email,
      Company: details.company,
      'Workforce size': details.workforceSize,
      'Primary goal': details.goal,
      Notes: details.notes,
      'Preferred day': details.day,
      'Preferred time': `${details.time} (South Africa time)`,
    })
    setDone(true)
  }

  const prev = () => {
    setStep((current) => Math.max(0, current - 1))
    setError('')
  }

  return (
    <PageShell>
      <section className="relative overflow-hidden bg-mesh-light pb-20 pt-36 sm:pt-44">
        <Aurora variant="green" tone="light" />
        <div className="container-px grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <Reveal>
              <span className="eyebrow mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                Book a Consultation
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-lg font-extrabold text-balance text-heading">
                See your workforce growth, <span className="text-prestige-blue">made measurable</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-body">
                Request a no-obligation consultation with the Prestige team and explore how the platform can support your people strategy.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {expectations.map((item, index) => (
                <Reveal key={item.title} delay={0.15 + index * 0.08}>
                  <div className="card flex items-start gap-4 p-5">
                    <IconTile name={item.icon} accent={index % 2 ? 'blue' : 'green'} size="lg" />
                    <div>
                      <h3 className="text-base font-semibold text-heading">{item.title}</h3>
                      <p className="mt-1 text-sm text-body">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <p className="mt-8 text-sm text-body">
                Prefer to speak to us? Call{' '}
                <a href={contact.phoneHref} className="font-semibold text-prestige-blue hover:text-prestige-blue-deep">
                  {contact.phoneDisplay}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card relative overflow-hidden p-7 sm:p-9">
              {!done ? (
                <>
                  <div className="mb-7 flex items-center gap-2">
                    {steps.map((label, index) => (
                      <div key={label} className="flex flex-1 items-center gap-2">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${index <= step ? 'bg-brand-gradient text-white' : 'border border-line text-muted'}`}>
                          {index < step ? <Check className="h-4 w-4" /> : index + 1}
                        </span>
                        {index < last && <span className={`h-px flex-1 ${index < step ? 'bg-prestige-green' : 'bg-line'}`} />}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-deep">
                    Step {step + 1} of {steps.length}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-heading">{steps[step]}</h2>

                  <div className="mt-6 min-h-[16rem]">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -24 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-4"
                      >
                        {step === 0 && (
                          <>
                            <div className="grid gap-4 sm:grid-cols-2">
                              <input className={field} name="firstName" value={details.firstName} onChange={update} autoComplete="given-name" aria-label="First name *" placeholder="First name *" />
                              <input className={field} name="lastName" value={details.lastName} onChange={update} autoComplete="family-name" aria-label="Last name *" placeholder="Last name *" />
                            </div>
                            <input className={field} name="email" value={details.email} onChange={update} type="email" autoComplete="email" aria-label="Work email *" placeholder="Work email *" />
                            <input className={field} name="company" value={details.company} onChange={update} autoComplete="organization" aria-label="Company *" placeholder="Company *" />
                          </>
                        )}
                        {step === 1 && (
                          <>
                            <select className={field} aria-label="workforceSize" name="workforceSize" value={details.workforceSize} onChange={update}>
                              <option value="" disabled>Workforce size *</option>
                              <option>1 – 100</option>
                              <option>100 – 1,000</option>
                              <option>1,000 – 10,000</option>
                              <option>10,000+</option>
                            </select>
                            <select className={field} aria-label="goal" name="goal" value={details.goal} onChange={update}>
                              <option value="" disabled>Primary goal *</option>
                              <option>Manager accountability</option>
                              <option>Measurable outcomes</option>
                              <option>Skills & capability uplift</option>
                              <option>Compliance & onboarding</option>
                            </select>
                            <textarea className={`${field} min-h-[7rem] resize-y`} name="notes" value={details.notes} onChange={update} aria-label="Anything specific you’d like to cover?" placeholder="Anything specific you’d like to cover?" />
                          </>
                        )}
                        {step === 2 && (
                          <>
                            <p className="text-sm text-body">Choose a preferred day and time. Prestige will confirm availability with you by email.</p>
                            <div className="grid grid-cols-3 gap-2">
                              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                                <button key={day} type="button" aria-pressed={details.day === day} onClick={() => update({ target: { name: 'day', value: day } })} className={`rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${details.day === day ? 'border-prestige-green/50 bg-mint text-prestige-green-deep' : 'border-line text-body hover:text-heading'}`}>
                                  {day.slice(0, 3)}
                                </button>
                              ))}
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {['09:00', '11:00', '13:00', '14:30', '16:00'].map((time) => (
                                <button key={time} type="button" aria-pressed={details.time === time} onClick={() => update({ target: { name: 'time', value: time } })} className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${details.time === time ? 'border-prestige-green/50 bg-mint text-prestige-green-deep' : 'border-line text-body hover:text-heading'}`}>
                                  {time}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {error && <p role="alert" className="mt-3 text-sm font-medium text-red-700">{error}</p>}
                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button type="button" onClick={prev} disabled={step === 0} className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-body transition-colors hover:text-heading disabled:opacity-30">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <Button onClick={next} icon={step === last ? undefined : 'ArrowRight'}>
                      {step === last ? 'Prepare request' : 'Continue'}
                    </Button>
                  </div>
                  <p className="mt-4 text-center text-xs text-muted">This opens a prepared email to {contact.email}. Your preferred time is not confirmed until Prestige replies.</p>
                </>
              ) : (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient shadow-glow-green">
                    <CalendarCheck className="h-10 w-10 text-white" />
                  </span>
                  <h2 className="mt-6 text-3xl font-bold text-heading">Request prepared</h2>
                  <p className="mt-3 max-w-sm text-body">
                    Your email application should now show the consultation request. Review it and select Send; Prestige will then confirm a suitable time.
                  </p>
                  <p className="mt-3 text-sm text-body">Nothing opened? Email <a className="underline" href={contact.emailHref}>{contact.email}</a>.</p>
                  <p className="mt-4 flex items-center gap-2 text-sm text-body">
                    <Phone className="h-4 w-4 text-prestige-green-deep" />
                    Prefer to talk now? Call{' '}
                    <a href={contact.phoneHref} className="font-semibold text-prestige-blue hover:text-prestige-blue-deep">{contact.phoneDisplay}</a>
                  </p>
                  <Button to="/" variant="secondary" className="mt-7" icon="ArrowRight">Back to home</Button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
