import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Intro() {
  const [visible, setVisible] = useState(true)
  const introRef = useRef(null)
  const textRefs = useRef([])

  useEffect(() => {
    if (!introRef.current) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setVisible(false)
      return
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(introRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete: () => setVisible(false),
        })
      },
    })

    tl.fromTo(
      textRefs.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'expo.out' }
    )
    tl.to({}, { duration: 0.3 }) // brief hold

    return () => tl.kill()
  }, [])

  if (!visible) return null

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-5">
        <h1
          ref={(el) => (textRefs.current[0] = el)}
          className="font-display text-3xl md:text-5xl font-light tracking-[0.1em]"
        >
          WEDELIA
        </h1>
        <div
          ref={(el) => (textRefs.current[1] = el)}
          className="font-mono text-[0.5625rem] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
        >
          Curated Peer Wardrobe
        </div>
        <div
          ref={(el) => (textRefs.current[2] = el)}
          className="font-mono text-[0.5rem] tracking-[0.3em] uppercase text-[var(--color-text-muted)] opacity-50"
        >
          Delhi / India · MMXXVI
        </div>
      </div>
    </div>
  )
}
