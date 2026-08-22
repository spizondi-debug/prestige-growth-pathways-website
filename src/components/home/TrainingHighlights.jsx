import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconTile from '../shared/IconTile.jsx'
import Button from '../ui/Button.jsx'
import { trainingHighlights } from '../../data/content.js'

export default function TrainingHighlights() {
  return (
    <section className="relative bg-paper py-24 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Training Solutions"
            title="Programmes that build the capabilities you need"
            highlight="capabilities you need"
            intro="From leadership to technical mastery, our solutions plug directly into the platform — so every programme is assessed, applied and measured."
          />
          <Button to="/training-solutions" variant="secondary" icon="ArrowRight" className="shrink-0">
            All training solutions
          </Button>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {trainingHighlights.map((t, i) => (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="card card-interactive group flex items-start gap-6 p-7"
            >
              <IconTile name={t.icon} accent={t.accent} size="lg" />
              <div>
                <h3 className="text-xl font-semibold text-heading">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{t.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
