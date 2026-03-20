"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Clock, ChevronLeft, Share2, CheckCircle2, GraduationCap } from "lucide-react";
import {Check } from "lucide-react";
export default function TNEABlogPage() {
  const [copied, setCopied] = useState(false);
  const handleShare = async () => {
    // 1. Check if navigator and clipboard exist to prevent the "undefined" error
    if (typeof window !== "undefined" && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    } else {
      // 2. Fallback: If clipboard API fails, try the older execCommand
      try {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        alert("Please copy the URL from your browser address bar.");
      }
    }
  };
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header Navigation */}
      <nav className="py-6 px-6 lg:px-24 border-b border-gray-100 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-gray-500 font-bold hover:text-blue-600 transition-colors">
          <ChevronLeft size={20} /> Back to Insights
        </Link>

        <div 
          onClick={handleShare}
          className={`p-3 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
            copied 
            ? "bg-green-100 text-green-600 scale-110" 
            : "bg-gray-50 text-gray-400 hover:text-blue-600"
          }`}
          title={copied ? "URL Copied!" : "Copy Link"}
        >
          {copied ? <Check size={20} /> : <Share2 size={20} />}
        </div>
      </nav>

      {/* 2. Hero Article Section */}
      <article className="pt-16 pb-24 px-6 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Metadata */}
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
              Admissions 2026
            </span>
            <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
              <Calendar size={14} /> March 14, 2026
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.9] mb-10">
            5 Things to Know Before the <span className="text-blue-600">TNEA Counseling</span>
          </h1>

          <p className="text-xl text-gray-500 font-bold leading-relaxed mb-12 italic border-l-4 border-blue-600 pl-6">
            "Understand the nuances of the Tamil Nadu Engineering Admissions process and avoid common mistakes that could cost you a seat in a top-tier institution."
          </p>

          {/* Featured Image */}
          <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden mb-16 shadow-2xl">
            <Image 
              src="/art-school-student-consulting-drawing-master.jpg" 
              alt="Engineering Students Chennai" 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Content Body */}
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-6 flex items-center gap-4">
                <span className="text-5xl text-blue-100 italic">01.</span> Random Number Generation
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed text-lg">
                Before the rank list is published, TNEA assigns a random number to every applicant. This is not your rank! It is a tie-breaker used only when two students have the exact same cutoff, DOB, and subjects. Don't panic when you see it.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-6 flex items-center gap-4">
                <span className="text-5xl text-blue-100 italic">02.</span> The Choice Filling Logic
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed text-lg">
                The most critical phase. You must list colleges in your true order of preference. The system moves from your 1st choice downwards. If you qualify for Choice #3, you will never get Choice #4, even if you prefer it later.
              </p>
              <div className="mt-6 bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <p className="text-blue-900 font-bold text-sm">
                  💡 Vision Leads Tip: Always include at least 20-30 colleges in your choice list to avoid being left without a seat in your round.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-black text-gray-900 uppercase mb-6 flex items-center gap-4">
                <span className="text-5xl text-blue-100 italic">03.</span> Certificate Verification (Online)
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed text-lg">
                Keep your community certificate and 10th/12th mark sheets scanned and ready. TNEA 2026 uses a fully digital verification process. Any discrepancy in your community category can lead to immediate disqualification.
              </p>
            </section>

            {/* ... More sections would follow ... */}
          </div>

          {/* CTA Box */}
          <div className="mt-24 p-12 bg-slate-900 rounded-[4rem] text-center">
            <h3 className="text-3xl font-black text-white uppercase mb-4">Confused about your Cutoff?</h3>
            <p className="text-slate-400 font-bold mb-8">Our expert counselors help you build a personalized choice-filling list based on last year's closing ranks.</p>
            <Link href="/form" className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-700 transition-all inline-block">
              Get Free Counseling
            </Link>
          </div>
        </div>
      </article>

      {/* 3. Footer Section (Simplified) */}
      <footer className="py-12 bg-gray-50 text-center">
        <div className="flex justify-center items-center gap-2 text-blue-600 font-black mb-4">
          <GraduationCap size={24} /> <span>VISION LEADS</span>
        </div>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">© 2026 Vision Leads Consultancy. All Rights Reserved.</p>
      </footer>
    </div>
  );
}