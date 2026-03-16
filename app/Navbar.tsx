"use client"; // Required for useState and clicks

import { useState } from "react";
import { Phone, Mail, Menu, X } from "lucide-react";
import { FaFacebook, FaLinkedin, FaYoutube,FaInstagram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Colleges", href: "/colleges" },
    { name: "Courses", href: "/courses" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* TOP CONTACT BAR */}
      <div className="hidden sm:flex h-10 bg-gray-100 items-center justify-between px-6 text-sm text-gray-600 ">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-blue-600" />
            <span>+91 91599-59918</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={14} className="text-blue-600" />
            <span>visionleads0428@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 ">
            {/* Facebook */}
            <a 
                href="https://facebook.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaFacebook className="text-blue-600 cursor-pointer" size={18} />
            </a>

            {/* Instagram */}
            <a 
                href="https://instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaInstagram className="text-pink-600 cursor-pointer" size={18} />
            </a>

            {/* LinkedIn */}
            <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaLinkedin className="text-blue-700 cursor-pointer" size={18} />
            </a>

            {/* YouTube */}
            <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaYoutube className="text-red-600 cursor-pointer" size={18} />
            </a>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <header className="sticky top-0 z-50 bg-white ">
        <div className="flex justify-between items-center p-2 md:px-4">
          {/* <div className="flex-shrink-0">
            
            <Image 
              src="/VISION-LEADS-LOGO 2.png" 
              alt="Vision Leads Logo" 
              width={160}   // Adjust this width to fit your design
              height={40}   // Adjust this height to fit your design
              priority      // Added priority so the logo loads instantly
              className="object-contain" 
            />
          </div> */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              {/* 2. The Text or Image Logo */}
              <Image 
                src="/VISION-LEADS-LOGO 2.png" 
                alt="Vision Leads Logo" 
                width={160} 
                height={40} 
                priority 
                className="object-contain" 
              />
            </Link>
          </div>
      
          {/* <h1 className="text-xl md:text-2xl font-black tracking-tighter text-blue-900">
            VISION LEADS
          </h1> */}

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 font-bold">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-blue-600 transition-colors text-gray-700">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU ANIMATION */}
        <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isOpen 
            ? "translate-y-0 opacity-100 visible" 
            : "-translate-y-4 opacity-0 invisible"
        }`}
        >
        <nav className="flex flex-col p-6 space-y-1 font-medium bg-white">
            {navLinks.map((link, index) => (
            <a 
                key={link.name} 
                href={link.href} 
                className={`
                py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 
                transition-all duration-300 transform
                ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}
                `}
                style={{ 
                // This adds a tiny delay for each link so they appear one by one
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms" 
                }}
                onClick={() => setIsOpen(false)}
            >
                {link.name}
            </a>
            ))}
            
            {/* Optional: Add social icons inside mobile menu too */}
            <div className="flex space-x-6 pt-6 mt-4 border-t border-gray-100 justify-center sm:hidden">
            <a href="#" className="text-gray-400 hover:text-blue-600"><FaFacebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-pink-600"><RiInstagramFill size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-blue-700"><FaLinkedin size={20} /></a>
            </div>
        </nav>
        </div>
      </header>
    </>
  );
}