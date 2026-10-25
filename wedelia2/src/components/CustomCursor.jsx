import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })
  const rafId = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot || window.matchMedia('(max-width: 768px)').matches) return

    const onMove = (e) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    const onEnterHover = () => dot.classList.add('hovering')
    const onLeaveHover = () => dot.classList.remove('hovering')

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.15
      pos.current.y += (target.current.y - pos.current.y) * 0.15
      dot.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`
      rafId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafId.current = requestAnimationFrame(animate)

    // Track hoverable elements
    const hoverables = document.querySelectorAll('a, button, [data-hover]')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', onEnterHover)
      el.addEventListener('mouseleave', onLeaveHover)
    })

    // Re-observe for dynamic content
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnterHover)
        el.removeEventListener('mouseleave', onLeaveHover)
        el.addEventListener('mouseenter', onEnterHover)
        el.addEventListener('mouseleave', onLeaveHover)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId.current)
      observer.disconnect()
    }
  }, [])

  return <div ref={dotRef} className="cursor-dot" />
}
