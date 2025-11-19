import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const colors = {
  bg: '#0A1A2F',
  ocean: '#0F2F45',
  aqua: '#00AEEF',
  turquoise: '#32D5FF',
  cyan: '#00E4FF',
  white: '#FFFFFF',
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.15 * i, duration: 0.6, ease: 'easeOut' } })
}

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] flex items-center" style={{ backgroundColor: colors.bg }}>
      <div className="absolute inset-0 opacity-90">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1A2F]/70 via-[#0A1A2F]/70 to-[#0A1A2F] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border"
            style={{ borderColor: 'rgba(50,213,255,0.3)', backgroundColor: 'rgba(15,47,69,0.5)', color: colors.white }}
          >
            Solana • Communautaire • Viral
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight"
            style={{ color: colors.white }}
          >
            Ride the Wave. <span className="text-[#32D5FF]">Shape the Future.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-4 text-lg text-white/80 max-w-xl"
          >
            HypeWave est la crypto simple, fun et accessible à tous. Achetez en quelques clics, participez en partageant, gagnez des tokens, rejoignez une communauté mondiale.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="https://www.moonpay.com/buy" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full font-semibold text-slate-900 shadow-[0_10px_35px_rgba(0,228,255,0.6)] hover:shadow-[0_15px_45px_rgba(0,228,255,0.7)] transition-shadow" style={{ backgroundColor: colors.cyan }}>
              Acheter HypeWave
            </a>
            <Link to="/hype-to-earn" className="px-6 py-3 rounded-full font-semibold border text-white/90 hover:text-white transition" style={{ borderColor: colors.turquoise }}>
              Hype‑to‑Earn
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
