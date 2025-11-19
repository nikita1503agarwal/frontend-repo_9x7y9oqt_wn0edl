import Home from './pages/Home'
import Buy from './pages/Buy'
import Tokenomics from './pages/Tokenomics'
import Roadmap from './pages/Roadmap'
import HypeToEarnPage from './pages/HypeToEarn'
import CommunityPage from './pages/Community'
import WhitePaper from './pages/WhitePaper'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/tokenomics" element={<Tokenomics />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="/hype-to-earn" element={<HypeToEarnPage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/whitepaper" element={<WhitePaper />} />
    </Routes>
  )
}
