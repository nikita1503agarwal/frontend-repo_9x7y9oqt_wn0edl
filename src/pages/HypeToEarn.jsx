import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function HypeToEarnPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <motion.section initial="hidden" animate="visible" variants={container} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 variants={item} className="text-4xl font-bold text-white mb-4">Hype‑to‑Earn</motion.h1>
        <motion.p variants={item} className="text-white/80 mb-10">Explication du système & plateformes acceptées. Bot Discord pour vérification. Exemples de partages.</motion.p>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div variants={container} className="space-y-6">
            <Card title="Comment ça marche?">
              Chaque jour, gagnez 10 000 HWV simplement en partageant un post sur TikTok, X, Instagram, Reddit ou YouTube Shorts. Vérifié par bot.
            </Card>
            <Card title="Plateformes acceptées">
              TikTok • X • Instagram • Reddit • YouTube Shorts
            </Card>
            <Card title="Bot Discord">
              Rejoignez le serveur et connectez votre compte au bot pour valider vos partages automatiquement.
            </Card>
          </motion.div>

          <motion.div variants={container} className="space-y-6">
            <Card title="Exemples de partages">
              Vidéos fun, mèmes, tutoriels, témoignages — tant que le lien mène à votre post public.
            </Card>
            <motion.a variants={item} href="https://discord.com" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-full font-semibold text-slate-900 hover:shadow-[0_10px_30px_rgba(0,228,255,0.5)] transition-shadow" style={{ backgroundColor: colors.cyan }}>
              Rejoindre le programme
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

function Card({ title, children }) {
  return (
    <motion.div variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }} className="p-6 rounded-2xl border text-white hover:translate-y-[-2px] transition-transform" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-white/85">{children}</div>
    </motion.div>
  )
}
