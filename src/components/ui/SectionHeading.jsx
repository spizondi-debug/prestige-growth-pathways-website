import Reveal from './Reveal.jsx'

/**
 * SectionHeading — consistent eyebrow + title + intro block.
 * align: 'left' | 'center'
 */
export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  intro,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  // Allow a highlighted phrase inside the title to receive gradient styling
  const renderTitle = () => {
    if (highlight && typeof title === 'string' && title.includes(highlight)) {
      const [before, after] = title.split(highlight)
      return (
        <>
          {before}
          <span className="text-gradient">{highlight}</span>
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
          <span className="eyebrow mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-display-md font-bold text-balance text-white">{renderTitle()}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-cloud-200/80 text-balance">{intro}</p>
        </Reveal>
      )}
    </div>
  )
}
