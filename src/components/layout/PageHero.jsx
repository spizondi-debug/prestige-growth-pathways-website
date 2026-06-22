import Reveal from '../ui/Reveal.jsx'
import Aurora from '../shared/Aurora.jsx'

/**
 * PageHero — standard interior page header with eyebrow, title and intro.
 * Keeps every secondary page visually consistent with the brand.
 */
export default function PageHero({ eyebrow, title, highlight, intro, variant = 'blue', children }) {
  const renderTitle = () => {
    if (highlight && title.includes(highlight)) {
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
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <Aurora variant={variant} />
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          {eyebrow && (
            <Reveal>
              <span className="eyebrow mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.05}>
            <h1 className="text-display-lg font-bold text-balance text-white">{renderTitle()}</h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cloud-200/80 text-balance">
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
