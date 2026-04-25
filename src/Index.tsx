import { useCallback, useState } from 'react'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'

export type ThemeVariant = 'green' | 'gold'

function getThemeVariant(): ThemeVariant {
  if (typeof window === 'undefined') return 'green'

  return new URLSearchParams(window.location.search).get('variant') === 'gold'
    ? 'gold'
    : 'green'
}

function Index() {
  const [variant, setVariant] = useState<ThemeVariant>(() => getThemeVariant())

  const handleVariantChange = useCallback((nextVariant: ThemeVariant) => {
    setVariant(nextVariant)

    if (typeof window === 'undefined') return

    const url = new URL(window.location.href)

    if (nextVariant === 'gold') {
      url.searchParams.set('variant', 'gold')
    } else {
      url.searchParams.delete('variant')
    }

    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }, [])

  return (
    <div className={`min-h-screen bg-hero-bg ${variant === 'gold' ? 'theme-gold' : ''}`}>
      <Navbar onVariantChange={handleVariantChange} variant={variant} />
      <HeroSection variant={variant} />
    </div>
  )
}

export default Index
