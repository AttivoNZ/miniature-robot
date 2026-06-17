const plans = [
  {
    name: 'STARTER',
    price: '29',
    period: 'one-time',
    desc: 'Perfect for individuals getting started.',
    features: [
      '1x NFC Smart Card',
      'Digital contact profile',
      'Unlimited taps & scans',
      'QR code backup',
      'Basic analytics',
    ],
    highlighted: false,
  },
  {
    name: 'PROFESSIONAL',
    price: '49',
    period: 'one-time',
    desc: 'For professionals who mean business.',
    features: [
      '1x Premium NFC Card',
      'Custom card design',
      'Digital Wallet card',
      'Unlimited leads & contacts',
      'Advanced analytics dashboard',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'TEAM',
    price: '39',
    period: 'per card',
    desc: 'Outfit your whole crew. Min. 5 cards.',
    features: [
      '5+ NFC Smart Cards',
      'Team branding & design',
      'Centralised lead management',
      'Digital Wallet cards',
      'Bulk analytics',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-electric/60 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            Pricing
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
            INVEST IN YOUR <span className="text-electric">NETWORK</span>
          </h2>
          <p className="text-steel text-lg max-w-xl mx-auto">
            One purchase. No subscriptions. No hidden fees. Your card works forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`pricing-card reveal rounded-2xl p-7 relative ${
                plan.highlighted
                  ? 'bg-gunmetal border-2 border-electric/30 glow-electric'
                  : 'bg-gunmetal/50 border border-white/5'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric text-obsidian font-display font-bold text-[10px] tracking-[0.2em] rounded-full">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-sm tracking-[0.2em] text-steel mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-steel text-lg">$</span>
                  <span className="font-display font-black text-5xl text-white">{plan.price}</span>
                  <span className="text-steel/60 text-sm font-mono ml-1">{plan.period}</span>
                </div>
                <p className="text-steel text-sm mt-3">{plan.desc}</p>
              </div>

              <div className="h-px bg-white/5 mb-6" />

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 text-electric flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-silver/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#order"
                className={`block text-center py-3.5 rounded-xl font-display font-bold text-xs tracking-[0.2em] transition-all ${
                  plan.highlighted
                    ? 'btn-glow bg-electric text-obsidian'
                    : 'border border-white/10 text-silver hover:border-electric/30 hover:text-white'
                }`}
              >
                GET STARTED
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
