import { motion } from 'framer-motion'

const colors = {
  bg: '#0A1A2F',
  ocean: '#0F2F45',
  aqua: '#00AEEF',
  turquoise: '#32D5FF',
  cyan: '#00E4FF',
  white: '#FFFFFF',
}

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-20" style={{ backgroundColor: colors.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="max-w-3xl mb-10">
          <motion.h2 variants={item} className="text-3xl sm:text-4xl font-bold" style={{ color: colors.white }}>{title}</motion.h2>
          {subtitle && <motion.p variants={item} className="mt-3 text-white/80">{subtitle}</motion.p>}
        </motion.div>
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export function WhatIs() {
  return (
    <Section id="what" title="Qu’est‑ce que HypeWave ?" subtitle="HypeWave rend le Web3 facile, viral et excitant.">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.p variants={item} className="text-white/80 leading-relaxed">
          HypeWave est la crypto simple, fun et accessible à tous. Achetez en quelques clics, participez en partageant, gagnez des tokens, rejoignez une communauté mondiale.
        </motion.p>
        <motion.div variants={container} className="grid gap-3 text-white/90">
          <Feature> Achat par carte bancaire (MoonPay) </Feature>
          <Feature> Hype-to-Earn • 1 partage = 10 000 HWV </Feature>
          <Feature> Communauté active • Idéal pour débutants </Feature>
          <Feature> Pas de complexité </Feature>
        </motion.div>
      </div>
    </Section>
  )
}

function Feature({ children }) {
  return (
    <motion.div variants={item} className="flex items-start gap-3">
      <div className="mt-1 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.turquoise }}></div>
      <div className="text-white/90">{children}</div>
    </motion.div>
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
          <motion.div key={i} variants={item} className="p-6 rounded-2xl border hover:translate-y-[-2px] transition-transform" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <h3 className="text-white font-semibold">{t}</h3>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function HypeToEarn() {
  return (
    <Section id="hype" title="Hype‑to‑Earn" subtitle="Chaque jour, gagnez 10 000 HWV simplement en partageant un post sur TikTok, X, Instagram, Reddit ou YouTube Shorts. Vérifié par bot.">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div variants={item} className="text-white/80 leading-relaxed">
          Publiez, collez votre lien, et recevez vos HWV automatiquement après vérification par notre bot Discord.
        </motion.div>
        <motion.div variants={container} className="grid gap-3 text-white/90">
          <Feature> Plateformes: TikTok, X, Instagram, Reddit, YouTube Shorts </Feature>
          <Feature> Bot Discord dédié </Feature>
          <Feature> Exemples de partages disponibles </Feature>
          <motion.a variants={item} href="https://discord.com" target="_blank" rel="noreferrer" className="mt-2 inline-block px-5 py-3 rounded-full font-semibold text-slate-900 hover:shadow-[0_10px_30px_rgba(0,228,255,0.5)] transition-shadow" style={{ backgroundColor: colors.cyan }}>Rejoindre le programme</motion.a>
        </motion.div>
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
          <motion.a key={i} variants={item} href={s.url} target="_blank" rel="noreferrer" className="p-6 rounded-2xl border hover:scale-[1.02] transition" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))', color: colors.white }}>
            {s.name}
          </motion.a>
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
