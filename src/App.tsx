/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import ProductCatalog from "./components/ProductCatalog";
import SiteGallery from "./components/SiteGallery";
import InteractiveBlog from "./components/InteractiveBlog";
import FaqSection from "./components/FaqSection";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteKva, setQuoteKva] = useState("125");
  const [quoteService, setQuoteService] = useState("Rent");

  // Dynamic Scroll Listener for Active Navbar Underlines
  useEffect(() => {
    const sections = ["hero", "why-choose-us", "services", "products", "gallery", "blog", "contact"];
    
    const handleScroll = () => {
      let current = "hero";
      const scrollPosition = window.scrollY + 180; // offset factor

      for (const sect of sections) {
        const el = document.getElementById(sect);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = sect;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenQuote = (kva = "125", service = "Rent") => {
    setQuoteKva(kva);
    setQuoteService(service);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-[#E63329] selection:text-white" id="main-app-container">
      {/* 1. Header Navigation System */}
      <Header onOpenQuote={handleOpenQuote} activeSection={activeSection} />

      {/* 2. Main Presenter Hero Grid */}
      <Hero onOpenQuote={handleOpenQuote} />

      {/* 3. High-Contrast Brands Strip */}
      <Brands />

      {/* 4. Service Configurations Matrix */}
      <Services onOpenQuote={handleOpenQuote} />

      {/* 5. Dual Split "Why Choose Us" Stats Column */}
      <WhyChooseUs />

      {/* 6. Dynamic Product Catalog with Spec drawers */}
      <ProductCatalog onOpenQuote={handleOpenQuote} />

      {/* 7. Centered Industries Matrices */}
      <Industries />

      {/* 8. Installation Gallery with Category filter grids */}
      <SiteGallery />

      {/* 9. Full width Cinematic CTA Strip */}
      <CTABanner onOpenQuote={handleOpenQuote} />

      {/* 10. Technical blog reads */}
      <InteractiveBlog />

      {/* 11. FAQ Collapse Accordions under Contact category anchor */}
      <FaqSection />

      {/* 12. Corporate Address Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* 13. Smart quotation modal action overlay */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialKva={quoteKva}
        initialService={quoteService}
      />
    </div>
  );
}
