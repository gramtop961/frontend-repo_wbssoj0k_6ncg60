import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(124,58,237,0.18),transparent),radial-gradient(900px_500px_at_80%_0%,rgba(59,130,246,0.18),transparent)] from-slate-950 to-slate-900">
      {/* Subtle mesh background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.15]" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,255,255,0.085),transparent)] mix-blend-overlay" />
      </div>

      <main className="relative">
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400" />
              <p className="text-sm text-white/70">© {new Date().getFullYear()} AuraMeet. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6 text-sm text-white/70">
              <a href="#features" className="hover:text-white">Features</a>
              <a href="#pricing" className="hover:text-white">Pricing</a>
              <a href="#cta" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
