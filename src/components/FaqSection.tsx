/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS } from "../data";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaqIndex = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section 
      id="contact" 
      className="w-full bg-[#FFFFFF] py-16 px-4 font-sans border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-[#E63329] uppercase tracking-widest">
            KNOWLEDGE BASE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#0D0D0D]">
            COMMON <span className="text-[#E63329]">QUESTIONS</span>
          </h2>
          <div className="w-16 h-1 bg-[#E63329] mt-2 rounded" />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5" id="faq-accordion-list">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F9FAFB] border border-gray-200 hover:border-gray-300 rounded-lg overflow-hidden transition-all duration-200"
                id={`faq-block-${idx}`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFaqIndex(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans font-bold text-sm text-gray-800 transition-colors focus:outline-none cursor-pointer group"
                >
                  <span className="flex items-center gap-2.5 group-hover:text-[#E63329] transition-colors leading-snug">
                    <HelpCircle className="h-4.5 w-4.5 text-[#E63329] shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown className={`h-4.5 w-4.5 text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#E63329]" : ""}`} />
                </button>

                {/* Animated accordion panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-0 border-t border-gray-150 text-xs sm:text-sm text-gray-650 leading-relaxed font-sans mt-2 ml-1">
                        {faq.answer}
                        
                        <div className="mt-3 flex items-center gap-1.5 text-[9px] font-mono text-gray-400 uppercase tracking-widest">
                          CATEGORY ID: <span className="text-[#E63329] font-bold">{faq.category} SUPPORT FAQ</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-[#0D0D0D] border-t-2 border-[#E63329] text-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-white">
              Still Have Custom Operational Queries?
            </h4>
            <p className="text-[11px] text-gray-400 font-sans max-w-lg">
              Let our mechanical supervisors calibrate a precise power blueprint to keep your facility run times green. Dial us or message on WhatsApp anytime!
            </p>
          </div>

          <a
            href="https://wa.me/919555576155?text=Hello%20HPS%2C%20I%20have%20an%20unlisted%20question%20regarding%20renting%2Fbuying%20diesel%20generators.%20Please%20assist."
            target="_blank"
            rel="noreferrer"
            className="px-4.5 py-2.5 bg-[#25D366] hover:bg-[#20af53] rounded text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shrink-0"
            id="faq-wa-helpdesk"
          >
            <MessageSquare className="h-4 w-4 shrink-0" /> WhatsApp Helpline
          </a>
        </div>
      </div>
    </section>
  );
}
