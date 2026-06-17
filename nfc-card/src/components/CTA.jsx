export default function CTA() {
  return (
    <section id="order" className="relative py-24 md:py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04)_0%,transparent_60%)]" />

      <div className="relative max-w-3xl mx-auto text-center reveal">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-electric/20 bg-electric/5 mb-8">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          <span className="text-neon-green text-xs font-mono tracking-widest">IN STOCK — SHIPS WITHIN 3 DAYS</span>
        </div>

        <h2 className="font-display font-black text-4xl md:text-6xl tracking-tight text-white mb-6">
          READY TO<br />
          <span className="text-electric glow-text">UPGRADE?</span>
        </h2>

        <p className="text-steel text-lg max-w-lg mx-auto mb-10 leading-relaxed">
          Stop handing out paper cards that end up in the bin.
          Make every introduction count with Mini-Robot NFC.
        </p>

        <a
          href="mailto:regan@mini-robot.nz?subject=NFC%20Smart%20Card%20Order"
          className="btn-glow inline-flex items-center gap-3 px-10 py-5 bg-electric text-obsidian font-display font-bold text-sm tracking-[0.2em] rounded-2xl"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          ORDER YOUR CARD
        </a>

        <p className="text-steel/40 text-xs font-mono mt-6 tracking-wider">
          FREE SHIPPING ACROSS NEW ZEALAND
        </p>
      </div>
    </section>
  )
}
