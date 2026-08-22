import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconTile from '../shared/IconTile.jsx'
import Button from '../ui/Button.jsx'
import { modules } from '../../data/modules.js'

export default function PlatformGrid() {
  return (
    <section className="relative bg-paper py-24 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="One Intelligent Platform"
          title="Eleven capabilities, one growth system"
          highlight="one growth system"
          intro="Prestige Growth Pathways connects assessment, development, application and analytics so every part of the growth journey works together — and nothing falls through the cracks."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {modules.map((m, i) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="card card-interactive group p-6"
            >
              <IconTile name={m.icon} accent={m.accent} />
              <h3 className="mt-5 text-lg font-semibold text-heading">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{m.blurb}</p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-muted transition-colors group-hover:text-prestige-blue">
                Learn more
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </span>
            </motion.article>
          ))}

          {/* 12th tile: CTA into platform */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="frame-gradient flex flex-col justify-between p-6"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-deep">
                The full picture
              </p>
              <h3 className="mt-3 text-xl font-bold text-heading">See how the modules work together</h3>
            </div>
            <Button to="/platform" variant="secondary" size="sm" icon="ArrowRight" className="mt-6 self-start">
              Tour the platform
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
