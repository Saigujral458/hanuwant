/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import redLitGen from "../assets/images/red_lit_generator_1780219748044.png";

interface CTABannerProps {
  onOpenQuote: (initialKva?: string, initialService?: string) => void;
}

export default function CTABanner({ onOpenQuote }: CTABannerProps) {
  return (
    <section 
      className="w-full bg-[#080808] py-16 md:py-24 relative overflow-hidden font-sans border-b-4 border-[#E63329]"
      id="cta-strip"
    >
      {/* Red Light Beam diagonal backdrop layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Subtle diagonal crimson light flare beam */}
        <div className="absolute top-0 right-1/4 w-[120px] h-full bg-[#E63329]/15 skew-x-25 filter blur-xs" />
        
        {/* Secondary neon red glow overlay behind generator */}
        <div className="absolute right-0 bottom-0 w-[50%] h-[80%] bg-radial from-[#E63329]/10 to-transparent blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Contents */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="space-y-1.5">
              <span className="text-white text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight block leading-none">
                NEED INSTANT
              </span>
              <span className="text-[#E63329] text-3xl sm:text-4xl md:text-5xl font-display font-black uppercase tracking-tight block leading-none drop-shadow-md">
                POWER SOLUTION?
              </span>
            </div>

            <p className="text-gray-305 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed mx-auto lg:mx-0">
              We are just a call away to power your business. Connect with Ghaziabad's leading genset engineers to deploy sound-proof certified rental networks. Let's keep you running, always.
            </p>

            {/* Support Metrics quick triggers */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-1">
              <button
                onClick={() => onOpenQuote("125", "Rent")}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#E63329] hover:bg-[#cf221a] text-white font-sans font-bold uppercase text-xs tracking-wider rounded shadow-md hover:shadow-[#E63329]/30 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                id="cta-strip-button-quote"
              >
                GET A QUOTE <ArrowRight className="h-4 w-4 shrink-0" />
              </button>

              <a
                href="tel:9555576155"
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent hover:bg-white/5 text-white border-2 border-white/20 hover:border-white rounded font-sans font-bold uppercase text-xs tracking-wider transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                id="cta-strip-button-tel"
              >
                <Phone className="h-4 w-4 shrink-0 animate-bounce" /> CALL 9555576155
              </a>
            </div>
            
            {/* Short regulatory assurance note */}
            <div className="text-[10px] text-gray-500 font-mono tracking-widest uppercase flex justify-center lg:justify-start items-center gap-1.5 pt-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
              CPCB IV+ SOUNDPROOF STANDARDS COMPLIANT FLEET ONLY
            </div>
          </div>

          {/* Right Red-lit generator */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Absolute diagonal vector red line overlay to match the reference banner */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-30">
                <path d="M 0,100 L 100,50 L 100,60 L 0,100 Z" fill="#E63329" />
              </svg>
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring" }}
              className="relative z-10 w-full max-w-sm sm:max-w-md bg-transparent rounded-lg overflow-hidden border border-white/5 hover:scale-102 transition-transform duration-300"
              id="cta-strip-image-container"
            >
              <img
                src={redLitGen}
                alt="Cinematic Red Glowing Backup Diesel Generator HPS"
                className="w-full h-auto object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute top-4 right-4 bg-[#E63329] text-white text-[9px] font-mono px-2.5 py-1 font-bold rounded shadow-lg">
                READY DEPLOYED
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
