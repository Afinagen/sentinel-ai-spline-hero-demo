import { Button } from './ui/button'

const navLinks = ['Services', 'About Us', 'Projects', 'Team', 'Contacts']

const getSectionHref = (label: string) => `#${label.toLowerCase().replaceAll(' ', '-')}`

export function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-8 py-5 lg:px-16">
      <a className="text-xl font-semibold tracking-tight text-foreground" href="#top">
        SENTINEL
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((label) => (
          <a
            className="text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            href={getSectionHref(label)}
            key={label}
          >
            {label}
          </a>
        ))}
      </div>

      <Button
        className="hidden rounded-lg px-6 text-xs uppercase tracking-widest md:inline-flex"
        size="lg"
        type="button"
        variant="navCta"
      >
        Get Quote
      </Button>
    </nav>
  )
}
