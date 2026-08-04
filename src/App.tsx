import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Intersection Observer for scroll-reveal animations and active section tracking
  useEffect(() => {
    // 1. Scroll-reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el))
    
    // 2. Active section observer
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    document.querySelectorAll('section').forEach((el) => sectionObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      sectionObserver.disconnect()
    }
  }, [])

  const show8Ball = activeSection === 'about' || activeSection === 'projects'

  return (
    <div className="grain-overlay">
      <img 
        src="/8ball.png" 
        alt="Decorative spinning 8-ball" 
        className={`fixed top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-20 md:h-20 z-50 pointer-events-none animate-spin-slow transition-opacity duration-500 ${
          show8Ball ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
