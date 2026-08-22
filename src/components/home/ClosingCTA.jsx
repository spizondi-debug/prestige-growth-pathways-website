import Reveal from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import { primaryCta, contact } from '../../data/site.js'

export default function ClosingCTA() {
  return (
    <section className="surface-dark">
      <div className="container-px py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-[0.95rem] font-semibold text-prestige-blue-soft">Speak to Prestige</p>
            <h2 className="mt-3 text-display-md font-semibold text-white">
              Let’s build a practical plan for your people
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-cloud-200">
              Tell us about your team and goals, and we’ll show you how Prestige can help with training,
              skills development and workplace capability.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button to={primaryCta.to} size="lg">{primaryCta.label}</Button>
              <Button to="/contact" variant="outline-light" size="lg">Contact us</Button>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-6 text-sm text-cloud-200">
              Prefer to call? Speak to Prestige on{' '}
              <a href={contact.phoneHref} className="font-semibold text-white hover:underline">
                {contact.phoneDisplay}
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
