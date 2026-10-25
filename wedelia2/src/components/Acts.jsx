import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const acts = [
  {
    number: 'I',
    time: '16:00',
    title: 'Golden Hour',
    description: 'Campus cafés, golden light, and the first turn of heads. Your fit announces itself before you do.',
    mood: 'Warm · Confident · Effortless',
    image: '/images/parisian-cafe-chic.jpeg',
  },
  {
    number: 'II',
    time: '20:00',
    title: 'Fest Night',
    description: 'The bass drops. The lights shift. Your outfit becomes the event. Y2K corsets, dark lace, western drama.',
    mood: 'Electric · Bold · Unforgettable',
    image: '/images/gothic-dark-feminine.jpeg',
  },
  {
    number: 'III',
    time: '10:00',
    title: 'Return',
    description: 'Morning light. The outfit goes back into circulation. Someone else gets to feel what you felt. Circular fashion.',
    mood: 'Calm · Minimal · Sustainable',
    image: '/images/green-chic-boho.jpeg',
  },
]

function ActCard({ act, index }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const numberRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Whole card reveal
      gsap.fromTo(card,
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )

      // Image parallax
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        })
      }

      // Large number color shift
      if (numberRef.current) {
        gsap.fromTo(numberRef.current,
          { opacity: 0.05 },
          {
            opacity: 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
            },
          }
        )
      }
    }, card)

    return () => ctx.revert()
  }, [])

  const isEven = index % 2 === 1

  return (
    <div
      ref={cardRef}
      className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative ${
        isEven ? '' : ''
      }`}
    >
      {/* Large background act number */}
      <div
        ref={numberRef}
        className="absolute -top-8 md:-top-16 left-0 md:left-auto font-display text-[8rem] md:text-[16rem] font-light leading-none select-none pointer-events-none"
        style={{ color: 'var(--color-accent)', opacity: 0.05, right: isEven ? 'auto' : '0', left: isEven ? '0' : 'auto' }}
      >
        {act.number}
      </div>

      {/* Image */}
      <div className={`md:col-span-6 ${isEven ? 'md:order-2' : 'md:order-1'} overflow-hidden`}>
        <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
          <img
            ref={imageRef}
            src={act.image}
            alt={act.title}
            loading="lazy"
            width="600"
            height="750"
            className="w-full h-[120%] object-cover"
          />
        </div>
      </div>

      {/* Text */}
      <div className={`md:col-span-6 ${isEven ? 'md:order-1 md:text-right' : 'md:order-2'} flex flex-col gap-4 ${isEven ? 'md:items-end' : ''}`}>
        <div className="flex items-center gap-3">
          <span className="text-label-accent">Act {act.number}</span>
          <div className="editorial-hr flex-1 max-w-[60px]" />
          <span className="font-mono text-xs text-[var(--color-text-muted)]">{act.time}</span>
        </div>

        <h3 className="text-editorial-md">{act.title}</h3>

        <p className="font-body text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-md">
          {act.description}
        </p>

        <span className="font-mono text-[0.5rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)]">
          {act.mood}
        </span>
      </div>
    </div>
  )
}

export default function Acts() {
  const sectionRef = useRef(null)

  return (
    <section ref={sectionRef} className="py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div className="mb-20 md:mb-32">
          <span className="text-label-accent block mb-4">Three Acts</span>
          <h2 className="text-editorial-lg">
            One Outfit,<br />
            <em className="italic" style={{ color: 'var(--color-accent)' }}>Three Moments.</em>
          </h2>
        </div>

        {/* Acts */}
        <div className="flex flex-col gap-24 md:gap-40">
          {acts.map((act, i) => (
            <ActCard key={act.number} act={act} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
