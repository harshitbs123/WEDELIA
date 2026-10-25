import { useState, useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  { fits: 3, earnings: 750, label: '3 Fits' },
  { fits: 5, earnings: 1350, label: '5 Fits' },
  { fits: 10, earnings: 2800, label: '10 Fits' },
]

export default function ClosetCalculator() {
  const [selected, setSelected] = useState(1) // default 5 fits
  const earningsRef = useRef(null)
  const sectionRef = useRef(null)
  const prevEarnings = useRef(tiers[1].earnings)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const reveals = section.querySelectorAll('.calc-reveal')
      gsap.fromTo(reveals,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1, stagger: 0.1, ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (!earningsRef.current) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    const target = tiers[selected].earnings
    if (prefersReducedMotion) {
      earningsRef.current.textContent = '₹' + target.toLocaleString('en-IN')
      prevEarnings.current = target
      return
    }

    const obj = { value: prevEarnings.current }
    gsap.to(obj, {
      value: target,
      duration: 0.8,
      ease: 'expo.out',
      onUpdate: () => {
        earningsRef.current.textContent = '₹' + Math.round(obj.value).toLocaleString('en-IN')
      },
    })
    prevEarnings.current = target
  }, [selected])

  return (
    <section ref={sectionRef} id="closet" className="py-24 md:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Text */}
          <div>
            <span className="calc-reveal text-label-accent block mb-4">Closet Economy</span>
            <h2 className="calc-reveal text-editorial-lg">
              Your Closet<br />
              Can Pay For<br />
              <em className="italic" style={{ color: 'var(--color-accent)' }}>Your Weekend.</em>
            </h2>
            <p className="calc-reveal font-body text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md mt-6">
              Turn dormant fits into college pocket money. List outfits you barely wear,
              set your own price, and earn every time someone rents your wardrobe.
            </p>
          </div>

          {/* Calculator */}
          <div className="calc-reveal">
            <div className="border border-[var(--color-border)] p-8 md:p-12">
              <span className="text-label text-[var(--color-text-muted)] block mb-6">
                Monthly Estimate
              </span>

              {/* Tier selector */}
              <div className="flex gap-3 mb-10">
                {tiers.map((tier, i) => (
                  <button
                    key={tier.fits}
                    onClick={() => setSelected(i)}
                    className={`flex-1 py-3 font-mono text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                      selected === i
                        ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-dim)]'
                        : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-hover)]'
                    }`}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>

              {/* Earnings display */}
              <div className="text-center py-8">
                <span
                  ref={earningsRef}
                  className="font-display text-6xl md:text-8xl font-light block"
                  style={{ color: 'var(--color-accent)' }}
                >
                  ₹{tiers[selected].earnings.toLocaleString('en-IN')}
                </span>
                <span className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] block mt-3">
                  Estimated Monthly Earnings
                </span>
              </div>

              <div className="editorial-hr my-6" />

              <button className="magnetic-btn w-full justify-center mt-2">
                <span>List Your Fits</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
