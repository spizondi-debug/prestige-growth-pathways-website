import { useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { BarChart3, Route, Users } from 'lucide-react'

export default function HeroVisual() {
  const base = import.meta.env.BASE_URL
  const reduceMotion = useReducedMotion()
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative mx-auto w-full max-w-[36rem]">
      <div className="absolute -inset-4 rounded-[2.25rem] bg-brand-gradient opacity-10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-card-hover sm:p-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-navy-900">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            autoPlay={!reduceMotion}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            muted
            loop
            playsInline
            preload="metadata"
            poster={`${base}images/platform-video-thumbnail.webp`}
            aria-label="Prestige Growth Pathways platform overview"
          >
            <source src={`${base}videos/platform-overview.mp4`} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 bg-prestige-blue/25" />
          <button type="button" className="absolute right-3 top-3 rounded-lg bg-navy-900/90 px-3 py-2 text-xs text-white" onClick={() => {
            if (playing) videoRef.current?.pause()
            else videoRef.current?.play().catch(() => {})
          }}>{playing ? 'Pause video' : 'Play video'}</button>
          <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/20 bg-navy-900/80 p-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-prestige-green-bright">
              Connected workforce growth
            </p>
            <p className="mt-1 text-sm font-medium text-white sm:text-base">
              See capability, development and workplace progress in one view.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-3 sm:gap-3 sm:pt-4">
          {[
            { Icon: BarChart3, label: 'Assessment' },
            { Icon: Route, label: 'Pathways' },
            { Icon: Users, label: 'Coaching' },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex items-center justify-center gap-2 rounded-xl bg-mist px-2 py-3 text-xs font-semibold text-heading sm:text-sm">
              <Icon className="h-4 w-4 shrink-0 text-prestige-blue" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
