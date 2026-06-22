/**
 * GlassCard — frosted glass surface with optional gradient frame and
 * an interactive lift/glow on hover.
 */
export default function GlassCard({
  children,
  className = '',
  framed = false,
  interactive = true,
  glow = 'blue',
}) {
  const glowMap = {
    blue: 'hover:shadow-glow-blue',
    green: 'hover:shadow-glow-green',
    none: '',
  }
  const baseSurface = framed ? 'frame-gradient' : 'glass'
  const interactivity = interactive
    ? `transition-all duration-500 hover:-translate-y-1.5 ${glowMap[glow]}`
    : ''

  return (
    <div className={`${baseSurface} ${interactivity} ${className}`}>
      {/* top glass highlight */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-glass-edge" />
      {children}
    </div>
  )
}
