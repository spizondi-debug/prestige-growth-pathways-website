import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../ui/Button.jsx'
import Aurora from '../shared/Aurora.jsx'
import HeroVisual from './HeroVisual.jsx'
import { heroSlides } from '../../data/content.js'
import { primaryCta } from '../../data/site.js'

const AUTO_MS = 6500

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

  return (
    <section
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <Aurora variant={slide.accent} />

      {/* progress / slide indicator vertical line */}
      <div className="absolute inset-y-0 left-5 z-10 hidden flex-col items-center justify-center gap-4 sm:left-8 lg:flex">
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className="group relative h-16 w-px bg-white/15"
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === index && (
              <motion.span
                key={`${index}-${paused}`}
                className="absolute inset-x-[-1px] top-0 w-[3px] origin-top rounded-full bg-brand-gradient"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: paused ? 0.4 : 1 }}
                transition={{ duration: paused ? 0.3 : AUTO_MS / 1000, ease: 'linear' }}
                style={{ height: '100%' }}
              />
            )}
            <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[0.7rem] font-semibold text-cloud-200/40 group-hover:text-white">
              0{i + 1}
            </span>
          </button>
        ))}
      </div>

      <div className="container-px relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Text column */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="eyebrow mb-6">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-prestige-green" />
                {slide.eyebrow}
              </span>

              <h1 className="text-display-xl font-extrabold text-white">
                {slide.title.map((line, li) => (
                  <span key={li} className="block text-balance">
                    {line === slide.highlight || line.includes(slide.highlight) ? (
                      <span className="text-gradient">{line}</span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-cloud-200/80">
                {slide.body}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button to={primaryCta.to} size="lg" icon="CalendarCheck">
              {primaryCta.label}
            </Button>
            <Button to="/platform" variant="ghost" size="lg" icon="ArrowRight">
              Explore the Platform
            </Button>
          </div>

          {/* trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-cloud-200/55">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-prestige-blue-soft" />
              Workforce growth intelligence
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-prestige-green-bright" />
              Manager accountability
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-prestige-blue-soft" />
              Measurable outcomes
            </span>
          </div>
        </div>

        {/* Visual column */}
        <div className="relative hidden lg:block">
          <HeroVisual accent={slide.accent} slideIndex={index} />
        </div>
      </div>

      {/* Slide controls (mobile + bottom) */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        <button
          onClick={() => go(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition hover:bg-white/10"
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {heroSlides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-7 bg-brand-gradient' : 'w-1.5 bg-white/25 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05] text-white transition hover:bg-white/10"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  )
}
