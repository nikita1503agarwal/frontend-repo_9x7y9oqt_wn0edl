import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

const colors = {
  bg: '#0A1A2F',
  ocean: '#0F2F45',
  aqua: '#00AEEF',
  turquoise: '#32D5FF',
  cyan: '#00E4FF',
  white: '#FFFFFF',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive
        ? 'text-white'
        : 'text-white/70 hover:text-white'
    }`

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5" style={{ backgroundColor: 'rgba(10,26,47,0.5)', borderBottom: '1px solid rgba(50,213,255,0.15)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,228,255,0.4)]" style={{ background: `linear-gradient(135deg, ${colors.turquoise}, ${colors.aqua})`}}>
              <span className="text-slate-900 font-black">HW</span>
            </div>
            <span className="text-white font-semibold tracking-wide">HypeWave•X</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/buy" className={linkClass}>Acheter</NavLink>
            <NavLink to="/tokenomics" className={linkClass}>Tokenomics</NavLink>
            <NavLink to="/roadmap" className={linkClass}>Roadmap</NavLink>
            <NavLink to="/hype-to-earn" className={linkClass}>Hype‑to‑Earn</NavLink>
            <NavLink to="/community" className={linkClass}>Communauté</NavLink>
            <NavLink to="/whitepaper" className={linkClass}>WhitePaper</NavLink>
          </nav>

          <div className="hidden md:block">
            <Link to="/buy" className="px-4 py-2 rounded-full font-semibold text-slate-900 shadow-[0_10px_30px_rgba(0,228,255,0.35)]" style={{ backgroundColor: colors.cyan }}>
              Acheter HypeWave
            </Link>
          </div>

          <button className="md:hidden text-white/80" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <NavLink to="/buy" className={linkClass} onClick={() => setOpen(false)}>Acheter</NavLink>
              <NavLink to="/tokenomics" className={linkClass} onClick={() => setOpen(false)}>Tokenomics</NavLink>
              <NavLink to="/roadmap" className={linkClass} onClick={() => setOpen(false)}>Roadmap</NavLink>
              <NavLink to="/hype-to-earn" className={linkClass} onClick={() => setOpen(false)}>Hype‑to‑Earn</NavLink>
              <NavLink to="/community" className={linkClass} onClick={() => setOpen(false)}>Communauté</NavLink>
              <NavLink to="/whitepaper" className={linkClass} onClick={() => setOpen(false)}>WhitePaper</NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
