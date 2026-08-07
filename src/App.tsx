import { useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'


function App() {
  const audioRef = useRef<HTMLAudioElement>(null)
  useEffect(() => {
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
    
    return () => {
      revealObserver.disconnect()
    }
  }, [])

  const toggleAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.05
      if (audioRef.current.paused) {
        audioRef.current.play()
      } else {
        audioRef.current.pause()
      }
    }
  }

  return (
    <div className="grain-overlay">
      <audio ref={audioRef} src="/change.mp3" preload="auto" />
      <div 
        className="fixed top-6 right-6 md:top-10 md:right-10 w-16 h-16 md:w-20 md:h-20 z-30 cursor-pointer hover:scale-110 transition-transform duration-300"
        onClick={toggleAudio}
      >
        <img 
          src="/8ball.png" 
          alt="Interactive spinning orb" 
          className="w-full h-full animate-spin-slow"
        />
      </div>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
