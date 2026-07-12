/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Zap, HeartHandshake, ShieldCheck, Clock2 } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      id: "fast-claim",
      title: "Fast Claim Support",
      description: "Our dedicated 1-on-1 claim desk handholds you through documentation, securing approvals within hours.",
      icon: Zap,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      badge: "Settlement Priority",
    },
    {
      id: "affordable-premium",
      title: "Affordable Premiums",
      description: "Unlock optimized premium packages with up to 40% savings. Absolutely zero hidden fees or markups.",
      icon: ShieldCheck,
      color: "text-green-600",
      bgColor: "bg-green-50",
      badge: "Guaranteed Lowest",
    },
    {
      id: "trusted-advisors",
      title: "Trusted Advisors",
      description: "Get certified, 100% unbiased protection advice tailored to your actual family needs, not sales commissions.",
      icon: HeartHandshake,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      badge: "IRDAI Certified",
    },
    {
      id: "emergency-assistance",
      title: "24/7 Assistance",
      description: "Emergency support is always a click away. Connect to our live crisis response desk via WhatsApp 24/7.",
      icon: Clock2,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      badge: "Always Online",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#0F4C81]">
            Unmatched Standards
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Designed for Trust. Built for Reliability.
          </p>
          <div className="h-1.5 w-16 bg-[#0F4C81] mx-auto rounded-full mt-2" />
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto font-sans">
            We've redesigned the insurance experience from the ground up, placing your peace of mind and claims security above all else.
          </p>
        </div>

        {/* Core 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point) => {
            const IconComponent = point.icon;
            return (
              <div
                key={point.id}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Micro badge */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${point.bgColor} ${point.color} transition-colors group-hover:scale-110 duration-300`}>
                    <IconComponent className="h-6 w-6" strokeWidth={2.2} />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0F4C81]/70 bg-blue-50/50 px-2.5 py-1 rounded-md border border-blue-100/50">
                    {point.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-xl text-slate-900 tracking-tight">
                    {point.title}
                  </h3>
                  <p className="font-sans text-slate-500 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Bottom line decorator */}
                <div className="h-1.5 w-0 bg-gradient-to-r from-[#0F4C81] to-[#2563EB] rounded-full mt-6 group-hover:w-1/3 transition-all duration-300" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
