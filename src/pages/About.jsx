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

const partners = [
  { title: 'Strategists', body: 'We help you translate business goals into a measurable capability strategy.', icon: 'Compass' },
  { title: 'Facilitators', body: 'Expert-led programmes that engage people and drive real workplace application.', icon: 'Presentation' },
  { title: 'Coaches', body: 'Ongoing coaching and support that embeds behaviour change beyond the classroom.', icon: 'MessagesSquare' },
]

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
        <Button to="/platform" variant="secondary" size="lg" icon="ArrowRight">Explore the Platform</Button>
      </PageHero>

      {/* Mission / vision */}
      <section className="bg-mist py-20">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="card h-full p-8 sm:p-10">
              <IconTile name="Compass" accent="blue" size="lg" />
              <h2 className="mt-5 text-2xl font-bold text-heading">Our mission</h2>
              <p className="mt-4 leading-relaxed text-body">
                To give every organisation a single, intelligent system for growing its people on
                purpose — connecting assessment, development, application and analytics so growth
                becomes a managed strategy, not a hopeful guess.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full p-8 sm:p-10">
              <IconTile name="Sparkles" accent="green" size="lg" />
              <h2 className="mt-5 text-2xl font-bold text-heading">Our vision</h2>
              <p className="mt-4 leading-relaxed text-body">
                A world where development is accountable and provable — where managers own growth,
                employees see their pathway clearly, and leaders can finally measure the return on
                their most important investment: people.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind the platform"
            highlight="behind the platform"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.07}>
                <div className="card card-interactive h-full p-6">
                  <IconTile name={v.icon} accent={i % 2 ? 'green' : 'blue'} />
                  <h3 className="mt-5 text-lg font-semibold text-heading">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — navy band on pale blue */}
      <section className="bg-sky py-16">
        <div className="container-px">
          <Reveal>
            <div className="surface-dark noise grid grid-cols-2 gap-8 overflow-hidden rounded-3xl p-8 shadow-lift sm:p-10 lg:grid-cols-4">
              {stats.map((s) => (
                <StatCounter key={s.label} value={s.value} label={s.label} tone="dark" />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-paper py-20">
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
                <div className="card h-full p-6">
                  <span className="text-3xl font-extrabold text-gradient">{t.year}</span>
                  <h3 className="mt-3 text-base font-semibold text-heading">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{t.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How we partner (people behind the platform — no invented profiles) */}
      <section className="bg-mist py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Partnership, not just software"
            title="The people behind the platform"
            highlight="behind the platform"
            intro="Prestige Growth Pathways is backed by a team that makes sure the platform delivers real, adopted impact."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="card card-interactive h-full p-7">
                  <IconTile name={p.icon} accent={i % 2 ? 'green' : 'blue'} size="lg" />
                  <h3 className="mt-5 text-lg font-semibold text-heading">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.body}</p>
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
