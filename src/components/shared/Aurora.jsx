/**
 * Aurora — decorative ambient background blobs + grid. Purely visual.
 * Use behind hero / CTA sections. `variant` shifts the colour emphasis.
 */
export default function Aurora({ variant = 'blue', grid = true, className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(80% 60% at 50% 30%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(80% 60% at 50% 30%, black, transparent 75%)',
          }}
        />
      )}
      <div
        className={`absolute -top-24 left-[-10%] h-[34rem] w-[34rem] rounded-full blur-[120px] ${
          variant === 'green' ? 'bg-prestige-green/20' : 'bg-prestige-blue/25'
        } animate-float-slow`}
      />
      <div
        className={`absolute -bottom-32 right-[-8%] h-[30rem] w-[30rem] rounded-full blur-[130px] ${
          variant === 'green' ? 'bg-prestige-blue/20' : 'bg-prestige-green/18'
        } animate-float`}
      />
    </div>
  )
}
