"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Award, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO SECTION */}
      <section className="pt-24 pb-16 px-6 lg:px-24 bg-slate-50 rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-black text-xs tracking-widest uppercase mb-4 block">Our Story</span>
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-none mb-8">
              Guiding <span className="text-blue-600">Futures</span> Since 2012
            </h1>
            <p className="text-gray-500 font-bold text-lg leading-relaxed">
              Vision Leads is a leading education consultancy in Tamil Nadu dedicated to guiding students toward excellence in higher education.
            </p>
          </div>
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/group-six-south.jpg" alt="Our Vision" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* EDITORIAL VISION SECTION */}
      <section className="py-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-black text-gray-900 uppercase mb-4">Our Editorial Vision</h2>
            <div className="h-2 w-24 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-black mb-4">Data-Driven Insights</h3>
              <p className="text-gray-500 font-medium">Our recommendations are backed by placement statistics, industry growth trends, and institutional quality audits.</p>
            </div>
            
            <div className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-black mb-4">Expert Network</h3>
              <p className="text-gray-500 font-medium">Articles are co-authored by senior educators, HR professionals from Fortune 500 companies, and career coaches.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-20 bg-blue-600 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Students Placed", val: "10k+" },
            { label: "Partner Colleges", val: "150+" },
            { label: "Years Experience", val: "12+" },
            { label: "Success Rate", val: "100%" }
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-white mb-2">{s.val}</div>
              <div className="text-[10px] font-black text-blue-100 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}