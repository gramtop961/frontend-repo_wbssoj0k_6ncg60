import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15),rgba(59,130,246,0.08),transparent_60%)] blur-2xl" />
      </div>

      {/* Navigation */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 shadow-[0_0_25px_rgba(59,130,246,0.45)]" />
              <span className="text-sm font-semibold tracking-tight text-white">AuraMeet</span>
            </div>
            <div className="hidden items-center gap-8 text-sm text-white/80 md:flex">
              <a href="#features" className="transition-colors hover:text-white">Features</a>
              <a href="#pricing" className="transition-colors hover:text-white">Pricing</a>
              <a href="#cta" className="transition-colors hover:text-white">Contact</a>
            </div>
            <div className="flex items-center gap-3">
              <button className="hidden rounded-xl px-4 py-2 text-sm text-white/80 transition-colors hover:text-white md:block">Log in</button>
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform hover:translate-y-[-1px]">
                Start free trial <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-16 md:grid-cols-2 md:pt-24 lg:pt-28">
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
              New: AI voice agent that books meetings 24/7
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              The AI appointment setter that never sleeps
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Convert more inbound leads and qualify prospects automatically. AuraMeet answers, qualifies, and schedules meetings on your calendar with human-grade voice and context.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform hover:translate-y-[-1px]">
                Start free trial <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10">
                <PlayCircle className="h-5 w-5" /> See how it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border border-slate-800 bg-gradient-to-br from-violet-400 to-blue-400" />
                <span className="h-7 w-7 rounded-full border border-slate-800 bg-gradient-to-br from-cyan-400 to-blue-400" />
                <span className="h-7 w-7 rounded-full border border-slate-800 bg-gradient-to-br from-rose-400 to-amber-300" />
              </div>
              <span>Loved by 2,000+ SDRs and founders</span>
            </div>
          </div>

          {/* Spline animation */}
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-xl"></div>
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
