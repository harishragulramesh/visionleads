"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, MapPin, CheckCircle } from "lucide-react";

// Data matching the 'Featured Colleges' section
const collegeCategories = [
  {
    title: "Premier Engineering Hubs",
    cat: "ENGINEERING",
    desc: "Top Anna University affiliated colleges and Autonomous Institutions.",
    img: "/art-school-student-consulting-drawing-master.jpg", // Replace with your college image
    href: "/colleges/engineering",
    count: "80+ Colleges"
  },
  {
    title: "Leading Medical Universities",
    cat: "MEDICAL",
    desc: "Access to the best Government & Private Medical Wings in the state.Access to the best Government & Private Medical Wings in the state.Access to the best Government & Private Medical Wings in the state.Access to the best Government & Private Medical Wings in the state.",
    img: "/art-school-student-consulting-drawing-master.jpg", // Replace with your medical image
    href: "/colleges/medical",
    count: "30+ Universities"
  },
  {
    title: "Arts & Science Centers",
    cat: "ARTS & SCIENCE",
    desc: "Creative, Commerce, and Liberal Arts excellence for diverse career paths.",
    img: "/art-school-student-consulting-drawing-master.jpg", // Replace with your arts image
    href: "/colleges/arts-science",
    count: "45+ Institutions"
  },
    {
    title: "Arts & Science Centers",
    cat: "ARTS & SCIENCE",
    desc: "Creative, Commerce, and Liberal Arts excellence for diverse career paths.",
    img: "/art-school-student-consulting-drawing-master.jpg", // Replace with your arts image
    href: "/colleges/arts-science",
    count: "45+ Institutions"
  }
];

// Stats from the 'Trusted Partner' section
const partnerStats = [
  { label: "Placed Students", value: "10k+", bg: "bg-blue-600", text: "text-white" },
  { label: "Partner Colleges", value: "150+", bg: "bg-white", text: "text-blue-600" },
  { label: "Industry Awards", value: "20+", bg: "bg-white", text: "text-blue-600" },
  { label: "Success Rate", value: "100%", bg: "bg-slate-900", text: "text-white" },
];

export default function CollegesPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. Header Section */}
      <section className="pt-20 pb-12 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">
            Our Network of <br /> <span className="text-blue-600">Featured Colleges</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl font-medium leading-relaxed">
            Explore top-rated institutions across Tamil Nadu where we have direct tie-ups and exclusive admission routes.
          </p>
        </div>
      </section>

      {/* 2. Category Grid */}
      <section className="pb-24 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {collegeCategories.map((item, i) => (
            <Link 
              href={item.href} 
              key={i} 
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 w-full">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-[10px] font-black tracking-widest text-blue-600">
                  {item.count}
                </div>
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-8">
                <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase mb-2 block">
                  {item.cat}
                </span>
                <h3 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center text-blue-600 font-black text-xs uppercase tracking-widest gap-2">
                  View Colleges <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Trusted Partner Stats */}
      <section className="py-24 bg-slate-50 px-6 lg:px-24 rounded-t-[4rem]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase mb-4 block">Trusted Partner</span>
            <h2 className="text-4xl font-black text-gray-900 mb-8 leading-tight">
              Why Vision Leads is Your <br /> Preferred Choice
            </h2>
            <div className="space-y-6">
              {[
                "Direct Tie-ups with 150+ Institutions",
                "Transparent Admission & Fee Guidance",
                "Dedicated Support for Scholarship Applications",
                "Expert Counseling for Career Path Mapping"
              ].map((text, idx) => (
                <div key={idx} className="flex gap-4 items-center">
                  <div className="bg-blue-600 p-1 rounded-full text-white">
                    <CheckCircle size={18} />
                  </div>
                  <p className="font-bold text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Bento Box */}
          <div className="grid grid-cols-2 gap-4">
            {partnerStats.map((stat, i) => (
              <div 
                key={i} 
                className={`${stat.bg} p-10 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-center text-center transform transition-transform hover:-translate-y-2`}
              >
                <span className={`text-4xl font-black ${stat.text} mb-2`}>{stat.value}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest ${stat.text} opacity-70`}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Footer */}
      <section className="py-20 text-center px-6">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 text-white">
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">Ready to Find Your Dream College?</h2>
          <p className="text-blue-100 font-bold mb-8 opacity-90">Book a free counseling session today and let our experts guide you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-100 transition-all shadow-lg">
              Book Appointment
            </Link>
            <Link href="/signin" className="border-2 border-white text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all">
              Join Network
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}