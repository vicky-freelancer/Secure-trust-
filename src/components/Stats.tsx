/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, Handshake, Users } from "lucide-react";

export default function Stats() {
  const [policies, setPolicies] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [partners, setPartners] = useState(0);
  const [years, setYears] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const startCounting = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      // 10,000+ Policies Issued
      const policiesTarget = 10000;
      const policiesDuration = 1500; // ms
      const policiesSteps = 40;
      const policiesIncrement = Math.ceil(policiesTarget / policiesSteps);
      let policiesCurrent = 0;
      
      const policiesInterval = setInterval(() => {
        policiesCurrent += policiesIncrement;
        if (policiesCurrent >= policiesTarget) {
          setPolicies(policiesTarget);
          clearInterval(policiesInterval);
        } else {
          setPolicies(policiesCurrent);
        }
      }, policiesDuration / policiesSteps);

      // 98% Claim Success Rate
      const successTarget = 98;
      let successCurrent = 0;
      const successInterval = setInterval(() => {
        successCurrent += 2;
        if (successCurrent >= successTarget) {
          setSuccessRate(successTarget);
          clearInterval(successInterval);
        } else {
          setSuccessRate(successCurrent);
        }
      }, 30);

      // 15+ Partners
      const partnersTarget = 15;
      let partnersCurrent = 0;
      const partnersInterval = setInterval(() => {
        partnersCurrent += 1;
        if (partnersCurrent >= partnersTarget) {
          setPartners(partnersTarget);
          clearInterval(partnersInterval);
        } else {
          setPartners(partnersCurrent);
        }
      }, 80);

      // 8+ Years Experience
      const yearsTarget = 8;
      let yearsCurrent = 0;
      const yearsInterval = setInterval(() => {
        yearsCurrent += 1;
        if (yearsCurrent >= yearsTarget) {
          setYears(yearsTarget);
          clearInterval(yearsInterval);
        } else {
          setYears(yearsCurrent);
        }
      }, 120);
    };

    // Use IntersectionObserver to start animation only when section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          startCounting();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="statistics"
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-[#0F4C81] to-[#2563EB] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          
          {/* Stat 1 */}
          <div className="space-y-2.5">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-green-300">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight block">
                {policies.toLocaleString()}+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest mt-1">
                Policies Issued
              </p>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="space-y-2.5">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-green-300">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight block">
                {successRate}%
              </span>
              <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest mt-1">
                Claim Success
              </p>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="space-y-2.5">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-green-300">
              <Handshake className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight block">
                {partners}+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest mt-1">
                Insurance Partners
              </p>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="space-y-2.5">
            <div className="mx-auto w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-green-300">
              <Briefcase className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight block">
                {years}+
              </span>
              <p className="text-xs sm:text-sm font-semibold text-blue-100 uppercase tracking-widest mt-1">
                Years Experience
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
