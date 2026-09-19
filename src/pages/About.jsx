import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import Button from '../components/ui/Button.jsx'
import { values, timeline } from '../data/pages.js'
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
        intro={`${site.name} is built by ${site.parent} on a simple belief: good development should improve behaviour, performance and business outcomes.`}
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
                To help organisations develop their people with purpose, by connecting assessment,
                development, workplace application and reporting in one practical approach.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="card h-full p-8 sm:p-10">
              <IconTile name="Sparkles" accent="green" size="lg" />
              <h2 className="mt-5 text-2xl font-bold text-heading">Our vision</h2>
              <p className="mt-4 leading-relaxed text-body">
                Workplaces where people keep developing, managers support that development, and the
                results show up in how work gets done.
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

      {/* Our story — timeline */}
      <section className="bg-paper py-20">
        <div className="container-px">
          <SectionHeading
            align="left"
            eyebrow="Our story"
            title="From training provider to workforce growth intelligence"
            highlight="workforce growth intelligence"
            intro="Our journey has been shaped by what we learned from employers, learners and the workplace itself. Each stage taught us that sustainable skills development takes more than training. It takes insight, measurement and continuous development."
          />

          <ol className="mt-14 space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={(i % 3) * 0.06}>
                <li className="grid gap-4 border-t border-line pt-8 sm:grid-cols-[8rem_1fr] sm:gap-8">
                  <div className="text-4xl font-extrabold leading-none text-prestige-blue">{t.year}</div>
                  <div>
                    <h3 className="text-xl font-bold text-heading">{t.title}</h3>
                    <div className="mt-3 space-y-3 leading-relaxed text-body">
                      {t.paras.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>

                    {t.shift && (
                      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                        <span className="rounded-xl border border-line bg-mist px-4 py-2 text-sm text-muted line-through decoration-muted/50">
                          “{t.shift.from}”
                        </span>
                        <span className="text-prestige-blue" aria-hidden="true">→</span>
                        <span className="rounded-xl border border-prestige-blue/20 bg-sky px-4 py-2 text-sm font-semibold text-heading">
                          “{t.shift.to}”
                        </span>
                      </div>
                    )}

                    {t.questions && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {t.questions.map((q) => (
                          <p key={q} className="rounded-xl border border-line bg-mist px-4 py-3 text-sm font-semibold text-heading">
                            {q}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* How we partner (people behind the platform — no invented profiles) */}
      <section className="bg-mist py-20">
        <div className="container-px">
          <SectionHeading
            eyebrow="Partnership, not just software"
            title="Technology, training and human support together"
            highlight="human support"
            intro="Prestige Growth Pathways combines technology with the training, accreditation, assessment and human support organisations need to turn workforce development into measurable business growth."
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
