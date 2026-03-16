"use client";

import React from "react";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="pt-24 pb-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          
          {/* CONTACT INFO */}
          <div>
            <h1 className="text-6xl font-black text-gray-900 uppercase tracking-tighter mb-8">
              Let's Talk <br /><span className="text-blue-600">Education.</span>
            </h1>
            <p className="text-gray-500 font-bold mb-12 max-w-md text-lg">
              Have questions about TNEA, NEET, or college placements? Our experts are here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Visit Us</div>
                  <div className="font-bold text-gray-900">No. 42, Mount Road, Nandanam, Chennai</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Call Us</div>
                  <div className="font-bold text-gray-900">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email Us</div>
                  <div className="font-bold text-gray-900">info@visionleads.com</div>
                </div>
              </div>
            </div>

            {/* SOCIAL LINKS from Footer design */}
            <div className="flex gap-4 mt-16">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <div key={i} className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-blue-600 cursor-pointer transition-all">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="bg-slate-50 p-10 lg:p-16 rounded-[4rem]">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black text-gray-900 uppercase tracking-widest mb-3">Your Name</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-blue-100 font-bold outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-black text-gray-900 uppercase tracking-widest mb-3">Phone Number</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-blue-100 font-bold outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-widest mb-3">Preferred Course</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-blue-100 font-bold outline-none appearance-none cursor-pointer">
                  <option>Engineering</option>
                  <option>Medical</option>
                  <option>Arts & Science</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-black text-gray-900 uppercase tracking-widest mb-3">Message</label>
                <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-white border-none focus:ring-4 focus:ring-blue-100 font-bold outline-none transition-all"></textarea>
              </div>

              <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex justify-center items-center gap-3">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}