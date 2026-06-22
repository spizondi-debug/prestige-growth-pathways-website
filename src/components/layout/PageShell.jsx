import { motion } from 'framer-motion'

/**
 * PageShell — wraps each route with a consistent fade/slide transition
 * and top padding to clear the fixed navbar.
 */
export default function PageShell({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
