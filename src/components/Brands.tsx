/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Award, Zap, ShieldAlert, Cpu } from "lucide-react";

export default function Brands() {
  const brandsList = [
    {
      name: "Kirloskar",
      desc: "Kirloskar Green",
      accent: "from-green-600 to-emerald-700",
      pillText: "Green KOEL",
      icon: <Cpu className="h-5 w-5 text-[#E63329]" />
    },
    {
      name: "Cummins",
      desc: "Power Generation",
      accent: "from-teal-600 to-cyan-700",
      pillText: "World Leader",
      icon: <Award className="h-5 w-5 text-[#E63329]" />
    },
    {
      name: "Ashok Leyland",
      desc: "LEYPOWER Diesel",
      accent: "from-blue-600 to-indigo-700",
      pillText: "Leypower",
      icon: <Zap className="h-5 w-5 text-[#E63329]" />
    },
    {
      name: "Mahindra",
      desc: "Powerol Systems",
      accent: "from-red-600 to-rose-700",
      pillText: "Powerol",
      icon: <ShieldAlert className="h-5 w-5 text-[#E63329]" />
    }
  ];

  return (
    <div 
      className="w-full bg-[#0D0D0D] py-10 px-4 border-y-2 border-[#E63329]/15"
      id="brands-strip-container"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Typography Block */}
        <div className="flex flex-col text-center lg:text-left shrink-0">
          <h3 className="font-display font-black leading-none uppercase text-2xl tracking-normal text-white">
            TRUSTED <span className="text-[#E63329]">BRANDS.</span>
          </h3>
          <p className="text-[10px] sm:text-xs font-sans text-gray-400 font-bold uppercase tracking-widest mt-1">
            POWERFUL PERFORMANCE.
          </p>
        </div>

        {/* Right Logo Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {brandsList.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, borderColor: "#E63329" }}
              className="bg-white border-b-4 border-gray-300 rounded-lg p-3.5 flex flex-col justify-between items-center text-center transition-all min-h-[90px] shadow-md group cursor-help"
              id={`brand-card-${idx}`}
            >
              {/* Top Row with circular label */}
              <div className="flex justify-between items-center w-full mb-1">
                <span className="text-[8px] font-mono text-gray-400 font-extrabold uppercase tracking-wider">
                  HPS CERTIFIED
                </span>
                <span className="text-[8px] bg-[#E63329]/10 border border-[#E63329]/30 text-[#E63329] px-1.5 py-0.2 font-mono font-bold rounded">
                  {brand.pillText}
                </span>
              </div>

              {/* Brand Typography */}
              <div className="flex items-center gap-1.5 py-1">
                {brand.icon}
                <span className="font-display font-black text-gray-900 text-sm tracking-tight uppercase leading-none">
                  {brand.name}
                </span>
              </div>

              {/* Subtext description */}
              <span className="text-[9px] font-sans font-medium text-gray-500 uppercase tracking-widest">
                {brand.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
