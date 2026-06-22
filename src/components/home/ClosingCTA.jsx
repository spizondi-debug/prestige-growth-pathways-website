import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import Aurora from '../shared/Aurora.jsx'
import { primaryCta } from '../../data/site.js'

export default function ClosingCTA() {
  return (
    <section className="relative py-20">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-700/60 px-6 py-16 text-center sm:px-12 sm:py-20">
          <Aurora variant="green" grid={false} />
          <Reveal>
            <span className="eyebrow mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
              Start the conversation
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mx-auto max-w-3xl text-display-lg font-extrabold text-balance text-white">
              Build a workforce that grows on purpose — and{' '}
              <span className="text-gradient">proves it</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-cloud-200/80">
              See how Prestige Growth Pathways can give your managers, teams and leadership a single,
              intelligent view of growth.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button to={primaryCta.to} size="lg" icon="CalendarCheck">
                {primaryCta.label}
              </Button>
              <Button to="/contact" variant="ghost" size="lg" icon="ArrowRight">
                Talk to our team
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
