import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'

function Index() {
  return (
    <div className="min-h-screen bg-hero-bg">
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default Index
