import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const lines = section.querySelectorAll('.cta-line')
      gsap.fromTo(lines,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1.2, stagger: 0.2, ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-32 md:py-48 border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="overflow-hidden">
            <h2 className="cta-line text-editorial-xl">
              Your Closet
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="cta-line text-editorial-xl italic" style={{ color: 'var(--color-accent)' }}>
              Is An Archive.
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="cta-line font-display text-2xl md:text-3xl font-light text-[var(--color-text-secondary)] mt-4">
              Wear it again.
            </p>
          </div>

          <div className="cta-line flex flex-col sm:flex-row gap-4 mt-8">
            <a href="#archive" className="magnetic-btn">
              <span>Explore The Archive</span>
              <span>→</span>
            </a>
            <a href="#closet" className="magnetic-btn">
              <span>List Your Fit</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
