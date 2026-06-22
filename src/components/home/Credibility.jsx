import Reveal from '../ui/Reveal.jsx'
import IconTile from '../shared/IconTile.jsx'
import StatCounter from '../shared/StatCounter.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { credibility, stats } from '../../data/content.js'

export default function Credibility() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="A Credible Partner"
          title="Trusted to sit at the centre of your people strategy"
          highlight="people strategy"
          intro="Prestige Growth Pathways is built by Prestige Tutelage — combining deep workforce-development expertise with enterprise-grade technology you can rely on."
        />

        {/* stats band */}
        <Reveal>
          <div className="mt-14 grid grid-cols-2 gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md sm:p-10 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCounter key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Reveal>

        {/* credibility pillars */}
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {credibility.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 0.07}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
                <IconTile name={c.icon} accent={i % 2 ? 'green' : 'blue'} />
                <h3 className="mt-5 text-base font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* partner logo placeholders */}
        <Reveal>
          <div className="mt-12">
            <p className="text-center text-xs uppercase tracking-[0.24em] text-cloud-200/40">
              Trusted by forward-thinking teams — placeholder logos
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-14 items-center justify-center rounded-xl border border-white/8 bg-white/[0.02] text-sm font-semibold tracking-wide text-cloud-200/35"
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
