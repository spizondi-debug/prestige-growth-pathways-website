import { Link } from 'react-router-dom'

/**
 * Logo — Prestige Growth Pathways mark (abstract ascending "growth path"
 * glyph in brand gradient) + wordmark. Swap the SVG with a real logo later.
 */
export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3" aria-label="Prestige Growth Pathways home">
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden="true">
          <defs>
            <linearGradient id="pgp-mark" x1="0" y1="48" x2="48" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1E4FD8" />
              <stop offset="1" stopColor="#37E2A5" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#pgp-mark)" opacity="0.14" />
          <rect x="2.5" y="2.5" width="43" height="43" rx="12.5" fill="none" stroke="url(#pgp-mark)" strokeOpacity="0.5" />
          {/* ascending path */}
          <path
            d="M11 33 L21 23 L27 28 L37 15"
            fill="none"
            stroke="url(#pgp-mark)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:stroke-[3.6]"
          />
          <circle cx="37" cy="15" r="3.4" fill="#37E2A5" />
          <circle cx="11" cy="33" r="2.6" fill="#1E4FD8" />
        </svg>
        <span className="absolute inset-0 rounded-[13px] bg-brand-gradient opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-30" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.02rem] font-700 font-bold tracking-tight text-white">
            Prestige <span className="text-gradient">Growth</span>
          </span>
          <span className="mt-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.34em] text-cloud-200/60">
            Pathways
          </span>
        </span>
      )}
    </Link>
  )
}
