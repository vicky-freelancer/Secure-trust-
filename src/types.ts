/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactConfig {
  whatsAppNumber: string;
  phoneNumber: string;
  prefilledMessage: string;
  agencyName: string;
}

export interface InsuranceService {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  startingPremium: string;
  benefits: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  review: string;
  rating: number;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}
