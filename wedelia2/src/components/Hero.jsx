import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const sectionRef = useRef(null)
  const headlineRef = useRef(null)
  const imageRef = useRef(null)
  const metaRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Headline reveal with delay for intro
      const headlineWords = headlineRef.current?.querySelectorAll('.hero-word')
      if (headlineWords) {
        gsap.fromTo(headlineWords,
          { y: 100, opacity: 0, rotateX: 15 },
          {
            y: 0, opacity: 1, rotateX: 0,
            duration: 1.2, stagger: 0.15, ease: 'expo.out', delay: 1.2
          }
        )
      }

      // Image parallax
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { scale: 1.15 },
          {
            scale: 1,
            duration: 1.5,
            ease: 'expo.out',
            delay: 1.0
          }
        )
        gsap.to(imageRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      // Meta info reveal
      if (metaRef.current) {
        const metaItems = metaRef.current.querySelectorAll('.meta-item')
        gsap.fromTo(metaItems,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out', delay: 2.0 }
        )
      }

      // Parallax headline on scroll
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          yPercent: -30,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src="/images/western-boho-corset-skirt.jpeg"
          alt="Western boho fashion editorial"
          className="w-full h-full object-cover"
          loading="eager"
          width="1200"
          height="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Headline */}
          <div className="md:col-span-8" ref={headlineRef}>
            <div className="overflow-hidden mb-3">
              <span className="hero-word block text-editorial-xl italic font-display">
                Wear
              </span>
            </div>
            <div className="overflow-hidden mb-3">
              <span className="hero-word block text-editorial-xl font-display">
                The
              </span>
            </div>
            <div className="overflow-hidden">
              <span className="hero-word block text-editorial-xl font-display" style={{ color: 'var(--color-accent)' }}>
                Vibe.
              </span>
            </div>
          </div>

          {/* Metadata column */}
          <div className="md:col-span-4 flex flex-col gap-6" ref={metaRef}>
            <div className="meta-item flex flex-col gap-1">
              <span className="text-label-accent">Aesthetics</span>
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                Western / Y2K / Goth / Boho
              </span>
            </div>
            <div className="meta-item flex flex-col gap-1">
              <span className="text-label-accent">Format</span>
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                72 Hour Fit Pass
              </span>
            </div>
            <div className="meta-item flex flex-col gap-1">
              <span className="text-label-accent">Location</span>
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                Delhi · India
              </span>
            </div>
            <div className="meta-item mt-4 flex flex-col items-start gap-2">
              <span className="text-label text-[var(--color-text-muted)]">Scroll</span>
              <div className="scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
