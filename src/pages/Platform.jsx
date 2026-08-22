import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import Icon from '../components/ui/Icon.jsx'
import Figure from '../components/shared/Figure.jsx'
import Button from '../components/ui/Button.jsx'
import HeroVisual from '../components/home/HeroVisual.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { modules } from '../data/modules.js'
import { howItWorks } from '../data/content.js'
import { images } from '../data/images.js'

const groups = [
  { name: 'Understand', desc: 'See where people and teams stand.', ids: ['assessment-centre', 'team-analytics', 'capability-risk'] },
  { name: 'Develop', desc: 'Grow the right skills.', ids: ['development-plans', 'learning-pathways', 'micro-learning', 'career-pathing'] },
  { name: 'Apply and report', desc: 'Put learning to work and show progress.', ids: ['workplace-application', 'coaching-hub', 'manager-reviews', 'roi-reporting'] },
]

export default function Platform() {
  const byId = Object.fromEntries(modules.map((m) => [m.id, m]))

  return (
    <PageShell>
      <Seo
        title="The Platform"
        description="Prestige Growth Pathways supports assessment, development, workplace application and reporting for corporate training and workforce development."
        path="/platform"
      />
      <PageHero
        label="The platform"
        title="Technology that supports real training and real teams"
        highlight="real teams"
        intro="Prestige Growth Pathways keeps development organised, from first assessment to workplace application and reporting."
      >
        <Button to="/book-consultation" size="lg">Book a Consultation</Button>
        <Button to="/training-solutions" variant="secondary" size="lg">Training solutions</Button>
      </PageHero>

      {/* Intro + interface */}
      <section className="bg-white py-20">
        <div className="container-px grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="section-label">One place for development</p>
            <h2 className="text-display-md font-semibold text-heading">
              Built around your people
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              The platform brings assessment, learning, coaching and reporting together. It gives
              managers a clear view of development, without adding admin to the working day.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* Capability groups */}
      <section className="bg-mist py-20">
        <div className="container-px">
          <SectionHeading label="What it does" title="Capabilities that work together" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {groups.map((g, gi) => (
              <Reveal key={g.name} delay={gi * 0.06}>
                <div className="card h-full p-7">
                  <span className="text-sm font-semibold text-prestige-blue">Step {gi + 1}</span>
                  <h3 className="mt-1 text-xl font-semibold text-heading">{g.name}</h3>
                  <p className="mt-1 text-sm text-body">{g.desc}</p>
                  <div className="mt-5 space-y-4 border-t border-line pt-5">
                    {g.ids.map((id) => (
                      <div key={id} className="flex items-start gap-3">
                        <IconTile name={byId[id].icon} accent={byId[id].accent} size="sm" />
                        <div>
                          <p className="text-sm font-semibold text-heading">{byId[id].name}</p>
                          <p className="mt-0.5 text-sm leading-relaxed text-body">{byId[id].blurb}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supports real people (image + copy) */}
      <section className="bg-white py-20">
        <div className="container-px grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Figure img={images.platformWorkplace} ratio="5 / 4" className="shadow-card" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="section-label">Technology in service of training</p>
            <h2 className="text-display-md font-semibold text-heading">
              The platform supports the people doing the work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-body">
              Behind every dashboard is a real team learning on the job. Prestige Growth Pathways is
              there to make that development easier to run, not to replace the human side of training.
            </p>
            <div className="mt-7 grid gap-y-3">
              {howItWorks.map((s) => (
                <div key={s.step} className="flex items-start gap-3">
                  <Icon name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-prestige-blue" strokeWidth={1.8} />
                  <p className="text-body">
                    <span className="font-semibold text-heading">{s.title}.</span> {s.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
