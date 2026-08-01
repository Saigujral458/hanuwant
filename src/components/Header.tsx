/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Phone, Mail, Clock, MapPin, Menu, X, ChevronDown, Facebook, Instagram, MessageSquare } from "lucide-react";
import HPSLogo from "./HPSLogo";

interface HeaderProps {
  onOpenQuote: (initialKva?: string, initialService?: string) => void;
  activeSection: string;
}

export default function Header({ onOpenQuote, activeSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100; // Offset for sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navLinks = [
    { label: "HOME", targetId: "hero" },
    { label: "ABOUT US", targetId: "why-choose-us" },
    { label: "SERVICES", targetId: "services", hasDropdown: true },
    { label: "PRODUCTS", targetId: "products" },
    { label: "GALLERY", targetId: "gallery" },
    { label: "BLOG", targetId: "blog" },
    { label: "CONTACT US", targetId: "contact" }
  ];

  return (
    <header className="w-full z-40 relative font-sans">
      {/* Top Bar - Thin utility strip (Light Gray Background) */}
      <div 
        className="bg-[#F3F4F6] text-gray-700 text-[11px] font-medium py-2 px-4 border-b border-gray-200"
        id="top-bar-container"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          {/* Contacts Details */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-1">
            <span className="flex items-center gap-1.5 hover:text-[#E63329] transition-colors">
              <MapPin className="h-3.5 w-3.5 text-[#E63329]" />
              74, RM Block, Sec-2, Rajender Nagar, Sahibabad, Ghaziabad, UP-201005
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#E63329] transition-colors">
              <Clock className="h-3.5 w-3.5 text-[#E63329]" />
              Mon–Sat: 9:00 AM – 7:00 PM
            </span>
            <a href="mailto:info@hanuwantpower.com" className="flex items-center gap-1.5 hover:text-[#E63329] transition-colors">
              <Mail className="h-3.5 w-3.5 text-[#E63329]" />
              info@hanuwantpower.com
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#E63329] text-gray-500 transition-colors">
              <Facebook className="h-3.5 w-3.5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#E63329] text-gray-500 transition-colors">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href="https://wa.me/919555576155" target="_blank" rel="noreferrer" className="hover:text-[#E63329] text-gray-500 transition-colors">
              <MessageSquare className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full bg-white transition-all duration-300 ${isHeaderScrolled ? "fixed top-0 left-0 shadow-md border-b border-gray-200 py-3" : "py-4"} ${isHeaderScrolled ? "z-50" : "z-30"}`}
        id="main-navbar-container"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Left: circular logo with "Hanuwant Power System Co." */}
          <div 
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 cursor-pointer select-none group"
            id="brand-logo-trigger"
          >
            {/* Custom official HPS brand vector logo */}
            <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
              <HPSLogo size={54} />
            </div>
            
            <div className="flex flex-col">
              <div className="font-display font-black text-[#0D0D0D] leading-none text-base md:text-xl tracking-tight uppercase">
                Hanuwant
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-medium text-xs text-gray-500 tracking-wider">Power System Co.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63329] animate-ping" />
              </div>
            </div>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group/link">
                <button
                  onClick={() => scrollToSection(link.targetId)}
                  className={`flex items-center gap-1 font-sans text-xs font-bold uppercase transition-colors hover:text-[#E63329] py-2 cursor-pointer ${activeSection === link.targetId ? "text-[#E63329]" : "text-gray-800"}`}
                  id={`nav-link-${link.targetId}`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-3.5 w-3.5 text-gray-400 group-hover/link:text-[#E63329] transition-transform duration-250 group-hover/link:rotate-180" />
                  )}
                </button>
                
                {/* Visual red track indicator */}
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E63329] transition-all duration-300 ${activeSection === link.targetId ? "w-full" : "w-0 group-hover/link:w-full"}`} 
                />

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-[#0D0D0D] border border-white/10 rounded shadow-2xl py-2 opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible transition-all duration-200 transform translate-y-2 group-hover/link:translate-y-0 z-50">
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 hover:bg-[#E63329]/10 hover:text-[#E63329] text-xs font-bold text-white transition-colors"
                    >
                      GENSET ON RENT
                    </button>
                    <button 
                      onClick={() => scrollToSection("products")}
                      className="w-full text-left px-4 py-2 hover:bg-[#E63329]/10 hover:text-[#E63329] text-xs font-bold text-white transition-colors"
                    >
                      SALE & PURCHASE
                    </button>
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 hover:bg-[#E63329]/10 hover:text-[#E63329] text-xs font-bold text-white transition-colors"
                    >
                      SERVICE & AMC
                    </button>
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 hover:bg-[#E63329]/10 hover:text-[#E63329] text-xs font-bold text-white transition-colors"
                    >
                      INSTALLATION SYSTEM
                    </button>
                    <button 
                      onClick={() => scrollToSection("services")}
                      className="w-full text-left px-4 py-2 hover:bg-[#E63329]/10 hover:text-[#E63329] text-xs font-bold text-white transition-colors"
                    >
                      EMERGENCY SUPPORT (24/7)
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side: Red Pill Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:9555576155"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#E63329] hover:bg-[#d62016] text-white hover:text-white rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all shadow-md active:scale-95 group shrink-0"
              id="header-phone-pill"
            >
              <Phone className="h-3.5 w-3.5 animate-bounce" />
              9555576155
            </a>
          </div>

          {/* Mobile Burger Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Quick call on mobile */}
            <a
              href="tel:9555576155"
              className="p-2.5 bg-[#E63329] hover:bg-[#d52b22] text-white rounded-full sm:hidden"
              id="mobile-phone-quickcall"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded text-gray-800 transition-colors cursor-pointer"
              aria-label="Toggle menu"
              id="mobile-menu-burger"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          {/* Backdrop */}
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs" 
          />

          {/* Navigation Drawer Container */}
          <div className="relative w-80 max-w-[85vw] ml-auto h-full bg-[#0D0D0D] border-l border-white/10 p-6 flex flex-col justify-between overflow-y-auto z-10 text-white">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <HPSLogo size={44} isDarkTheme={true} />
                  <span className="font-display font-black text-white text-sm tracking-wider uppercase">
                    MENU
                  </span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 hover:bg-white/10 rounded"
                  id="mobile-drawer-close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Links list */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label} className="py-1">
                    {link.hasDropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className="w-full flex items-center justify-between p-2 hover:bg-white/5 rounded text-sm font-bold uppercase text-left"
                        >
                          <span className={activeSection === link.targetId ? "text-[#E63329]" : "text-white"}>{link.label}</span>
                          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isServicesOpen && (
                          <div className="pl-4 bg-white/2 rounded py-1 space-y-1">
                            {["Genset on Rent", "Sale & Purchase", "Service & AMC", "Installation", "24/7 Technical Support"].map((sub) => (
                              <button
                                key={sub}
                                onClick={() => scrollToSection(link.targetId)}
                                className="w-full text-left p-2 text-xs font-semibold text-gray-400 hover:text-white"
                              >
                                {sub}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.targetId)}
                        className={`w-full text-left p-2 hover:bg-white/5 rounded text-sm font-bold uppercase ${activeSection === link.targetId ? "text-[#E63329] bg-[#E63329]/10" : "text-white"}`}
                      >
                        {link.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom corporate stamp in mobile menu */}
            <div className="pt-6 border-t border-white/10 mt-6 space-y-4">
              <a
                href="tel:9555576155"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#E63329] hover:bg-[#df2c22] rounded-lg text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer"
                id="drawer-tel-action"
              >
                <Phone className="h-4 w-4" /> Call 9555576155
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white font-bold text-xs uppercase tracking-wider text-center cursor-pointer border border-white/10"
                id="drawer-quote-action"
              >
                Get Custom Quote
              </button>
              <div className="text-[10px] text-gray-500 text-center leading-normal">
                Hanuwant Power System Co.<br />Rajender Nagar, Ghaziabad, UP
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
