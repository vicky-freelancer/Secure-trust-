/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Settings, Check, RefreshCw, Smartphone, MessageSquare } from "lucide-react";
import { ContactConfig } from "../types";

interface CustomizerPanelProps {
  config: ContactConfig;
  onChange: (newConfig: ContactConfig) => void;
}

export default function CustomizerPanel({ config, onChange }: CustomizerPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [whatsApp, setWhatsApp] = useState(config.whatsAppNumber);
  const [phone, setPhone] = useState(config.phoneNumber);
  const [message, setMessage] = useState(config.prefilledMessage);
  const [agency, setAgency] = useState(config.agencyName);
  const [isSaved, setIsSaved] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onChange({
      whatsAppNumber: whatsApp,
      phoneNumber: phone,
      prefilledMessage: message,
      agencyName: agency,
    });
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleReset = () => {
    const defaultConfig = {
      whatsAppNumber: "919876543210",
      phoneNumber: "+919876543210",
      prefilledMessage: "Hi, I need an insurance quote",
      agencyName: "SecureTrust",
    };
    setWhatsApp(defaultConfig.whatsAppNumber);
    setPhone(defaultConfig.phoneNumber);
    setMessage(defaultConfig.prefilledMessage);
    setAgency(defaultConfig.agencyName);
    onChange(defaultConfig);
  };

  return (
    <div id="customizer-panel" className="relative z-50 bg-[#0F4C81] text-white border-b border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
          <p className="font-medium text-xs md:text-sm">
            <span className="font-semibold text-green-300">CRO Sandbox Active:</span> Customize CTA numbers to test live integrations instantly.
          </p>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/10 hover:bg-white/20 transition-all font-medium text-xs border border-white/20 cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="customizer-form"
        >
          <Settings className="h-3.5 w-3.5" />
          {isOpen ? "Hide Settings" : "Configure CTAs"}
        </button>
      </div>

      {isOpen && (
        <div id="customizer-form" className="bg-[#0b3c66] border-t border-white/10 p-4 md:p-6 transition-all duration-300">
          <form onSubmit={handleApply} className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1.5 flex items-center gap-1">
                  <Smartphone className="h-3 w-3" /> Agency Name
                </label>
                <input
                  type="text"
                  value={agency}
                  onChange={(e) => setAgency(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 text-xs md:text-sm"
                  placeholder="e.g. SecureTrust"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1.5 flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> WhatsApp Phone Number
                </label>
                <input
                  type="text"
                  value={whatsApp}
                  onChange={(e) => setWhatsApp(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 text-xs md:text-sm"
                  placeholder="e.g. 919876543210 (with country code)"
                />
                <span className="text-[10px] text-blue-300 mt-1 block">Exclude + or spaces. Country code prefix required.</span>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1.5 flex items-center gap-1">
                  <Smartphone className="h-3 w-3" /> Direct Call Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 text-xs md:text-sm"
                  placeholder="e.g. +919876543210"
                />
                <span className="text-[10px] text-blue-300 mt-1 block">Include country code for direct call link.</span>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-blue-200 mb-1.5 flex items-center gap-1">
                  <MessageSquare className="h-3 w-3" /> Default Message prefill
                </label>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-1.5 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 text-xs md:text-sm"
                  placeholder="Pre-filled text for quote requests"
                />
                <span className="text-[10px] text-blue-300 mt-1 block">Encoded in WhatsApp CTA redirects.</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 mt-5 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1 px-3 py-1.5 rounded hover:bg-white/10 text-xs text-blue-200 font-medium transition-all cursor-pointer"
              >
                <RefreshCw className="h-3 w-3" /> Reset Defaults
              </button>
              <button
                type="submit"
                className={`flex items-center gap-1 px-4 py-1.5 rounded text-xs font-bold transition-all shadow-sm cursor-pointer ${
                  isSaved
                    ? "bg-green-500 text-white"
                    : "bg-white text-[#0F4C81] hover:bg-green-400 hover:text-slate-900"
                }`}
              >
                {isSaved ? (
                  <>
                    <Check className="h-3.5 w-3.5" /> Applied!
                  </>
                ) : (
                  "Apply & Update Landing Page"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
