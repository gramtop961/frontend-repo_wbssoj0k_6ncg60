import React from 'react';
import { Bot, CalendarCheck2, PhoneCall, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Natural conversations',
    desc: 'Human-like voice that understands context, accents, and interruptions.'
  },
  {
    icon: CalendarCheck2,
    title: 'Instant scheduling',
    desc: 'Books meetings directly on your calendar with timezone intelligence.'
  },
  {
    icon: PhoneCall,
    title: 'Multi-channel',
    desc: 'Works across phone, web chat, and WhatsApp with unified analytics.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure & compliant',
    desc: 'Enterprise-grade security with SOC2-ready controls and audit logs.'
  },
  {
    icon: Zap,
    title: 'Lead qualification',
    desc: 'Smart routing and scoring to prioritize high-intent prospects.'
  },
  {
    icon: Sparkles,
    title: 'Custom personas',
    desc: 'Tune tone, script, and goals to match your brand and playbooks.'
  }
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),rgba(59,130,246,0.1),transparent_70%)] blur-2xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Built for revenue teams
          </h2>
          <p className="mt-4 text-white/70">
            Everything you need to capture, qualify, and book meetings automatically.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-transform hover:-translate-y-1">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 p-3 text-violet-300 ring-1 ring-inset ring-white/10">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-violet-500/10 to-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
