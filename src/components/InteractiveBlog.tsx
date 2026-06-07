/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Calendar, User, Clock, BookOpen, X, MessageSquare } from "lucide-react";
import { BLOGS } from "../data";
import { BlogArticle } from "../types";

export default function InteractiveBlog() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  return (
    <section 
      id="blog" 
      className="w-full bg-[#FAFAFA] py-16 px-4 font-sans border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Headings */}
        <div className="flex flex-col items-center text-center space-y-2 mb-12">
          <span className="text-xs font-bold text-[#E63329] uppercase tracking-widest">
            TECHNICAL LEARNING HUB
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#0D0D0D]">
            LATEST <span className="text-[#E63329]">INSIGHTS</span>
          </h2>
          <p className="text-xs text-gray-500 max-w-sm mt-1 leading-relaxed">
            Read professional guides drafted by Hanuwant Power System Co.'s leading engineering experts.
          </p>
          <div className="w-16 h-1 bg-[#E63329] mt-2 rounded" />
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-grid">
          {BLOGS.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-white border text-gray-800 border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer"
              onClick={() => setSelectedArticle(blog)}
              id={`blog-card-${blog.id}`}
            >
              {/* Inner card content padding */}
              <div className="p-6 space-y-4">
                {/* Meta details bar */}
                <div className="flex items-center justify-between text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-[#E63329]" />
                    {blog.publishDate}
                  </span>
                  <span className="px-2 py-0.5 bg-gray-100 border border-gray-200 rounded text-gray-600 font-mono text-[9px]">
                    {blog.category}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="font-display font-bold text-gray-900 group-hover:text-[#E63329] text-base leading-snug group-hover:underline transition-colors uppercase">
                  {blog.title}
                </h3>

                {/* Short Description */}
                <p className="text-gray-500 text-xs leading-relaxed font-sans line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>

              {/* Author Footer */}
              <div className="px-6 py-4 bg-[#F9FAFB] border-t border-gray-100 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gray-200/80 border border-gray-300 flex items-center justify-center font-bold text-[10px] text-gray-700 font-sans">
                    {blog.author.split(" ")[0][0]}
                  </div>
                  <span className="text-[10px] text-gray-600 font-bold tracking-tight">
                    {blog.author.split(" ")[0]} {blog.author.split(" ")[1]}
                  </span>
                </div>

                <div 
                  className="flex items-center gap-1 font-sans text-[10px] font-black text-[#E63329] uppercase tracking-wider cursor-pointer"
                  onClick={() => setSelectedArticle(blog)}
                >
                  Read Post <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Content modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
              id="blog-backdrop"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="relative z-10 w-full max-w-2xl bg-[#0D0D0D] border-2 border-[#E63329]/30 rounded-lg shadow-2xl text-white overflow-hidden p-6"
              id="blog-modal"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-[#E63329]" />
              
              {/* Header metadata */}
              <div className="flex justify-between items-start pb-4 border-b border-white/10">
                <div className="space-y-1">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="flex items-center gap-1 text-[10px] text-[#E63329] uppercase font-mono font-bold tracking-widest">
                      <BookOpen className="h-3.5 w-3.5" /> Hanuwant Tech Article
                    </span>
                    <span className="px-2 py-0.2 bg-white/5 border border-white/10 text-white text-[8px] font-mono rounded">
                      {selectedArticle.category}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl uppercase tracking-tight text-white mt-1">
                    {selectedArticle.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1 hover:bg-white/10 text-white/50 hover:text-white rounded"
                  id="close-blog-modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Body */}
              <div className="py-4 space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                {/* Author specifications and meta */}
                <div className="flex items-center gap-4 text-[10px] text-gray-400 pb-3 border-b border-white/5 leading-none">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-[#E63329]" />
                    DATE: {selectedArticle.publishDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#E63329]" />
                    {selectedArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-[#E63329]" />
                    WRITER: {selectedArticle.author}
                  </span>
                </div>

                {/* Main Content Paragraphs (formatted cleanly) */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans first-letter:text-3xl first-letter:font-bold first-letter:text-[#E63329] first-letter:mr-2 first-letter:float-left">
                  {selectedArticle.content}
                </p>

                {/* Call-to-action note inside reading block */}
                <div className="bg-[#E63329]/10 border border-[#E63329]/20 p-4 rounded-lg mt-4 space-y-2">
                  <h4 className="text-[#E63329] font-display font-bold text-xs uppercase tracking-wider">
                    Need Engineering Consultation for your Infrastructure Site?
                  </h4>
                  <p className="text-[11px] text-gray-350 leading-relaxed font-sans">
                    Don't guess your load parameters. Our service team at Ghaziabad installs calibrated fuel logging and synchronization frameworks tailored precisely for major industries.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => {
                    const titleText = selectedArticle.title;
                    setSelectedArticle(null);
                    window.open(`https://wa.me/919555576155?text=Hello%20HPS%2C%20I%20just%20read%2520your%20expert%20article%20%22${encodeURIComponent(titleText)}%22%20and%20need%20expert%20help.%20Please%20guide%20me.`, "_blank");
                  }}
                  className="flex-1 py-2.5 bg-[#25D366] hover:bg-[#1f9748] rounded font-bold uppercase text-xs tracking-wider text-white text-center flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                  id="blog-modal-whatsapp"
                >
                  <MessageSquare className="h-4 w-4 shrink-0" /> Ask Technical Author
                </button>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/15 rounded text-xs font-bold text-white uppercase tracking-wider cursor-pointer active:scale-95 transition-all"
                  id="close-blog-reading"
                >
                  Close Document
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
