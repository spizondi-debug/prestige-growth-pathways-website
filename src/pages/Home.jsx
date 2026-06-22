import PageShell from '../components/layout/PageShell.jsx'
import HeroSlider from '../components/home/HeroSlider.jsx'
import PlatformGrid from '../components/home/PlatformGrid.jsx'
import MessagingBand from '../components/home/MessagingBand.jsx'
import Credibility from '../components/home/Credibility.jsx'
import TrainingHighlights from '../components/home/TrainingHighlights.jsx'
import HowItWorks from '../components/home/HowItWorks.jsx'
import ClosingCTA from '../components/home/ClosingCTA.jsx'

export default function Home() {
  return (
    <PageShell>
      <HeroSlider />
      <PlatformGrid />
      <MessagingBand />
      <Credibility />
      <TrainingHighlights />
      <HowItWorks />
      <ClosingCTA />
    </PageShell>
  )
}
