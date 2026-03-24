import NFCCard from './NFCCard'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06)_0%,transparent_70%)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-phone ${3 + i * 0.5}s ease-in-out infinite ${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/20 bg-electric/5 mb-8 animate-slide-up">
          <div className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          <span className="text-electric text-xs font-mono tracking-widest uppercase">
            NFC Smart Card
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-6">
          <span className="text-white">TAP.</span>
          <br />
          <span className="text-electric glow-text">CONNECT.</span>
          <br />
          <span className="text-white">DONE.</span>
        </h1>

        <p className="text-steel text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          The last business card you&rsquo;ll ever need. Premium NFC-enabled smart card
          that shares your details with a single tap. No app required.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#order"
            className="btn-glow px-8 py-4 bg-electric text-obsidian font-display font-bold text-sm tracking-widest rounded-xl"
          >
            GET YOUR CARD
          </a>
          <a
            href="#features"
            className="px-8 py-4 border border-white/10 text-silver font-display font-medium text-sm tracking-widest rounded-xl hover:border-electric/30 hover:text-white transition-all"
          >
            SEE HOW IT WORKS
          </a>
        </div>
      </div>

      {/* NFC Card Mockup */}
      <div className="relative z-10 w-full max-w-md mx-auto" style={{ perspective: '1000px' }}>
        <NFCCard />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-steel/50 text-xs font-mono tracking-widest">SCROLL</span>
        <svg className="w-4 h-4 text-electric/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
        </svg>
      </div>
    </section>
  )
}
