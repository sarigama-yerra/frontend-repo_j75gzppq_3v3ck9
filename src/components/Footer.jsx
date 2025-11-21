export default function Footer(){
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-white font-semibold">Cognisphere</p>
            <p className="text-xs text-slate-400">© Intellecta Labs LLC</p>
          </div>
          <nav className="flex gap-6 text-sm text-slate-300">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faqs" className="hover:text-white">FAQs</a>
            <a href="#support" className="hover:text-white">Support</a>
            <a href="#terms" className="hover:text-white">T&C</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
