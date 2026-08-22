import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * StatCounter — animates a numeric value into view. Handles values like
 * "94%", "3.2x", "40+", "12k+".
 * tone: 'light' (default) | 'dark' (for navy stat bands)
 */
export default function StatCounter({ value, label, tone = 'light' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState('0')
  const onDark = tone === 'dark'

  const match = String(value).match(/^([^\d]*)([\d.]+)(.*)$/)
  const prefix = match ? match[1] : ''
  const target = match ? parseFloat(match[2]) : 0
  const suffix = match ? match[3] : value
  const decimals = match && match[2].includes('.') ? 1 : 0

  useEffect(() => {
    if (!inView) return
    let raf
    const duration = 1400
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = (target * eased).toFixed(decimals)
      setDisplay(`${prefix}${current}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, prefix, suffix, decimals])

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="text-gradient">{display}</span>
      </div>
      <p className={`mt-2 text-sm leading-snug ${onDark ? 'text-cloud-200/70' : 'text-body'}`}>{label}</p>
    </div>
  )
}
