import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Logo from '../shared/Logo.jsx'
import Button from '../ui/Button.jsx'
import { nav, primaryCta, contact } from '../../data/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
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
      className={`fixed inset-x-0 top-0 z-50 border-b border-line bg-white transition-shadow duration-200 ${
        scrolled ? 'shadow-soft' : ''
      }`}
    >
      <div className="container-px">
        <nav className="flex items-center justify-between gap-4 py-4">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-7 lg:flex">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `border-b-2 pb-1 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'border-prestige-blue text-heading'
                        : 'border-transparent text-body hover:text-heading'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button to={primaryCta.to} size="sm">
              {primaryCta.label}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-line text-heading lg:hidden"
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
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-px py-4">
              <ul className="flex flex-col divide-y divide-line">
                {nav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `block py-3 text-base font-medium transition-colors ${
                          isActive ? 'text-prestige-blue' : 'text-heading hover:text-prestige-blue'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button to={primaryCta.to} className="w-full">
                  {primaryCta.label}
                </Button>
              </div>

              {/* Contact area */}
              <div className="mt-5 space-y-2 border-t border-line pt-4">
                <a href={contact.phoneHref} className="flex items-center gap-3 text-sm font-medium text-heading">
                  <Phone className="h-4 w-4 text-prestige-blue" />
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
