import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { ArrowUpRight, Clock } from 'lucide-react'
import { resources, resourceCategories } from '../data/pages.js'

export default function Resources() {
  const [active, setActive] = useState('All')
  const featured = resources.find((r) => r.featured)
  const list = resources.filter((r) => (active === 'All' ? true : r.category === active))

  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title="Ideas for building a workforce that grows on purpose"
        highlight="grows on purpose"
        intro="Guides, reports, webinars and case studies on workforce growth intelligence, manager accountability and measurable development."
      />

      {/* Featured */}
      {featured && (
        <section className="bg-paper py-8">
          <div className="container-px">
            <Reveal>
              <article className="grid overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-sky via-white to-mint p-8 shadow-card sm:p-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
                <div>
                  <span className="eyebrow mb-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-prestige-green" />
                    Featured · {featured.category}
                  </span>
                  <h2 className="text-display-md font-bold text-balance text-heading">{featured.title}</h2>
                  <p className="mt-4 max-w-xl text-lg text-body">{featured.excerpt}</p>
                  <div className="mt-7 flex items-center gap-4">
                    <Button href="#" icon="ArrowRight">Read the guide</Button>
                    <span className="flex items-center gap-1.5 text-sm text-muted">
                      <Clock className="h-4 w-4" /> {featured.readTime}
                    </span>
                  </div>
                </div>
                <div className="mt-8 hidden lg:mt-0 lg:block">
                  <div className="photo-frame aspect-[4/3]">
                    <div className="flex h-full items-center justify-center bg-mesh-light">
                      <span className="text-sm uppercase tracking-[0.2em] text-muted">Cover art placeholder</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      )}

      {/* Filters + grid */}
      <section className="bg-mist py-10">
        <div className="container-px">
          <div className="flex flex-wrap items-center gap-2.5">
            {resourceCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                  active === c
                    ? 'border-transparent bg-brand-gradient text-white shadow-glow-blue'
                    : 'border-line bg-white text-body hover:text-heading'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((r) => (
                <motion.article
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="card card-interactive group flex h-full flex-col p-6"
                >
                  <div className="photo-frame mb-4 aspect-[16/10]">
                    <div className="h-full w-full bg-mesh-light" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-prestige-green-deep">
                    {r.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-heading">{r.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{r.excerpt}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <Clock className="h-3.5 w-3.5" /> {r.readTime}
                    </span>
                    <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-heading transition-colors group-hover:text-prestige-blue">
                      Read <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-paper py-16">
        <div className="container-px">
          <div className="frame-gradient noise flex flex-col items-center gap-6 p-8 text-center sm:p-12">
            <div>
              <h2 className="text-display-md font-bold text-heading">
                Get growth intelligence in your inbox
              </h2>
              <p className="mt-3 text-body">
                Occasional, high-signal ideas on building a measurable workforce. No spam.
              </p>
            </div>
            <form className="flex w-full max-w-md flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-line bg-white px-5 py-3.5 text-sm text-heading placeholder:text-muted focus:border-prestige-blue focus:outline-none"
              />
              <Button type="submit" icon="ArrowRight">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
