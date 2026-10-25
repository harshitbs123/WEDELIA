import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ProductEditorial() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Image reveal with clip-path
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.4,
            ease: 'expo.inOut',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // Text elements
      if (textRef.current) {
        const elements = textRef.current.querySelectorAll('.editorial-text')
        gsap.fromTo(elements,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 1, stagger: 0.1, ease: 'expo.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 60%',
              toggleActions: 'play none none none',
            },
          }
        )
      }

      // Parallax on the image
      const imgEl = imageRef.current?.querySelector('img')
      if (imgEl) {
        gsap.to(imgEl, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-center">
          {/* Large editorial image */}
          <div className="md:col-span-7 order-2 md:order-1">
            <div ref={imageRef} className="overflow-hidden">
              <img
                src="/images/western-boho-corset-skirt.jpeg"
                alt="Western Corset & Ruffle Skirt editorial"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
                width="900"
                height="1200"
              />
            </div>
          </div>

          {/* Text content */}
          <div ref={textRef} className="md:col-span-5 order-1 md:order-2 flex flex-col gap-6">
            <span className="editorial-text text-label-accent">Featured Piece</span>
            <span className="editorial-text font-mono text-[0.5625rem] tracking-[0.15em] text-[var(--color-text-muted)] uppercase">
              Western Boho
            </span>
            <h2 className="editorial-text text-editorial-md">
              Western Corset<br />
              <em className="italic">&amp; Ruffle Skirt</em>
            </h2>

            <div className="editorial-text editorial-hr my-2" />

            <div className="editorial-text flex items-baseline gap-3">
              <span className="font-display text-4xl md:text-5xl font-light" style={{ color: 'var(--color-accent)' }}>
                ₹299
              </span>
              <span className="font-mono text-[0.5625rem] tracking-[0.15em] text-[var(--color-text-muted)] uppercase">
                / 72hr Fit Pass
              </span>
            </div>

            <p className="editorial-text font-body text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-sm">
              Layered ivory ruffle skirt paired with a lace-up corset top and statement belt.
              Western romanticism meets festival energy. Sanitized in medical ozone chamber.
            </p>

            <div className="editorial-text flex flex-wrap gap-3 mt-2">
              <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-muted)]">
                Size S-M
              </span>
              <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-muted)]">
                Fest · Photoshoot
              </span>
              <span className="font-mono text-[0.5rem] tracking-[0.15em] uppercase px-3 py-1.5 border border-[var(--color-border)] text-[var(--color-text-muted)]">
                Ozone Cleansed
              </span>
            </div>

            <button className="editorial-text magnetic-btn mt-4 self-start">
              <span>Rent This Fit</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
