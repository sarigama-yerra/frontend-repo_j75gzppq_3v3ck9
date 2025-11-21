import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Support', href: '#support' },
    { label: 'T&C', href: '#terms' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-fuchsia-500 shadow-[0_0_30px_rgba(56,189,248,0.35)]" />
            <div className="leading-tight">
              <p className="text-white font-semibold text-lg tracking-tight">Cognisphere</p>
              <p className="text-xs text-cyan-300/80">by Intellecta Labs LLC</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-[0_10px_30px_-10px_rgba(56,189,248,0.6)] hover:from-blue-500 hover:to-cyan-400 transition-all"
            >
              Try it for Free
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="inline-flex px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium"
            >
              Try it for Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
