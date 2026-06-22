import Icon from '../ui/Icon.jsx'

/**
 * IconTile — gradient-bordered icon chip used across cards.
 * accent: 'blue' | 'green'
 */
export default function IconTile({ name, accent = 'blue', size = 'md' }) {
  const sizes = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-12 w-12 rounded-2xl',
    lg: 'h-14 w-14 rounded-2xl',
  }
  const iconSize = { sm: 'h-5 w-5', md: 'h-6 w-6', lg: 'h-7 w-7' }
  const accents = {
    blue: 'text-prestige-blue-soft from-prestige-blue/25',
    green: 'text-prestige-green-bright from-prestige-green/25',
  }

  return (
    <span
      className={`relative inline-flex items-center justify-center ${sizes[size]} border border-white/10 bg-gradient-to-br ${accents[accent]} to-transparent backdrop-blur-md`}
    >
      <span className="absolute inset-0 rounded-[inherit] bg-glass-edge opacity-40" />
      <Icon name={name} className={`relative ${iconSize[size]}`} strokeWidth={1.7} />
    </span>
  )
}
