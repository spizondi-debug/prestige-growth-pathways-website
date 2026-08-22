import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Logo from '../shared/Logo.jsx'
import Button from '../ui/Button.jsx'
import { nav, primaryCta, contact } from '../../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled || open
          ? 'border-line bg-white/90 shadow-soft backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="container-px">
        <nav className="flex items-center justify-between gap-4 py-3.5">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-prestige-blue' : 'text-body hover:text-heading'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-sky"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button to={primaryCta.to} size="sm" icon="CalendarCheck">
              {primaryCta.label}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-heading lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-px py-4">
              <ul className="flex flex-col">
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                          isActive ? 'bg-sky text-prestige-blue' : 'text-body hover:bg-mist hover:text-heading'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <Button to={primaryCta.to} className="w-full" icon="CalendarCheck">
                  {primaryCta.label}
                </Button>
              </div>

              {/* Small contact area at the bottom of the mobile menu */}
              <div className="mt-4 space-y-2 border-t border-line pt-4">
                <a href={contact.phoneHref} className="flex items-center gap-3 text-sm font-semibold text-heading">
                  <Phone className="h-4 w-4 text-prestige-green-deep" />
                  {contact.phoneDisplay}
                </a>
                <p className="flex items-center gap-3 text-sm text-body">
                  <MapPin className="h-4 w-4 text-prestige-blue" />
                  {contact.addressLine1}, {contact.suburb}, {contact.city}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
