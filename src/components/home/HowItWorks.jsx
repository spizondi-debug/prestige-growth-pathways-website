import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import Icon from '../ui/Icon.jsx'
import { howItWorks } from '../../data/content.js'

export default function HowItWorks() {
  return (
    <section className="relative bg-mint py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="A continuous loop of growth, not a one-off event"
          highlight="continuous loop of growth"
          intro="Prestige Growth Pathways runs a clear, repeatable cycle — turning insight into action, and action into measurable, compounding results."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-prestige-blue/25 to-transparent lg:block" />

          <div className="grid gap-6 lg:grid-cols-4">
            {howItWorks.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* node */}
                <div className="relative z-10 mx-auto flex h-[6.5rem] w-[6.5rem] items-center justify-center">
                  <span className="absolute inset-0 rounded-full border border-line bg-white shadow-soft" />
                  <span className="absolute inset-2 rounded-full bg-brand-gradient opacity-[0.08]" />
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-prestige-green/40" />
                  <Icon name={s.icon} className="relative h-8 w-8 text-prestige-blue" strokeWidth={1.7} />
                </div>

                <div className="card mt-6 p-6 text-center">
                  <span className="text-sm font-bold tracking-widest text-gradient">{s.step}</span>
                  <h3 className="mt-2 text-lg font-semibold text-heading">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
