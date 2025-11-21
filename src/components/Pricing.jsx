export default function Pricing(){
  return (
    <section id="pricing" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Straightforward pricing</h2>
          <p className="mt-3 text-slate-300">Premium access to multiple top models — without the premium bill.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-cyan-300 font-medium">Starter</p>
            <h3 className="mt-2 text-4xl font-semibold text-white">$0</h3>
            <p className="text-slate-400 text-sm">Limited daily queries • Great to try</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Community models</li>
              <li>Side‑by‑side viewer</li>
              <li>Basic export</li>
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white">Get started</a>
          </div>

          <div className="rounded-2xl border-2 border-cyan-400/40 bg-gradient-to-b from-cyan-400/5 to-white/5 p-6 shadow-[0_0_40px_-10px_rgba(34,211,238,0.35)]">
            <p className="text-cyan-300 font-medium">Pro</p>
            <h3 className="mt-2 text-4xl font-semibold text-white">$12.99</h3>
            <p className="text-slate-400 text-sm">Full access for power users</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>ChatGPT, Claude, Gemini, Perplexity</li>
              <li>Advanced reasoning summary</li>
              <li>Priority latency</li>
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white">Upgrade</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-cyan-300 font-medium">Teams</p>
            <h3 className="mt-2 text-4xl font-semibold text-white">Contact</h3>
            <p className="text-slate-400 text-sm">Controls, SSO, usage insights</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-300">
              <li>Seat‑based pricing</li>
              <li>Admin controls</li>
              <li>Dedicated support</li>
            </ul>
            <a href="#" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-white">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
