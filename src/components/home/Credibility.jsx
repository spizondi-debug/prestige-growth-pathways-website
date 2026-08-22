import Reveal from '../ui/Reveal.jsx'
import IconTile from '../shared/IconTile.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { credibility } from '../../data/content.js'

export default function Credibility() {
  return (
    <section className="relative bg-sky py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Why Prestige"
          title="A credible training and development partner"
          intro="Prestige Growth Pathways is built by Prestige Tutelage, combining real workforce-development experience with technology you can rely on."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
      </div>
    </section>
  )
}
