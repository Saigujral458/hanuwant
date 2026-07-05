/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Phone, Sliders, Calendar, Zap, MessageSquare } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialKva?: string;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialKva = "125", initialService = "Rent" }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    companyName: "",
    serviceType: initialService,
    powerKva: initialKva,
    durationMonths: "3",
    siteLocation: "",
    additionalNotes: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const triggerWhatsApp = () => {
    const msg = `Hello Hanuwant Power System Co., I would like to get a quote:
- *Name:* ${formData.fullName}
- *Phone:* ${formData.phone}
- *Service:* ${formData.serviceType}
- *Required Power:* ${formData.powerKva} KVA
- *Duration:* ${formData.durationMonths} Months
- *Site Location:* ${formData.siteLocation}
- *Notes:* ${formData.additionalNotes || "None"}
Please get back to me. Thank you!`;
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/919555576155?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    triggerWhatsApp();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            id="modal-backdrop"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative z-10 w-full max-w-2xl bg-[#0D0D0D] border-2 border-[#E63329]/30 rounded-lg shadow-2xl shadow-[#E63329]/10 overflow-hidden text-white"
            id="modal-container"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E63329]" />
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#E63329]/10 border border-[#E63329]/30 rounded">
                  <Zap className="h-6 w-6 text-[#E63329]" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                    Get An Instant <span className="text-[#E63329]">Quote</span>
                  </h3>
                  <p className="text-xs text-white/50">Hanuwant Power System Co. — Premium Power Solutions</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1 text-white/50 hover:text-white hover:bg-white/10 rounded transition-colors"
                id="close-quote-modal"
              >
                <X className="h-6 w-6" />
              </button>
            </div>            {/* Content Body */}
            <div className="p-6 max-h-[75vh] overflow-y-auto">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                {/* Service configuration */}
                <div className="bg-white/5 p-4 rounded border border-white/10 space-y-4">
                  <h4 className="font-display font-semibold text-sm uppercase text-[#E63329] tracking-wider flex items-center gap-2">
                    <Sliders className="h-4 w-4" /> 1. Configuration Options
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Service Needed
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm font-medium focus:border-[#E63329] focus:outline-none"
                        id="quote-service-type"
                      >
                        <option value="Rent">Genset on Rent</option>
                        <option value="Purchase_New">Purchase — Brand New</option>
                        <option value="Purchase_Used">Purchase — Pre-owned Certified</option>
                        <option value="Servicing">One-time Service Repair</option>
                        <option value="AMC">Annual Maintenance Contract (AMC)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Capacity Requirement (KVA)
                      </label>
                      <select
                        name="powerKva"
                        value={formData.powerKva}
                        onChange={handleChange}
                        className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm font-medium focus:border-[#E63329] focus:outline-none"
                        id="quote-kva-capacity"
                      >
                        <option value="15">15 KVA (Residential / Small Store)</option>
                        <option value="25">25 KVA (Small Clinic / Restaurant)</option>
                        <option value="40">40 KVA (Medium Office / School)</option>
                        <option value="58.5">58.5 KVA (Mini Mall / Cold Storage)</option>
                        <option value="62.5">62.5 KVA (Commercial / Event Stage)</option>
                        <option value="82.5">82.5 KVA (Large Showroom / Banquet)</option>
                        <option value="125">125 KVA (Supermarket / Hospital)</option>
                        <option value="200">200 KVA (Manufacturing / High-Rise)</option>
                        <option value="250">250 KVA (Large Factory / Construction)</option>
                        <option value="380">380 KVA (Pharma Plant / Mega Infrastructure)</option>
                        <option value="500">500 KVA (Mega Industrial / Hotels)</option>
                        <option value="750">750 KVA (Steel Smelter / Large Data Center)</option>
                        <option value="1000">1000 KVA (Data Center / Substation)</option>
                        <option value="1250">1250 KVA (Constant Power / Mining Outpost)</option>
                        <option value="1500">1500 KVA (Power Station / Mega Complexes)</option>
                        <option value="2000">2000 KVA (Refineries / Massive Grid)</option>
                      </select>
                    </div>

                    {formData.serviceType === "Rent" && (
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1 flex justify-between">
                          <span>Rental Lease Period</span>
                          <span className="text-[#E63329] font-mono">{formData.durationMonths} Month(s)</span>
                        </label>
                        <div className="flex items-center gap-4">
                          <input
                            type="range"
                            name="durationMonths"
                            min="1"
                            max="12"
                            value={formData.durationMonths}
                            onChange={handleChange}
                            className="w-full h-1 bg-white/20 accent-[#E63329] rounded-lg cursor-pointer"
                            id="quote-duration-slider"
                          />
                          <div className="flex items-center gap-1 text-[#E63329] bg-[#E63329]/10 border border-[#E63329]/30 px-3 py-1 text-xs font-semibold rounded shrink-0">
                            <Calendar className="h-3.5 w-3.5" />
                            {formData.durationMonths} Mo
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Personal metrics */}
                <div className="space-y-4">
                  <h4 className="font-display font-semibold text-sm uppercase text-[#E63329] tracking-wider flex items-center gap-2">
                    <Phone className="h-4 w-4" /> 2. Contact Credentials
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Sajal Gujral"
                        className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm focus:border-[#E63329] focus:outline-none text-white placeholder-white/30"
                        id="quote-fullname-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Phone Number (WhatsApp Preferable) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 9555576155"
                        className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm focus:border-[#E63329] focus:outline-none text-white placeholder-white/30"
                        id="quote-phone-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. client@website.com"
                        className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm focus:border-[#E63329] focus:outline-none text-white placeholder-white/30"
                        id="quote-email-field"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                        Company / Association Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="e.g. Metro Care Hospital"
                        className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm focus:border-[#E63329] focus:outline-none text-white placeholder-white/30"
                        id="quote-company-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Installation Site Location / Area *
                    </label>
                    <input
                      type="text"
                      required
                      name="siteLocation"
                      value={formData.siteLocation}
                      onChange={handleChange}
                      placeholder="e.g. Sector-62 Industrial Area, Noida"
                      className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm focus:border-[#E63329] focus:outline-none text-white placeholder-white/30"
                      id="quote-siteloc-field"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                      Additional Notes / Electric Load Highlights
                    </label>
                    <textarea
                      name="additionalNotes"
                      rows={2}
                      value={formData.additionalNotes}
                      onChange={handleChange}
                      placeholder="Mention heavy motors, AC quantities, or custom requirements if any..."
                      className="w-full bg-[#1A1A1A] border border-white/20 rounded p-2.5 text-sm focus:border-[#E63329] focus:outline-none text-white placeholder-white/30"
                      id="quote-notes-field textaction-box"
                    />
                  </div>
                </div>

                {/* Navigation submit */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#E63329] hover:bg-[#c9251c] rounded font-bold uppercase text-xs tracking-wider transition-all hover:shadow-[#E63329]/30 hover:shadow-lg text-white flex items-center justify-center gap-2 cursor-pointer"
                    id="quote-submit-btn"
                  >
                    <MessageSquare className="h-4 w-4" /> Send Quote Inquiry via WhatsApp →
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
