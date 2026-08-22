import Reveal from './Reveal.jsx'

/**
 * SectionHeading — clean section label + heading.
 * - label: optional short label (DM Sans, Prestige blue, normal case). Omit to render nothing.
 * - highlight: optional single phrase rendered in solid Prestige blue (no gradient).
 * - align: 'left' (default) | 'center'
 * - tone: 'light' (default) | 'dark'
 */
export default function SectionHeading({
  label,
  eyebrow, // backwards-compatible alias for label
  title,
  highlight,
  intro,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  const sectionLabel = label ?? eyebrow
  const onDark = tone === 'dark'
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  const renderTitle = () => {
    if (highlight && typeof title === 'string' && title.includes(highlight)) {
      const [before, after] = title.split(highlight)
      return (
        <>
          {before}
          <span className="text-prestige-blue">{highlight}</span>
          {after}
        </>
      )
    }
    return title
  }

  return (
    <div className={`flex flex-col ${alignment} max-w-3xl ${className}`}>
      {sectionLabel && (
        <Reveal>
          <p className={`section-label ${onDark ? '!text-prestige-blue-soft' : ''}`}>{sectionLabel}</p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`text-display-md font-semibold text-balance ${onDark ? 'text-white' : 'text-heading'}`}>
          {renderTitle()}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-lg leading-relaxed ${onDark ? 'text-cloud-200' : 'text-body'}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
