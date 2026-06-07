/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Wrench, Users, Settings, Clock, CheckCircle } from "lucide-react";
import trailerGen from "../assets/images/trailer_generator_1780219732446.png";

export default function WhyChooseUs() {
  const statsList = [
    {
      id: "stat-1",
      icon: <Wrench className="h-6 w-6 text-[#E63329]" />,
      value: "15+",
      label: "Years of Experience",
      subtext: "Delivering diesel setups in NCR since 2009"
    },
    {
      id: "stat-2",
      icon: <Users className="h-6 w-6 text-[#E63329]" />,
      value: "500+",
      label: "Happy Clients",
      subtext: "Industrial complexes, hospitals, and major banquets"
    },
    {
      id: "stat-3",
      icon: <Settings className="h-6 w-6 text-[#E63329]" />,
      value: "1000+",
      label: "Projects Completed",
      subtext: "Temporary construction and continuous backup installs"
    },
    {
      id: "stat-4",
      icon: <Clock className="h-6 w-6 text-[#E63329]" />,
      value: "24/7",
      label: "Customer Support",
      subtext: "Active control rooms and emergency standby mechanics"
    }
  ];

  const coreStrengths = [
    "CPCB emission standards compliant systems.",
    "Certified operators and logistics drivers handled directly.",
    "100% genuine parts (Fleetguard filters, Valvoline lubricants).",
    "Turnkey testing, sync panels, and cable layouts."
  ];

  return (
    <section 
      id="why-choose-us" 
      className="w-full flex flex-col lg:flex-row font-sans overflow-hidden border-b border-gray-900"
    >
      {/* Left side: Light Gray background with the trailer generator */}
      <div 
        className="lg:w-1/2 bg-[#F3F4F6] py-16 px-6 md:px-12 flex flex-col justify-center items-center border-b lg:border-b-0 lg:border-r border-gray-200 relative"
        id="why-choose-left-container"
      >
        {/* Background mechanical gear visual watermark */}
        <div className="absolute top-10 left-10 text-gray-300/30 font-display font-black text-9xl uppercase pointer-events-none select-none">
          GEAR
        </div>

        <div className="max-w-xl space-y-6 relative z-10 text-center lg:text-left">
          <div className="flex items-center gap-2 text-[#E63329] justify-center lg:justify-start">
            <span className="w-8 h-0.5 bg-[#E63329]" />
            <span className="text-xs font-bold uppercase tracking-widest">MOBILE POWER SECURITY</span>
          </div>

          <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 uppercase tracking-tight">
            HEAVY MOBILE <span className="text-[#E63329]">TRAILER FLEET</span>
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
            Need power on secondary locations? Our custom-designed highway trailers are built to transport silent diesel generators directly to road construction grids, high mast layouts, wedding events, and emergency grid outages across UP, Haryana, and Delhi NCR instantly.
          </p>

          {/* White Generator Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 75, damping: 16 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden shadow-2xl relative border-2 border-white/50 group bg-white"
            id="trailer-image-frame"
          >
            <img 
              src={trailerGen} 
              alt="Hanuwant Power System White Generator on Highway Trailer" 
              className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            {/* Small info sticker overlay */}
            <div className="absolute bottom-3 left-3 bg-gray-950/80 text-white text-[10px] font-mono font-bold px-3 py-1 bg-blur rounded flex items-center gap-1.5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
              RENTAL TRAILER IN-FLEET
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right side: Dark background with stats and headings */}
      <div 
        className="lg:w-1/2 bg-[#0F0F0E] py-16 px-6 md:px-12 flex flex-col justify-center text-white relative"
        id="why-choose-right-container"
      >
        {/* Glowing border accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#E63329] via-transparent to-transparent hidden lg:block" />

        <div className="max-w-xl space-y-8 relative z-10">
          
          {/* Main Heading block */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-gray-400 font-extrabold uppercase tracking-widest">
              UNSURPASSED DOMAIN LEADERSHIP
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight leading-none" id="why-choose-headline">
              WHY CHOOSE <br />
              <span className="text-[#E63329]">HANUWANT POWER SYSTEM?</span>
            </h2>
            <div className="w-16 h-1 bg-[#E63329]" />
          </div>

          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            For almost two decades, we have been Noida & Ghaziabad's premier diesel power ally. We don't just lease machinery — we configure comprehensive electrical networks that guarantee safety, reliability, and peace of mind.
          </p>

          {/* 2x2 Stats Grid with glowing panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="why-choose-stats-grid">
            {statsList.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 90, damping: 15, delay: idx * 0.12 }}
                whileHover={{ 
                  borderColor: "#E63329", 
                  backgroundColor: "rgba(230, 51, 41, 0.08)",
                  y: -5,
                  scale: 1.025
                }}
                className="bg-[#171716] border border-white/5 rounded-lg p-4 transition-all duration-300"
                id={`stat-card-${idx}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-white/5 rounded border border-white/5">
                    {stat.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-gray-600">
                    0{idx + 1}
                  </span>
                </div>
                
                <div className="font-display font-black text-2xl sm:text-3xl text-white font-mono tracking-tight leading-none">
                  {stat.value}
                </div>
                
                <div className="text-xs font-bold uppercase text-gray-300 tracking-wider mt-1 leading-tight">
                  {stat.label}
                </div>
                
                <p className="text-[10px] text-gray-500 leading-normal mt-1.5">
                  {stat.subtext}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bullet points detailing capabilities */}
          <div className="space-y-3 pt-4 border-t border-white/5">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#E63329]">
              CORE CORPORATE STRENGTHS:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {coreStrengths.map((str, sidx) => (
                <div key={sidx} className="flex items-start gap-2 text-xs text-gray-300">
                  <CheckCircle className="h-4 w-4 text-[#E63329] shrink-0 mt-0.5" />
                  <span>{str}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
