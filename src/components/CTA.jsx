import React from 'react';

const CTA = () => {
  return (
    <section id="cta" className="relative py-20">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 text-center shadow-2xl">
          <div className="mx-auto max-w-2xl">
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              Put AI on your inbound and never miss a lead again
            </h3>
            <p className="mt-3 text-white/70">
              Launch your first agent in minutes. No code, fully customizable, and works with your existing tools.
            </p>
            <form className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <input type="email" placeholder="Work email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/50 outline-none ring-0 backdrop-blur focus:border-white/20 sm:w-80" />
              <button type="submit" className="w-full rounded-xl bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 sm:w-auto">
                Get a demo
              </button>
            </form>
            <p className="mt-3 text-xs text-white/60">Free 14-day trial • No credit card required</p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),rgba(59,130,246,0.1),transparent_70%)] blur-2xl" />
      </div>
    </section>
  );
};

export default CTA;
