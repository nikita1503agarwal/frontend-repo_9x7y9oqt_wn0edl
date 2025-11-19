const colors = {
  bg: '#0A1A2F',
  ocean: '#0F2F45',
  aqua: '#00AEEF',
  turquoise: '#32D5FF',
  cyan: '#00E4FF',
  white: '#FFFFFF',
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: colors.white }}>{title}</h2>
          {subtitle && <p className="mt-3 text-white/80">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

export function WhatIs() {
  return (
    <Section id="what" title="Qu’est‑ce que HypeWave ?" subtitle="HypeWave rend le Web3 facile, viral et excitant.">
      <div className="grid md:grid-cols-2 gap-8">
        <p className="text-white/80 leading-relaxed">
          HypeWave est la crypto simple, fun et accessible à tous. Achetez en quelques clics, participez en partageant, gagnez des tokens, rejoignez une communauté mondiale.
        </p>
        <div className="grid gap-3 text-white/90">
          <Feature> Achat par carte bancaire (MoonPay) </Feature>
          <Feature> Hype-to-Earn • 1 partage = 10 000 HWV </Feature>
          <Feature> Communauté active • Idéal pour débutants </Feature>
          <Feature> Pas de complexité </Feature>
        </div>
      </div>
    </Section>
  )
}

function Feature({ children }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.turquoise }}></div>
      <div className="text-white/90">{children}</div>
    </div>
  )
}

export function WhyDifferent() {
  return (
    <Section id="why" title="Pourquoi nous sommes différents">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          'Achetez en quelques clics via MoonPay',
          'Partagez un post = gagnez des HWV',
          'Communauté mondiale, fun, inclusive',
        ].map((t, i) => (
          <div key={i} className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <h3 className="text-white font-semibold">{t}</h3>
          </div>
        ))}
      </div>
    </Section>
  )
}

export function HypeToEarn() {
  return (
    <Section id="hype" title="Hype‑to‑Earn" subtitle="Chaque jour, gagnez 10 000 HWV simplement en partageant un post sur TikTok, X, Instagram, Reddit ou YouTube Shorts. Vérifié par bot.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="text-white/80 leading-relaxed">
          Publiez, collez votre lien, et recevez vos HWV automatiquement après vérification par notre bot Discord.
        </div>
        <div className="grid gap-3 text-white/90">
          <Feature> Plateformes: TikTok, X, Instagram, Reddit, YouTube Shorts </Feature>
          <Feature> Bot Discord dédié </Feature>
          <Feature> Exemples de partages disponibles </Feature>
          <a href="https://discord.com" target="_blank" rel="noreferrer" className="mt-2 inline-block px-5 py-3 rounded-full font-semibold text-slate-900" style={{ backgroundColor: colors.cyan }}>Rejoindre le programme</a>
        </div>
      </div>
    </Section>
  )
}

export function Community() {
  return (
    <Section id="community" title="Communauté">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: 'Discord', url: 'https://discord.com' },
          { name: 'X', url: 'https://x.com' },
          { name: 'TikTok', url: 'https://tiktok.com' },
          { name: 'Instagram', url: 'https://instagram.com' },
          { name: 'Telegram', url: 'https://telegram.org' },
        ].map((s, i) => (
          <a key={i} href={s.url} target="_blank" rel="noreferrer" className="p-6 rounded-2xl border hover:scale-[1.02] transition" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))', color: colors.white }}>
            {s.name}
          </a>
        ))}
      </div>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="pt-16" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t" style={{ borderColor: 'rgba(50,213,255,0.15)' }}></div>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/70 text-sm">© {new Date().getFullYear()} HypeWave•X — Tous droits réservés</div>
          <div className="flex items-center gap-4 text-white/70 text-sm">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
