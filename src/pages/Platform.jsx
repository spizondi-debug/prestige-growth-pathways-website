import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { modules } from '../data/modules.js'
import { howItWorks } from '../data/content.js'
import Icon from '../components/ui/Icon.jsx'

const groups = [
  { name: 'Understand', desc: 'See capability clearly.', ids: ['assessment-centre', 'team-analytics', 'risk-engine'] },
  { name: 'Develop', desc: 'Grow the right skills.', ids: ['development-plans', 'learning-pathways', 'micro-learning', 'career-pathing'] },
  { name: 'Apply & Prove', desc: 'Turn growth into outcomes.', ids: ['workplace-application', 'coaching-hub', 'manager-reviews', 'roi-engine'] },
]

export default function Platform() {
  const byId = Object.fromEntries(modules.map((m) => [m.id, m]))

  return (
    <PageShell>
      <PageHero
        eyebrow="The Platform"
        title="Workforce growth intelligence, end to end"
        highlight="growth intelligence"
        intro="Eleven connected modules that move people from assessment to application to proven impact — all inside one intelligent system."
      >
        <Button to="/book-consultation" size="lg" icon="CalendarCheck">Book a Consultation</Button>
        <Button to="/training-solutions" variant="ghost" size="lg" icon="ArrowRight">Training solutions</Button>
      </PageHero>

      {/* Intelligence flow */}
      <section className="py-12">
        <div className="container-px">
          <div className="grid gap-4 md:grid-cols-3">
            {groups.map((g, gi) => (
              <Reveal key={g.name} delay={gi * 0.08}>
                <div className="frame-gradient h-full p-6">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-prestige-green-bright">
                    Step {gi + 1}
                  </span>
                  <h3 className="mt-2 text-2xl font-bold text-white">{g.name}</h3>
                  <p className="mt-1 text-sm text-cloud-200/65">{g.desc}</p>
                  <div className="mt-5 space-y-2">
                    {g.ids.map((id) => (
                      <div key={id} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2.5">
                        <IconTile name={byId[id].icon} accent={byId[id].accent} size="sm" />
                        <span className="text-sm font-medium text-white">{byId[id].name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Module deep-dive grid */}
      <section className="py-16">
        <div className="container-px">
          <SectionHeading
            eyebrow="Every capability"
            title="A closer look at the eleven modules"
            highlight="eleven modules"
            intro="Each module is powerful on its own — and far greater as part of the connected growth system."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((m, i) => (
              <Reveal key={m.id} delay={(i % 3) * 0.06}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                  <div className="flex items-center justify-between">
                    <IconTile name={m.icon} accent={m.accent} size="lg" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-cloud-200/35">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">{m.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{m.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Loop recap */}
      <section className="py-16">
        <div className="container-px">
          <div className="glass noise overflow-hidden p-8 sm:p-12">
            <SectionHeading
              align="left"
              eyebrow="The growth loop"
              title="Insight in, outcomes out"
              highlight="outcomes out"
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {howItWorks.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <Icon name={s.icon} className="h-7 w-7 shrink-0 text-prestige-green-bright" />
                  <div>
                    <p className="text-sm font-bold text-gradient">{s.step}</p>
                    <h4 className="text-base font-semibold text-white">{s.title}</h4>
                    <p className="mt-1 text-sm text-cloud-200/70">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
