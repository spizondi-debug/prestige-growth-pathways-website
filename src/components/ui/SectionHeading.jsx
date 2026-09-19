import Reveal from './Reveal.jsx'

/**
 * SectionHeading — consistent eyebrow + title + intro block (light theme).
 * align: 'left' | 'center'
 * tone:  'light' (default, dark text) | 'dark' (for navy sections)
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = 'center',
  tone = 'light',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const onDark = tone === 'dark'

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
      {eyebrow && (
        <Reveal>
          <span className={`${onDark ? 'eyebrow-on-dark' : 'eyebrow'} mb-5`}>
            <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className={`text-display-md font-bold text-balance ${onDark ? 'text-white' : 'text-heading'}`}>
          {renderTitle()}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-lg leading-relaxed text-balance ${onDark ? 'text-cloud-200/80' : 'text-body'}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
