export default function FAQs(){
  const faqs = [
    {
      q: 'How does Cognisphere work?',
      a: 'You enter a query, we call multiple top models in parallel and then apply a second layer of reasoning to summarize the best answer.'
    },
    {
      q: 'Which models are included?',
      a: 'ChatGPT, Claude, Gemini, and Perplexity at launch, with more added regularly.'
    },
    {
      q: 'Can I see individual model responses?',
      a: 'Yes. Toggle the side‑by‑side panel for full transparency.'
    },
    {
      q: 'What about data privacy?',
      a: 'We never sell your data. Enterprise plan supports data retention controls.'
    },
  ]

  return (
    <section id="faqs" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white text-center mb-10">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
              <summary className="cursor-pointer list-none">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">{f.q}</span>
                  <span className="text-slate-400 group-open:hidden">+</span>
                  <span className="text-slate-400 hidden group-open:inline">−</span>
                </div>
              </summary>
              <p className="mt-3 text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
