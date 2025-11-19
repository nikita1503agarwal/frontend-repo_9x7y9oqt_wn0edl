import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } } }

const phases = [
  { title: 'Birth of the Wave', desc: 'Lancement, branding, communauté initiale.' },
  { title: 'The Hype Expansion', desc: 'Hype-to-Earn, partenariats, croissance.' },
  { title: 'Cultural Wave', desc: 'Mèmes, culture, visibilité mainstream.' },
  { title: 'Tsunami Era', desc: 'Adoption massive, utilités étendues.' },
]

export default function Roadmap() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <motion.section initial="hidden" animate="visible" variants={container} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 variants={item} className="text-4xl font-bold text-white mb-4">Roadmap</motion.h1>
        <motion.p variants={item} className="text-white/80 mb-10 max-w-2xl">Timeline claire des 4 phases.</motion.p>

        <div className="relative">
          <motion.div variants={item} className="absolute left-4 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, rgba(0,228,255,0), rgba(0,228,255,0.8), rgba(0,228,255,0))' }}></motion.div>
          <motion.div variants={container} className="space-y-8">
            {phases.map((p, i) => (
              <motion.div key={i} variants={item} className="relative pl-12">
                <div className="absolute left-0 top-2 w-8 h-8 rounded-full border" style={{ borderColor: 'rgba(50,213,255,0.6)', boxShadow: '0 0 25px rgba(50,213,255,0.5)', backgroundColor: '#0F2F45' }}></div>
                <div className="p-6 rounded-2xl border hover:border-cyan-300/40 transition-colors" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
                  <div className="text-white text-xl font-semibold">{p.title}</div>
                  <div className="text-white/80 mt-1">{p.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
