import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Button from '../ui/Button.jsx'
import Figure from '../shared/Figure.jsx'
import { heroSlides } from '../../data/content.js'
import { primaryCta, contact } from '../../data/site.js'
import { images } from '../../data/images.js'

const AUTO_MS = 7000

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)
  const slide = heroSlides[index]

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length)
  }, [])

  useEffect(() => {
    if (paused) return
    timer.current = setTimeout(() => go(1), AUTO_MS)
    return () => clearTimeout(timer.current)
  }, [index, paused, go])

  const renderTitle = () => {
    if (slide.highlight && slide.title.includes(slide.highlight)) {
      const [before, after] = slide.title.split(slide.highlight)
      return (
        <>
          {before}
          <span className="text-prestige-blue">{slide.highlight}</span>
          {after}
        </>
      )
    }
    return slide.title
  }

  return (
    <section
      className="border-b border-line bg-white pt-28 sm:pt-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container-px grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
        {/* Text column */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="section-label">{slide.label}</p>
              <h1 className="text-display-xl font-semibold text-heading">{renderTitle()}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-body">{slide.body}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to={primaryCta.to} size="lg">{primaryCta.label}</Button>
            <Button to="/training-solutions" variant="secondary" size="lg">
              Explore training solutions
            </Button>
          </div>

          <p className="mt-6 text-sm text-body">
            Prefer to speak to us? Call{' '}
            <a href={contact.phoneHref} className="font-semibold text-prestige-blue hover:text-prestige-blue-deep">
              {contact.phoneDisplay}
            </a>
          </p>

          {/* Slide tabs (labels, underline — no dots) */}
          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                className={`border-b-2 pb-1 text-left text-sm font-medium transition-colors ${
                  i === index ? 'border-prestige-blue text-heading' : 'border-transparent text-muted hover:text-heading'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image column */}
        <div className="lg:pl-4">
          <Figure img={images.heroWorkplace} ratio="4 / 5" priority className="shadow-card" />
        </div>
      </div>
    </section>
  )
}
