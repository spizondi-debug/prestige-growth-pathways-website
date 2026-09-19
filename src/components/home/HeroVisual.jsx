import { motion } from 'framer-motion'
import { TrendingUp, Gauge, Target, Users } from 'lucide-react'

/**
 * HeroVisual — selective 3D visual: a floating, perspective-tilted navy
 * "growth intelligence" dashboard (reads as a product screenshot) sitting
 * on the light hero, with white floating capability chips for contrast.
 */
export default function HeroVisual({ accent = 'blue' }) {
  const bars = [38, 52, 46, 64, 58, 76, 70, 88]

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" style={{ perspective: '1400px' }}>
      {/* soft brand glow base */}
      <div className="absolute inset-10 rounded-full bg-brand-gradient opacity-10 blur-[90px]" />

      {/* orbit ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <div className="absolute inset-6 rounded-full border border-heading/10" />
        <div className="absolute inset-16 rounded-full border border-dashed border-heading/10" />
      </div>

      {/* main dashboard card (navy product surface) */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[88%] -translate-x-1/2 -translate-y-1/2"
        initial={{ rotateX: 12, rotateY: -16 }}
        animate={{ rotateX: [12, 8, 12], rotateY: [-16, -12, -16] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="relative overflow-hidden rounded-3xl border border-navy-700 bg-navy-900 p-6 shadow-lift">
          {/* header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cloud-200/50">Prestige Growth Pathways</p>
              <p className="mt-1 text-lg font-semibold text-white">Team development</p>
            </div>
            <TrendingUp className="h-5 w-5 text-prestige-green-bright" />
          </div>

          {/* chart */}
          <div className="mt-6 flex h-36 items-end gap-2.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-t-md bg-gradient-to-t from-prestige-blue/50 to-prestige-green/90"
                initial={{ height: '8%' }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </div>

          {/* mini tiles (illustrative) */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { Icon: Gauge, label: 'Assessments' },
              { Icon: Target, label: 'Development' },
              { Icon: Users, label: 'Coaching' },
            ].map(({ Icon, label }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
                <Icon className="h-4 w-4 text-prestige-blue-soft" />
                <p className="mt-2 text-xs font-medium text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating white chips */}
      <motion.div
        className="absolute right-2 top-10 rounded-2xl border border-line bg-white px-4 py-3 shadow-card"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <p className="text-xs font-semibold text-heading">Reporting</p>
        <p className="text-[0.68rem] font-medium text-prestige-green-deep">Return on training</p>
      </motion.div>

      <motion.div
        className="absolute -left-2 bottom-14 rounded-2xl border border-line bg-white px-4 py-3 shadow-card"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
      >
        <p className="text-xs font-semibold text-heading">Capability</p>
        <p className="text-[0.68rem] font-medium text-prestige-blue">Skills and gaps</p>
      </motion.div>
    </div>
  )
}
