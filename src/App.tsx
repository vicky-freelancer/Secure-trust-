/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ContactConfig } from "./types";
import CustomizerPanel from "./components/CustomizerPanel";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Benefits from "./components/Benefits";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import FloatingCTAs from "./components/FloatingCTAs";

export default function App() {
  // Global CRO Config state - updates all CTAs across the landing page dynamically
  const [config, setConfig] = useState<ContactConfig>({
    whatsAppNumber: "919876543210",
    phoneNumber: "+919876543210",
    prefilledMessage: "Hi! I need an insurance quote",
    agencyName: "SecureTrust",
  });

  return (
    <div id="landing-root" className="min-h-screen bg-[#F8FAFC] flex flex-col antialiased selection:bg-[#0F4C81] selection:text-white">
      {/* Interactive sandbox customizer to test WhatsApp/Call triggers instantly */}
      <CustomizerPanel config={config} onChange={setConfig} />

      {/* Header Navigation Section */}
      <Header config={config} />

      {/* Main Page Layout */}
      <main id="main-content" className="flex-grow">
        {/* Section 1: Hero and Trust signals */}
        <Hero config={config} />

        {/* Section 2: Core Strength Indicators (Why Choose Us) */}
        <WhyChooseUs />

        {/* Section 3: Insurance Service categories + Instant Rate Estimator */}
        <Services config={config} />

        {/* Section 7: Statistics Counters (Placed strategically here to validate services success) */}
        <Stats />

        {/* Section 4: Customer Benefits & Live Policy Certificate Preview */}
        <Benefits />

        {/* Section 5: Onboarding Stages (How It Works) */}
        <HowItWorks />

        {/* Section 6: Verified Customer Testimonials */}
        <Testimonials />

        {/* Section 8: FAQ accordion */}
        <FAQ />

        {/* Section 9: Last-Mile Centered Conversion Segment (Final CTA) */}
        <FinalCTA config={config} />
      </main>

      {/* Footer and disclaimers */}
      <Footer config={config} />

      {/* Floating CTA elements (Desktop floating dots + Mobile bottom locked sticky bar) */}
      <FloatingCTAs config={config} />
    </div>
  );
}
