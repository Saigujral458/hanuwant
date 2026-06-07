/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, SlidersHorizontal, Zap, Gauge, Flame, CornerDownRight, X, MessageSquare, Download } from "lucide-react";
import { PRODUCTS } from "../data";
import { GeneratorProduct } from "../types";

interface ProductCatalogProps {
  onOpenQuote: (initialKva?: string, initialService?: string) => void;
}

export default function ProductCatalog({ onOpenQuote }: ProductCatalogProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [selectedRange, setSelectedRange] = useState("All");
  const [activeSpecProduct, setActiveSpecProduct] = useState<GeneratorProduct | null>(null);

  // Filter handlers
  const brands = ["All", "Cummins", "Kirloskar", "Mahindra", "Ashok Leyland"];

  const filteredProducts = PRODUCTS.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prod.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === "All" || prod.brand.includes(selectedBrand);
    
    let matchesRange = true;
    if (selectedRange === "small") matchesRange = prod.kva <= 30;
    else if (selectedRange === "medium") matchesRange = prod.kva > 30 && prod.kva <= 150;
    else if (selectedRange === "heavy") matchesRange = prod.kva > 150 && prod.kva <= 500;
    else if (selectedRange === "mega") matchesRange = prod.kva > 500;

    return matchesSearch && matchesBrand && matchesRange;
  });

  const triggerWhatsAppForProduct = (product: GeneratorProduct) => {
    const msg = `Hello Hanuwant Power System Co., I am interested in inquiring about the following model:
- *Model:* ${product.name}
- *Capacity:* ${product.kva} KVA
- *Brand:* ${product.brand}
Please send me pricing details for Rental/Sale. Thank you!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919555576155?text=${encoded}`, "_blank");
  };

  return (
    <section 
      id="products" 
      className="w-full bg-[#FAFAFA] py-16 md:py-24 px-4 font-sans border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-[#E63329] uppercase tracking-widest">
            HEAVY INDUSTRIAL INVENTORY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0D0D0D]" id="products-headline">
            FEATURED <span className="text-[#E63329]">PRODUCTS</span>
          </h2>
          <p className="text-xs text-gray-500 max-w-lg mt-1 leading-relaxed">
            Rent or buy premium-certified acoustic diesel generator systems. Inspected, pre-tested, and optimized for high starting torque demands.
          </p>
          <div className="w-16 h-1 bg-[#E63329] mt-2 rounded" />
        </div>

        {/* Filter Toolbar */}
        <div className="bg-white border text-gray-800 border-gray-200 rounded-lg p-4 sm:p-6 mb-8 flex flex-col gap-4 shadow-xs">
          {/* Top row - Search element */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search generators, e.g. Cummins 500 kVA..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#F9FAFB] text-sm text-gray-900 border border-gray-300 focus:border-[#E63329] focus:outline-none rounded-lg py-2.5 pl-10 pr-4 transition-all"
                id="product-search-input"
              />
            </div>

            {/* Power range dropdown selector */}
            <div className="w-full sm:w-64">
              <select
                value={selectedRange}
                onChange={(e) => setSelectedRange(e.target.value)}
                className="w-full bg-[#F9FAFB] text-sm text-gray-700 border border-gray-300 focus:border-[#E63329] focus:outline-none rounded-lg p-2.5 transition-all font-medium"
                id="product-range-select"
              >
                <option value="All">All Capacities (15–2000 KVA)</option>
                <option value="small">Low Range (Under 30 KVA)</option>
                <option value="medium">Commercial Range (30 to 150 KVA)</option>
                <option value="heavy">Heavy Duty (150 to 500 KVA)</option>
                <option value="mega">High Mega Infrastructure (500+ KVA)</option>
              </select>
            </div>
          </div>

          {/* Bottom row - Brand pills selection */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1 shrink-0 mr-2">
              <SlidersHorizontal className="h-3.5 w-3.5" /> Filter Brand:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {brands.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedBrand(b)}
                  className={`px-3 py-1 bg-[#F3F4F6] hover:bg-gray-200 text-xs font-bold uppercase rounded cursor-pointer transition-all ${selectedBrand === b ? "bg-[#E63329] text-white hover:bg-[#E63329]" : "text-gray-700"}`}
                  id={`brand-pil-${b.replace(/\s+/g, "-")}`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg border border-gray-200" id="empty-products-state">
            <p className="text-gray-500 font-sans text-sm font-bold">No generator matches found.</p>
            <p className="text-xs text-gray-400 mt-1">Try relaxing your capacity range filters, or contact our Ghaziabad support helpline directly!</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedBrand("All");
                setSelectedRange("All");
              }}
              className="mt-4 px-4 py-2 bg-gray-900 text-white rounded text-xs font-bold uppercase cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="products-grid">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((prod) => (
                <motion.div
                  key={prod.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 15 }}
                  transition={{ 
                    duration: 0.45,
                    layout: { type: "spring", stiffness: 100, damping: 18 }
                  }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.015,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.05)"
                  }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:border-[#E63329]/30 flex flex-col justify-between"
                  id={`catalog-card-${prod.id}`}
                >
                {/* Header card indicator with kVA display */}
                <div className="p-5 border-b border-gray-100 flex justify-between items-start">
                  <div className="space-y-0.5">
                    <span className="text-[10px] uppercase font-mono font-extrabold text-[#E63329]">
                      {prod.brand}
                    </span>
                    <h3 className="font-display font-bold text-[#0D0D0D] text-base leading-snug">
                      {prod.name}
                    </h3>
                  </div>

                  <div className="bg-[#E63329] text-white px-3 py-1.5 rounded text-center leading-none shadow-md shrink-0">
                    <span className="font-mono text-base font-black leading-none block">
                      {prod.kva}
                    </span>
                    <span className="text-[8px] font-bold tracking-widest block uppercase mt-0.5">
                      KVA
                    </span>
                  </div>
                </div>

                {/* Specs rows */}
                <div className="p-5 py-4 space-y-3 bg-[#FAFAFA]/50 border-b border-gray-100">
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">PHASE RATING</span>
                      <strong className="text-gray-800 font-semibold uppercase flex items-center gap-1 font-sans">
                        <Zap className="h-3.5 w-3.5 text-[#E63329]" />
                        {prod.phase} Phase
                      </strong>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">FUEL SYSTEM</span>
                      <strong className="text-gray-800 font-semibold uppercase flex items-center gap-1 font-sans">
                        <Flame className="h-3.5 w-3.5 text-[#E63329]" />
                        {prod.fuelType} Fuel
                      </strong>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">FUEL RATING</span>
                      <strong className="text-gray-800 font-mono text-xs block truncate" title={prod.fuelConsumption}>
                        {prod.fuelConsumption}
                      </strong>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Acoustic Shield</span>
                      <strong className="text-gray-800 font-semibold text-xs truncate uppercase flex items-center gap-1 font-sans">
                        <Gauge className="h-3.5 w-3.5 text-[#E63329]" />
                        {prod.noiseLevel.includes("75") ? "< 75 dBA" : "Silent Canopy"}
                      </strong>
                    </div>
                  </div>

                  {/* Highlights overview */}
                  <p className="text-[11px] text-gray-500 leading-normal line-clamp-2 pt-2 border-t border-gray-100">
                    {prod.description}
                  </p>
                </div>

                {/* Action footer */}
                <div className="p-5 flex gap-2">
                  <button
                    onClick={() => setActiveSpecProduct(prod)}
                    className="flex-1 py-2 bg-gray-900 hover:bg-gray-950 font-bold text-[10px] text-white uppercase tracking-wider rounded transition-all active:scale-95 cursor-pointer text-center"
                    id={`view-specs-btn-${prod.id}`}
                  >
                    View Specs Sheet
                  </button>
                  <button
                    onClick={() => triggerWhatsAppForProduct(prod)}
                    className="px-3.5 py-2 bg-[#25D366] hover:bg-[#1f9c4c] text-white rounded transition-all active:scale-95 cursor-pointer flex items-center justify-center"
                    id={`product-wa-btn-${prod.id}`}
                    title="Send WhatsApp Inquiry"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Model Spec Sheet Modal */}
      <AnimatePresence>
        {activeSpecProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSpecProduct(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              id="spec-backdrop"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative z-10 w-full max-w-xl bg-[#0D0D0D] border-2 border-[#E63329]/30 rounded-lg shadow-2xl text-white overflow-hidden p-6"
              id="spec-modal"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E63329]" />
              
              {/* Header */}
              <div className="flex justify-between items-start pb-4 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#E63329] uppercase tracking-widest block">
                    MANUFACTURING DATASHEET
                  </span>
                  <h3 className="font-display font-extrabold text-xl uppercase tracking-tight text-white mt-0.5">
                    {activeSpecProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveSpecProduct(null)}
                  className="p-1 hover:bg-white/10 text-white/50 hover:text-white rounded"
                  id="close-spec-modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Specifications Block Grid */}
              <div className="py-4 space-y-4 text-xs font-default max-h-[60h] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4 bg-white/5 p-3.5 rounded border border-white/5 font-sans">
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Genset Brand</span>
                    <strong className="text-white text-sm">{activeSpecProduct.brand}</strong>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Prime Engine</span>
                    <strong className="text-white text-sm">{activeSpecProduct.engineBrand}</strong>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Power capacity</span>
                    <strong className="text-[#E63329] text-sm">{activeSpecProduct.kva} KVA / {(activeSpecProduct.kva * 0.8).toFixed(1)} kW</strong>
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Phase / Phase System</span>
                    <strong className="text-white text-sm">{activeSpecProduct.phase} Phase / 415 V Config</strong>
                  </div>
                </div>

                {/* Sub Features details */}
                <div className="space-y-2">
                  <h4 className="text-xs uppercase font-extrabold text-[#E63329] tracking-wider">Engine Attributes</h4>
                  <div className="space-y-1 text-gray-300 ml-1">
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400 uppercase text-[9px] tracking-wider">Governor Class:</span>
                      <span className="font-semibold text-[11px]">Electronic (ISO 8528 G3 compliant)</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400 uppercase text-[9px] tracking-wider">Acoustic Shield Rating:</span>
                      <span className="font-mono text-[11px] text-white">{activeSpecProduct.noiseLevel}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400 uppercase text-[9px] tracking-wider">Certified Consumption:</span>
                      <span className="font-mono text-[11px] text-white">{activeSpecProduct.fuelConsumption}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400 uppercase text-[9px] tracking-wider">Cooling Mechanism:</span>
                      <span className="font-semibold text-[11px]">Liquid Cooled (Radiator with fan assembly)</span>
                    </div>
                  </div>
                </div>

                {/* Applications Served */}
                <div className="space-y-2">
                  <h4 className="text-[#E63329] uppercase font-bold text-[10px] tracking-widest flex items-center gap-1">
                    <CornerDownRight className="h-3.5 w-3.5 shrink-0" /> Recommended Deployments:
                  </h4>
                  <div className="flex flex-wrap gap-1.5 ml-1">
                    {activeSpecProduct.applications.map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 bg-[#E63329]/10 border border-[#E63329]/30 text-xs font-semibold rounded text-white"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Warning informational note */}
                <p className="text-[10px] text-gray-500 leading-normal bg-white/2 p-3 rounded-lg border border-white/5 leading-relaxed font-sans mt-3">
                  ⚠️ <strong>Disclaimer Note:</strong> Continuous load factor shouldn't exceed 80% on prime assemblies. Fuel consumption averages may vary slightly according to operational load balances and ambient temperatures. For certified layout parameters consult Hanuwant Power System technicians directly.
                </p>
              </div>

              {/* Action buttons inside spec modal */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    const kvaString = activeSpecProduct.kva.toString();
                    setActiveSpecProduct(null);
                    onOpenQuote(kvaString, "Rent");
                  }}
                  className="flex-1 py-2.5 bg-[#E63329] hover:bg-[#c62a1f] rounded font-bold uppercase text-xs tracking-wider text-white text-center cursor-pointer active:scale-95 transition-all"
                  id="spec-modal-rent-action"
                >
                  Configure Lease Quotation →
                </button>
                <button
                  onClick={() => triggerWhatsAppForProduct(activeSpecProduct)}
                  className="px-4 py-2.5 bg-[#25D366] hover:bg-[#1e9a4b] text-white rounded font-bold uppercase text-xs tracking-wider transition-all text-center flex items-center justify-center gap-1 cursor-pointer active:scale-95"
                  id="spec-modal-whatsapp-action"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" /> Contact Sales
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
