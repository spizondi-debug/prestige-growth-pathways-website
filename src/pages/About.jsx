import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import StatCounter from '../components/shared/StatCounter.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import Button from '../components/ui/Button.jsx'
import { values, timeline } from '../data/pages.js'
import { stats } from '../data/content.js'
import { site } from '../data/site.js'

export default function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Prestige"
        title="We exist to make workforce growth measurable"
        highlight="measurable"
        intro={`${site.name} is the platform expression of ${site.parent}’s belief that development should change behaviour, performance and outcomes — not just tick a box.`}
      >
        <Button to="/book-consultation" size="lg" icon="CalendarCheck">Book a Consultation</Button>
        <Button to="/platform" variant="ghost" size="lg" icon="ArrowRight">Explore the platform</Button>
      </PageHero>

      {/* Mission / vision */}
      <section className="py-16">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="frame-gradient h-full p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-white">Our mission</h2>
              <p className="mt-4 leading-relaxed text-cloud-200/75">
                To give every organisation a single, intelligent system for growing its people on
                purpose — connecting assessment, development, application and analytics so growth
                becomes a managed strategy, not a hopeful guess.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass h-full p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-white">Our vision</h2>
              <p className="mt-4 leading-relaxed text-cloud-200/75">
                A world where development is accountable and provable — where managers own growth,
                employees see their pathway clearly, and leaders can finally measure the return on
                their most important investment: people.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind the platform"
            highlight="behind the platform"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                  <IconTile name={v.icon} accent={i % 2 ? 'green' : 'blue'} />
                  <h3 className="mt-5 text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10">
        <div className="container-px">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md sm:p-10 lg:grid-cols-4">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} label={s.label} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="container-px">
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="From a belief to a platform"
            highlight="a platform"
            intro="A short history of how Prestige Tutelage built towards workforce growth intelligence."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 4) * 0.08}>
                <div className="relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <span className="text-3xl font-extrabold text-gradient">{t.year}</span>
                  <h3 className="mt-3 text-base font-semibold text-white">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership placeholders */}
      <section className="py-16">
        <div className="container-px">
          <SectionHeading
            eyebrow="Leadership"
            title="The people behind Prestige"
            highlight="behind Prestige"
            intro="Placeholder leadership profiles — swap in real names, roles and photography."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {['Chief Executive', 'Head of Learning', 'Head of Product'].map((role, i) => (
              <Reveal key={role} delay={i * 0.08}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-center">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-gradient opacity-90">
                    <span className="text-2xl font-bold text-white">P{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">Full Name</h3>
                  <p className="text-sm text-prestige-green-bright">{role}</p>
                  <p className="mt-2 text-sm text-cloud-200/60">
                    Short placeholder bio describing experience and focus area.
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
