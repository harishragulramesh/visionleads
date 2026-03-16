import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { GraduationCap, Award, Share2 } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Top Colleges", href: "/colleges" },
    { name: "Scholarship Guidance", href: "/scholarships" },
    { name: "Contact Support", href: "/contact" },
  ];

  const categories = [
    { name: "Engineering Colleges", href: "/colleges/engineering" },
    { name: "Medical Universities", href: "/colleges/medical" },
    { name: "Arts & Science", href: "/colleges/arts-science" },
    { name: "Management Studies", href: "/colleges/management" },
    { name: "Law Colleges", href: "/colleges/law" },
  ];

  return (
    <footer className="bg-white pt-16 pb-8 px-6 lg:px-16 border-t border-gray-100">
      <div className="max-w-8xl mx-auto">
        {/* Social Bar */}
        <div className="flex gap-6 mb-12">
            {/* Facebook */}
            <a 
                href="https://facebook.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaFacebook className="text-blue-600 cursor-pointer" size={24} />
            </a>

            {/* Instagram */}
            <a 
                href="https://instagram.com/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaInstagram className="text-pink-600 cursor-pointer" size={24} />
            </a>

            {/* LinkedIn */}
            <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaLinkedin className="text-blue-700 cursor-pointer" size={24} />
            </a>

            {/* YouTube */}
            <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
            >
                <FaYoutube className="text-red-600 cursor-pointer" size={24} />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-blue-600">
              <GraduationCap size={32} strokeWidth={3} />
              <span className="text-2xl font-black text-gray-900">Vision Leads</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Leading education consultancy in Tamil Nadu dedicated to guiding students 
              toward excellence in higher education since 2012.
            </p>
            <div className="flex gap-4">
              <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                <Award size={20} />
              </div>
              <div className="p-3 bg-gray-50 rounded-full text-gray-400 hover:text-blue-600 transition-colors cursor-pointer">
                <Share2 size={20} />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-black text-gray-900 mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-500 hover:text-blue-600 text-sm font-bold transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-black text-gray-900 mb-6">College Categories</h4>
            <ul className="space-y-4">
              {categories.map((cat) => (
                <li key={cat.name}>
                  <Link href={cat.href} className="text-gray-500 hover:text-blue-600 text-sm font-bold transition-colors">
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="font-black text-gray-900">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3 text-sm font-bold text-gray-500">
                <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
                <span>No. 42, Mount Road, Nandanam, <br /> Chennai, Tamil Nadu 600035</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                <FaPhoneAlt className="text-blue-600" />
                <span>+91 91599-59918</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-gray-500">
                <FaEnvelope className="text-blue-600" />
                <span>visionleads0428@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-2 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            © 2024 Vision Leads Educational Services. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-900 text-xs font-bold uppercase tracking-widest transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-900 text-xs font-bold uppercase tracking-widest transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}