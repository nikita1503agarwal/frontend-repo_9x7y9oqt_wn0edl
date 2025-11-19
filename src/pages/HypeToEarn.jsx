import Navbar from '../components/Navbar'

const colors = { bg: '#0A1A2F', ocean: '#0F2F45', aqua: '#00AEEF', turquoise: '#32D5FF', cyan: '#00E4FF', white: '#FFFFFF' }

export default function HypeToEarnPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.bg }}>
      <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-white mb-4">Hype‑to‑Earn</h1>
        <p className="text-white/80 mb-10">Explication du système & plateformes acceptées. Bot Discord pour vérification. Exemples de partages.</p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card title="Comment ça marche?">
              Chaque jour, gagnez 10 000 HWV simplement en partageant un post sur TikTok, X, Instagram, Reddit ou YouTube Shorts. Vérifié par bot.
            </Card>
            <Card title="Plateformes acceptées">
              TikTok • X • Instagram • Reddit • YouTube Shorts
            </Card>
            <Card title="Bot Discord">
              Rejoignez le serveur et connectez votre compte au bot pour valider vos partages automatiquement.
            </Card>
          </div>

          <div className="space-y-6">
            <Card title="Exemples de partages">
              Vidéos fun, mèmes, tutoriels, témoignages — tant que le lien mène à votre post public.
            </Card>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="inline-block px-6 py-3 rounded-full font-semibold text-slate-900" style={{ backgroundColor: colors.cyan }}>
              Rejoindre le programme
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

function Card({ title, children }) {
  return (
    <div className="p-6 rounded-2xl border text-white" style={{ borderColor: 'rgba(50,213,255,0.2)', background: 'linear-gradient(180deg, rgba(15,47,69,0.35), rgba(10,26,47,0.6))' }}>
      <div className="font-semibold mb-2">{title}</div>
      <div className="text-white/85">{children}</div>
    </div>
  )
}
