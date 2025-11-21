import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-slate-950" id="hero">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl bg-cyan-500/20" />
        <div className="absolute top-1/2 right-0 h-80 w-80 translate-x-1/3 -translate-y-1/2 rounded-full blur-3xl bg-fuchsia-500/20" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-cyan-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Live preview • Early access
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tighter tracking-tight text-white">
              Unifying the world’s best AIs
            </h1>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              Ask once. We query ChatGPT, Claude, Gemini, and Perplexity, then synthesize a single, trusted answer with advanced reasoning.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4" id="cta">
              <a href="#pricing" className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:from-blue-500 hover:to-cyan-400 transition-all">
                Try it for Free
              </a>
              <a href="#features" className="px-5 py-3 rounded-lg bg-white/5 text-white/90 border border-white/10 hover:bg-white/10 transition-all">
                See how it works
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-400">
              Starting at $12.99/month • Cancel anytime
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] rounded-2xl overflow-hidden border border-white/10 bg-black/30">
            <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
