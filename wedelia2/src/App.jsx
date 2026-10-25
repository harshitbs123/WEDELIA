import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Hero from './components/Hero'
import Archive from './components/Archive'
import ProductEditorial from './components/ProductEditorial'
import Acts from './components/Acts'
import RentalRitual from './components/RentalRitual'
import ClosetCalculator from './components/ClosetCalculator'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <Navbar />
      <Intro />
      <main>
        <Hero />
        <Archive />
        <ProductEditorial />
        <Acts />
        <RentalRitual />
        <ClosetCalculator />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
