"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BookOpen, Microscope, Compass, GraduationCap, Atom } from 'lucide-react';

const KnowledgeOrbitLight = () => {
  // Fixed Variants for TypeScript compatibility
  const orbitVariants: Variants = {
    rotateOrbit: (custom: { duration: number; delay: number }) => ({
      rotate: 360,
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "linear",
        delay: custom.delay,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden font-sans text-slate-900 relative">
      
      {/* Background Subtle Grid - Better for Light Mode */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      {/* 1. THE KNOWLEDGE ORBIT ANIMATION (White Theme) */}
      <div className="relative w-75 h-75 md:w-125 md:h-125 flex items-center justify-center z-10">
        
        {/* Central Core: High-Contrast Blue */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative z-20 bg-blue-600 p-8 rounded-[2.5rem] shadow-xl shadow-blue-200 border border-blue-500"
        >
          <GraduationCap size={60} className="text-white" />
        </motion.div>

        {/* Inner Orbit: Engineering (Atom) */}
        <motion.div 
          variants={orbitVariants}
          custom={{ duration: 18, delay: 0 }}
          animate="rotateOrbit"
          className="absolute w-50 h-50 border border-blue-200 rounded-full"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full border border-blue-500 shadow-md">
            <Atom size={24} className="text-blue-600" />
          </div>
        </motion.div>

        {/* Middle Orbit: Medical (Microscope) */}
        <motion.div 
          variants={orbitVariants}
          custom={{ duration: 28, delay: 2 }}
          animate="rotateOrbit"
          className="absolute w-87.5 h-87.5 border border-emerald-100 rounded-full"
        >
          <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-full border border-emerald-500 shadow-md">
            <Microscope size={28} className="text-emerald-600" />
          </div>
        </motion.div>

        {/* Outer Orbit: Arts (Book) */}
        <motion.div 
          variants={orbitVariants}
          custom={{ duration: 45, delay: 5 }}
          animate="rotateOrbit"
          className="absolute w-125 h-125 border border-purple-100 rounded-full"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white p-4 rounded-full border border-purple-500 shadow-md">
            <BookOpen size={28} className="text-purple-600" />
          </div>
        </motion.div>
      </div>

      {/* 2. TEXT CONTENT SECTOR (Dark text on White) */}
      <div className="mt-34 xl:mt-12 text-center z-10 px-6">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-4"
        >
          Vision Leads <span className="text-blue-600">Educational</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
          className="text-lg max-w-2xl mx-auto font-medium text-slate-600 leading-relaxed"
        >
          We are currently synthesizing the 2026 intake data for Premier 
          <span className="text-blue-600 font-bold uppercase ml-1">Engineering</span>, 
          <span className="text-emerald-600 font-bold uppercase mx-1">Medical</span>, and 
          <span className="text-purple-600 font-bold uppercase mr-1">Arts</span> hubs.
        </motion.p>

        {/* Progress Bar (Visible on white) */}
        <div className="mt-10 w-64 h-2 bg-slate-100 rounded-full mx-auto overflow-hidden border border-slate-200">
          <motion.div 
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{ duration: 5, ease: "easeInOut" }}
            className="h-full bg-linear-to-r from-blue-600 via-indigo-500 to-emerald-500 shadow-sm"
          />
        </div>
        <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.4em] text-slate-400">
          System Update: Salem HQ Hub
        </p>
      </div>

      {/* 3. CALL TO ACTION */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12"
      >
        <a 
          href="/form" 
          className="group relative flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-2xl"
        >
          <span className="font-black tracking-widest uppercase text-sm italic">Secure Your 2026 Seat</span>
          <Compass size={20} className="group-hover:rotate-180 transition-transform duration-1000" />
          
          {/* Animated Highlight Line */}
          <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-yellow-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
        </a>
      </motion.div>


    </div>
  );
};

export default KnowledgeOrbitLight;