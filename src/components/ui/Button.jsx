import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

/**
 * Button — premium brand button (light theme).
 * variant:
 *   'primary'      → brand blue→green gradient (main CTA)
 *   'secondary'    → white with navy border  (aka 'ghost')
 *   'outline-light'→ transparent + light border (for dark/navy sections)
 *   'soft'         → text + arrow, no chrome  (tertiary)
 * Renders as <Link> when `to` is set, otherwise <a> or <button>.
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  ...props
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-prestige-blue/40 focus-visible:ring-offset-2'

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-[0.95rem]',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary:
      'text-white bg-brand-gradient shadow-glow-blue hover:shadow-glow-green hover:-translate-y-0.5',
    secondary:
      'text-heading bg-white border border-line hover:border-prestige-blue/40 hover:shadow-soft hover:-translate-y-0.5',
    // alias
    ghost:
      'text-heading bg-white border border-line hover:border-prestige-blue/40 hover:shadow-soft hover:-translate-y-0.5',
    'outline-light':
      'text-white border border-white/30 bg-white/[0.06] backdrop-blur-md hover:bg-white/[0.12] hover:border-white/50',
    soft:
      'text-prestige-blue hover:text-prestige-blue-deep',
  }

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 -z-10 rounded-full bg-brand-gradient opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-50" />
      )}
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
        />
      )}
    </>
  )

  const cls = `${base} ${sizes[size]} ${variants[variant] || variants.primary} ${className}`

  if (to) return <Link to={to} className={cls} {...props}>{content}</Link>
  if (href) return <a href={href} className={cls} {...props}>{content}</a>
  return <button className={cls} {...props}>{content}</button>
}
