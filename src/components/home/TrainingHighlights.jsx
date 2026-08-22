import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconTile from '../shared/IconTile.jsx'
import Button from '../ui/Button.jsx'
import Figure from '../shared/Figure.jsx'
import { trainingHighlights } from '../../data/content.js'
import { images } from '../../data/images.js'

export default function TrainingHighlights() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-px">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Training solutions"
            title="Programmes that build the skills your work needs"
            highlight="skills your work needs"
            intro="We design corporate training and skills-development programmes around real roles, then help your managers put the learning to work."
          />
          <Button to="/training-solutions" variant="secondary" className="shrink-0">
            View training solutions
          </Button>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {trainingHighlights.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <IconTile name={t.icon} accent={t.accent} size="lg" />
              <h3 className="mt-4 text-lg font-semibold text-heading">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{t.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Full-width visual break */}
        <Figure img={images.homeIndustry} ratio="21 / 9" className="mt-14 shadow-card" />
      </div>
    </section>
  )
}
