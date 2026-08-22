import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import IconTile from '../components/shared/IconTile.jsx'
import Figure from '../components/shared/Figure.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { Check } from 'lucide-react'
import { industries } from '../data/pages.js'
import { images } from '../data/images.js'

export default function Industries() {
  return (
    <PageShell>
      <Seo
        title="Industries"
        description="Training and workforce development for manufacturing, agriculture, logistics, retail, professional services and the public sector in South Africa."
        path="/industries"
      />
      <PageHero
        label="Industries"
        title="Training built for the realities of your sector"
        highlight="your sector"
        intro="Skills, compliance and workforce needs differ by industry. We shape training and development to fit how your sector actually works."
      >
        <Button to="/book-consultation" size="lg">Book a Consultation</Button>
        <Button to="/platform" variant="secondary" size="lg">See the platform</Button>
      </PageHero>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-px space-y-16 sm:space-y-20">
          {industries.map((ind, i) => {
            const imageFirst = i % 2 === 0
            return (
              <Reveal key={ind.id}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  <div className={imageFirst ? 'lg:order-1' : 'lg:order-2'}>
                    <Figure img={images[ind.image]} ratio="4 / 3" className="shadow-card" />
                  </div>
                  <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
                    <IconTile name={ind.icon} accent={i % 2 ? 'green' : 'blue'} size="lg" />
                    <h2 className="mt-4 text-2xl font-semibold text-heading sm:text-3xl">{ind.name}</h2>
                    <p className="mt-3 text-lg leading-relaxed text-body">{ind.blurb}</p>
                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {ind.points.map((p) => (
                        <li key={p} className="flex items-center gap-2.5 text-sm text-heading">
                          <Check className="h-4 w-4 shrink-0 text-prestige-green-deep" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
