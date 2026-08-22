import Reveal from '../ui/Reveal.jsx'
import IconTile from '../shared/IconTile.jsx'
import StatCounter from '../shared/StatCounter.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { credibility, stats } from '../../data/content.js'

export default function Credibility() {
  return (
    <section className="relative bg-sky py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="A Credible Partner"
          title="Trusted to sit at the centre of your people strategy"
          highlight="people strategy"
          intro="Prestige Growth Pathways is built by Prestige Tutelage — combining deep workforce-development expertise with enterprise-grade technology you can rely on."
        />

        {/* stats band — one selective navy accent for impact */}
        <Reveal>
          <div className="surface-dark noise relative mt-14 grid grid-cols-2 gap-8 overflow-hidden rounded-3xl p-8 shadow-lift sm:p-10 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} tone="dark" />
            ))}
          </div>
        </Reveal>

        {/* credibility pillars */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {credibility.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.07}>
              <div className="card card-interactive h-full p-6">
                <IconTile name={c.icon} accent={i % 2 ? 'green' : 'blue'} />
                <h3 className="mt-5 text-base font-semibold text-heading">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* partner logo placeholders */}
        <Reveal>
          <div className="mt-12">
            <p className="text-center text-xs uppercase tracking-[0.24em] text-muted">
              Trusted by forward-thinking teams — placeholder logos
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-14 items-center justify-center rounded-xl border border-line bg-white text-sm font-semibold tracking-wide text-muted"
                >
                  LOGO {i + 1}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
