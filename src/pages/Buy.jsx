import Navbar from '../components/Navbar'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

export default function Buy() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Acheter HypeWave</h1>
        <p className="text-white/80 mb-10 max-w-2xl">Achetez en quelques clics via MoonPay. Suivez le tutoriel simple ci-dessous.</p>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
              <iframe title="MoonPay" src="https://buy.moonpay.com" className="w-full h-[600px]" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
              <h2 className="text-white font-semibold mb-3">Tutoriel (3 étapes)</h2>
              <ol className="list-decimal list-inside text-white/85 space-y-2">
                <li>Connectez votre portefeuille Solana (Phantom, Solflare).</li>
                <li>Choisissez le montant et payez par carte bancaire via MoonPay.</li>
                <li>Recevez vos HWV directement sur votre wallet.</li>
              </ol>
            </div>

            <div className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
              <h2 className="text-white font-semibold mb-3">Q&A Débutants</h2>
              <div className="text-white/85 space-y-2">
                <p><strong>Quelle blockchain ?</strong> Solana.</p>
                <p><strong>Besoin d’USDC ?</strong> Non, MoonPay accepte la carte.</p>
                <p><strong>Où recevoir les tokens ?</strong> Dans votre wallet Solana.</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
              <h2 className="text-white font-semibold mb-3">Note légale</h2>
              <p className="text-white/80 text-sm">HypeWave n’est pas un conseil financier. Faites vos propres recherches. Les cryptoactifs sont volatils et comportent un risque de perte.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
