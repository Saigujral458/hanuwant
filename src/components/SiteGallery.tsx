/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, MapPin, Tag, X, Flame } from "lucide-react";

import cumminsGen from "../assets/images/cummins_generator_1780219713515.png";
import silentRedWhite from "../assets/images/silent_red_white_1780228740637.png";
import trailerGen from "../assets/images/trailer_gen_logo_1783249532655.png";
import redLitGen from "../assets/images/red_lit_generator_1780219748044.png";
import silentBlackRed from "../assets/images/silent_black_red_1780228759679.png";
import silentSilverRed from "../assets/images/silent_silver_red_1780228778764.png";

interface GalleryItem {
  id: string;
  category: "all" | "Heavy_Industry" | "Hospital_Power" | "Infrastructure" | "Exhibition_Events";
  title: string;
  tag: string;
  location: string;
  imgUrl: string;
  specs: string;
}

export default function SiteGallery() {
  const [activeTab, setActiveTab] = useState<"all" | "Heavy_Industry" | "Hospital_Power" | "Infrastructure" | "Exhibition_Events">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: "all", label: "ALL DEPLOYMENTS" },
    { id: "Heavy_Industry", label: "HEAVY INDUSTRIAL" },
    { id: "Hospital_Power", label: "HOSPITALS" },
    { id: "Infrastructure", label: "INFRASTRUCTURE" },
    { id: "Exhibition_Events", label: "MEGA EVENTS" }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: "gal-1",
      category: "Heavy_Industry",
      title: "500 KVA Dual Sync Installation",
      tag: "Metal Smelting Plant",
      location: "Sahibabad Industrial Area, Ghaziabad",
      imgUrl: cumminsGen,
      specs: "2x 500 KVA Cummins with AMF panel synchronization"
    },
    {
      id: "gal-2",
      category: "Hospital_Power",
      title: "125 KVA Emergency Backup Link",
      tag: "Super Speciality Hospital",
      location: "Sector-2, Rajender Nagar, Sahibabad",
      imgUrl: silentRedWhite,
      specs: "Kirloskar Green 125 KVA silent canopy, <4 sec automated transition"
    },
    {
      id: "gal-3",
      category: "Infrastructure",
      title: "Mobile 62.5 KVA Fleet Deployment",
      tag: "Highway Flyover Construction",
      location: "Noida Sector-62 Express Link",
      imgUrl: trailerGen,
      specs: "Mahindra Powerol 62.5 KVA mounted on dual-axle high clearance trailer"
    },
    {
      id: "gal-4",
      category: "Exhibition_Events",
      title: "250 KVA Super Silent Wedding Array",
      tag: "Grand Banquet Luxury Hall",
      location: "Ghaziabad Bypass Road Gentry",
      imgUrl: redLitGen,
      specs: "Ashok Leyland 250 KVA containerized sound-proof canopy"
    },
    {
      id: "gal-5",
      category: "Heavy_Industry",
      title: "1000 KVA High Voltage Refinery Hook",
      tag: "Chemical Processing Block",
      location: "Loni Industrial Complex",
      imgUrl: silentBlackRed,
      specs: "Cummins Heavy Duty V-12, bespoke acoustic shelter layout"
    },
    {
      id: "gal-6",
      category: "Hospital_Power",
      title: "250 KVA Oxygen Generator Plant Backup",
      tag: "Central Diagnostic Wing",
      location: "Sanjay Nagar Govt Clinic, Ghaziabad",
      imgUrl: silentSilverRed,
      specs: "Ashok Leyland LEYPOWER 250 KVA prime backup unit"
    }
  ];

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeTab);

  return (
    <section 
      id="gallery" 
      className="w-full bg-[#FFFFFF] py-16 px-4 font-sans border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center space-y-2 mb-10">
          <span className="text-xs font-bold text-[#E63329] uppercase tracking-widest">
            REAL ONSITE ACTION
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0D0D0D]">
            PROJECT <span className="text-[#E63329]">GALLERY</span>
          </h2>
          <p className="text-xs text-gray-500 max-w-md mt-1 leading-relaxed">
            Witness our robust diesel layouts operating flawlessly under high temperature and critical conditions at client facilities.
          </p>
          <div className="w-16 h-1 bg-[#E63329] mt-2 rounded" />
        </div>

        {/* Tab filters */}
        <div className="flex flex-wrap justify-center items-center gap-1.5 mb-8" id="gallery-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-1.5 rounded text-xs font-bold uppercase transition-all cursor-pointer ${activeTab === tab.id ? "bg-[#E63329] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
              id={`gal-tab-${tab.id}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ 
                  duration: 0.45,
                  layout: { type: "spring", stiffness: 100, damping: 18 }
                }}
                whileHover={{ 
                  y: -5,
                  scale: 1.015
                }}
                onClick={() => setSelectedImage(item)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-900 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
                id={`gallery-item-${item.id}`}
              >
                {/* Images with no referrer policy */}
                <div className="aspect-video w-full overflow-hidden bg-gray-150 relative">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Eye className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Info section below image */}
                <div className="p-4 bg-white border-t border-gray-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#E63329] uppercase font-bold">
                    <Tag className="h-3 w-3 shrink-0" /> {item.tag}
                  </div>
                  <h3 className="font-display font-bold text-sm text-[#0D0D0D] leading-none uppercase">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-sans">
                    <MapPin className="h-3.5 w-3.5 text-gray-400 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox full view Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xs"
              id="lightbox-backdrop"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-3xl bg-[#0D0D0D] border-2 border-white/10 rounded-lg overflow-hidden text-white"
              id="lightbox-modal"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white"
                id="lightbox-close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-video w-full bg-gray-900">
                <img
                  src={selectedImage.imgUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 space-y-3 font-sans">
                <div className="flex items-center justify-between">
                  <div className="px-2 py-0.5 bg-[#E63329] text-white text-[9px] font-mono rounded font-bold uppercase">
                    {selectedImage.tag}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <MapPin className="h-3.5 w-3.5 text-[#E63329]" />
                    {selectedImage.location}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-lg uppercase tracking-tight text-white mb-1">
                  {selectedImage.title}
                </h3>

                <div className="bg-white/5 p-3 rounded border border-white/5 space-y-1">
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    SPECIFICATIONS INSTALLED
                  </div>
                  <p className="text-xs text-gray-200 flex items-center gap-1.5">
                    <Flame className="h-4 w-4 text-[#E63329]" />
                    {selectedImage.specs}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
