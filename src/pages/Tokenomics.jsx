import Navbar from '../components/Navbar'
import { motion } from 'framer-motion'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const item = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

const allocations = [
  { label: 'Fondateur (vesting)', value: 10 },
  { label: 'Liquidité', value: 20 },
  { label: 'Communauté', value: 40 },
  { label: 'Marketing', value: 20 },
  { label: 'Réserve', value: 10 },
]

export default function Tokenomics() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <motion.section initial="hidden" animate="visible" variants={container} className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1 variants={item} className="text-4xl font-bold text-white mb-4">Tokenomics</motion.h1>
        <motion.p variants={item} className="text-white/80 mb-10 max-w-2xl">Répartition transparente des HWV avec un design bleu/aqua.</motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div variants={item} className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <h2 className="text-white font-semibold mb-4">Répartition</h2>
            <ul className="space-y-3">
              {allocations.map((a, i) => (
                <motion.li variants={item} key={i} className="flex items-center justify-between text-white/90">
                  <span>{a.label}</span>
                  <span>{a.value}%</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="p-6 rounded-2xl border flex items-center justify-center" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="relative w-72 h-72">
              <div
                className="w-72 h-72 rounded-full"
                style={{
                  background: `conic-gradient(#32D5FF 0% 40%, #00AEEF 40% 60%, #00E4FF 60% 80%, #0F2F45 80% 90%, #FFFFFF 90% 100%)`,
                  boxShadow: '0 0 40px rgba(0,228,255,0.3)'
                }}
              />
              <div className="absolute inset-8 rounded-full" style={{ backgroundColor: colors.bg }}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-2xl font-bold">HWV</div>
                  <div className="text-white/70 text-sm">HypeWave•X</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
