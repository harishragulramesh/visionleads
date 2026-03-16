"use client";

import React, { useState } from "react";
import { Search, Filter, BookOpen, GraduationCap, ArrowRight, Clock, Award } from "lucide-react";
import Link from "next/link";

// Course Data based on your College Categories
const courses = [
  { id: 1, title: "B.E. Computer Science", cat: "Engineering", duration: "4 Years", level: "Undergraduate", trend: "High Demand" },
  { id: 2, title: "MBBS", cat: "Medical", duration: "5.5 Years", level: "Undergraduate", trend: "Top Rated" },
  { id: 3, title: "B.Tech Artificial Intelligence", cat: "Engineering", duration: "4 Years", level: "Undergraduate", trend: "Emerging" },
  { id: 4, title: "B.Sc Psychology", cat: "Arts & Science", duration: "3 Years", level: "Undergraduate", trend: "Popular" },
  { id: 5, title: "MBA International Business", cat: "Management", duration: "2 Years", level: "Postgraduate", trend: "Corporate" },
  { id: 6, title: "B.E. Robotics & Automation", cat: "Engineering", duration: "4 Years", level: "Undergraduate", trend: "Future Tech" },
];

const categories = ["All", "Engineering", "Medical", "Arts & Science", "Management"];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = activeCat === "All" || course.cat === activeCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Header & Search Section */}
      <section className="pt-20 pb-12 px-6 lg:px-24 bg-slate-50 rounded-b-[4rem]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">
            Explore <span className="text-blue-600">Top Courses</span>
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-10">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text" 
              placeholder="Search for B.E, MBBS, or MBA..." 
              className="w-full pl-16 pr-6 py-3 bg-white border-none shadow-2xl rounded-3xl text-lg font-bold outline-none focus:ring-4 focus:ring-blue-100 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                  activeCat === cat 
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-200" 
                  : "bg-white text-gray-400 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Course Grid */}
      <section className="py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 uppercase">Available Programs</h2>
              <p className="text-gray-400 font-bold mt-2">Showing {filteredCourses.length} courses</p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest cursor-pointer">
              <Filter size={16} /> Filter Results
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="group bg-white border border-gray-100 p-8 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                      <GraduationCap size={28} />
                    </div>
                    <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">
                      {course.trend}
                    </span>
                  </div>
                  
                  <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase block mb-2">
                    {course.cat}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                    {course.title}
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <Clock size={16} className="text-blue-600" /> {course.duration}
                    </div>
                    <div className="flex items-center gap-3 text-gray-500 font-bold text-sm">
                      <Award size={16} className="text-blue-600" /> {course.level}
                    </div>
                  </div>
                </div>

                <Link 
                  href="/signup" 
                  className="w-full py-4 bg-gray-900 text-white group-hover:bg-blue-600 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-95"
                >
                  Apply Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-20">
              <BookOpen size={64} className="mx-auto text-gray-200 mb-4" />
              <h3 className="text-2xl font-black text-gray-900 uppercase">No courses found</h3>
              <p className="text-gray-400 font-bold">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* 3. Helper CTA */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">Can't decide the right course?</h2>
            <p className="text-slate-400 font-bold mb-10 max-w-xl mx-auto">Get free personalized counseling from our experts to find the career path that suits your strengths.</p>
            <Link href="tel:+919876543210" className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all inline-block">
              Talk to an Expert
            </Link>
          </div>
          {/* Decorative Background Icon */}
          <GraduationCap className="absolute -bottom-10 -right-10 text-white/5" size={300} />
        </div>
      </section>
    </div>
  );
}