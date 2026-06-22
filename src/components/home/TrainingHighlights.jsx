import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconTile from '../shared/IconTile.jsx'
import Button from '../ui/Button.jsx'
import { trainingHighlights } from '../../data/content.js'

export default function TrainingHighlights() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Training Solutions"
            title="Programmes that build the capabilities you need"
            highlight="capabilities you need"
            intro="From leadership to technical mastery, our solutions plug directly into the platform — so every programme is assessed, applied and measured."
          />
          <Button to="/training-solutions" variant="ghost" icon="ArrowRight" className="shrink-0">
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
              className="group relative flex items-start gap-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              <span
                className={`pointer-events-none absolute -bottom-12 -right-8 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 ${
                  t.accent === 'green' ? 'bg-prestige-green/15' : 'bg-prestige-blue/20'
                } opacity-0 group-hover:opacity-100`}
              />
              <IconTile name={t.icon} accent={t.accent} size="lg" />
              <div>
                <h3 className="text-xl font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{t.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
