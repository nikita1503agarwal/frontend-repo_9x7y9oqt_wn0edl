import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function CommunityPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <motion.section initial="hidden" animate="visible" variants={container} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 variants={item} className="text-4xl font-bold text-white mb-4">Communauté</motion.h1>
        <motion.p variants={item} className="text-white/80 mb-10">Liens officiels, Wave Council, rôles Discord.</motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={item} className="p-6 rounded-2xl border text-white hover:translate-y-[-2px] transition-transform" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <div className="font-semibold mb-2">Liens officiels</div>
            <ul className="space-y-2 text-white/85">
              <li><a className="hover:text-white" href="https://discord.com" target="_blank" rel="noreferrer">Discord</a></li>
              <li><a className="hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
              <li><a className="hover:text-white" href="https://tiktok.com" target="_blank" rel="noreferrer">TikTok</a></li>
              <li><a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="hover:text-white" href="https://telegram.org" target="_blank" rel="noreferrer">Telegram</a></li>
            </ul>
          </motion.div>

          <motion.div variants={item} className="p-6 rounded-2xl border text-white hover:translate-y-[-2px] transition-transform" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <div className="font-semibold mb-2">Wave Council</div>
            <p className="text-white/85">Groupe de membres reconnus qui guident la vision, la création de contenu et les partenariats stratégiques.</p>
            <div className="mt-4 font-semibold">Rôles Discord</div>
            <ul className="list-disc list-inside text-white/85">
              <li>Wave Surfer</li>
              <li>Hype Master</li>
              <li>Culture Builder</li>
              <li>Tsunami Guard</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
