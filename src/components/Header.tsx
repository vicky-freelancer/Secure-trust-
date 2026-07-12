/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Shield, Menu, X, Phone, MessageSquare } from "lucide-react";
import { ContactConfig } from "../types";

interface HeaderProps {
  config: ContactConfig;
}

export default function Header({ config }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  const whatsAppLink = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(config.prefilledMessage)}`;
  const callLink = `tel:${config.phoneNumber}`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-100"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#0F4C81] rounded-lg p-1"
            onClick={(e) => handleLinkClick(e, "#root")}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#0F4C81] text-white shadow-md shadow-[#0F4C81]/20">
              <Shield className="h-5.5 w-5.5" strokeWidth={2.5} />
            </div>
            <div>
              <span className="font-display font-bold text-lg leading-tight block tracking-tight text-slate-900">
                {config.agencyName}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400 block -mt-1">
                Insurance Services
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav aria-label="Desktop Navigation" className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="font-sans font-medium text-sm text-slate-600 hover:text-[#0F4C81] transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-0.5 after:bg-[#0F4C81] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={callLink}
              className="flex items-center gap-2 px-5 py-2 border-2 border-[#2563EB]/20 hover:border-[#2563EB] text-[#2563EB] rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer hover:bg-blue-50/50"
            >
              <Phone className="h-3.5 w-3.5 text-[#2563EB]" />
              <span>CALL AN EXPERT</span>
            </a>
            <a
              href={whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full text-xs font-bold transition-all shadow-lg shadow-green-200 hover:shadow-green-300 cursor-pointer"
            >
              <MessageSquare className="h-3.5 w-3.5 fill-white" />
              <span>GET FREE QUOTE</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Overlay */}
      {isOpen && (
        <div className="lg:hidden animate-in fade-in slide-in-from-top duration-200">
          <div className="px-4 pt-4 pb-6 bg-white border-b border-slate-100 shadow-xl space-y-4">
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className="px-3 py-2.5 rounded-xl text-slate-700 hover:bg-slate-50 hover:text-[#0F4C81] font-medium text-base transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-3">
              <a
                href={callLink}
                className="flex items-center justify-center gap-2 py-2.5 rounded-full border-2 border-[#2563EB]/20 text-[#2563EB] font-bold text-xs hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>CALL NOW</span>
              </a>
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="h-3.5 w-3.5 fill-white" />
                <span>WHATSAPP</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
