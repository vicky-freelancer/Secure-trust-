/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageSquare, Phone } from "lucide-react";
import { ContactConfig } from "../types";

interface FloatingCTAsProps {
  config: ContactConfig;
}

export default function FloatingCTAs({ config }: FloatingCTAsProps) {
  const whatsAppLink = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.prefilledMessage)}`;
  const callLink = `tel:${config.phoneNumber}`;

  return (
    <>
      {/* 1. STICKY BOTTOM BAR FOR MOBILE/TABLET (Hidden on desktop lg:hidden) */}
      <div id="mobile-sticky-bar" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 p-3 flex gap-3 shadow-[0_-8px_20px_rgba(15,76,129,0.1)]">
        
        {/* Call Button (Secondary) */}
        <a
          href={callLink}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#0F4C81] hover:bg-[#2563EB] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all active:scale-95 cursor-pointer"
        >
          <Phone className="h-4 w-4" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button (Primary) */}
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 cursor-pointer"
        >
          <MessageSquare className="h-4 w-4 fill-white" />
          <span>WhatsApp Chat</span>
        </a>

      </div>

      {/* 2. FLOATING BUTTONS FOR DESKTOP (Hidden on mobile hidden lg:flex) */}
      <div id="desktop-floating-group" className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        
        {/* Floating Call Button */}
        <a
          href={callLink}
          className="group flex items-center gap-2 bg-[#0F4C81] hover:bg-[#2563EB] text-white p-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl cursor-pointer"
          aria-label="Call Insurance Advisor"
        >
          <span className="max-w-0 overflow-hidden font-display font-bold text-xs whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
            Call Advisor
          </span>
          <Phone className="h-5.5 w-5.5" />
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href={whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-4 rounded-full shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl relative cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing visual element */}
          <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10" />
          
          <span className="max-w-0 overflow-hidden font-display font-extrabold text-xs whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out">
            Instant Quote
          </span>
          <MessageSquare className="h-5.5 w-5.5 fill-white" />
        </a>

      </div>
    </>
  );
}
