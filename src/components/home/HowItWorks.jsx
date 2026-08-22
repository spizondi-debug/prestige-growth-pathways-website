import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import Icon from '../ui/Icon.jsx'
import { howItWorks } from '../../data/content.js'

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-px">
        <SectionHeading
          label="How it works"
          title="A clear, repeatable way to develop your people"
          intro="A straightforward process that turns assessment into action, and action into progress you can see."
        />

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t-2 border-line pt-5"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-semibold text-prestige-blue">{s.step}</span>
                <Icon name={s.icon} className="h-6 w-6 text-muted" strokeWidth={1.7} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-heading">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
