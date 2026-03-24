export default function NFCCard() {
  return (
    <div className="animate-float" style={{ transformStyle: 'preserve-3d' }}>
      {/* Glow underneath */}
      <div className="absolute -inset-8 bg-electric/10 rounded-[40px] blur-3xl animate-pulse-glow" />

      {/* The card */}
      <div className="relative card-metallic rounded-2xl w-full aspect-[1.586/1] border border-white/5 overflow-hidden">
        {/* Circuit trace pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 400 252">
          <pattern id="circuit" patternUnits="userSpaceOnUse" width="40" height="40">
            <path d="M0 20h15v-15h5v20h-5v15h-15z" fill="none" stroke="#00e5ff" strokeWidth="0.5" />
            <circle cx="20" cy="20" r="2" fill="#00e5ff" />
          </pattern>
          <rect width="400" height="252" fill="url(#circuit)" />
        </svg>

        {/* NFC chip */}
        <div className="absolute top-8 left-8">
          <div className="w-10 h-8 rounded-sm bg-gradient-to-br from-yellow-600/40 to-yellow-800/30 border border-yellow-500/20">
            <div className="w-full h-full grid grid-cols-3 grid-rows-2 gap-px p-1 opacity-50">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-yellow-500/30 rounded-[1px]" />
              ))}
            </div>
          </div>
        </div>

        {/* NFC waves icon */}
        <div className="absolute top-7 right-8">
          <svg className="w-8 h-8 text-electric/40" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 12a3.5 3.5 0 015 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M5.5 9a7.5 7.5 0 0111 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <path d="M2.5 6a11.5 11.5 0 0117 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          </svg>
        </div>

        {/* Card content */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          {/* Name and title */}
          <div className="mb-3">
            <h3 className="font-display font-bold text-xl tracking-wider text-white">
              REGAN HINES
            </h3>
            <p className="text-electric/70 text-xs font-mono tracking-wider mt-1">
              Operations Manager / Co-founder
            </p>
          </div>

          {/* Bottom row */}
          <div className="flex items-end justify-between">
            <div>
              <p className="text-steel/60 text-[10px] font-mono tracking-widest uppercase">
                Mini-Robot
              </p>
              <p className="text-steel/40 text-[10px] font-mono tracking-wider mt-0.5">
                Christchurch, NZ
              </p>
            </div>
            <div className="font-display font-black text-sm tracking-wider text-white/80">
              MINI<span className="text-electric">-</span>ROBOT
            </div>
          </div>
        </div>

        {/* Scan line effect */}
        <div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent"
          style={{ animation: 'scan-line 4s linear infinite', top: 0 }}
        />

        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-electric/20 rounded-tl" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-electric/20 rounded-tr" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-electric/20 rounded-bl" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-electric/20 rounded-br" />
      </div>

      {/* NFC Ripple rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/30 animate-ripple-1" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/20 animate-ripple-2" />
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-electric/10 animate-ripple-3" />
      </div>
    </div>
  )
}
