import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhoneMockup from './components/PhoneMockup'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-obsidian circuit-grid">
      <Navbar />
      <Hero />
      <PhoneMockup />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
