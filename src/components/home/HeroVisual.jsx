import { motion } from 'framer-motion'
import { TrendingUp, Gauge, Target, Users } from 'lucide-react'

/**
 * HeroVisual — selective 3D visual: a floating, perspective-tilted glass
 * "growth intelligence" dashboard with an animated chart and orbiting
 * capability chips. Changes subtle emphasis per slide.
 */
export default function HeroVisual({ accent = 'blue', slideIndex = 0 }) {
  const bars = [38, 52, 46, 64, 58, 76, 70, 88]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" style={{ perspective: '1400px' }}>
      {/* glow base */}
      <div className="absolute inset-8 rounded-full bg-brand-gradient opacity-20 blur-[90px]" />

      {/* orbit ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-6 rounded-full border border-white/10" />
        <div className="absolute inset-16 rounded-full border border-dashed border-white/10" />
      </div>

      {/* main dashboard card */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2"
        initial={{ rotateX: 12, rotateY: -16 }}
        animate={{ rotateX: [12, 8, 12], rotateY: [-16, -12, -16] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="glass noise overflow-hidden p-6 shadow-lift">
          {/* header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cloud-200/50">Growth Intelligence</p>
              <p className="mt-1 text-lg font-semibold text-white">Capability Index</p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-prestige-green/30 bg-prestige-green/10 px-3 py-1 text-xs font-semibold text-prestige-green-bright">
              <TrendingUp className="h-3.5 w-3.5" /> +18%
            </span>
          </div>

          {/* chart */}
          <div className="mt-6 flex h-36 items-end gap-2.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-prestige-blue/40 to-prestige-green/80"
                initial={{ height: '8%' }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          {/* mini stats */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { Icon: Gauge, label: 'Assessed', value: '1,284' },
              { Icon: Target, label: 'On plan', value: '94%' },
              { Icon: Users, label: 'Coaching', value: '312' },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="glass-soft p-3">
                <Icon className="h-4 w-4 text-prestige-blue-soft" />
                <p className="mt-2 text-base font-bold text-white">{value}</p>
                <p className="text-[0.68rem] text-cloud-200/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating chips */}
      <motion.div
        className="absolute right-2 top-10 glass-soft px-4 py-3"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-xs font-semibold text-white">ROI Engine</p>
        <p className="text-[0.68rem] text-prestige-green-bright">3.2x return</p>
      </motion.div>

      <motion.div
        className="absolute -left-2 bottom-14 glass-soft px-4 py-3"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <p className="text-xs font-semibold text-white">Risk Engine</p>
        <p className="text-[0.68rem] text-prestige-blue-soft">3 signals flagged</p>
      </motion.div>
    </div>
  )
}
