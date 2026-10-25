import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Check for reduced motion preference
const prefersReducedMotion = () => 
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Reveal text lines from below
export function revealUp(elements, trigger, options = {}) {
  if (prefersReducedMotion()) {
    gsap.set(elements, { y: 0, opacity: 1 })
    return
  }
  
  return gsap.fromTo(elements, 
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: options.duration || 1,
      stagger: options.stagger || 0.1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: trigger,
        start: options.start || 'top 85%',
        end: options.end || 'bottom 20%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  )
}

// Reveal images with mask
export function revealImage(element, trigger, options = {}) {
  if (prefersReducedMotion()) {
    gsap.set(element, { clipPath: 'inset(0 0 0 0)' })
    return
  }
  
  return gsap.fromTo(element,
    { clipPath: 'inset(0 100% 0 0)' },
    {
      clipPath: 'inset(0 0% 0 0)',
      duration: options.duration || 1.2,
      ease: 'expo.inOut',
      scrollTrigger: {
        trigger: trigger,
        start: options.start || 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  )
}

// Parallax effect on images
export function parallaxImage(element, trigger, options = {}) {
  if (prefersReducedMotion()) return
  
  return gsap.fromTo(element,
    { yPercent: options.from || -15 },
    {
      yPercent: options.to || 15,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: 'top bottom',
        end: 'bottom top',
        scrub: options.scrub || 1,
        ...options.scrollTrigger,
      },
    }
  )
}

// Fade and scale in
export function fadeScale(element, trigger, options = {}) {
  if (prefersReducedMotion()) {
    gsap.set(element, { scale: 1, opacity: 1 })
    return
  }
  
  return gsap.fromTo(element,
    { scale: options.fromScale || 0.92, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: options.duration || 1,
      ease: 'expo.out',
      scrollTrigger: {
        trigger: trigger,
        start: options.start || 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
    }
  )
}

// Horizontal scroll section
export function horizontalScroll(container, panels, options = {}) {
  if (prefersReducedMotion()) return
  
  return gsap.to(panels, {
    xPercent: -100 * (panels.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      end: () => '+=' + container.offsetWidth,
      ...options.scrollTrigger,
    },
  })
}

// Counter animation
export function animateCounter(element, endValue, options = {}) {
  if (prefersReducedMotion()) {
    element.textContent = endValue
    return
  }
  
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: endValue,
    duration: options.duration || 2,
    ease: 'expo.out',
    onUpdate: () => {
      element.textContent = options.prefix ? 
        options.prefix + Math.round(obj.value).toLocaleString('en-IN') :
        Math.round(obj.value).toLocaleString('en-IN')
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger,
    },
  })
}

// Cleanup utility
export function killScrollTriggers() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
}

export { gsap, ScrollTrigger }
