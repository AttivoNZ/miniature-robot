export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gunmetal border border-electric/20 flex items-center justify-center">
              <span className="text-sm">🤖</span>
            </div>
            <span className="font-display font-bold text-sm tracking-wider text-white/60">
              MINI<span className="text-electric/60">-</span>ROBOT
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-steel/40 text-xs font-mono tracking-wider">
            <span>Christchurch, NZ</span>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:regan@mini-robot.nz" className="hover:text-electric transition-colors">
              regan@mini-robot.nz
            </a>
          </div>

          {/* Copyright */}
          <p className="text-steel/30 text-xs font-mono">
            &copy; {new Date().getFullYear()} Mini-Robot
          </p>
        </div>
      </div>
    </footer>
  )
}
