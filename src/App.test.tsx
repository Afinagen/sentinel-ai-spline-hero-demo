import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import App from './App'

vi.mock('@splinetool/react-spline', () => ({
  default: ({ className, scene }: { className?: string; scene: string }) => (
    <div className={className} data-scene={scene} data-testid="spline-scene" />
  ),
}))

describe('SENTINEL AI landing page', () => {
  afterEach(() => {
    cleanup()
    window.history.pushState({}, '', '/')
  })

  it('renders the requested nav, hero copy, CTAs, and Spline scene', async () => {
    render(<App />)

    expect(screen.getByRole('link', { name: 'SENTINEL' })).toBeInTheDocument()
    ;['Services', 'About Us', 'Projects', 'Team', 'Contacts'].forEach((label) => {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute(
        'href',
        `#${label.toLowerCase().replaceAll(' ', '-')}`,
      )
    })
    expect(screen.getByRole('button', { name: 'Get Quote' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'SENTINEL AI' })).toBeInTheDocument()
    expect(screen.getByText('We implement security correctly.')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Enterprise security systems built in days. AI-powered surveillance deployed with zero-trust architecture. Smart access control set up for your entire facility. All of it done right, not just fast.',
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Book a Call' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Our Work' })).toBeInTheDocument()
    expect(
      screen.getByText('Trusted security partner. Columbus, OH. 12 systems deployed.'),
    ).toBeInTheDocument()

    expect(await screen.findByTestId('spline-scene')).toHaveAttribute(
      'data-scene',
      'https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode',
    )
  })

  it('renders the gold reference when requested through the URL', async () => {
    window.history.pushState({}, '', '/?variant=gold')

    const { container } = render(<App />)

    expect(container.firstElementChild).toHaveClass('theme-gold')
    expect(await screen.findByTestId('spline-scene')).toHaveClass('sepia-[0.55]')
    expect(screen.getByRole('heading', { name: 'SENTINEL AI' })).toHaveClass(
      'text-transparent',
    )
  })

  it('switches between green and gold references from the page control', async () => {
    const { container } = render(<App />)

    expect(container.firstElementChild).not.toHaveClass('theme-gold')
    expect(await screen.findByTestId('spline-scene')).not.toHaveClass('sepia-[0.55]')

    fireEvent.click(screen.getByRole('button', { name: 'Gold' }))

    expect(container.firstElementChild).toHaveClass('theme-gold')
    expect(window.location.search).toBe('?variant=gold')
    expect(await screen.findByTestId('spline-scene')).toHaveClass('sepia-[0.55]')

    fireEvent.click(screen.getByRole('button', { name: 'Green' }))

    expect(container.firstElementChild).not.toHaveClass('theme-gold')
    expect(window.location.search).toBe('')
    expect(await screen.findByTestId('spline-scene')).not.toHaveClass('sepia-[0.55]')
  })
})
