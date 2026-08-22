/**
 * Aurora — decorative ambient background. Purely visual.
 * tone: 'light' (default) — soft brand tints for light sections
 *       'dark'            — richer blobs for navy sections
 * variant: 'blue' | 'green' shifts the colour emphasis.
 */
export default function Aurora({ variant = 'blue', tone = 'light', grid = true, className = '' }) {
  const onDark = tone === 'dark'

  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {grid && (
        <div
          className={onDark ? 'absolute inset-0 opacity-[0.14]' : 'absolute inset-0 opacity-[0.5]'}
          style={{
            backgroundImage: onDark
              ? 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)'
              : 'linear-gradient(to right, rgba(11,27,59,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,27,59,0.05) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(80% 60% at 50% 20%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(80% 60% at 50% 20%, black, transparent 75%)',
          }}
        />
      )}
      <div
        className={`absolute -top-24 left-[-10%] h-[34rem] w-[34rem] rounded-full blur-[120px] animate-float-slow ${
          onDark
            ? variant === 'green'
              ? 'bg-prestige-green/20'
              : 'bg-prestige-blue/25'
            : variant === 'green'
              ? 'bg-prestige-green/10'
              : 'bg-prestige-blue/10'
        }`}
      />
      <div
        className={`absolute -bottom-32 right-[-8%] h-[30rem] w-[30rem] rounded-full blur-[130px] animate-float ${
          onDark
            ? variant === 'green'
              ? 'bg-prestige-blue/20'
              : 'bg-prestige-green/18'
            : variant === 'green'
              ? 'bg-prestige-blue/8'
              : 'bg-prestige-green/8'
        }`}
      />
    </div>
  )
}
