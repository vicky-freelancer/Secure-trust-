/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Heart, ShieldCheck, Car, Plane, Briefcase, Users2, Sparkles, MessageSquare, HelpCircle } from "lucide-react";
import { ContactConfig, InsuranceService } from "../types";

interface ServicesProps {
  config: ContactConfig;
}

export default function Services({ config }: ServicesProps) {
  const services: InsuranceService[] = [
    {
      id: "life",
      title: "Life Insurance",
      shortDescription: "Protect your family's future with high-sum assured Term Plans starting at pocket-friendly rates.",
      fullDescription: "Secure your family's dreams, education, and loans with custom term plans and financial protection.",
      iconName: "Heart",
      startingPremium: "₹499/mo",
      benefits: ["High Cover up to ₹1 Crore", "Tax Benefits under Sec 80C", "Accidental Rider Option"],
    },
    {
      id: "health",
      title: "Health Insurance",
      shortDescription: "Cashless hospitalization across 10,000+ top-tier hospitals with zero room rent capping.",
      fullDescription: "Comprehensive medical coverages for surgeries, diagnostics, ICU charges, and pre-post hospitalizations.",
      iconName: "ShieldCheck",
      startingPremium: "₹350/mo",
      benefits: ["Cashless in 2 Hours", "No Room Rent Limits", "Pre-existing Disease Cover"],
    },
    {
      id: "motor",
      title: "Motor Insurance",
      shortDescription: "Bumper-to-bumper protection for cars & bikes with instant roadside breakdown assistance.",
      fullDescription: "Includes zero depreciation, engine protection, damage, third-party liability, and fast claims.",
      iconName: "Car",
      startingPremium: "₹150/mo",
      benefits: ["Zero Depreciation Cover", "24/7 Roadside Assistance", "No Claim Bonus (NCB)"],
    },
    {
      id: "travel",
      title: "Travel Insurance",
      shortDescription: "Secure your international trips against medical emergencies, delayed flights, and lost baggage.",
      fullDescription: "Worry-free international and domestic traveling with instant emergency assistance worldwide.",
      iconName: "Plane",
      startingPremium: "₹99/trip",
      benefits: ["Global Medical Cover", "Delay & Loss Compensation", "Emergency Cash Advance"],
    },
    {
      id: "business",
      title: "Business Insurance",
      shortDescription: "Safeguard your enterprise, stock, liabilities, and employees from operational hazards.",
      fullDescription: "Custom risk coverage for retail shops, manufacturing units, office premises, and professional liability.",
      iconName: "Briefcase",
      startingPremium: "₹999/mo",
      benefits: ["Fire & Theft Protection", "Public Liability Cover", "Employee Health Bundles"],
    },
    {
      id: "family",
      title: "Family Insurance",
      shortDescription: "A single unified premium umbrella plan protecting spouses, children, and dependent parents.",
      fullDescription: "Simplify your finances by wrapping your entire family into one powerful premium coverage.",
      iconName: "Users2",
      startingPremium: "₹599/mo",
      benefits: ["Umbrella Multi-Cover", "Maternity & Newborn Cover", "Senior Parent Add-ons"],
    },
  ];

  // Map icon name string to Lucide component
  const getIcon = (name: string) => {
    switch (name) {
      case "Heart":
        return Heart;
      case "ShieldCheck":
        return ShieldCheck;
      case "Car":
        return Car;
      case "Plane":
        return Plane;
      case "Briefcase":
        return Briefcase;
      case "Users2":
        return Users2;
      default:
        return ShieldCheck;
    }
  };

  // Calculator State
  const [calcType, setCalcType] = useState<string>("health");
  const [calcAge, setCalcAge] = useState<number>(30);
  const [calcCover, setCalcCover] = useState<string>("10Lakhs");
  const [calcTerm, setCalcTerm] = useState<number>(1);
  const [calculatedPremium, setCalculatedPremium] = useState<number>(380);

  // Simple Premium Calculation Simulation logic
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    let base = 200;
    
    // Adjust by insurance type
    if (calcType === "life") base = 450;
    else if (calcType === "health") base = 350;
    else if (calcType === "motor") base = 250;
    else if (calcType === "business") base = 850;
    else if (calcType === "family") base = 550;
    else base = 120;

    // Adjust by age
    let ageMultiplier = 1;
    if (calcAge < 25) ageMultiplier = 0.85;
    else if (calcAge > 45) ageMultiplier = 1.6;
    else if (calcAge > 35) ageMultiplier = 1.25;

    // Adjust by cover amount
    let coverMultiplier = 1;
    if (calcCover === "5Lakhs") coverMultiplier = 0.8;
    else if (calcCover === "10Lakhs") coverMultiplier = 1.0;
    else if (calcCover === "20Lakhs") coverMultiplier = 1.4;
    else if (calcCover === "50Lakhs") coverMultiplier = 2.0;
    else if (calcCover === "1Crore") coverMultiplier = 3.0;

    // Adjust by duration / term
    let termDiscount = 1;
    if (calcTerm === 2) termDiscount = 0.95; // 5% multi-year discount
    else if (calcTerm === 3) termDiscount = 0.90; // 10% discount

    const result = Math.round(base * ageMultiplier * coverMultiplier * termDiscount);
    setCalculatedPremium(result);
  };

  // Custom WhatsApp message for the calculated premium
  const getCalcWhatsAppMsg = () => {
    const selectedService = services.find(s => s.id === calcType)?.title || "Insurance";
    const coverText = calcCover === "1Crore" ? "₹1 Crore" : `₹${calcCover.replace("Lakhs", " Lakhs")}`;
    const customText = `Hi ${config.agencyName}! I calculated a customized quote on your website:
- *Insurance Type:* ${selectedService}
- *Age of Insured:* ${calcAge} Years
- *Coverage Sum:* ${coverText}
- *Term Duration:* ${calcTerm} Year(s)
- *Estimated Premium:* ~₹${calculatedPremium}/month

Please verify my details and help me book this premium rate.`;
    return `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(customText)}`;
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#0F4C81]">
            Our Offerings
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Tailored Insurance Plans for Every Need
          </p>
          <div className="h-1.5 w-16 bg-[#0F4C81] mx-auto rounded-full mt-2" />
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Get instant coverage with minimum documentation. Click on any plan below to request a tailored quote via WhatsApp instantly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComp = getIcon(service.iconName);
            const cardWhatsAppMsg = `Hi ${config.agencyName}! I would like to get a customized free quote for *${service.title}*. Could you please share the best available plans?`;
            const cardWhatsAppUrl = `https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(cardWhatsAppMsg)}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Starting Premium */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F4C81] flex items-center justify-center">
                      <IconComp className="h-6 w-6" />
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Starts At</span>
                      <span className="font-display font-extrabold text-lg text-slate-900">{service.startingPremium}</span>
                    </div>
                  </div>

                  {/* Copy */}
                  <div className="space-y-3 mb-6">
                    <h3 className="font-display font-bold text-2xl text-slate-900 tracking-tight">{service.title}</h3>
                    <p className="font-sans text-slate-500 text-sm leading-relaxed">{service.shortDescription}</p>
                  </div>

                  {/* Core checklist */}
                  <ul className="space-y-2.5 mb-8 text-xs font-medium text-slate-600 border-t border-slate-50 pt-5">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={cardWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-blue-50 hover:bg-[#25D366] text-[#2563EB] hover:text-white text-xs font-bold border border-[#2563EB]/10 hover:border-transparent hover:shadow-lg hover:shadow-green-100 transition-all duration-300 cursor-pointer uppercase tracking-wider"
                >
                  <MessageSquare className="h-3.5 w-3.5 fill-current" />
                  <span>Get Quote</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* --- CRO Masterstroke: Premium Real-Time Quote Calculator Panel --- */}
        <div className="mt-20 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Calculator Form Column */}
          <div className="lg:col-span-7 p-8 md:p-12 space-y-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="h-3 w-3 fill-green-700" /> Premium Estimator
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Instant Interactive Rate Calculator
              </h3>
              <p className="font-sans text-sm text-slate-500">
                Adjust the parameters below to compute an estimated premium rate in real-time.
              </p>
            </div>

            <form onSubmit={handleCalculate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Insurance Type */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                    Insurance Category
                  </label>
                  <select
                    value={calcType}
                    onChange={(e) => {
                      setCalcType(e.target.value);
                      // Default covers based on type
                      if (e.target.value === "life" || e.target.value === "business") {
                        setCalcCover("50Lakhs");
                      } else {
                        setCalcCover("10Lakhs");
                      }
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-semibold focus:outline-none focus:border-[#0F4C81] focus:bg-white"
                  >
                    <option value="life">Life Cover (Term Plan)</option>
                    <option value="health">Health Protection (Medical)</option>
                    <option value="motor">Motor Shield (Vehicle)</option>
                    <option value="business">Business & Liabilities</option>
                    <option value="family">Family Umbrella Cover</option>
                  </select>
                </div>

                {/* Age of Primary Insured */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2 flex justify-between">
                    <span>Age of Insured</span>
                    <span className="text-[#0F4C81]">{calcAge} years</span>
                  </label>
                  <input
                    type="range"
                    min="18"
                    max="65"
                    value={calcAge}
                    onChange={(e) => setCalcAge(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-[#0F4C81]"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-1">
                    <span>18 yrs</span>
                    <span>65 yrs</span>
                  </div>
                </div>

                {/* Coverage Sum Insured */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                    Coverage Required (Sum Insured)
                  </label>
                  <select
                    value={calcCover}
                    onChange={(e) => setCalcCover(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-700 text-sm font-semibold focus:outline-none focus:border-[#0F4C81] focus:bg-white"
                  >
                    <option value="5Lakhs">₹5 Lakhs Cover</option>
                    <option value="10Lakhs">₹10 Lakhs Cover</option>
                    <option value="20Lakhs">₹20 Lakhs Cover</option>
                    <option value="50Lakhs">₹50 Lakhs Cover</option>
                    <option value="1Crore">₹1 Crore Cover</option>
                  </select>
                </div>

                {/* Policy Term / Period */}
                <div>
                  <label className="block text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-2">
                    Policy Term (Duration)
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((yr) => (
                      <button
                        key={yr}
                        type="button"
                        onClick={() => setCalcTerm(yr)}
                        className={`py-2 px-3 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                          calcTerm === yr
                            ? "bg-[#0F4C81] border-transparent text-white shadow-sm"
                            : "bg-slate-50 border-slate-100 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {yr} {yr === 1 ? "Year" : "Years"}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action trigger */}
              <button
                type="button"
                onClick={handleCalculate}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#0F4C81] hover:bg-[#2563EB] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-md cursor-pointer"
              >
                Recalculate Estimate
              </button>
            </form>
          </div>

          {/* Calculator Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F4C81] to-[#125ea1] p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Visual background accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] uppercase tracking-widest font-extrabold text-blue-200 block">
                Estimated Premium Rate
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-sm font-medium text-blue-200">Starting at</span>
                <span className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
                  ₹{calculatedPremium}
                </span>
                <span className="text-sm text-blue-200">/ month</span>
              </div>
              <p className="text-xs text-blue-100 font-medium leading-relaxed">
                *This is an approximate illustration. Actual premium will depend on your detailed medical conditions, claims record, and final insurer approvals.
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10 relative z-10 mt-8 lg:mt-0">
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-green-300 uppercase tracking-widest flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300 animate-pulse"></span>
                  Quote Locked
                </p>
                <h4 className="font-display font-extrabold text-lg leading-tight">
                  Instant Verification Available On WhatsApp
                </h4>
                <p className="text-xs text-blue-100 font-light">
                  Submit these parameters straight to our certified advisors. We will compare top insurers to find matching discounts for your age block!
                </p>
              </div>

              {/* CRITICAL CONVERSION BUTTON */}
              <a
                href={getCalcWhatsAppMsg()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-green-200 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="h-4 w-4 fill-white" />
                <span>Submit to WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
