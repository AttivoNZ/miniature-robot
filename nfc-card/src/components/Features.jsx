const features = [
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Unlimited Taps & Scans',
    desc: 'No subscription limits. Tap your card or scan the QR code as many times as you want, forever.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Unlimited Leads & Contacts',
    desc: 'Capture every connection. No caps on how many people can receive your details.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Digital Wallet Card',
    desc: 'Add to Apple Wallet or Google Pay. Your digital card is always in your pocket, even without the physical card.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.25 14.25v1.5m0 3v1.5m3-6v1.5m0 3v1.5m3-6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'NFC + QR Code',
    desc: 'Dual sharing modes. Tap for NFC-enabled phones, or show your QR code for any device.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Update Anytime',
    desc: 'Changed jobs? New number? Update your digital profile instantly. Your card never goes out of date.',
  },
  {
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Premium Build Quality',
    desc: 'Matte black PVC with metallic finish. Engineered to feel like a piece of tech hardware you want to show off.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 px-6">
      {/* Subtle divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-electric/30 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 reveal">
          <span className="text-electric/60 font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            What you get
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white mb-4">
            BUILT FOR <span className="text-electric">THE FUTURE</span>
          </h2>
          <p className="text-steel text-lg max-w-xl mx-auto">
            Not just a card — a networking platform that fits in your wallet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card reveal p-6 rounded-2xl bg-gunmetal/50 border border-white/5 group"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-electric/10 border border-electric/10 flex items-center justify-center text-electric mb-5 group-hover:bg-electric/20 group-hover:border-electric/30 transition-all">
                {feature.icon}
              </div>
              <h3 className="font-display font-bold text-white text-base tracking-wide mb-2">
                {feature.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
