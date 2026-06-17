import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/90 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gunmetal border border-electric/20 flex items-center justify-center group-hover:border-electric/50 transition-colors">
            <span className="text-lg">🤖</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-white">
            MINI<span className="text-electric">-</span>ROBOT
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-steel hover:text-electric transition-colors text-sm tracking-wide">
            Features
          </a>
          <a href="#pricing" className="text-steel hover:text-electric transition-colors text-sm tracking-wide">
            Pricing
          </a>
          <a
            href="#order"
            className="btn-glow px-5 py-2 bg-electric text-obsidian font-display font-semibold text-xs tracking-widest rounded-lg"
          >
            ORDER NOW
          </a>
        </div>
      </div>
    </nav>
  )
}
