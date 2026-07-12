/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Shield, Phone, Mail, MapPin, MessageSquare, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { ContactConfig } from "../types";

interface FooterProps {
  config: ContactConfig;
}

export default function Footer({ config }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const whatsAppLink = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.prefilledMessage)}`;
  const callLink = `tel:${config.phoneNumber}`;

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="main-footer" className="bg-slate-900 text-slate-400 pt-16 pb-24 lg:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#" onClick={(e) => handleScrollTo(e, "#root")} className="inline-flex items-center gap-2.5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0F4C81] text-white">
                <Shield className="h-5 w-5" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display font-bold text-base tracking-tight text-white block">
                  {config.agencyName}
                </span>
                <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-500 block -mt-1">
                  Insurance Services
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We are a certified, multi-brand insurance broker dedicated to finding the highest coverage plans at the lowest premiums. End-to-end claim assistance with zero stress.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0F4C81] hover:text-white flex items-center justify-center transition-colors text-slate-400" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#2563EB] hover:text-white flex items-center justify-center transition-colors text-slate-400" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors text-slate-400" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#0F4C81] hover:text-white flex items-center justify-center transition-colors text-slate-400" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Insurance Offerings
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-white transition-colors">
                  Life Insurance Cover
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-white transition-colors">
                  Health & Medical Insurance
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-white transition-colors">
                  Motor Vehicle Shield
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-white transition-colors">
                  Travel Protection Plans
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "#services")} className="hover:text-white transition-colors">
                  Business Liability Covers
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact coordinates */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-white">
              Get in Touch
            </h3>
            
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#0F4C81] flex-shrink-0 mt-0.5" />
                <span>Suite 402, Financial District, Gachibowli, Hyderabad, Telangana, 500032</span>
              </li>
              <li>
                <a href={callLink} className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 text-[#0F4C81] flex-shrink-0" />
                  <span>{config.phoneNumber}</span>
                </a>
              </li>
              <li>
                <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                  <MessageSquare className="h-4 w-4 text-green-500 fill-green-500/10 flex-shrink-0" />
                  <span>WhatsApp Chat Desk (24/7)</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#0F4C81] flex-shrink-0" />
                <span>support@securetrust-insurance.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright & Standard IRDA Notice */}
        <div className="pt-8 text-[11px] sm:text-xs text-slate-500 space-y-4 text-center lg:text-left">
          
          {/* Statutory warning */}
          <p className="leading-relaxed">
            <span className="font-bold text-slate-400">Statutory Notice:</span> Insurance is the subject matter of solicitation. For more details on risk factors, product parameters, exclusions, terms, and conditions, please read the relevant sales brochures and policy terms carefully before concluding a sale. Registered Partner Agency IRDAI Registration No. Agency-98273617.
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 border-t border-slate-800/50 pt-4">
            <p>
              © {currentYear} {config.agencyName} Insurance Services. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300">Terms of Use</a>
              <span>•</span>
              <a href="#" className="hover:text-slate-300">Statutory Disclosures</a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
