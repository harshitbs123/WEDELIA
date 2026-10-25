import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { products, categories } from '../data/products'

gsap.registerPlugin(ScrollTrigger)

function ArchiveCard({ product, index }) {
  const cardRef = useRef(null)
  const imageRef = useRef(null)

  // Determine editorial sizing — vary layout
  const isLarge = index === 0 || index === 3 || index === 6
  const isMedium = index === 1 || index === 4 || index === 7

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, card)

    return () => ctx.revert()
  }, [])

  return (
    <article
      ref={cardRef}
      className={`group cursor-pointer ${
        isLarge ? 'md:col-span-2 md:row-span-2' : isMedium ? 'md:col-span-1 md:row-span-2' : ''
      }`}
      data-hover
    >
      <div className={`relative overflow-hidden bg-[var(--color-surface)] ${
        isLarge ? 'aspect-[3/4]' : isMedium ? 'aspect-[2/3]' : 'aspect-[3/4]'
      }`}>
        <img
          ref={imageRef}
          src={product.image}
          alt={product.name}
          loading="lazy"
          width="600"
          height="800"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-end p-5 md:p-6">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <span className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-[var(--color-accent)]">
              {product.aesthetic}
            </span>
          </div>
        </div>
        {/* Top label */}
        <div className="absolute top-4 left-4 font-mono text-[0.5rem] tracking-[0.2em] uppercase text-white/70 mix-blend-difference">
          {product.aesthetic}
        </div>
      </div>

      {/* Card info */}
      <div className="pt-3 pb-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-lg md:text-xl font-light group-hover:text-[var(--color-accent)] transition-colors duration-300">
            {product.name}
          </h3>
          <span className="font-mono text-xs text-[var(--color-accent)] shrink-0">
            ₹{product.price}
          </span>
        </div>
        <p className="font-mono text-[0.5625rem] tracking-[0.1em] text-[var(--color-text-muted)] mt-1">
          {product.kind} · {product.size}
        </p>
      </div>
    </article>
  )
}

export default function Archive() {
  const [activeFilter, setActiveFilter] = useState('all')
  const sectionRef = useRef(null)
  const headerRef = useRef(null)

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter((p) => p.category === activeFilter)

  useEffect(() => {
    const header = headerRef.current
    if (!header) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      const elements = header.querySelectorAll('.archive-reveal')
      gsap.fromTo(elements,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1, stagger: 0.12, ease: 'expo.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, header)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="archive" className="py-24 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-24">
          <div className="archive-reveal">
            <span className="text-label-accent block mb-4">The Archive</span>
          </div>
          <div className="archive-reveal">
            <h2 className="text-editorial-lg">
              Curated<br />
              <em className="italic" style={{ color: 'var(--color-accent)' }}>Wardrobe.</em>
            </h2>
          </div>
          <div className="archive-reveal mt-8 flex items-center gap-3">
            <div className="editorial-hr flex-1 max-w-[120px]" />
            <span className="font-mono text-[0.5625rem] tracking-[0.15em] text-[var(--color-text-muted)] uppercase">
              {products.length} Fits Available
            </span>
          </div>

          {/* Category Filters */}
          <div className="archive-reveal flex flex-wrap gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`font-mono text-[0.5625rem] tracking-[0.15em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeFilter === cat.id
                    ? 'border-[var(--color-accent)] text-[var(--color-accent)] bg-[var(--color-accent-dim)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-secondary)]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 auto-rows-auto">
          {filteredProducts.map((product, i) => (
            <ArchiveCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
