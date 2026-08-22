import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import Icon from '../components/ui/Icon.jsx'
import Figure from '../components/shared/Figure.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { Check } from 'lucide-react'
import { trainingHighlights } from '../data/content.js'
import { deliveryFormats } from '../data/pages.js'
import { images } from '../data/images.js'

const programmeDetail = {
  leadership: ['Frontline and mid-management', 'Coaching for accountability', 'Leading change', 'First-time managers'],
  technical: ['Role-specific skills', 'Tools and systems', 'On-the-job assessment', 'Refresher training'],
  behavioural: ['Communication', 'Teamwork', 'Resilience', 'Problem solving'],
  compliance: ['Regulatory training', 'Structured onboarding', 'Refresher cycles', 'Records and evidence'],
}

export default function TrainingSolutions() {
  return (
    <PageShell>
      <Seo
        title="Training Solutions"
        description="Corporate training and skills-development programmes: leadership, technical and functional skills, behavioural skills, compliance and onboarding."
        path="/training-solutions"
      />
      <PageHero
        label="Training solutions"
        title="Programmes that build the capabilities you need"
        highlight="capabilities"
        intro="We design corporate training and skills development around real roles, then support your managers to put the learning to work."
      >
        <Button to="/book-consultation" size="lg">Book a Consultation</Button>
        <Button to="/industries" variant="secondary" size="lg">By industry</Button>
      </PageHero>

      {/* Lead image */}
      <section className="bg-white pt-16">
        <div className="container-px">
          <Figure img={images.trainingFacilitation} ratio="21 / 9" className="shadow-card" />
        </div>
      </section>

      {/* Programmes (editorial rows) */}
      <section className="bg-white py-16">
        <div className="container-px space-y-12">
          {trainingHighlights.map((t) => (
            <Reveal key={t.id}>
              <div className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
                <div className="flex items-start gap-4">
                  <IconTile name={t.icon} accent={t.accent} size="lg" />
                  <div>
                    <h3 className="text-2xl font-semibold text-heading">{t.title}</h3>
                    <p className="mt-2 max-w-md text-body">{t.body}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 lg:pt-2">
                  {programmeDetail[t.id].map((d) => (
                    <div key={d} className="flex items-center gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-prestige-green-deep" />
                      <span className="text-sm text-heading">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Delivery formats */}
      <section className="bg-mist py-20">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <Figure img={images.trainingProduction} ratio="4 / 3" className="shadow-card" />
          </Reveal>
          <div>
            <SectionHeading label="How we deliver" title="Blended delivery, built around the work" />
            <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2">
              {deliveryFormats.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 0.06}>
                  <div className="flex gap-3">
                    <Icon name={f.icon} className="mt-0.5 h-5 w-5 shrink-0 text-prestige-blue" strokeWidth={1.8} />
                    <div>
                      <h3 className="text-base font-semibold text-heading">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-body">{f.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
