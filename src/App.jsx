import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Platform from './pages/Platform.jsx'
import TrainingSolutions from './pages/TrainingSolutions.jsx'
import Industries from './pages/Industries.jsx'
import Resources from './pages/Resources.jsx'
import Contact from './pages/Contact.jsx'
import BookConsultation from './pages/BookConsultation.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()
  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="relative">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/training-solutions" element={<TrainingSolutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-consultation" element={<BookConsultation />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
