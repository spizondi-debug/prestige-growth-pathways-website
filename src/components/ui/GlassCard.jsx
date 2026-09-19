/**
 * GlassCard — primary light card surface with optional gradient frame
 * and an interactive lift on hover.
 */
export default function GlassCard({
  children,
  className = '',
  framed = false,
  interactive = true,
  glow, // retained for API compatibility (no neon glow in light theme)
}) {
  const baseSurface = framed ? 'frame-gradient' : 'card'
  const interactivity = interactive && !framed ? 'card-interactive' : ''
  return (
    <div className={`${baseSurface} ${interactivity} ${className}`}>{children}</div>
  )
}
