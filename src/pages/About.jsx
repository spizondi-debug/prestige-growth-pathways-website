import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import Figure from '../components/shared/Figure.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import Button from '../components/ui/Button.jsx'
import { values } from '../data/pages.js'
import { images } from '../data/images.js'

const approach = [
  { title: 'Understand your needs', body: 'We start by understanding your roles, your goals and where the skills gaps are.', icon: 'Compass' },
  { title: 'Design and deliver', body: 'We design practical training and development, then deliver it in ways that suit your teams.', icon: 'Presentation' },
  { title: 'Support application', body: 'We help managers and learners apply new skills at work, and we track how it is going.', icon: 'Wrench' },
]

export default function About() {
  return (
    <PageShell>
      <Seo
        title="About Prestige"
        description="Prestige Tutelage is a South African corporate training and workforce-development partner focused on practical skills and workplace application."
        path="/about"
      />
      <PageHero
        label="About Prestige"
        title="A South African training and workforce-development partner"
        highlight="workforce-development partner"
        intro="Prestige Tutelage helps organisations develop capable, confident and accountable teams, from frontline staff to management."
      >
        <Button to="/book-consultation" size="lg">Book a Consultation</Button>
        <Button to="/platform" variant="secondary" size="lg">Explore the platform</Button>
      </PageHero>

      {/* Story + image */}
      <section className="bg-white py-20">
        <div className="container-px grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="section-label">Who we are</p>
            <h2 className="text-display-md font-semibold text-heading">
              Practical training, built for South African workplaces
            </h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-body">
              <p>
                Prestige Tutelage is a training and workforce-development business. We help
                organisations build the skills their people and operations depend on, across sectors
                and roles.
              </p>
              <p>
                Prestige Growth Pathways is our platform. It keeps development organised and visible,
                so training is easier to run and its value is easier to see.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Figure img={images.aboutTraining} ratio="5 / 4" className="shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* Purpose / Vision / Mission */}
      <section className="bg-mist py-20">
        <div className="container-px grid gap-6 lg:grid-cols-3">
          {[
            { label: 'Purpose', title: 'Why we exist', body: 'To help South African organisations develop capable, confident and accountable teams.' },
            { label: 'Vision', title: 'What we work towards', body: 'Workplaces where people keep growing, managers support that growth, and it shows in how work gets done.' },
            { label: 'Mission', title: 'How we get there', body: 'Deliver practical training and skills development, supported by a platform that keeps it applied and visible.' },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <div className="card h-full p-7">
                <p className="section-label">{c.label}</p>
                <h3 className="text-xl font-semibold text-heading">{c.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="container-px">
          <SectionHeading label="What we believe" title="The principles behind our work" />
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 0.06}>
                <div className="border-t-2 border-line pt-5">
                  <Icon name={v.icon} className="h-6 w-6 text-prestige-blue" strokeWidth={1.8} />
                  <h3 className="mt-3 text-lg font-semibold text-heading">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Operating approach */}
      <section className="bg-mist py-20">
        <div className="container-px">
          <SectionHeading label="How we work" title="A straightforward way to partner with you" />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="card h-full p-7">
                  <span className="text-sm font-semibold text-prestige-blue">0{i + 1}</span>
                  <h3 className="mt-2 text-lg font-semibold text-heading">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{a.body}</p>
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
