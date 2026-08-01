/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, Clock, MapPin, Facebook, Instagram, MessageSquare, ArrowUp } from "lucide-react";
import HPSLogo from "./HPSLogo";

interface FooterProps {
  onOpenQuote: (initialKva?: string, initialService?: string) => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="bg-[#0A0A0A] text-white pt-16 pb-8 px-4 font-sans border-t border-[#E63329]"
      id="main-footer-container"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: HPS Brand Statement */}
          <div className="lg:col-span-4 space-y-5">
            <div 
              onClick={() => scrollToSection("hero")}
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              {/* Custom official HPS brand vector logo */}
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                <HPSLogo size={52} isDarkTheme={true} />
              </div>
              
              <div className="flex flex-col">
                <span className="font-display font-black text-white leading-none text-base tracking-tight uppercase">
                  Hanuwant
                </span>
                <span className="font-display text-[10px] text-gray-500 tracking-wider">Power System Co.</span>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Deals in Diesel Genset on Rental Basis, Sale, Purchase & Service – 15 KVA to 2000 KVA. Delivers highly efficient, low-noise, and CPCB energy compliant industrial backups.
            </p>

            {/* Social handles */}
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-[#E63329] hover:bg-[#E63329] text-white flex items-center justify-center transition-all cursor-pointer">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-[#E63329] hover:bg-[#E63329] text-white flex items-center justify-center transition-all cursor-pointer">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/919555576155" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/5 border border-white/10 hover:border-[#E63329] hover:bg-[#E63329] text-white flex items-center justify-center transition-all cursor-pointer">
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#E63329] border-l-2 border-[#E63329] pl-2 leading-none">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { label: "Home", id: "hero" },
                { label: "About Us", id: "why-choose-us" },
                { label: "Our Services", id: "services" },
                { label: "Our Products", id: "products" },
                { label: "Gallery", id: "gallery" },
                { label: "Blog", id: "blog" },
                { label: "Contact Us", id: "contact" }
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left hover:underline cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OUR SERVICES */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#E63329] border-l-2 border-[#E63329] pl-2 leading-none">
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                "Genset on Rent",
                "Sale & Purchase",
                "Service & AMC",
                "Installation",
                "24/7 Support"
              ].map((serv) => (
                <li key={serv}>
                  <button
                    onClick={() => {
                      scrollToSection("services");
                      onOpenQuote("125", serv);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left hover:underline cursor-pointer"
                  >
                    {serv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: CONTACT INFO */}
          <div className="lg:col-span-3 space-y-4 text-xs text-gray-400">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-[#E63329] border-l-2 border-[#E63329] pl-2 leading-none">
              CONTACT INFO
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2 text-[11px] leading-snug">
                <MapPin className="h-4 w-4 text-[#E63329] shrink-0 mt-0.5" />
                <span>74, RM Block, Sec-2, Rajender Nagar, Sahibabad, Ghaziabad, UP-201005 (U.P.)</span>
              </li>

              <li>
                <a href="tel:9555576155" className="flex items-center gap-2 text-white hover:text-[#E63329] transition-colors font-bold text-xs">
                  <Phone className="h-4 w-4 text-[#E63329] shrink-0" />
                  9555576155
                </a>
              </li>

              <li className="flex items-center gap-2 overflow-hidden truncate">
                <Mail className="h-4 w-4 text-[#E63329] shrink-0" />
                <a href="mailto:info@hanuwantpower.com" className="text-gray-400 hover:text-white transition-colors block select-all">
                  info@hanuwantpower.com
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#E63329] shrink-0" />
                <span>Mon–Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-[11px] font-sans font-medium">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
            <span>© {currentYear} Hanuwant Power System Co. All Rights Reserved.</span>
            <span className="hidden md:inline text-white/10">|</span>
            <button
              onClick={() => scrollToSection("hero")}
              className="hover:text-white flex items-center gap-1 transition-colors hover:underline cursor-pointer"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </button>
          </div>
          <div className="flex items-center gap-1.5 leading-none">
            <span>Designed with</span>
            <span className="text-[#E63329] text-sm leading-none block animate-beat">❤</span>
            <span>for Reliable Power</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
