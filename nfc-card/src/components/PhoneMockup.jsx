import { useState, useEffect } from 'react'

const contactFields = [
  { icon: '👤', label: 'Name', value: 'Regan Hines' },
  { icon: '💼', label: 'Title', value: 'Operations Manager / Co-founder' },
  { icon: '🏢', label: 'Company', value: 'Mini-Robot' },
  { icon: '📍', label: 'Location', value: 'Christchurch, New Zealand' },
  { icon: '📧', label: 'Email', value: 'regan@mini-robot.nz' },
  { icon: '🔗', label: 'Website', value: 'mini-robot.nz' },
  { icon: '📱', label: 'Phone', value: '+64 27 555 0199' },
  { icon: '💬', label: 'LinkedIn', value: 'linkedin.com/in/reganhines' },
]

export default function PhoneMockup() {
  const [visibleFields, setVisibleFields] = useState(0)
  const [tapped, setTapped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tapped) {
          setTapped(true)
        }
      },
      { threshold: 0.4 }
    )

    const el = document.getElementById('phone-section')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [tapped])

  useEffect(() => {
    if (!tapped) return
    if (visibleFields >= contactFields.length) return

    const timer = setTimeout(() => {
      setVisibleFields((v) => v + 1)
    }, 200)
    return () => clearTimeout(timer)
  }, [tapped, visibleFields])

  return (
    <section id="phone-section" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
            ONE TAP. <span className="text-electric">INSTANT CONTACT.</span>
          </h2>
          <p className="text-steel text-lg max-w-xl mx-auto">
            Hold your Mini-Robot card to any smartphone. Your details appear instantly — no app download needed.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Phone */}
          <div className="reveal animate-float-phone">
            <div className="phone-frame rounded-[3rem] p-3 w-[280px] md:w-[300px] border border-white/5">
              {/* Notch */}
              <div className="relative bg-gunmetal-dark rounded-[2.4rem] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-gunmetal rounded-b-2xl z-10" />

                {/* Screen content */}
                <div className="pt-12 pb-8 px-5 min-h-[520px]">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6 text-[10px] text-steel/60 font-mono">
                    <span>9:41</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-4 h-2 border border-steel/40 rounded-sm">
                        <div className="w-3/4 h-full bg-neon-green/60 rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* NFC detected banner */}
                  <div
                    className={`mb-6 p-3 rounded-xl bg-electric/10 border border-electric/20 transition-all duration-500 ${
                      tapped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-electric" viewBox="0 0 24 24" fill="none">
                        <path d="M8.5 12a3.5 3.5 0 015 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <path d="M5.5 9a7.5 7.5 0 0111 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      <span className="text-electric text-xs font-semibold">NFC Contact Received</span>
                    </div>
                  </div>

                  {/* Contact card header */}
                  <div
                    className={`text-center mb-6 transition-all duration-500 delay-200 ${
                      tapped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-electric/30 to-electric/5 border border-electric/20 flex items-center justify-center mx-auto mb-3">
                      <span className="font-display font-bold text-xl text-electric">R</span>
                    </div>
                    <h3 className="font-display font-bold text-base text-white tracking-wide">
                      Regan Hines
                    </h3>
                    <p className="text-electric/60 text-[11px] font-mono mt-0.5">Mini-Robot</p>
                  </div>

                  {/* Contact fields */}
                  <div className="space-y-2">
                    {contactFields.map((field, i) => (
                      <div
                        key={i}
                        className={`flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 transition-all duration-400 ${
                          i < visibleFields
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-8'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <span className="text-sm">{field.icon}</span>
                        <div className="min-w-0">
                          <p className="text-steel/40 text-[9px] font-mono uppercase tracking-wider">{field.label}</p>
                          <p className="text-white/80 text-[11px] truncate">{field.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Save button */}
                  <div
                    className={`mt-5 transition-all duration-500 ${
                      visibleFields >= contactFields.length
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <button className="w-full py-2.5 bg-electric text-obsidian font-display font-bold text-xs tracking-widest rounded-xl">
                      SAVE CONTACT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-8 lg:max-w-sm reveal">
            {[
              { step: '01', title: 'Tap Your Card', desc: 'Hold your Mini-Robot NFC card to the back of any smartphone.' },
              { step: '02', title: 'Details Appear', desc: 'Your full contact profile shows up instantly on their screen.' },
              { step: '03', title: 'Saved Forever', desc: 'They save your contact directly to their phone. No app needed.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gunmetal border border-electric/10 flex items-center justify-center group-hover:border-electric/40 transition-colors">
                  <span className="font-mono text-electric/60 text-sm font-medium group-hover:text-electric transition-colors">
                    {item.step}
                  </span>
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-lg tracking-wide mb-1">
                    {item.title}
                  </h4>
                  <p className="text-steel text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
