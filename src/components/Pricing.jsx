import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$29',
    period: 'mo',
    features: [
      '1 AI voice agent',
      '500 minutes included',
      'Basic lead qualification',
      'Calendar integration'
    ]
  },
  {
    name: 'Growth',
    price: '$99',
    period: 'mo',
    highlighted: true,
    features: [
      '3 AI voice agents',
      '3,000 minutes included',
      'Advanced qualification',
      'CRM integrations',
      'Analytics dashboard'
    ]
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: '',
    features: [
      'Unlimited agents',
      'Usage-based minutes',
      'SSO & compliance',
      'Dedicated support'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),rgba(34,197,94,0.1),transparent_70%)] blur-2xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-white/70">Start free. Upgrade when you grow.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className={`relative rounded-2xl border bg-white/5 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1 ${tier.highlighted ? 'border-violet-400/40' : 'border-white/10'}`}>
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-xs text-violet-200">Most popular</div>
              )}
              <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1 text-white">
                <span className="text-3xl font-semibold">{tier.price}</span>
                {tier.period && <span className="text-sm text-white/70">/{tier.period}</span>}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-300 ring-1 ring-inset ring-emerald-400/30">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-2 text-sm font-semibold transition ${tier.highlighted ? 'bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20' : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'}`}>Choose {tier.name}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
