import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '01',
    title: 'Raid Campus Closets',
    description: 'Browse 850+ verified outfits from students across Delhi colleges. Filter by aesthetic, size, occasion.',
    label: 'Discover',
  },
  {
    number: '02',
    title: 'Hostel & Doorstep Drop',
    description: 'Every outfit is ozone-sanitized and pressed. Delivered to your hostel room or PG door.',
    label: 'Receive',
  },
  {
    number: '03',
    title: '72-Hour Full Custody',
    description: 'The outfit is yours for 72 hours. Wear it to the fest, the party, the photoshoot. Live in it.',
    label: 'Wear',
  },
  {
    number: '04',
    title: 'Unwashed Return',
    description: 'Drop it back as-is. No laundry stress. We handle the cleaning. The outfit re-enters the archive.',
    label: 'Return',
  },
]

export default function RentalRitual() {
  const sectionRef = useRef(null)
  const stepsRef = useRef([])
  const numberRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      stepsRef.current.forEach((step, i) => {
        if (!step) return
        const elements = step.querySelectorAll('.ritual-reveal')
        gsap.fromTo(elements,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.9, stagger: 0.08, ease: 'expo.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 82%',
              toggleActions: 'play none none none',
            },
          }
        )
      })

      // Sticky number that updates based on scroll
      if (numberRef.current) {
        stepsRef.current.forEach((step, i) => {
          if (!step) return
          ScrollTrigger.create({
            trigger: step,
            start: 'top center',
            end: 'bottom center',
            onEnter: () => {
              if (numberRef.current) {
                gsap.to(numberRef.current, {
                  opacity: 0, y: -20, duration: 0.2, ease: 'power2.in',
                  onComplete: () => {
                    numberRef.current.textContent = steps[i].number
                    gsap.to(numberRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'expo.out' })
                  }
                })
              }
            },
            onEnterBack: () => {
              if (numberRef.current) {
                gsap.to(numberRef.current, {
                  opacity: 0, y: 20, duration: 0.2, ease: 'power2.in',
                  onComplete: () => {
                    numberRef.current.textContent = steps[i].number
                    gsap.to(numberRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'expo.out' })
                  }
                })
              }
            },
          })
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="ritual" className="py-24 md:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <span className="text-label-accent block mb-4">The Ritual</span>
          <h2 className="text-editorial-lg">
            How It<br />
            <em className="italic" style={{ color: 'var(--color-accent)' }}>Works.</em>
          </h2>
        </div>

        {/* Steps Layout — Sticky number left, steps right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Sticky number */}
          <div className="hidden md:block md:col-span-4 lg:col-span-3">
            <div className="sticky top-[40vh]">
              <span
                ref={numberRef}
                className="font-display text-[10rem] lg:text-[14rem] font-light leading-none"
                style={{ color: 'var(--color-accent)', opacity: 0.2 }}
              >
                01
              </span>
            </div>
          </div>

          {/* Steps list */}
          <div className="md:col-span-8 lg:col-span-9 flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.number}
                ref={(el) => (stepsRef.current[i] = el)}
                className="py-16 md:py-24 border-b border-[var(--color-border)] last:border-b-0"
              >
                <div className="flex items-start gap-6 md:gap-10">
                  <span className="ritual-reveal font-mono text-sm text-[var(--color-accent)] shrink-0 md:hidden">
                    {step.number}
                  </span>
                  <div className="flex flex-col gap-3">
                    <span className="ritual-reveal text-label text-[var(--color-text-muted)]">
                      {step.label}
                    </span>
                    <h3 className="ritual-reveal font-display text-2xl md:text-4xl font-light">
                      {step.title}
                    </h3>
                    <p className="ritual-reveal font-body text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-lg mt-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
