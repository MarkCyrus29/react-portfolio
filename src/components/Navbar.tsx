import { useState, useEffect, useRef } from 'react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [hoverIdx, setHoverIdx] = useState<number | null>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const [indicatorStyle, setIndicatorStyle] = useState({ top: 0, width: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      let newIdx = 0
      navLinks.forEach((link, idx) => {
        const el = document.querySelector(link.href) as HTMLElement
        if (el) {
          // Adjust threshold to change active state slightly before section hits top
          const top = el.offsetTop - window.innerHeight / 3
          if (scrollY >= top) {
            newIdx = idx
          }
        }
      })
      setActiveIdx(newIdx)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    setTimeout(handleScroll, 100)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentIdx = hoverIdx !== null ? hoverIdx : activeIdx

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.children[currentIdx] as HTMLElement
      if (activeElement) {
        setIndicatorStyle({
          top: activeElement.offsetTop + activeElement.offsetHeight - 2, // slightly overlap or right below text
          width: activeElement.offsetWidth,
        })
      }
    }
  }, [currentIdx, activeIdx]) // Re-run if activeIdx changes (e.g. initial load)

  return (
    <nav className="fixed top-6 left-6 md:top-10 md:left-10 z-50 animate-fade-in mix-blend-lighten p-4">
      <div ref={navRef} className="relative flex flex-col items-start gap-4">
        {navLinks.map((link, idx) => {
          const isActive = activeIdx === idx
          return (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={() => setHoverIdx(null)}
              className={`block text-[10px] font-medium uppercase tracking-[0.25em] transition-all duration-300 pb-1 ${
              isActive ? 'text-cream' : 'text-muted hover:text-cream text-[8px]!'
              }`}
            >
              {link.label}
            </a>
          )
        })}
      </div>
    </nav>
  )
}
