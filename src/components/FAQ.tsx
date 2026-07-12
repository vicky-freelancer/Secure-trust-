/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("q1");

  const faqs: FAQItem[] = [
    {
      id: "q1",
      question: "How quickly can I get an insurance quote?",
      answer: "You can calculate an instant estimate right now using our interactive premium calculator. For a certified, binding official quote, simply submit your request to our WhatsApp desk. A certified advisor matches your age block and requirements against 15+ top insurers and delivers structured quotation grids in less than 2 minutes!",
    },
    {
      id: "q2",
      question: "How does claim assistance work during emergencies?",
      answer: "When a medical or accidental crisis strikes, simply tap our emergency WhatsApp or Call hotline. Your dedicated claims manager will instantly take over: contacting the hospital, managing the pre-authorization registries, handling surveyor claims, and resolving any administrative hurdles so you can focus entirely on recovery.",
    },
    {
      id: "q3",
      question: "Can I compare multiple plans before purchasing?",
      answer: "Yes, absolutely! We are a certified, multi-brand insurance partner, which means we work for you—not any single insurer. We compare policies across leading providers (including HDFC, ICICI, Care, Tata, etc.) side-by-side on parameters like co-pay, room-rent capping, waiting periods, and network hospitals so you can make an unbiased decision.",
    },
    {
      id: "q4",
      question: "Is WhatsApp support really available 24/7?",
      answer: "Yes. Our digital desk and emergency claims team are active 24/7, 365 days a year, including national holidays. You can upload files, get instant claim pre-approvals, download active policy certificates, or chat directly with a live, certified advisor anytime, day or night.",
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0F4C81] flex items-center justify-center gap-1.5">
            <HelpCircle className="h-4.5 w-4.5 text-[#0F4C81]" /> Common Questions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-[#0F4C81] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <div className="h-1.5 w-16 bg-[#0F4C81] mx-auto rounded-full mt-2" />
          <p className="text-slate-500 text-sm sm:text-base font-sans max-w-lg mx-auto">
            Got questions? We have direct, transparent answers. Reach out on WhatsApp if your question isn't listed here!
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/50 border-[#0F4C81]/20 shadow-sm"
                    : "bg-white border-slate-100 hover:border-slate-200"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left transition-colors font-semibold text-slate-900 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-display font-bold text-sm sm:text-base md:text-lg tracking-tight text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    isOpen ? "bg-[#0F4C81] text-white rotate-180" : "bg-slate-50 text-slate-600"
                  }`}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                {/* Accordion Content */}
                <div
                  id={`faq-answer-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100 border-t border-slate-100/60" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed px-6 py-5">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
