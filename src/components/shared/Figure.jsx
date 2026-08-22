/**
 * Figure — editorial image slot for REAL photography.
 * - `img` is a manifest entry: { src, alt }.
 * - When `src` is set it renders an optimised, lazy-loaded photo.
 * - When `src` is empty it renders a clean branded panel (never a fake or
 *   AI image), so the layout stays complete until a real photo is added.
 */
export default function Figure({
  img,
  ratio = '16 / 10',
  rounded = 'rounded-[16px]',
  className = '',
  priority = false,
}) {
  const hasPhoto = Boolean(img?.src)

  return (
    <div className={`media ${rounded} ${className}`} style={{ aspectRatio: ratio }}>
      {hasPhoto ? (
        <img
          src={img.src}
          alt={img.alt || ''}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="h-full w-full object-cover"
        />
      ) : (
        // Branded fallback — intentional design panel, not a placeholder photo.
        <div
          className="flex h-full w-full items-center justify-center"
          role="img"
          aria-label={img?.alt || 'Prestige Growth Pathways'}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-mist via-white to-mist" />
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-prestige-blue/[0.06]" />
          <div className="absolute -bottom-12 -right-8 h-48 w-48 rounded-full bg-prestige-green/[0.06]" />
          <span className="relative text-sm font-medium tracking-wide text-muted">
            Prestige Growth Pathways
          </span>
        </div>
      )}
    </div>
  )
}
