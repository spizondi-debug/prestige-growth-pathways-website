import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import Figure from '../shared/Figure.jsx'
import { strengths } from '../../data/content.js'
import { images } from '../../data/images.js'

export default function MessagingBand() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="container-px grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Image */}
        <Reveal>
          <Figure img={images.homeTraining} ratio="5 / 4" className="shadow-card" />
        </Reveal>

        {/* Copy + strengths */}
        <div>
          <Reveal>
            <p className="section-label">Why organisations work with Prestige</p>
            <h2 className="text-display-md font-semibold text-heading">
              An established training partner, supported by a practical platform
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-body">
              Prestige Tutelage brings the training experience, and Prestige Growth Pathways keeps
              development organised and visible. Together they help your people build real skills at work.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {strengths.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="flex gap-3">
                  <Icon name={s.icon} className="mt-0.5 h-5 w-5 shrink-0 text-prestige-blue" strokeWidth={1.8} />
                  <div>
                    <h3 className="text-base font-semibold text-heading">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
