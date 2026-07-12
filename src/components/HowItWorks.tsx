/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, HeartHandshake, Compass, BadgeCheck, ArrowRight, ArrowDown } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Contact Us",
      description: "Hit our live WhatsApp button or submit a calculated estimate in seconds.",
      icon: MessageSquare,
      bgColor: "bg-green-50 text-green-600 border-green-100",
    },
    {
      id: 2,
      title: "Understand Needs",
      description: "Our certified advisor schedules a 2-minute call to evaluate your lifestyle & budgets.",
      icon: HeartHandshake,
      bgColor: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      id: 3,
      title: "Compare Plans",
      description: "We query 15+ top insurers and present a clear breakdown of pricing & claim records.",
      icon: Compass,
      bgColor: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      id: 4,
      title: "Get Insured",
      description: "Secure your digital policy with verified claims support active from day one.",
      icon: BadgeCheck,
      bgColor: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#0F4C81]">
            Seamless Onboarding
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-[#0F4C81] tracking-tight leading-tight">
            How It Works in 4 Simple Steps
          </p>
          <div className="h-1.5 w-16 bg-[#0F4C81] mx-auto rounded-full mt-2" />
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Get covered in under 10 minutes. No tedious queues, no dense jargon, just quick and transparent protection.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-16 right-16 h-0.5 bg-slate-200 -translate-y-8 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  
                  {/* Step Card */}
                  <div className="w-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
                    
                    {/* Circle Step Number & Icon */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-2xl border flex items-center justify-center ${step.bgColor}`}>
                        <IconComp className="h-7 w-7" />
                      </div>
                      <span className="absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-[#0F4C81] text-white text-xs font-black flex items-center justify-center shadow">
                        {step.id}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-lg text-slate-900 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="font-sans text-slate-500 text-xs sm:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                  </div>

                  {/* Responsive connectors (Down arrow on mobile/tablet, Right arrow on desktop) */}
                  {index < steps.length - 1 && (
                    <div className="my-4 lg:my-0 lg:absolute lg:top-1/2 lg:-right-4 lg:-translate-y-8 flex items-center justify-center text-slate-300">
                      <ArrowDown className="h-6 w-6 lg:hidden" />
                      <ArrowRight className="h-6 w-6 hidden lg:block" />
                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
