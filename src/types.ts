/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface BrandItem {
  name: string;
  tagline: string;
  established: string;
}

export interface GeneratorProduct {
  id: string;
  name: string;
  kva: number;
  brand: string;
  engineBrand: string;
  fuelType: string;
  fuelConsumption: string; // e.g. "Liters/hour at 75% load"
  phase: "Single" | "Three";
  noiseLevel: string; // e.g. "< 75 dBA at 1 meter"
  isReadyForRent: boolean;
  isReadyForSale: boolean;
  description: string;
  applications: string[];
}

export interface IndustryServed {
  name: string;
  iconName: string;
  description: string;
  requiredKvaRange: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: "Maintenance" | "Rental Guide" | "Product Launch" | "Safety";
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  companyName: string;
  comment: string;
  rating: number;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface QuoteRequest {
  fullName: string;
  phone: string;
  email: string;
  companyName?: string;
  serviceType: "Rent" | "Purchase_New" | "Purchase_Used" | "Servicing" | "AMC";
  powerKva: string;
  durationMonths: number;
  siteLocation: string;
  additionalNotes: string;
}
