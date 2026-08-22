import Reveal from '../ui/Reveal.jsx'

/**
 * PageHero — interior page header. Left-aligned and restrained by default.
 */
export default function PageHero({
  label,
  eyebrow, // alias
  title,
  highlight,
  intro,
  align = 'left',
  children,
}) {
  const sectionLabel = label ?? eyebrow
  const centered = align === 'center'

  const renderTitle = () => {
    if (highlight && title.includes(highlight)) {
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
    <section className="border-b border-line bg-mist pb-14 pt-32 sm:pt-40">
      <div className="container-px">
        <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
          {sectionLabel && (
            <Reveal>
              <p className="section-label">{sectionLabel}</p>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-display-lg font-semibold text-balance text-heading">{renderTitle()}</h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className={`mt-5 text-lg leading-relaxed text-body ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className={`mt-8 flex flex-wrap items-center gap-4 ${centered ? 'justify-center' : ''}`}>
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
