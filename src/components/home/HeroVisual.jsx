import { Route, ClipboardCheck, Users } from 'lucide-react'

/**
 * HeroVisual — a clean, light illustration of the platform interface.
 * Structural only: no fabricated business metrics or performance claims.
 */
export default function HeroVisual() {
  const bars = [40, 55, 48, 66, 60, 74]

  return (
    <div className="card overflow-hidden p-6">
      <div className="flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="text-xs font-medium text-muted">Prestige Growth Pathways</p>
          <p className="mt-1 text-base font-semibold text-heading">Team development</p>
        </div>
        <span className="rounded-md bg-prestige-blue/[0.08] px-2.5 py-1 text-xs font-medium text-prestige-blue">
          Overview
        </span>
      </div>

      {/* Illustrative progress bars (no numeric claims) */}
      <div className="mt-6 flex h-32 items-end gap-2.5" aria-hidden="true">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-prestige-blue/70" style={{ height: `${h}%` }} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        {[
          { Icon: ClipboardCheck, label: 'Assessments' },
          { Icon: Route, label: 'Pathways' },
          { Icon: Users, label: 'Coaching' },
        ].map(({ Icon, label }) => (
          <div key={label} className="rounded-lg border border-line bg-mist p-3">
            <Icon className="h-4 w-4 text-prestige-blue" strokeWidth={1.8} />
            <p className="mt-2 text-xs font-medium text-heading">{label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
