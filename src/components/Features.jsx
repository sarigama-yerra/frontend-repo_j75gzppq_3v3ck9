import { Brain, Layers, ShieldCheck, Sparkles, Gauge, Rows } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Brain className="h-5 w-5 text-cyan-400" />,
      title: 'Model aggregation',
      desc: 'Query ChatGPT, Claude, Gemini, and Perplexity together for multi‑perspective answers.'
    },
    {
      icon: <Layers className="h-5 w-5 text-fuchsia-400" />,
      title: 'Second‑order reasoning',
      desc: 'We synthesize and reconcile outputs to deliver a single, trustworthy summary.'
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
      title: 'Reliability focus',
      desc: 'Cross‑checks reduce hallucinations and surface sources when available.'
    },
    {
      icon: <Gauge className="h-5 w-5 text-blue-400" />,
      title: 'Speed + control',
      desc: 'Parallel calls with smart caching deliver results fast without losing depth.'
    },
    {
      icon: <Rows className="h-5 w-5 text-amber-400" />,
      title: 'Side‑by‑side view',
      desc: 'Toggle a panel showing each individual model response for full transparency.'
    },
    {
      icon: <Sparkles className="h-5 w-5 text-pink-400" />,
      title: 'Always improving',
      desc: 'New models, skills, and tools added continuously as the AI landscape evolves.'
    },
  ]

  return (
    <section id="features" className="relative py-20 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-64 w-[40rem] bg-gradient-to-b from-white/5 to-transparent blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Why Cognisphere</h2>
          <p className="mt-3 text-slate-300">Every perspective, every AI, one place.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                {it.icon}
              </div>
              <h3 className="text-white font-medium mb-1">{it.title}</h3>
              <p className="text-slate-300 text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
