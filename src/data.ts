/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BrandItem,
  ServiceItem,
  GeneratorProduct,
  IndustryServed,
  BlogArticle,
  Testimonial,
  FaqItem
} from "./types";

export const BRANDS: BrandItem[] = [
  {
    name: "Kirloskar KOD",
    tagline: "Eco-friendly, robust, high fuel efficiency range.",
    established: "Kirloskar Green"
  },
  {
    name: "Cummins Power Generation",
    tagline: "World leader in power generation, high-performance engines.",
    established: "cummins"
  },
  {
    name: "Ashok Leyland LEYPOWER",
    tagline: "Heavy-duty performance, indigenous reliable technology.",
    established: "ashok_leyland"
  },
  {
    name: "Mahindra Powerol",
    tagline: "Unmatched reliability, best-in-class mileage, and CPCB-compliant.",
    established: "mahindra"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "rent",
    title: "Genset on Rent",
    description: "Wide range of DG sets on rental basis. Short term or long term – we've got you covered.",
    highlights: ["15 kVA to 2000 kVA capacities", "Short-term / Daily / Monthly contracts", "CPCB compliant acoustic enclosures", "Operators and logistics handled by HPS"]
  },
  {
    id: "sale-purchase",
    title: "Sale & Purchase",
    description: "We deals in brand new & certified used gensets. Premium performance units at the most competitive wholesale prices.",
    highlights: ["Authorized dealer alternatives", "Pre-tested certified second-hand systems", "Complete ownership transfer support", "Buyback guarantee options"]
  },
  {
    id: "service-amc",
    title: "Service & AMC",
    description: "Regular preventative maintenance and emergency Annual Maintenance Contracts to ensure absolute power backup continuity.",
    highlights: ["Custom corporate AMC agreements", "Genuine spare parts replacement", "Preventative fuel system flushing", "Load bank testing services"]
  },
  {
    id: "installation",
    title: "Installation",
    description: "Turnkey diagnostic and professional system deployment by experienced technicians, matching state and central safety laws.",
    highlights: ["Exhaust duct extensions & piping", "Vibration isolator foundation pads", "AMF Panel synchronization", "Central pollution control board clearance assistance"]
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Dedicated elite service team standing by for immediate onsite emergency breakdown response and technical advice.",
    highlights: ["Emergency response van equipped", "Direct hotline to standby engineers", "Guaranteed 2-hour response in major NCR industrial zones", "Full load replacement backups if required"]
  }
];

export const INDUSTRIES: IndustryServed[] = [
  {
    name: "Construction",
    iconName: "HardHat",
    description: "Powering cranes, heavy mining drills, high mast tower lighting, and temporary offices in high-dust settings.",
    requiredKvaRange: "62.5 KVA - 500 KVA"
  },
  {
    name: "Hospitals",
    iconName: "Hospital",
    description: "Absolute zero-break power solutions for emergency ICUs, life-supporting ventilators, diagnostic centers, and vaccine refrigeration blocks.",
    requiredKvaRange: "125 KVA - 1250 KVA"
  },
  {
    name: "Manufacturing",
    iconName: "Factory",
    description: "Guaranteeing high-reliability continuous flow for pharmaceutical plants, plastic molding, packaging arrays, and heavy-rolling mills.",
    requiredKvaRange: "250 KVA - 2000 KVA"
  },
  {
    name: "Events",
    iconName: "Music",
    description: "Super silent, aesthetically enclosed diesel generators supplying flawless sound-stages, luxury outdoor wedding tents, and large exhibitions.",
    requiredKvaRange: "30 KVA - 250 KVA"
  },
  {
    name: "IT & Data Centers",
    iconName: "Database",
    description: "Precision automated AMF panel active links, maintaining uptime for server farms, security networks, and central air conditioning blocks.",
    requiredKvaRange: "500 KVA - 2000 KVA"
  },
  {
    name: "Hotels",
    iconName: "Hotel",
    description: "Acoustic canopy isolated units ensuring ultimate guest luxury, operating central lifts, thermal boilers, laundry lines, and restaurant kitchens.",
    requiredKvaRange: "125 KVA - 750 KVA"
  }
];

export const PRODUCTS: GeneratorProduct[] = [
  {
    id: "hps-mahindra-15",
    name: "Mahindra Powerol 15 KVA Silent",
    kva: 15,
    brand: "Mahindra Powerol",
    engineBrand: "Mahindra Engine",
    fuelType: "Diesel",
    fuelConsumption: "2.8 Liters/hour",
    phase: "Single",
    noiseLevel: "< 75 dBA at 1m (Acoustic Canopy)",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Perfect low-noise single phase system tailored for high-end residential, private clinics, bank ATMs, and local stores.",
    applications: ["Bank ATMs", "Retail Shops", "Small Offices", "Private Residences"]
  },
  {
    id: "hps-kirloskar-25",
    name: "Kirloskar Green 25 KVA Silent",
    kva: 25,
    brand: "Kirloskar Green",
    engineBrand: "Kirloskar Engine",
    fuelType: "Diesel",
    fuelConsumption: "4.5 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m (CPCB Compliant)",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Highly robust low-noise three-phase system designed for small clinics, offices, and mid-sized retail outlets.",
    applications: ["Small Clinics", "Restaurants", "Showrooms", "Residential Societies"]
  },
  {
    id: "hps-leypower-40",
    name: "Ashok Leyland LEYPOWER 40 KVA Silent",
    kva: 40,
    brand: "Ashok Leyland LEYPOWER",
    engineBrand: "Ashok Leyland Engine",
    fuelType: "Diesel",
    fuelConsumption: "7.2 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Extremely reliable mid-tier power unit built for commercial offices, schools, and local utility support.",
    applications: ["Corporate Offices", "Medium Shops", "Schools", "Agriculture Farms"]
  },
  {
    id: "hps-kirloskar-58",
    name: "Kirloskar Green 58.5 KVA Silent",
    kva: 58.5,
    brand: "Kirloskar Green",
    engineBrand: "Kirloskar Engine",
    fuelType: "Diesel",
    fuelConsumption: "10.5 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Excellent fuel efficiency and reliable backup solution for community blocks, mid-scale healthcare facilities, and malls.",
    applications: ["Hospitals", "Mini Malls", "Cold Storages", "Construction Sites"]
  },
  {
    id: "hps-cummins-62",
    name: "Cummins Powerol 62.5 KVA Silent",
    kva: 62.5,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins Engine",
    fuelType: "Diesel",
    fuelConsumption: "11.2 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m (CPCB Approved)",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Mid-tier industrial standard heavy builder, providing robust backup support with high starting torque and load acceptance capabilities.",
    applications: ["Multi-story Offices", "Construction Sites", "Medium Scale Factories", "Banquet Halls"]
  },
  {
    id: "hps-mahindra-82",
    name: "Mahindra Powerol 82.5 KVA Silent",
    kva: 82.5,
    brand: "Mahindra Powerol",
    engineBrand: "Mahindra Engine",
    fuelType: "Diesel",
    fuelConsumption: "14.8 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "State-of-the-art power solution for heavy commercial showrooms, marriage halls, and corporate offices.",
    applications: ["Large Showrooms", "Commercial Offices", "Data Rooms", "Marriage Banquets"]
  },
  {
    id: "hps-kirloskar-125",
    name: "Kirloskar Green 125 KVA Intelligent Silent",
    kva: 125,
    brand: "Kirloskar Green",
    engineBrand: "Kirloskar Engine",
    fuelType: "Diesel",
    fuelConsumption: "21.5 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Fully electronic governor engine built with active remote monitoring systems, ensuring high power efficiency with smart load distributions.",
    applications: ["Supermarkets", "Corporate Hubs", "Community Hospitals", "Cold Storage Units"]
  },
  {
    id: "hps-leypower-200",
    name: "Ashok Leyland LEYPOWER 200 KVA Silent",
    kva: 200,
    brand: "Ashok Leyland LEYPOWER",
    engineBrand: "Ashok Leyland Engine",
    fuelType: "Diesel",
    fuelConsumption: "34.0 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "High performance heavy industrial power generator built to serve manufacturing sites, infrastructure grids, and massive buildings.",
    applications: ["Manufacturing Units", "High-Rise Buildings", "Educational Institutes", "Infrastructure Projects"]
  },
  {
    id: "hps-leypower-250",
    name: "Ashok Leyland LEYPOWER 250 KVA Silent",
    kva: 250,
    brand: "Ashok Leyland LEYPOWER",
    engineBrand: "Ashok Leyland Engine",
    fuelType: "Diesel",
    fuelConsumption: "42.0 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Indigenously designed heavy transport scale genset. Extremely resilient to dusty weather and prolonged peak hours, built for heavy Indian industrial networks.",
    applications: ["Heavy Manufacturing", "Complex Construction Projects", "Data Infrastructure Sites", "Large Hospitals"]
  },
  {
    id: "hps-cummins-380",
    name: "Cummins Power Generation 380 KVA",
    kva: 380,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins Engine",
    fuelType: "Diesel",
    fuelConsumption: "65.5 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Designed for intensive industrial support, chemical operations, large scale data centers, and heavy infrastructure projects.",
    applications: ["Pharma Plants", "Data Centers", "Process Industries", "Mega Infrastructure"]
  },
  {
    id: "hps-cummins-500",
    name: "Cummins Power Generation 500 KVA Silent",
    kva: 500,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins VTA28 Engine",
    fuelType: "Diesel",
    fuelConsumption: "85.2 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m (Mega soundproof shield)",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Heavy-duty V-12 power block offering massive power-to-weight margins, electronic diagnostic system management, and maximum fuel saving margins.",
    applications: ["Industrial Plants", "Large-scale IT Hubs", "Mega Events", "Steel and Cast Rolling Mills"]
  },
  {
    id: "hps-kirloskar-750",
    name: "Kirloskar Green 750 KVA Silent",
    kva: 750,
    brand: "Kirloskar Green",
    engineBrand: "Kirloskar Engine",
    fuelType: "Diesel",
    fuelConsumption: "128.0 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Massive prime power system engineered to run critical factory grids, large smelters, and heavy continuous load centers.",
    applications: ["Large Steel Smelters", "Cement Factories", "Large Data Centers", "Hospitals Grid"]
  },
  {
    id: "hps-cummins-1000",
    name: "Cummins Power Generation 1000 KVA",
    kva: 1000,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins Engine",
    fuelType: "Diesel",
    fuelConsumption: "162.0 Liters/hour",
    phase: "Three",
    noiseLevel: "< 75 dBA at 1m",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "Premium heavy-duty system built for railway substations, mega data complexes, and massive oil refineries.",
    applications: ["Mega Infrastructure", "Railway Substations", "Major Refineries", "Data Centers"]
  },
  {
    id: "hps-cummins-1250",
    name: "Cummins High Mega 1250 KVA",
    kva: 1250,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins KTA50-G3 Engine",
    fuelType: "Diesel",
    fuelConsumption: "198 Liters/hour",
    phase: "Three",
    noiseLevel: "Engineered Enclosure System < 75 dBA",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "A colossal workhorse powerhouse designed for constant power stations, data center infrastructure blocks, and large chemical refineries.",
    applications: ["Data Centers", "Mining Outposts", "Refineries", "Main Metro Substations"]
  },
  {
    id: "hps-cummins-1500",
    name: "Cummins High Mega 1500 KVA",
    kva: 1500,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins KTA50-G8 Engine",
    fuelType: "Diesel",
    fuelConsumption: "235 Liters/hour",
    phase: "Three",
    noiseLevel: "Engineered Enclosure System < 75 dBA",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "High capacity mega generator engineered to supply continuous backup power grids for critical processing hubs and large server farms.",
    applications: ["Mega Data Centers", "Power Stations", "Industrial Complexes", "Large Scale Infrastructure"]
  },
  {
    id: "hps-cummins-2000",
    name: "Cummins High Mega 2000 KVA",
    kva: 2000,
    brand: "Cummins Power Generation",
    engineBrand: "Cummins Engine",
    fuelType: "Diesel",
    fuelConsumption: "310 Liters/hour",
    phase: "Three",
    noiseLevel: "Engineered Enclosure System < 75 dBA",
    isReadyForRent: true,
    isReadyForSale: true,
    description: "The ultimate power grid powerhouse for national projects, heavy petrochemical complexes, and massive data servers.",
    applications: ["Grid Power Backup", "Petrochemical Plants", "National Level Infrastructure Projects", "Massive Data Centers"]
  }
];

export const BLOGS: BlogArticle[] = [
  {
    id: "blog-1",
    title: "How to Choose the Right KVA Rating for Your Industrial Building",
    excerpt: "Calculating active utility load is crucial. Discover the formula to size your backup diesel generator perfectly without over-paying.",
    content: "Selecting the correct KVA rating prevents severe operational hazards. A generator too small will experience emergency thermal trips and exhaust loading, while an oversized genset will experience wet stacking (unburnt fuel in exhausting ducts). Always calculate your starting surge current (especially for heavy motors, air conditioning compressors, and air dryers) which can be 3x to 5x higher than running current. Sum up the base rating of your essential loads, factor in a safety limit of 20%, and match with a robust CPCB-IV compliant genset from Hanuwant Power System Co. for flawless performance.",
    author: "Nikhil Garg",
    publishDate: "May 12, 2026",
    readTime: "5 min read",
    category: "Rental Guide"
  },
  {
    id: "blog-2",
    title: "Diesel Generator Preventative Maintenance & AMC Checklists",
    excerpt: "Avoid sudden blackouts. Find out the key weekly, monthly, and quarterly maintenance components to keep your genset ready.",
    content: "A diesel engine is only as dependable as its fuel system, lubricating oil, and starter mechanics. Weekly checks should include checking fuel oil level, testing starter batteries for optimal voltage (ideal above 12.6V), and checking engine coolant density. Every 250 hours or 6 months, an active engine service is mandatory: replace fuel filters, oil filters, and perform chemical bypass flush of crankcase breathing ports. Under Hanuwant Power System Co.'s Annual Maintenance Contract (AMC), we cover complete multi-point checks using heavy caliber calibration gear, securing 100% start-up reliability.",
    author: "Nikhil Garg",
    publishDate: "May 24, 2026",
    readTime: "7 min read",
    category: "Maintenance"
  },
  {
    id: "blog-3",
    title: "Understanding CPCB IV+ Emission Norms for Commercial Gensets",
    excerpt: "India's newest environmental mandates are strict. Learn what CPCB IV+ compliance implies for your commercial building.",
    content: "The Ministry of Environment, Forest, and Climate Change has enforced highly progressive CPCB IV+ norms to limit oxides of Nitrogen (NOx) and Particulate Matter (PM) emissions from diesel engines. Hanuwant Power System Co. is committed to absolute environmental compliance. Our entire rental and sales line of diesel generator assemblies is loaded with acoustic canopies, Exhaust Gas Recirculation (EGR) valves, and customized diesel particulate silencers. Not only do compliant units guarantee legal operation in Delhi NCR during GRAP stages, they also use up to 10% less fuel due to advanced electronic fuel injection systems.",
    author: "Nikhil Garg",
    publishDate: "June 01, 2026",
    readTime: "6 min read",
    category: "Safety"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Sanjay Singhal",
    designation: "Executive Director",
    companyName: "Singhal Metal Alloys Ltd.",
    comment: "We rented a massive 500 KVA Cummins generator for our smelting plant in Sahibabad Industrial Area. Hanuwant Power System Co. handled prompt installation, matching state safety laws, and their 24/7 operators kept our production active through peak power line maintenance. Superb professionalism!",
    rating: 5,
    location: "Sahibabad, UP"
  },
  {
    id: "test-2",
    clientName: "Dr. Ananya Mishra",
    designation: "Chief Medical Superintendant",
    companyName: "Metro Care Super Speciality Hospital",
    comment: "Continuous electric current is literally a life-saving necessity in ICUs. We contracted Hanuwant Power system for a 125 KVA silent genset with an Automatic Mains Failure (AMF) panel. The system switches seamlessly in less than 4 seconds. Their AMC inspections have been clean and flawless.",
    rating: 5,
    location: "Sec-2 Rajender Nagar, Ghaziabad"
  },
  {
    id: "test-3",
    clientName: "Nitin Goel",
    designation: "Infrastructure Project Head",
    companyName: "Noida Highway Projects",
    comment: "Temporary tower lighting and high-power boring machinery require solid, robust power inputs. HPS provided a fleet of 62.5 KVA mobile units mounted on heavy dual trailers. High caliber diesel mileage and outstanding response times from their breakdown team. Will contract again for upcoming construction grids.",
    rating: 5,
    location: "Noida Sector-62, NCR"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Do you supply diesel along with the rental generator?",
    answer: "Typically, diesel fuel supply is the client's responsibility. However, depending on project scales, Hanuwant Power System Co. can arrange absolute turnkey solutions containing certified fuel tanker delivery, dynamic bulk logging, and legal containment setups.",
    category: "Rental"
  },
  {
    question: "What is an AMF panel and do I need one for my office?",
    answer: "An Automatic Mains Failure (AMF) panel automates emergency transitions. When municipal power trips, the AMF panel commands the diesel engine to start up, waits for system stabilization, and transfers electricity automatically. When government grid returns, it shifts back and stops the engine. It is highly recommended for IT hubs, hotels, and critical clinics.",
    category: "Technical"
  },
  {
    question: "What are the common kVA parameters available on rent?",
    answer: "We support a complete spectrum from 15 kVA (single phase models) all the way up to large multi-engine synchronization arrangements reaching 2000 kVA. The most common selections are 62.5 kVA, 125 kVA, 250 kVA, and 500 kVA configurations.",
    category: "General"
  },
  {
    question: "What does your 24/7 Breakdown Support cover?",
    answer: "It covers mechanical or electrical component failures, battery discharges, lines air-locks, fuel filters blockages, and coolant leaks. Our Ghaziabad base houses diagnostic support vehicles loaded with common spare parts and lead technicians to resolve industrial errors in record speed.",
    category: "Support"
  }
];
