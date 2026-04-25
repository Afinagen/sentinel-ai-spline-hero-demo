import { lazy, Suspense } from 'react'
import type { ThemeVariant } from '../Index'

const Spline = lazy(() => import('@splinetool/react-spline'))

const splineScene = 'https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode'

type HeroSectionProps = {
  variant: ThemeVariant
}

export function HeroSection({ variant }: HeroSectionProps) {
  const isGold = variant === 'gold'

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-hero-bg">
      <div className="absolute inset-0">
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg" />}>
          <Spline
            className={
              isGold
                ? 'h-full w-full brightness-[1.18] contrast-[0.90] sepia-[0.55] saturate-[1.25] hue-rotate-[285deg]'
                : 'h-full w-full'
            }
            scene={splineScene}
          />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/30" />

      <div className="pointer-events-none relative z-10 w-full max-w-[90%] px-6 pb-10 pt-32 sm:max-w-md md:px-10 md:pb-10 lg:max-w-2xl">
        <h1
          className={
            isGold
              ? 'mb-2 animate-fade-up bg-[linear-gradient(135deg,#fff7cf_0%,hsl(var(--primary))_46%,#ff9f32_100%)] bg-clip-text text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-[1.05] tracking-[-0.05em] text-transparent opacity-0 drop-shadow-[0_0_28px_hsl(var(--primary)/0.24)] md:mb-4'
              : 'mb-2 animate-fade-up text-[clamp(3rem,8vw,6rem)] font-bold uppercase leading-[1.05] tracking-[-0.05em] text-foreground opacity-0 md:mb-4'
          }
          style={{ animationDelay: '0.2s' }}
        >
          {isGold ? (
            'SENTINEL AI'
          ) : (
            <>
              SENTINEL <span className="text-primary">AI</span>
            </>
          )}
        </h1>

        <p
          className={
            isGold
              ? 'mb-3 animate-fade-up text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-primary/85 opacity-0 drop-shadow-[0_0_18px_hsl(var(--primary)/0.16)] md:mb-6'
              : 'mb-3 animate-fade-up text-[clamp(1.125rem,2.5vw,1.875rem)] font-light text-foreground/80 opacity-0 md:mb-6'
          }
          style={{ animationDelay: '0.4s' }}
        >
          We implement security correctly.
        </p>

        <p
          className="mb-4 animate-fade-up text-[clamp(0.875rem,1.5vw,1.25rem)] font-light text-muted-foreground opacity-0 md:mb-8"
          style={{ animationDelay: '0.55s' }}
        >
          Enterprise security systems built in days. AI-powered surveillance deployed
          with zero-trust architecture. Smart access control set up for your entire
          facility. All of it done right, not just fast.
        </p>

        <div
          className="flex animate-fade-up flex-wrap gap-3 font-bold opacity-0"
          style={{ animationDelay: '0.7s' }}
        >
          <button
            className={`pointer-events-auto cursor-pointer rounded-sm bg-primary px-6 py-3 text-sm text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97] md:px-8 md:py-4 ${
              isGold
                ? 'shadow-[0_0_34px_hsl(var(--primary)/0.26)] hover:shadow-[0_0_46px_hsl(var(--primary)/0.34)]'
                : ''
            }`}
            type="button"
          >
            Book a Call
          </button>
          <button
            className={`pointer-events-auto cursor-pointer rounded-sm px-6 py-3 text-sm transition-all active:scale-[0.97] md:px-8 md:py-4 ${
              isGold
                ? 'border border-primary/35 bg-secondary text-primary shadow-[0_0_26px_hsl(var(--primary)/0.14)] hover:bg-secondary/80 hover:shadow-[0_0_34px_hsl(var(--primary)/0.22)]'
                : 'bg-white text-background hover:brightness-90'
            }`}
            type="button"
          >
            Our Work
          </button>
        </div>

        <p
          className="mt-4 animate-fade-up text-xs font-light text-muted-foreground/60 opacity-0 md:mt-6"
          style={{ animationDelay: '0.85s' }}
        >
          Trusted security partner. Columbus, OH. 12 systems deployed.
        </p>
      </div>
    </section>
  )
}
