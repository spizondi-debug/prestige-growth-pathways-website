import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { Check } from 'lucide-react'
import { trainingHighlights } from '../data/content.js'
import { deliveryFormats } from '../data/pages.js'

const programmeDetail = {
  leadership: ['Frontline & mid-management', 'Coaching for accountability', 'Executive presence', 'Leading change'],
  technical: ['Role-specific skill tracks', 'Certification readiness', 'Tools & systems mastery', 'On-the-job assessment'],
  behavioural: ['Communication & influence', 'Resilience & wellbeing', 'Collaboration & teaming', 'Critical thinking'],
  compliance: ['Regulatory & policy', 'Structured onboarding', 'Refresher cycles', 'Audit-ready evidence'],
}

export default function TrainingSolutions() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Training Solutions"
        title="Programmes engineered to be applied — and measured"
        highlight="applied — and measured"
        intro="Every Prestige programme is delivered through the platform, so learning is assessed, applied in the workplace and tied back to outcomes."
      >
        <Button to="/book-consultation" size="lg" icon="CalendarCheck">Book a Consultation</Button>
        <Button to="/industries" variant="ghost" size="lg" icon="ArrowRight">By industry</Button>
      </PageHero>

      {/* Programme categories */}
      <section className="py-12">
        <div className="container-px space-y-6">
          {trainingHighlights.map((t, i) => (
            <Reveal key={t.id} delay={(i % 2) * 0.06}>
              <div className="group grid gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-colors hover:border-white/20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:p-9">
                <div className="flex items-start gap-5">
                  <IconTile name={t.icon} accent={t.accent} size="lg" />
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t.title}</h3>
                    <p className="mt-2 max-w-md text-cloud-200/70">{t.body}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {programmeDetail[t.id].map((d) => (
                    <div key={d} className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-white/[0.02] px-3.5 py-3">
                      <Check className="h-4 w-4 shrink-0 text-prestige-green-bright" />
                      <span className="text-sm text-cloud-100">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Delivery formats */}
      <section className="py-16">
        <div className="container-px">
          <SectionHeading
            eyebrow="How we deliver"
            title="Blended delivery built around the work"
            highlight="around the work"
            intro="We combine formats to maximise engagement, retention and real workplace application."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliveryFormats.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                  <IconTile name={f.icon} accent={i % 2 ? 'green' : 'blue'} />
                  <h3 className="mt-5 text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes band */}
      <section className="py-12">
        <div className="container-px">
          <div className="frame-gradient noise p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { t: 'Faster time-to-competence', d: 'Structured pathways and micro learning shorten the road to capability.' },
                { t: 'Higher application rates', d: 'Workplace tasks and manager reviews make sure learning shows up on the job.' },
                { t: 'Provable return', d: 'The ROI Engine ties programme outcomes to performance leadership can see.' },
              ].map((o, i) => (
                <Reveal key={o.t} delay={i * 0.08}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-prestige-green-bright">
                      Outcome 0{i + 1}
                    </span>
                    <h3 className="mt-2 text-xl font-bold text-white">{o.t}</h3>
                    <p className="mt-2 text-sm text-cloud-200/70">{o.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
