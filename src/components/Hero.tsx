/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, MessageSquare, Phone, Users, Clock, Award } from "lucide-react";
import { ContactConfig } from "../types";
import { motion } from "motion/react";

interface HeroProps {
  config: ContactConfig;
}

export default function Hero({ config }: HeroProps) {
  const whatsAppLink = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.prefilledMessage)}`;
  const callLink = `tel:${config.phoneNumber}`;

  // Find the generated image path dynamically or refer to the correct generated asset.
  // The generated file is `/src/assets/images/insurance_advisor_1783836975121.jpg`
  const advisorImage = "/src/assets/images/insurance_advisor_1783836975121.jpg";

  return (
    <section id="hero" className="relative overflow-hidden pt-6 pb-16 md:py-24 bg-gradient-to-b from-blue-50/50 via-white to-[#F8FAFC]">
      {/* Decorative background shapes for elegance */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/20 to-transparent pointer-events-none -z-10" />
      <div className="absolute top-12 left-1/4 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-12 right-1/4 w-96 h-96 rounded-full bg-green-50/30 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & Conversion */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Top Micro-Trust Tag */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0F4C81] text-[10px] font-bold uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-[#0F4C81]" />
              <span>IRDAI Registered Partner • Fully Certified</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0F4C81] leading-[1.1] tracking-tight">
                Protect What <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F4C81] to-[#2563EB]">
                  Matters Most
                </span>
              </h1>
              {/* Subheadline */}
              <p className="max-w-xl mx-auto lg:mx-0 font-sans text-slate-500 text-lg sm:text-xl leading-relaxed">
                Affordable insurance plans with instant WhatsApp support and personalized guidance from certified advisors.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-green-200 hover:shadow-green-300 transition-all hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer uppercase tracking-wider"
              >
                <MessageSquare className="h-4 w-4 fill-white group-hover:scale-110 transition-transform" />
                <span>GET FREE QUOTE</span>
              </a>
              <a
                href={callLink}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#2563EB]/20 text-[#2563EB] text-xs font-bold hover:border-[#2563EB] hover:bg-blue-50/50 shadow-sm transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-wider"
              >
                <Phone className="h-4 w-4" />
                <span>CALL AN EXPERT</span>
              </a>
            </div>

            {/* Trust Badges - Row of 3 */}
            <div className="pt-6 border-t border-slate-100 max-w-lg mx-auto lg:mx-0">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center lg:text-left">
                Why thousands trust {config.agencyName}:
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2.5 text-center sm:text-left">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 text-[#25D366]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-800">IRDA Approved</h3>
                    <p className="text-[10px] text-slate-500">100% Secure & Compliant</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2.5 text-center sm:text-left">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-800">10,000+ Customers</h3>
                    <p className="text-[10px] text-slate-500">Verified Happy Families</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-2.5 text-center sm:text-left">
                  <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-xs sm:text-sm text-slate-800">Claim Assistance</h3>
                    <p className="text-[10px] text-slate-500">End-to-End Handholding</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Hero Image */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square lg:aspect-auto">
              
              {/* Background gradient border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81] to-[#25D366] rounded-3xl transform rotate-3 scale-[1.01] opacity-20 blur-sm pointer-events-none" />
              
              {/* Real Advisor Image */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-slate-100 aspect-[4/3] md:aspect-[3/4] lg:aspect-[4/5] xl:aspect-[3/4]">
                <img
                  src={advisorImage}
                  alt="Certified Insurance Advisor"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width="500"
                  height="600"
                />
                
                {/* Image Overlay Gradient for readability on elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floater 1: Active Support Indicator (Top-Left) */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-3 shadow-lg flex items-center gap-3 animate-pulse-slow">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Advisor Status</p>
                  <p className="text-xs font-bold text-slate-800">Online & Ready</p>
                </div>
              </div>

              {/* Floater 2: Fast Response Rating (Bottom-Right) */}
              <div className="absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md border border-slate-100 rounded-2xl p-3 md:p-4 shadow-xl flex items-center gap-3.5">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-green-50 text-[#25D366]">
                  <Clock className="h-5.5 w-5.5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-black text-slate-800">&lt; 2 Mins</span>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Avg WhatsApp Response</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
