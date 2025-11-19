import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { WhatIs, WhyDifferent, HypeToEarn, Community, Footer } from '../components/Sections'

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0A1A2F' }}>
      <Navbar />
      <Hero />
      <WhatIs />
      <WhyDifferent />
      <HypeToEarn />
      <Community />
      <Footer />
    </div>
  )
}
