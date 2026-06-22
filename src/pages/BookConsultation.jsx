import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/layout/PageShell.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import Aurora from '../components/shared/Aurora.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import { Check, ArrowLeft, ArrowRight, CalendarCheck } from 'lucide-react'

const field =
  'w-full rounded-xl border border-white/12 bg-ink-800/60 px-4 py-3 text-sm text-white placeholder:text-cloud-200/40 transition-colors focus:border-prestige-green/50 focus:outline-none'

const steps = ['About you', 'Your goals', 'Schedule']

const expectations = [
  { icon: 'PhoneCall', title: 'A focused 30-minute call', body: 'No hard sell — a conversation about your workforce growth goals.' },
  { icon: 'ScanSearch', title: 'A tailored walkthrough', body: 'See the modules most relevant to your sector and challenges.' },
  { icon: 'Map', title: 'A clear next step', body: 'Leave with a recommended path, whether that’s a pilot or a wider rollout.' },
]

export default function BookConsultation() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const last = steps.length - 1

  const next = () => (step === last ? setDone(true) : setStep((s) => s + 1))
  const prev = () => setStep((s) => Math.max(0, s - 1))

  return (
    <PageShell>
      <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
        <Aurora variant="green" />
        <div className="container-px grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          {/* Left: pitch + expectations */}
          <div>
            <Reveal>
              <span className="eyebrow mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                Book a Consultation
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="text-display-lg font-extrabold text-balance text-white">
                See your workforce growth, <span className="text-gradient">made measurable</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-cloud-200/80">
                Book a no-obligation consultation with the Prestige team. We’ll show you exactly how
                the platform fits your people strategy.
              </p>
            </Reveal>

            <div className="mt-10 space-y-4">
              {expectations.map((e, i) => (
                <Reveal key={e.title} delay={0.15 + i * 0.08}>
                  <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <IconTile name={e.icon} accent={i % 2 ? 'blue' : 'green'} size="lg" />
                    <div>
                      <h3 className="text-base font-semibold text-white">{e.title}</h3>
                      <p className="mt-1 text-sm text-cloud-200/70">{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: multi-step form */}
          <Reveal delay={0.15}>
            <div className="glass relative overflow-hidden p-7 sm:p-9">
              {!done ? (
                <>
                  {/* progress */}
                  <div className="mb-7 flex items-center gap-2">
                    {steps.map((s, i) => (
                      <div key={s} className="flex flex-1 items-center gap-2">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                            i <= step ? 'bg-brand-gradient text-white' : 'border border-white/15 text-cloud-200/50'
                          }`}
                        >
                          {i < step ? <Check className="h-4 w-4" /> : i + 1}
                        </span>
                        {i < last && (
                          <span className={`h-px flex-1 ${i < step ? 'bg-prestige-green' : 'bg-white/12'}`} />
                        )}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-bright">
                    Step {step + 1} of {steps.length}
                  </p>
                  <h2 className="mt-1 text-2xl font-bold text-white">{steps[step]}</h2>

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
                              <input className={field} placeholder="First name" />
                              <input className={field} placeholder="Last name" />
                            </div>
                            <input className={field} type="email" placeholder="Work email" />
                            <input className={field} placeholder="Company" />
                          </>
                        )}
                        {step === 1 && (
                          <>
                            <select className={field} defaultValue="">
                              <option value="" disabled>Workforce size</option>
                              <option>1 – 100</option>
                              <option>100 – 1,000</option>
                              <option>1,000 – 10,000</option>
                              <option>10,000+</option>
                            </select>
                            <select className={field} defaultValue="">
                              <option value="" disabled>Primary goal</option>
                              <option>Manager accountability</option>
                              <option>Measurable ROI</option>
                              <option>Skills & capability uplift</option>
                              <option>Compliance & onboarding</option>
                            </select>
                            <textarea className={`${field} min-h-[7rem] resize-y`} placeholder="Anything specific you’d like to cover?" />
                          </>
                        )}
                        {step === 2 && (
                          <>
                            <div className="grid grid-cols-3 gap-2">
                              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, i) => (
                                <button
                                  key={d}
                                  type="button"
                                  className={`rounded-xl border px-3 py-3 text-sm font-medium transition-colors ${
                                    i === 1 ? 'border-prestige-green/50 bg-prestige-green/10 text-white' : 'border-white/12 text-cloud-200/70 hover:text-white'
                                  }`}
                                >
                                  {d}
                                </button>
                              ))}
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                              {['09:00', '11:00', '13:00', '14:30', '16:00', '17:00'].map((t, i) => (
                                <button
                                  key={t}
                                  type="button"
                                  className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                                    i === 2 ? 'border-prestige-green/50 bg-prestige-green/10 text-white' : 'border-white/12 text-cloud-200/70 hover:text-white'
                                  }`}
                                >
                                  {t}
                                </button>
                              ))}
                            </div>
                            <p className="text-xs text-cloud-200/45">
                              Calendar placeholder — connect Calendly, HubSpot or your scheduler here.
                            </p>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3">
                    <button
                      onClick={prev}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-cloud-200/70 transition-colors hover:text-white disabled:opacity-30"
                    >
                      <ArrowLeft className="h-4 w-4" /> Back
                    </button>
                    <Button onClick={next} icon={step === last ? undefined : 'ArrowRight'}>
                      {step === last ? 'Confirm booking' : 'Continue'}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex min-h-[26rem] flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient shadow-glow-green">
                    <CalendarCheck className="h-10 w-10 text-white" />
                  </span>
                  <h2 className="mt-6 text-3xl font-bold text-white">You’re booked!</h2>
                  <p className="mt-3 max-w-sm text-cloud-200/75">
                    This is a demo confirmation. Connect your scheduler and CRM to make it live — a
                    confirmation email would land in the prospect’s inbox.
                  </p>
                  <Button to="/" variant="ghost" className="mt-7" icon="ArrowRight">
                    Back to home
                  </Button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  )
}
