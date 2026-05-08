import { useEffect, useRef } from 'react'

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let raf

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      raf = requestAnimationFrame(animate)
    }

    const onMouseEnterLink = () => {
      ring.style.width = '50px'
      ring.style.height = '50px'
      ring.style.opacity = '0.5'
    }

    const onMouseLeaveLink = () => {
      ring.style.width = '30px'
      ring.style.height = '30px'
      ring.style.opacity = '1'
    }

    window.addEventListener('mousemove', onMouseMove)
    raf = requestAnimationFrame(animate)

    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) return null

  return (
    <>
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </>
  )
}

export default Cursor
