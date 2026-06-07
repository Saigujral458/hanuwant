/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Zap, Shield, Settings, Phone, MessageSquare } from "lucide-react";

import heroBgIndustrial from "../assets/images/hero_bg_industrial_1780229583668.png";
import heroBgRental from "../assets/images/hero_bg_rental_1780229605121.png";
import heroBgWarehouse from "../assets/images/hero_bg_warehouse_1780229623931.png";
import heroBgTechnician from "../assets/images/hero_bg_technician_1780229645279.png";
import heroBgTruck from "../assets/images/hero_bg_truck_1780229667310.png";

const HERO_IMAGES = [
  {
    bg: heroBgIndustrial,
    label: "POWER YOU CAN RELY ON",
    spec: "CPCB IV+ COMPLIANT",
    badge: "EMISSION CERTIFIED",
    kva: "15 - 2000 KVA"
  },
  {
    bg: heroBgRental,
    label: "GENSET ON RENT",
    spec: "RAPID DEPLOY READY",
    badge: "TRAILER MOUNTED",
    kva: "15 - 2000 KVA"
  },
  {
    bg: heroBgWarehouse,
    label: "SALE & PURCHASE",
    spec: "GENUINE SPARES ONLY",
    badge: "WARRANTY COMMITTED",
    kva: "15 - 2000 KVA"
  },
  {
    bg: heroBgTechnician,
    label: "AMC SOLUTIONS & REPAIRS",
    spec: "PREVENTIVE AUDITS",
    badge: "ZERO STANDBY DELAYS",
    kva: "15 - 2000 KVA"
  },
  {
    bg: heroBgTruck,
    label: "24/7 SUPPORT VEHICLES",
    spec: "REAL-TIME HELPLINE",
    badge: "EMERGENCY READY",
    kva: "15 - 2000 KVA"
  }
];

interface HeroProps {
  onOpenQuote: (initialKva?: string, initialService?: string) => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 10000); // exact 10 second slide rotation loop

    return () => clearInterval(timer);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[70vh] sm:min-h-[82vh] lg:min-h-[88vh] flex items-stretch overflow-hidden font-sans border-b border-zinc-200 bg-white"
    >
      {/* Split Screen Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full relative z-10">
        
        {/* Left Side: Text and Core Content on pure clean white background */}
        <div className="col-span-1 lg:col-span-6 flex flex-col justify-center px-4 sm:px-6 md:px-12 lg:px-16 py-12 sm:py-16 md:py-20 relative z-20 bg-white" id="hero-left-content-area">
          
          {/* Subtle Technical Grid Overlay on Left Content */}
          <div className="absolute inset-0 bg-[radial-gradient(#E4E4E7_1px,transparent_1px)] [background-size:20px_20px] opacity-45 pointer-events-none select-none z-0" />
          
          <div className="relative z-10 flex flex-col items-start text-left space-y-6 max-w-xl lg:max-w-none">
            <div
              className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded text-zinc-800 text-[10px] font-black uppercase tracking-widest pointer-events-none select-none w-fit"
              id="hero-co-tag"
            >
              Hanuwant Power System Co.
            </div>

            <h1
              className="font-display font-black text-zinc-950 text-4xl sm:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.05] uppercase tracking-tight"
              id="hero-headline"
            >
              POWERING YOUR
              <br />
              <span className="text-[#E63329]">BUSINESS. ALWAYS.</span>
            </h1>

            <p
              className="text-zinc-600 font-sans text-base sm:text-lg leading-relaxed font-semibold max-w-xl"
              id="hero-subtext"
            >
              Deals in Diesel Genset on Rental Basis, Sale, Purchase & Service. Premium soundproof silent power setups delivering uninterrupted standby energy supply in India's major industrial sectors.
            </p>

            {/* Horizontal specification badges exactly styled like the reference image column of pill icons */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-1.5"
              id="hero-badges-row"
            >
              <div className="flex items-center gap-3 px-3 py-2 bg-zinc-50 border border-zinc-200/80 rounded shadow-xs" id="badge-power">
                <div className="p-1.5 bg-[#E63329]/15 rounded-full text-[#E63329] shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-none">Power Range</div>
                  <div className="text-xs font-black text-zinc-800 mt-0.5 uppercase">15 KVA - 2000 KVA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-3 py-2 bg-zinc-50 border border-zinc-200/80 rounded shadow-xs" id="badge-reliable">
                <div className="p-1.5 bg-[#E63329]/15 rounded-full text-[#E63329] shrink-0">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-none">Power Solutions</div>
                  <div className="text-xs font-black text-zinc-800 mt-0.5 uppercase">100% Reliable</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-3 py-2 bg-zinc-50 border border-zinc-200/80 rounded shadow-xs" id="badge-maintenance">
                <div className="p-1.5 bg-[#E63329]/15 rounded-full text-[#E63329] shrink-0">
                  <Settings className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-none">High Performance</div>
                  <div className="text-xs font-black text-zinc-800 mt-0.5 uppercase">Low Maintenance</div>
                </div>
              </div>

              <div className="flex items-center gap-3 px-3 py-2 bg-zinc-50 border border-zinc-200/80 rounded shadow-xs" id="badge-support">
                <div className="p-1.5 bg-[#E63329]/15 rounded-full text-[#E63329] shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider leading-none">Always Available</div>
                  <div className="text-xs font-black text-zinc-800 mt-0.5 uppercase">24/7 Support</div>
                </div>
              </div>
            </div>

            {/* Custom CTA Action pair */}
            <div
              className="flex flex-wrap items-center gap-4 w-full pt-4"
              id="hero-cta-buttons"
            >
              <button
                onClick={scrollToServices}
                className="px-6 py-3.5 bg-[#E63329] hover:bg-[#c9261c] text-white font-bold uppercase text-xs tracking-wider rounded transition-all active:scale-95 flex items-center gap-2 cursor-pointer z-10 shadow-md hover:shadow-[#E63329]/25"
                id="hero-cta-services"
              >
                EXPLORE SERVICES <ArrowRight className="h-4 w-4" />
              </button>
              
              <button
                onClick={() => onOpenQuote("125", "Rent")}
                className="px-6 py-3.5 bg-white hover:bg-zinc-50 text-zinc-800 border-2 border-zinc-300 hover:border-[#E63329] hover:text-[#E63329] font-bold uppercase text-xs tracking-wider rounded transition-all active:scale-95 cursor-pointer z-10 shadow-sm"
                id="hero-cta-contact"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: High-fidelity Elegant automatic slideshow frame with a premium dark theme overlay */}
        <div className="col-span-1 lg:col-span-6 relative overflow-hidden bg-zinc-950 border-l lg:border-l-0 min-h-[300px] sm:min-h-[400px] lg:min-h-0" id="hero-right-image-container">
          
          {/* Slanted angled background separation polygon overlay */}
          <div 
            className="hidden lg:block absolute top-0 left-0 bottom-0 w-[120px] bg-white z-20 pointer-events-none origin-top-left"
            style={{
              clipPath: "polygon(0 0, 100% 0, 0 100%)"
            }}
          />
          
          {/* Angular brand red slash separator bar overlapping the dividing edge exactly like the design reference */}
          <div 
            className="hidden lg:block absolute left-[12px] top-[-10px] w-[14px] h-[120%] bg-[#E63329] z-30 pointer-events-none transform rotate-[16deg] shadow-lg shadow-[#E63329]/30"
            id="slanted-red-divider"
          />

          {/* Animated Slide Sequence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIdx}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center select-none brightness-[0.45] contrast-[1.12]"
              style={{ backgroundImage: `url(${HERO_IMAGES[currentIdx].bg})` }}
              id={`hero-slide-bg-${currentIdx}`}
            />
          </AnimatePresence>

          {/* Cinematic dark theme overlay with dramatic shadows to reinforce a highly cohesive, high-end look */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50 pointer-events-none z-10" />

          {/* Header watermark letter superimposed on the photo canvas */}
          <div className="absolute right-[6%] top-[6%] text-[12vw] font-display font-black text-white/[0.04] leading-none select-none tracking-normal pointer-events-none z-10 font-bold">
            HPS
          </div>

          {/* Slide Context Label Badge - Custom Premium Dark Glass edition */}
          <div className="absolute top-6 right-6 bg-zinc-950/80 backdrop-blur-md px-3.5 py-1.5 rounded border border-zinc-800/85 text-zinc-300 text-[9px] font-black uppercase tracking-widest z-20 shadow-md select-none">
            {HERO_IMAGES[currentIdx].label}
          </div>

          {/* Dynamic Specs details floating pill on the bottom left corner inside the photo - Dark Glassmorphic Design */}
          <div className="absolute bottom-6 left-6 lg:left-24 right-6 bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl z-20 shadow-2xl border border-zinc-800/80 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest leading-none">Acoustic Class</span>
              <span className="text-xs font-black text-white uppercase tracking-tight mt-1">{HERO_IMAGES[currentIdx].spec}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded text-[9px] text-zinc-400 font-extrabold uppercase">
                {HERO_IMAGES[currentIdx].badge}
              </span>
              <span className="px-3 py-1 bg-[#E63329]/15 text-[#E63329] border border-[#E63329]/30 rounded text-[10px] font-mono font-black">
                {HERO_IMAGES[currentIdx].kva}
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Gutter badge Quote Button */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={() => onOpenQuote("125", "Rent")}
          className="flex flex-col items-center justify-center gap-1.5 p-3.5 bg-[#E63329] hover:bg-[#c4231b] text-white rounded-l-md shadow-2xl transition-all cursor-pointer group active:scale-95 border-y border-l border-white/20 hover:pr-5 scroll-smooth"
          id="gutter-quote-badge"
          title="Instant Quotation Calculator"
        >
          <MessageSquare className="h-5 w-5 animate-pulse group-hover:scale-110" />
          <span className="[writing-mode:vertical-rl] select-none text-[10px] font-black uppercase tracking-widest">
            GET A QUOTE
          </span>
        </button>
      </div>

    </section>
  );
}
