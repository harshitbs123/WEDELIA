import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const links = menuRef.current.querySelectorAll('.menu-link')
      gsap.fromTo(links,
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'expo.out', delay: 0.2 }
      )
    }
  }, [menuOpen])

  const navLinks = [
    { label: 'Archive', href: '#archive' },
    { label: 'How It Works', href: '#ritual' },
    { label: 'List Your Fit', href: '#closet' },
  ]

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/[0.06]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-display text-xl tracking-[0.15em] font-light text-[var(--color-text)]">
              WEDELIA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-[0.625rem] tracking-[0.2em] uppercase text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#archive"
              className="hidden md:inline-flex font-mono text-[0.625rem] tracking-[0.15em] uppercase px-5 py-2.5 border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300"
            >
              Explore Fits
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-8 h-8 flex flex-col items-end justify-center gap-1.5"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`block h-[1px] bg-[var(--color-text)] transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[4px]' : 'w-6'}`} />
              <span className={`block h-[1px] bg-[var(--color-text)] transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[3px]' : 'w-4'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="menu-link font-display text-4xl font-light tracking-wide text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-[var(--color-border)] w-48 text-center">
            <span className="font-mono text-[0.5625rem] tracking-[0.25em] uppercase text-[var(--color-text-muted)]">
              Delhi · India · MMXXVI
            </span>
          </div>
        </nav>
      </div>
    </>
  )
}
