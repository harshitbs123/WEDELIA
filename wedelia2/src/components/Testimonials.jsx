import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { testimonials } from '../data/products'

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.testimonial-card')
      gsap.fromTo(cards,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-label-accent block mb-4">Voices</span>
          <h2 className="text-editorial-lg">
            Student<br />
            <em className="italic" style={{ color: 'var(--color-accent)' }}>Stories.</em>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card border border-[var(--color-border)] p-8 md:p-10 flex flex-col gap-6 group hover:border-[var(--color-border-hover)] transition-colors duration-500"
            >
              <blockquote className="font-display text-xl md:text-2xl font-light leading-relaxed italic">
                "{t.quote}"
              </blockquote>
              <div className="editorial-hr" />
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-body text-sm block">{t.name}</span>
                  <span className="font-mono text-[0.5625rem] tracking-[0.15em] text-[var(--color-text-muted)] uppercase">
                    {t.college}
                  </span>
                </div>
                <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase px-3 py-1 border border-[var(--color-border)] text-[var(--color-text-muted)]">
                  {t.aesthetic}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
