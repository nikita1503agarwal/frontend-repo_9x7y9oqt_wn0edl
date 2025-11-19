import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function WhitePaper() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <motion.section initial="hidden" animate="visible" variants={container} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 variants={item} className="text-4xl font-bold text-white mb-4">WhitePaper</motion.h1>
        <motion.p variants={item} className="text-white/80 mb-10">Téléchargez le PDF et lisez le résumé rapide.</motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={item} className="p-6 rounded-2xl border text-white hover:translate-y-[-2px] transition-transform" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <div className="font-semibold mb-2">Téléchargement</div>
            <a className="inline-block px-6 py-3 rounded-full font-semibold text-slate-900 hover:shadow-[0_10px_30px_rgba(0,228,255,0.5)] transition-shadow" style={{ backgroundColor: colors.cyan }} href="#" download>
              Télécharger le PDF
            </a>
          </motion.div>
          <motion.div variants={item} className="p-6 rounded-2xl border text-white hover:translate-y-[-2px] transition-transform" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <div className="font-semibold mb-2">Résumé rapide</div>
            <p className="text-white/85">HypeWave est conçu pour l’accessibilité, l’effet viral et l’engagement communautaire grâce au Hype‑to‑Earn et à l’achat simplifié par MoonPay.</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
