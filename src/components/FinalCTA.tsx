/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { ContactConfig } from "../types";

interface FinalCTAProps {
  config: ContactConfig;
}

export default function FinalCTA({ config }: FinalCTAProps) {
  const whatsAppLink = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.prefilledMessage)}`;
  const callLink = `tel:${config.phoneNumber}`;

  return (
    <section id="final-cta" className="relative py-24 bg-gradient-to-br from-[#0F4C81] via-[#125ea1] to-[#2563EB] text-white overflow-hidden">
      {/* Visual styling background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(37,211,102,0.15),transparent)] pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Shield Icon Decoration */}
        <div className="mx-auto w-16 h-16 rounded-3xl bg-white/10 flex items-center justify-center text-green-300 shadow-inner">
          <ShieldCheck className="h-9 w-9" strokeWidth={2} />
        </div>

        {/* Copy */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
            Ready to Secure Your Future?
          </h2>
          <p className="font-sans text-blue-100 text-sm sm:text-base md:text-lg">
            Don't leave your family's health, wealth, or business to chance. Get a custom, certified insurance portfolio setup today. Instant support is always a tap away.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-4">
          <a
            href={whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider shadow-xl shadow-green-200 hover:shadow-green-300 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageSquare className="h-4 w-4 fill-white" />
            <span>CHAT ON WHATSAPP</span>
          </a>
          <a
            href={callLink}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#0F4C81] hover:bg-slate-50 text-xs font-bold uppercase tracking-wider shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Phone className="h-4 w-4 text-[#0F4C81]" />
            <span>CALL NOW</span>
          </a>
        </div>

        {/* Trust Disclaimer */}
        <p className="text-[10px] text-blue-200 font-medium">
          🔒 No obligations • Free consultation • IRDAI Registered Partner Agency
        </p>

      </div>
    </section>
  );
}
