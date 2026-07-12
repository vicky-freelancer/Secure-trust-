/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, FileCheck, HelpCircle, HeartHandshake, ShieldAlert, Award } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      id: "comp",
      title: "Instant Policy Comparison",
      description: "Stop visiting multiple insurer portals. We compile policy grids from top national providers in a single scannable view.",
    },
    {
      id: "rates",
      title: "Best Premium Rates",
      description: "Our long-standing insurance integrations unlock wholesale premium prices with savings up to 40% direct to you.",
    },
    {
      id: "doc",
      title: "Easy Documentation",
      description: "Completely digital, zero-paperwork experience. Upload documents via WhatsApp and we will handle the official registry.",
    },
    {
      id: "guidance",
      title: "Expert Guidance",
      description: "Zero biased sales pressure. Talk with certified advisors who prioritize your budget over commission structures.",
    },
    {
      id: "assist",
      title: "Claim Assistance",
      description: "Dedicated 24/7 claims desk standby. We handhold you through hospital pre-auths, third-party disputes, and filings.",
    },
    {
      id: "lifetime",
      title: "Lifetime Support",
      description: "Your coverage stays optimized forever. We provide continuous policy health checks, upgrades, and premium resets.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: High Fidelity UI Card / "Illustration" Representation */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81] to-blue-200/40 rounded-3xl blur-2xl -z-10 pointer-events-none" />
            
            {/* Visual Secure Policy Card */}
            <div className="relative bg-slate-950 text-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-800">
              
              {/* Card Header */}
              <div className="flex justify-between items-center pb-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F4C81] flex items-center justify-center text-white">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-sm tracking-tight block">SureTrust Cover</span>
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block">Smart Policy Guard</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-extrabold tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                  ACTIVE
                </div>
              </div>

              {/* Card Body - Policy Details */}
              <div className="space-y-6 pt-6">
                
                {/* Holder Name & ID */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">POLICYHOLDER</span>
                    <span className="text-sm font-semibold text-slate-200 block">Vignesh Adler</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">POLICY NUMBER</span>
                    <span className="text-sm font-mono text-slate-200 block">ST-9823-HEALTH</span>
                  </div>
                </div>

                {/* Cover metrics */}
                <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 flex justify-between items-center">
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block">SUM ASSURED</span>
                    <span className="text-2xl font-black font-display text-white tracking-tight">₹1,00,00,000</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-500 block">CASHLESS LIMIT</span>
                    <span className="text-sm font-bold text-green-400 block">100% Cashless</span>
                  </div>
                </div>

                {/* Interactive checklist verification mockup */}
                <div className="space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">INSTANT BENEFIT VERIFICATIONS</span>
                  
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-green-400" /> Pre-Hospitalization
                      </span>
                      <span className="font-bold text-white">Covered (60 Days)</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-green-400" /> Daycare Treatments
                      </span>
                      <span className="font-bold text-white">Covered (Full)</span>
                    </div>

                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center gap-2">
                        <FileCheck className="h-4 w-4 text-green-400" /> Road Ambulance Charge
                      </span>
                      <span className="font-bold text-white">Covered (Actuals)</span>
                    </div>
                  </div>
                </div>

                {/* Footer seal badge */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-800 text-[10px] text-slate-500 font-bold">
                  <span className="uppercase tracking-widest">DIGITALLY SECURED</span>
                  <span className="flex items-center gap-1 text-[#0F4C81]">
                    <Award className="h-3.5 w-3.5" /> SECURETRUST SEAL
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Benefits Checklist */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0F4C81] block">
                Exclusive Advantages
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F4C81] leading-tight tracking-tight">
                High-Converting Protection Benefits Crafted for You
              </h2>
              <div className="h-1.5 w-16 bg-[#0F4C81] rounded-full mt-2" />
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#0F4C81]/10 text-[#0F4C81]">
                      <Check className="h-4 w-4" strokeWidth={3} />
                    </div>
                    <h3 className="font-display font-bold text-base text-slate-900 tracking-tight">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed pl-9">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
