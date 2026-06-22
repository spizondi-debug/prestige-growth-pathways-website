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
        <Button to="/platform" variant="ghost" size="lg" icon="ArrowRight">See the platform</Button>
      </PageHero>

      <section className="py-12">
        <div className="container-px">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <Reveal key={ind.id} delay={(i % 3) * 0.06}>
                <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20">
                  <IconTile name={ind.icon} accent={i % 2 ? 'green' : 'blue'} size="lg" />
                  <h3 className="mt-5 text-xl font-semibold text-white">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{ind.blurb}</p>
                  <ul className="mt-5 space-y-2 border-t border-white/8 pt-5">
                    {ind.points.map((p) => (
                      <li key={p} className="flex items-center gap-2.5 text-sm text-cloud-100">
                        <Check className="h-4 w-4 shrink-0 text-prestige-green-bright" />
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
      <section className="py-12">
        <div className="container-px">
          <div className="glass noise grid gap-8 overflow-hidden p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <span className="eyebrow mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                  Don’t see your industry?
                </span>
                <h2 className="text-display-md font-bold text-white">
                  The platform flexes to <span className="text-gradient">your frameworks</span>
                </h2>
                <p className="mt-4 text-cloud-200/75">
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
                    <div key={c} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-sm font-medium text-cloud-100">
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
