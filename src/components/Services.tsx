/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Key, ShieldCheck, Hammer, Activity, PhoneCall } from "lucide-react";
import { SERVICES } from "../data";

interface ServicesProps {
  onOpenQuote: (initialKva?: string, initialService?: string) => void;
}

export default function Services({ onOpenQuote }: ServicesProps) {
  // Outline icons for each service category based on index/id
  const getOutlineIcon = (id: string) => {
    const classStyle = "h-11 w-11 stroke-1 text-[#E63329]";
    switch (id) {
      case "rent":
        return <Key className={classStyle} />;
      case "sale-purchase":
        return <ShieldCheck className={classStyle} />;
      case "service-amc":
        return <Activity className={classStyle} />;
      case "installation":
        return <Hammer className={classStyle} />;
      default:
        return <PhoneCall className={classStyle} />;
    }
  };

  return (
    <section 
      id="services" 
      className="w-full bg-[#FFFFFF] py-16 md:py-24 px-4 font-sans relative border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Headers block */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-[#E63329] uppercase tracking-widest" id="services-prelabel">
            WHAT WE OFFER
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-gray-900" id="services-headline">
            OUR <span className="text-[#E63329]">SERVICES</span>
          </h2>
          <div className="w-16 h-1 bg-[#E63329] mt-2 rounded" />
        </div>

        {/* 5 columns services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" id="services-grid">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 85, damping: 15, delay: idx * 0.1 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(230, 51, 41, 0.08), 0 10px 10px -5px rgba(230, 51, 41, 0.04)"
              }}
              className="bg-white border-2 border-gray-100 hover:border-[#E63329]/50 rounded-xl p-5 shadow-xs transition-colors duration-300 relative overflow-hidden flex flex-col justify-between group h-full min-h-[380px]"
              id={`service-card-${service.id}`}
            >
              {/* Background ambient light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#E63329]/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

              {/* Main Contents */}
              <div className="space-y-4 relative z-10">
                {/* Outline Icon */}
                <div className="p-3 bg-gray-50 group-hover:bg-[#E63329]/10 rounded-lg inline-block transition-colors duration-300 border border-gray-100 group-hover:border-[#E63329]/20">
                  {getOutlineIcon(service.id)}
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-gray-900 text-lg uppercase tracking-tight group-hover:text-[#E63329] transition-colors">
                  {service.title}
                </h3>

                {/* Short Paragraph Description */}
                <p className="text-gray-500 text-xs leading-normal">
                  {service.description}
                </p>

                {/* Sub features bullet points */}
                <ul className="space-y-1.5 pt-2 border-t border-gray-100 group-hover:border-[#E63329]/10 transition-colors">
                  {service.highlights.map((bullet, bidx) => (
                    <li 
                      key={bidx} 
                      className="text-[10px] text-gray-400 font-sans font-medium flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E63329]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom actionable link and red arrow badge */}
              <div className="pt-6 flex items-center justify-between mt-auto relative z-10">
                <button
                  onClick={() => onOpenQuote("125", service.title)}
                  className="text-[10px] font-sans font-extrabold text-gray-600 hover:text-[#E63329] uppercase tracking-wider transition-colors inline-block cursor-pointer"
                >
                  Configure Service →
                </button>

                {/* Red Arrow Badge at bottom right */}
                <div 
                  className="w-8 h-8 rounded-full bg-gray-900 group-hover:bg-[#E63329] text-white flex items-center justify-center transition-all duration-300 transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 absolute bottom-0 right-0 cursor-pointer shadow-lg active:scale-90"
                  onClick={() => onOpenQuote("125", service.title)}
                >
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
