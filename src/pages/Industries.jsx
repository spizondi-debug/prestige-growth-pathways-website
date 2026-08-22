import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { Check } from 'lucide-react'
import { industries } from '../data/pages.js'

export default function Industries() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Industries"
        title="Built for the realities of your sector"
        highlight="your sector"
        intro="Capability frameworks, compliance demands and workforce dynamics differ by industry. Prestige Growth Pathways adapts to each."
      >
        <Button to="/book-consultation" size="lg" icon="CalendarCheck">Book a Consultation</Button>
        <Button to="/platform" variant="secondary" size="lg" icon="ArrowRight">See the platform</Button>
      </PageHero>

      <section className="bg-paper py-16">
        <div className="container-px">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 3) * 0.06}>
                <article className="card card-interactive flex h-full flex-col p-7">
                  <IconTile name={ind.icon} accent={i % 2 ? 'green' : 'blue'} size="lg" />
                  <h3 className="mt-5 text-xl font-semibold text-heading">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{ind.blurb}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-heading">
                        <Check className="h-4 w-4 shrink-0 text-prestige-green-deep" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptability band */}
      <section className="bg-mist py-16">
        <div className="container-px">
          <div className="frame-gradient noise grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="eyebrow mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                  Don’t see your industry?
                </span>
                <h2 className="text-display-md font-bold text-heading">
                  The platform flexes to <span className="text-gradient">your frameworks</span>
                </h2>
                <p className="mt-4 text-body">
                  Prestige Growth Pathways supports custom capability frameworks, role libraries and
                  compliance models — so it fits the way your sector actually works.
                </p>
                <div className="mt-7">
                  <Button to="/contact" icon="ArrowRight">Tell us about your sector</Button>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {['Custom frameworks', 'Role libraries', 'Compliance models', 'Skills matrices', 'Localised content', 'Integrations'].map(
                  (c) => (
                    <div key={c} className="rounded-2xl border border-line bg-white px-4 py-4 text-sm font-medium text-heading shadow-soft">
                      {c}
                    </div>
                  ),
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
