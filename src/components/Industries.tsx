/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { HardHat, Hospital, Factory, Music, Database, Hotel } from "lucide-react";
import { INDUSTRIES } from "../data";

export default function Industries() {
  // Dynamically resolver icons based on string names inside data config
  const getIndustryIcon = (name: string) => {
    const classStyle = "h-12 w-12 stroke-1 group-hover:scale-110 transition-transform duration-300 text-[#E63329]";
    switch (name) {
      case "Construction":
        return <HardHat className={classStyle} />;
      case "Hospitals":
        return <Hospital className={classStyle} />;
      case "Manufacturing":
        return <Factory className={classStyle} />;
      case "Events":
        return <Music className={classStyle} />;
      case "IT & Data Centers":
        return <Database className={classStyle} />;
      default:
        return <Hotel className={classStyle} />;
    }
  };

  return (
    <section 
      id="gallery" 
      className="w-full bg-[#FFFFFF] py-16 px-4 font-sans border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-gray-900" id="industries-headline">
            INDUSTRIES <span className="text-[#E63329]">WE SERVE</span>
          </h2>
          <div className="w-16 h-1 bg-[#E63329] mt-2 rounded" />
        </div>

        {/* Responsive row alignment */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" id="industries-grid">
          {INDUSTRIES.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ borderColor: "#E63329", scale: 1.03 }}
              className="bg-[#F9FAFB] border-b-2 border-gray-200 hover:border-[#E63329] rounded-xl p-5 flex flex-col justify-between items-center text-center transition-all duration-300 group shadow-xs min-h-[260px]"
              id={`industry-card-${idx}`}
            >
              {/* Icon Container with outline style */}
              <div className="p-4 bg-white rounded-full border border-gray-100 group-hover:bg-[#E63329]/10 group-hover:border-[#E63329]/20 transition-all duration-300 shadow-xs mb-3">
                {getIndustryIcon(ind.name)}
              </div>

              {/* Text content block */}
              <div className="space-y-1.5 flex-1 flex flex-col justify-center">
                <h3 className="font-display font-bold text-gray-900 text-sm uppercase tracking-wide group-hover:text-[#E63329] transition-colors leading-tight">
                  {ind.name}
                </h3>
                <p className="text-[10px] text-gray-500 leading-normal max-w-[160px] mx-auto opacity-80 group-hover:opacity-100 transition-opacity">
                  {ind.description}
                </p>
              </div>

              {/* KVA Rating Badge */}
              <div className="mt-4 pt-3 border-t border-gray-200 w-full shrink-0">
                <div className="inline-block px-2.5 py-1 bg-white border border-gray-200 group-hover:bg-[#E63329]/10 group-hover:border-[#E63329]/25 group-hover:text-[#E63329] font-mono text-[9px] font-black uppercase text-gray-600 rounded transition-all tracking-wider">
                  {ind.requiredKvaRange}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
