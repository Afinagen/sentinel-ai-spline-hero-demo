import { Button } from './ui/button'
import type { ThemeVariant } from '../Index'

const navLinks = ['Services', 'About Us', 'Projects', 'Team', 'Contacts']

const getSectionHref = (label: string) => `#${label.toLowerCase().replaceAll(' ', '-')}`

type NavbarProps = {
  onVariantChange: (variant: ThemeVariant) => void
  variant: ThemeVariant
}

const variants: Array<{ label: string; value: ThemeVariant }> = [
  { label: 'Green', value: 'green' },
  { label: 'Gold', value: 'gold' },
]

export function Navbar({ onVariantChange, variant }: NavbarProps) {
  const isGold = variant === 'gold'

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-5 lg:px-16">
      <a
        className={
          isGold
            ? 'text-xl font-semibold tracking-tight text-primary drop-shadow-[0_0_18px_hsl(var(--primary)/0.28)]'
            : 'text-xl font-semibold tracking-tight text-foreground'
        }
        href="#top"
      >
        SENTINEL
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((label) => (
          <a
            className={`text-sm uppercase tracking-widest text-muted-foreground transition-colors ${
              isGold ? 'hover:text-primary' : 'hover:text-foreground'
            }`}
            href={getSectionHref(label)}
            key={label}
          >
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div
          aria-label="Theme variant"
          className="flex rounded-lg border border-border bg-nav-button/90 p-1 shadow-[0_0_20px_hsl(var(--primary)/0.08)]"
          role="group"
        >
          {variants.map((item) => {
            const isActive = item.value === variant

            return (
              <button
                aria-pressed={isActive}
                className={`h-9 min-w-16 rounded-md px-3 text-[0.68rem] font-semibold uppercase tracking-widest transition-all active:scale-[0.97] ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.18)]'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                key={item.value}
                onClick={() => onVariantChange(item.value)}
                type="button"
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <Button
          className={`hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex ${
            isGold
              ? 'border border-primary/25 text-primary shadow-[0_0_24px_hsl(var(--primary)/0.14)] hover:shadow-[0_0_34px_hsl(var(--primary)/0.22)]'
              : ''
          }`}
          size="lg"
          type="button"
          variant="navCta"
        >
          Get Quote
        </Button>
      </div>
    </nav>
  )
}
