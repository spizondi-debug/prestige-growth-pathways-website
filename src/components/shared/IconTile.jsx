import Icon from '../ui/Icon.jsx'

/**
 * IconTile — soft brand-tinted icon chip used across light cards.
 * accent: 'blue' | 'green'
 * tone:   'light' (default) | 'dark' (for navy sections)
 */
export default function IconTile({ name, accent = 'blue', size = 'md', tone = 'light' }) {
  const sizes = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-12 w-12 rounded-2xl',
    lg: 'h-14 w-14 rounded-2xl',
  }
  const iconSize = { sm: 'h-5 w-5', md: 'h-6 w-6', lg: 'h-7 w-7' }

  const onDark = tone === 'dark'
  const accents = onDark
    ? {
        blue: 'text-prestige-blue-soft bg-white/[0.06] border-white/10',
        green: 'text-prestige-green-bright bg-white/[0.06] border-white/10',
      }
    : {
        blue: 'text-prestige-blue bg-sky border-prestige-blue/15',
        green: 'text-prestige-green-deep bg-mint border-prestige-green/20',
      }

  return (
    <span
      className={`relative inline-flex items-center justify-center ${sizes[size]} border ${accents[accent]}`}
    >
      <Icon name={name} className={`relative ${iconSize[size]}`} strokeWidth={1.8} />
    </span>
  )
}
