/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote } from "lucide-react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const reviews: Testimonial[] = [
    {
      id: "t1",
      name: "Rajesh Kumar",
      role: "Business Owner",
      location: "New Delhi",
      review: "Our business warehouse was completely covered by SecureTrust in 2 days. When we had a water leak incident, their Claims Desk settled the expenses within 24 hours. Incredible response on WhatsApp!",
      rating: 5,
      avatarSeed: "rajesh",
    },
    {
      id: "t2",
      name: "Priyanka Sharma",
      role: "Tech Consultant",
      location: "Bengaluru",
      review: "I was highly skeptical about life insurance advisors until I chatted with SecureTrust. Zero pushy sales pitches. They helped me compare 3 plans and selected a term policy that saved me 35% on premiums.",
      rating: 5,
      avatarSeed: "priyanka",
    },
    {
      id: "t3",
      name: "Anil Deshmukh",
      role: "Retired Professor",
      location: "Pune",
      review: "Adding cashless health insurance for my senior parents was complex. SecureTrust consolidated everything into a single umbrella cover. Their 24/7 support is extremely responsive on WhatsApp. Highly recommended!",
      rating: 5,
      avatarSeed: "anil",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest font-bold text-[#0F4C81]">
            Social Proof
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-[#0F4C81] tracking-tight leading-tight">
            Loved by 10,000+ Happy Customers
          </p>
          <div className="h-1.5 w-16 bg-[#0F4C81] mx-auto rounded-full mt-2" />
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Hear from our policyholders who experienced seamless setups, transparent consultations, and rapid claim settlements.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((t) => {
            // High quality fallback avatar placeholder using Picsum with unique seed
            const avatarUrl = `https://picsum.photos/seed/${t.avatarSeed}/120/120`;

            return (
              <div
                key={t.id}
                className="group relative bg-slate-50 hover:bg-white rounded-3xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Decorative Quote mark */}
                <div className="absolute top-6 right-8 text-slate-200 group-hover:text-[#0F4C81]/10 transition-colors">
                  <Quote className="h-10 w-10 rotate-180 fill-current" />
                </div>

                <div className="space-y-5">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-sans text-slate-600 text-sm leading-relaxed italic relative z-10">
                    "{t.review}"
                  </p>
                </div>

                {/* User Details */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100/60 mt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm bg-slate-200">
                    <img
                      src={avatarUrl}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-medium">
                      {t.role} • <span className="text-[#0F4C81]">{t.location}</span>
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
