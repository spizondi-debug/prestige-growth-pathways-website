import { Link } from 'react-router-dom'
import PageShell from '../components/layout/PageShell.jsx'

export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-mesh-light pb-24 pt-40 text-center sm:pt-48">
        <div className="container-px">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-prestige-green-deep">404</p>
          <h1 className="mt-3 text-display-lg font-extrabold text-heading">This page could not be found</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-body">
            The address may have changed. Return to the homepage or contact Prestige for assistance.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link to="/" className="rounded-full bg-brand-gradient px-6 py-3 font-semibold text-white shadow-glow-blue">Go home</Link>
            <Link to="/contact" className="rounded-full border border-line bg-white px-6 py-3 font-semibold text-heading">Contact us</Link>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

