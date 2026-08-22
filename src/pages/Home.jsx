import PageShell from '../components/layout/PageShell.jsx'
import Seo from '../components/shared/Seo.jsx'
import HeroSlider from '../components/home/HeroSlider.jsx'
import MessagingBand from '../components/home/MessagingBand.jsx'
import TrainingHighlights from '../components/home/TrainingHighlights.jsx'
import PlatformGrid from '../components/home/PlatformGrid.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'

export default function Home() {
  return (
    <PageShell>
      <Seo
        title={null}
        description="Prestige Tutelage is a South African corporate training and workforce-development partner. Prestige Growth Pathways supports assessment, development and workplace application."
        path="/"
      />
      <HeroSlider />
      <MessagingBand />
      <TrainingHighlights />
      <PlatformGrid />
      <HowItWorks />
      <ClosingCTA />
    </PageShell>
  )
}
