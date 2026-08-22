import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell.jsx'
import PageHero from '../components/layout/PageHero.jsx'
import Seo from '../components/shared/Seo.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Figure from '../components/shared/Figure.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'
import { ArrowRight } from 'lucide-react'
import { resources, resourceCategories } from '../data/pages.js'
import { images } from '../data/images.js'

// Editorial photography for selected topics (real photos when added).
const topicImage = {
  r1: images.insight_qcto,
  r2: images.insight_learnerships,
  r5: images.insight_manufacturing,
  r6: images.insight_agriculture,
}

export default function Resources() {
  const [active, setActive] = useState('All')
  const list = resources.filter((r) => (active === 'All' ? true : r.category === active))

  return (
    <PageShell>
      <Seo
        title="Insights"
        description="Informational topics on skills development, learnerships, QCTO qualifications and workplace training in South Africa."
        path="/resources"
      />
      <PageHero
        label="Insights"
        title="Practical topics on skills and workforce development"
        intro="Short, informational overviews on training, learnerships and skills development in South Africa. To discuss any topic for your organisation, get in touch."
      />

      <section className="bg-white py-14">
        <div className="container-px">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {resourceCategories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-btn border px-4 py-2 text-sm font-medium transition-colors ${
                  active === c
                    ? 'border-prestige-blue bg-prestige-blue text-white'
                    : 'border-line bg-white text-body hover:text-heading'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {list.map((r) => (
                <motion.article
                  key={r.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="card flex h-full flex-col overflow-hidden"
                >
                  {topicImage[r.id] && <Figure img={topicImage[r.id]} ratio="16 / 10" rounded="rounded-none" />}
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-xs font-semibold uppercase tracking-wide text-prestige-blue">
                      {r.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-heading">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{r.excerpt}</p>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-prestige-blue hover:text-prestige-blue-deep"
                    >
                      Ask us about this <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <ClosingCTA />
    </PageShell>
  )
}
