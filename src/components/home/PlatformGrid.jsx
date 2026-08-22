import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconTile from '../shared/IconTile.jsx'
import Button from '../ui/Button.jsx'
import { modules } from '../../data/modules.js'

export default function PlatformGrid() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="container-px">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="The platform"
            title="Technology that keeps development organised"
            intro="Prestige Growth Pathways brings assessment, development, workplace application and reporting together, so training is easy to run and easy to see."
          />
          <Button to="/platform" variant="secondary" className="shrink-0">
            Explore the platform
          </Button>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-4 border-t border-line pt-6"
            >
              <IconTile name={m.icon} accent={m.accent} />
              <div>
                <h3 className="text-base font-semibold text-heading">{m.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{m.blurb}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
