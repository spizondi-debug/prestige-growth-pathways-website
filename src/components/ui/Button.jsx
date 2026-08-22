import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

/**
 * Button — flat, corporate button system.
 * variant:
 *   'primary'      → solid Prestige blue, white text
 *   'secondary'    → white, navy border, navy text (aka 'ghost')
 *   'green'        → solid Prestige green, white text
 *   'outline-light'→ transparent + light border (for the dark CTA band)
 *   'link'         → text + arrow (tertiary)
 * No gradients, glows, or decorative circles.
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
    'inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60'

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-6 py-3 text-[0.95rem]',
    lg: 'px-7 py-3.5 text-base',
  }

  const variants = {
    primary: 'bg-prestige-blue text-white hover:bg-prestige-blue-deep',
    secondary: 'bg-white text-heading border border-navy-800/25 hover:border-prestige-blue',
    ghost: 'bg-white text-heading border border-navy-800/25 hover:border-prestige-blue',
    green: 'bg-prestige-green text-white hover:bg-prestige-green-deep',
    'outline-light': 'text-white border border-white/40 hover:bg-white/10',
    link: 'text-prestige-blue hover:text-prestige-blue-deep px-0 py-0',
  }

  const cls = `${base} ${variant === 'link' ? '' : sizes[size]} ${variants[variant] || variants.primary} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} className="h-4 w-4" />}
    </>
  )

  if (to) return <Link to={to} className={cls} {...props}>{content}</Link>
  if (href) return <a href={href} className={cls} {...props}>{content}</a>
  return <button className={cls} {...props}>{content}</button>
}
