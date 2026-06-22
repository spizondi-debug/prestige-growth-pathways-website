import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading.jsx'
import IconTile from '../shared/IconTile.jsx'
import Button from '../ui/Button.jsx'
import { modules } from '../../data/modules.js'

export default function PlatformGrid() {
  return (
    <section className="relative py-24 sm:py-28">
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
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* hover glow */}
              <span
                className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition-opacity duration-500 ${
                  m.accent === 'green' ? 'bg-prestige-green/20' : 'bg-prestige-blue/25'
                } opacity-0 group-hover:opacity-100`}
              />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-glass-edge" />

              <IconTile name={m.icon} accent={m.accent} />
              <h3 className="mt-5 text-lg font-semibold text-white">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cloud-200/70">{m.blurb}</p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-cloud-200/50 transition-colors group-hover:text-prestige-green-bright">
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
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-bright">
                The full picture
              </p>
              <h3 className="mt-3 text-xl font-bold text-white">See how the modules work together</h3>
            </div>
            <Button to="/platform" variant="ghost" size="sm" icon="ArrowRight" className="mt-6 self-start">
              Tour the platform
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
