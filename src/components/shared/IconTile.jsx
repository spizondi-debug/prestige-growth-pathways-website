import Icon from '../ui/Icon.jsx'

/**
 * IconTile — small, flat brand-tinted icon holder. No glow or gradient.
 * accent: 'blue' | 'green'
 * tone:   'light' (default) | 'dark'
 */
export default function IconTile({ name, accent = 'blue', size = 'md', tone = 'light' }) {
  const sizes = {
    sm: 'h-9 w-9 rounded-lg',
    md: 'h-11 w-11 rounded-lg',
    lg: 'h-12 w-12 rounded-lg',
  }
  const iconSize = { sm: 'h-4 w-4', md: 'h-5 w-5', lg: 'h-6 w-6' }

  const onDark = tone === 'dark'
  const accents = onDark
    ? {
        blue: 'text-prestige-blue-soft bg-white/10',
        green: 'text-prestige-green bg-white/10',
      }
    : {
        blue: 'text-prestige-blue bg-prestige-blue/[0.08]',
        green: 'text-prestige-green-deep bg-prestige-green/[0.10]',
      }

  return (
    <span className={`inline-flex items-center justify-center ${sizes[size]} ${accents[accent]}`}>
      <Icon name={name} className={iconSize[size]} strokeWidth={1.8} />
    </span>
  )
}
