"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { MoveRight, GraduationCap } from "lucide-react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Award, ShieldCheck, Headphones } from "lucide-react";
import { ClipboardCheck, Map, UserCog, ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Link from 'next/link';


interface Review {
  name: string;
  location: string;
  text: string;
}

export default function Home() {
  const phoneNumber = "+919159959918";

  const features = [
    {
      icon: <Award className="text-blue-600" size={24} />,
      title: "12+ Years of Excellence",
      description: "A proven track record of placing students in their dream colleges across South India.",
    },
    {
      icon: <ShieldCheck className="text-blue-600" size={24} />,
      title: "Transparent Fee Structure",
      description: "No hidden costs. We believe in complete transparency throughout the admission process.",
    },
    {
      icon: <Headphones className="text-blue-600" size={24} />,
      title: "End-to-End Assistance",
      description: "From the first call until the day you walk into your campus, we are with you.",
    },
  ];

  const stats = [
    { label: "PLACED STUDENTS", value: "10k+", bgColor: "bg-blue-600", textColor: "text-white" },
    { label: "PARTNER COLLEGES", value: "150+", bgColor: "bg-white", textColor: "text-blue-600" },
    { label: "INDUSTRY AWARDS", value: "20+", bgColor: "bg-white", textColor: "text-blue-600" },
    { label: "STUDENT SATISFACTION", value: "100%", bgColor: "bg-[#0B0E1E]", textColor: "text-white" },
  ];

  const services = [
    {
      title: "Admission Guidance",
      description: "Navigate the complexities of TNEA, NEET, and private university intake processes with ease and professional support.",
      icon: <ClipboardCheck className="text-blue-600" size={24} />,
    },
    {
      title: "Course Selection",
      description: "Identifying the right stream—whether it's AI, Robotics, or Medical Specialization—based on your aptitude and future goals.",
      icon: <Map className="text-blue-600" size={24} />,
    },
    {
      title: "Personalized Counseling",
      description: "One-on-one sessions for both students and parents to build confidence and a strategic roadmap for career success.",
      icon: <UserCog className="text-blue-600" size={24} />,
    },
  ];


  const [openIndex, setOpenIndex] = useState(1); // Defaulting second item open as per image

  const blogs = [
    {
      category: "ADMISSIONS 2026",
      title: "5 Things to Know Before the TNEA Counseling",
      desc: "Understand the nuances of the Tamil Nadu Engineering Admissions process and avoid common mistakes...",
      // img: "/blog1.jpg",
      href: "/blog/tnea-counseling"
    },
    {
      category: "CAREER GUIDE",
      title: "Top 10 Emerging Engineering Streams in 2026",
      desc: "From Cybersecurity to Biotechnology, explore the streams with the highest placement potential...",
      // img: "/blog2.jpg",
      href: "/blog/tnea-counseling"
    },
    {
      category: "CAMPUS LIFE",
      title: "Managing Your First Semester: A Survival Guide",
      desc: "Tips from our alumni on how to balance academics and social life in your fresh year...",
      // img: "/blog3.jpg",
      href: "/blog/tnea-counseling"
    },
  ];

  const faqs = [
    { q: "What is the difference between Government and Private Medical wings?" , a: "Government wings are state-run institutions with lower fees and high prestige, accessible through strict NEET cut-offs. Private wings (including Deemed Universities) offer premium infrastructure and specialized research facilities. Vision Leads helps you navigate the counseling for both sectors." },
    { q: "How does Vision Leads help with TNEA counseling in Tamil Nadu?", a: "We provide data-driven support for the Tamil Nadu Engineering Admissions (TNEA) process. This includes analyzing your cut-off marks, helping you select the best Anna University affiliated colleges, and optimizing your choice filling to ensure you secure a seat in a premier engineering hub." },
    { q: "Are Arts and Science colleges in Salem affiliated with Periyar University?" , a: "Yes, many of the premier Arts & Science centers we partner with are affiliated with Periyar University. We help students choose institutions that offer high-value degrees in Visual Communication, Data Science, and Commerce." },
    { q: "Why should I choose Vision Leads instead of direct admission?" , a: "Direct admission often misses the 'Value' aspect. Vision Leads evaluates the ROI of your education, focusing on placement records, campus culture, and future-proofing your career. We don't just find you a seat; we architect your future." },
  ];

  const [index, setIndex] = useState(0);

// 1. Add the type to the parameter 'name: string'
const getAvatarDetails = (name: string) => {
  const colors = [
    "bg-blue-500",
    "bg-emerald-500",
    "bg-indigo-500",
    "bg-rose-500",
    "bg-amber-500",
    "bg-purple-500"
  ];
  
  const charCode = name.charCodeAt(0);
  const color = colors[charCode % colors.length];
  const initial = name.charAt(0).toUpperCase();
  
  return { color, initial };
};




  const reviews = [
    [
      {
        name: "Harish Ragul",
        location: "Salem",
        text: "The consultancy guided me from start to finish, making my study abroad journey smooth and stress-free. Thanks to their expert support, I secured my visa successfully.",
      },
      {
        name: "gokul",
        location: "Salem",
        text: "The consultancy guided me from start to finish, making my study abroad journey smooth and stress-free. Thanks to their expert support, I secured my visa successfully.",
      },
    ],
    [
      {
        name: "Anitha",
        location: "Chennai",
        text: "Excellent service! They helped me choose the right university and handled all the paperwork efficiently. Highly recommend Vision Leads for any student.",
      },
      {
        name: "Rahul",
        location: "Madurai",
        text: "I was confused about course selection, but their personalized counseling helped me find the perfect career path. Very professional team.",
      },
    ],
        [
      {
        name: "sumitha",
        location: "Chennai",
        text: "Excellent service! They helped me choose the right university and handled all the paperwork efficiently. Highly recommend Vision Leads for any student.",
      },
      {
        name: "Rahul",
        location: "Madurai",
        text: "I was confused about course selection, but their personalized counseling helped me find the perfect career path. Very professional team.",
      },
    ],
        [
      {
        name: "Anitha",
        location: "Chennai",
        text: "Excellent service! They helped me choose the right university and handled all the paperwork efficiently. Highly recommend Vision Leads for any student.",
      },
      {
        name: "Saranya ",
        location: "Madurai",
        text: "I was confused about course selection, but their personalized counseling helped me find the perfect career path. Very professional team.",
      },
    ],
  ];

  // Auto-play logic: Change every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const colleges = [
    { title: "Premier Engineering Hubs", cat: "ENGINEERING", desc: "Top Anna University affiliated colleges.", img: "/group-young-people.jpg",href: "/colleges/engineering" },
    { title: "Leading Medical Universities", cat: "MEDICAL", desc: "Access to the best Government & Private wings.", img: "/co-workers-wearing-face-mask-office.jpg",href: "/colleges/medical" },
    { title: "Arts & Science Centers", cat: "ARTS & SCIENCE", desc: "Creative and Liberal Arts excellence.", img: "/art-school-student-consulting-drawing-master.jpg",href: "/colleges/arts-and-science" },
  ];
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Background Gradient */}
      <main className="relative mx-auto bg-linear-to-t from-[#ACC8E5] via-blue-400/10 to-transparent">
        <div className="mx-auto   flex flex-col xl:flex-row items-center justify-between min-h-[500px] md:min-h-[380px]   gap-12">
          {/* 1st: TEXT CONTENT (Top on mobile, Left on desktop) */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-1 xl:pl-10">
            <div className="flex items-center gap-2 mb-6 px-4 py-1.5 w-fit rounded-full bg-[#C5CBFF] mx-auto lg:mx-0 justify-center">
              {/* Icon with a slight pulse to match the energy */}
              <div className="text-blue-900 shrink-0">
                <VscWorkspaceTrusted size={22} />
              </div>
              
              {/* Animated Text Container */}
              <div className="relative">
                <p className=" text-[10px] sm:text-xs md:text-sm font-black text-blue-900 tracking-wider uppercase">
                  TAMIL NADU'S LEADING CONSULTANCY
                </p>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-4xl font-black text-blue-900 leading-[1.1] mb-6">
              # Find the Right College for Your Future
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Get expert guidance to choose the best college in Tamil Nadu. We help students secure admissions in top institutions with the right course and career path.
            </p>

            <div className="p-2 flex flex-col xl:flex-row justify-center xl:justify-start gap-4">
              <a 
                href={`tel:${phoneNumber}`} 
                className="group flex justify-center items-center gap-3 bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md active:scale-95"
                title="Click to call or right-click to copy number"
              >
                <div className="flex items-center gap-2 ">
                  <div className="animate-ring-slow text-white">
                    <IoCall size={24} />
                  </div>
                  <div className="font-medium ">
                    {/* Removed the inner <a> tag here */}
                    Get Free Counseling
                  </div>
                </div>
              </a>
              <Link href="/form" className="bg-white text-blue-600 px-10 py-2 rounded-full font-bold shadow-lg hover:bg-blue-700 hover:text-white active:scale-95 transition-all">
                <button className="bg-white text-blue-600 pt-1  hover:text-white active:scale-95 transition-all">
                  Apply Now
                </button>
              </Link>
            </div>

        <div className="flex justify-center xl:justify-start items-center gap-4 pt-5">
          {/* The 3 Overlapping Colored Circles */}
          <div className="flex -space-x-3">
            {/* Circle 1: Indigo */}
            <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-indigo-500 text-white font-semibold shadow-sm">
            G
            </div>
            
            {/* Circle 2: Sky Blue */}
            <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-sky-400 text-white font-semibold shadow-sm">
              Y
            </div>
            
            {/* Circle 3: Emerald Green */}
            <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-emerald-500 text-white font-semibold shadow-sm">
            R
            </div>

            {/* The Counter Circle */}
            <div className="flex items-center justify-center h-6 w-6 rounded-full ring-2 ring-white bg-blue-900 text-white text-xs font-bold shadow-sm">
              Q
            </div>
          </div>

          {/* The Text Content */}
          <div className="flex flex-col text-center md:text-left">
            <span className="text-blue-900 font-extrabold text-sm leading-none">
              10,000+ Students Empowered since 2025
            </span>
            {/* <span className="text-gray-500 text-sm font-medium mt-1">
              Empowered since 2025
            </span> */}
          </div>
        </div>
          </div>

          {/* 2nd: IMAGE CONTENT (Bottom on mobile, Right on desktop) */}
          <div className="w-full lg:w-1/2 order-2 flex justify-center items-center pt-6 lg:pt-0">
            
            {/* Image Container: Now responsive using max-width and aspect ratio */}
            <div className="relative w-full max-w-[500px] aspect-square transition-all duration-500">
              
              {/* BACK LEFT IMAGE (MBA) */}
              <div className="absolute top-[5%] left-[-5%] lg:left-[-10%] w-[45%] aspect-4/5 z-0">
                <div className="relative w-full h-full bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white shadow-xl overflow-hidden">
                  <Image 
                    src="/header-image-MBA.png" 
                    alt="MBA Professional" 
                    fill 
                    className="object-cover object-top" 
                  />
                </div>
              </div>

              {/* BACK RIGHT IMAGE (Doctor) */}
              <div className="absolute top-[15%] right-[-5%] lg:right-[-10%] w-[45%] aspect-4/5 z-0">
                <div className="relative w-full h-full bg-white/60 backdrop-blur-sm rounded-2xl border-2 border-white shadow-xl overflow-hidden">
                  <Image 
                    src="/header-image.png" 
                    alt="Medical Professional" 
                    fill 
                    className="object-cover object-top" 
                  />
                </div>
              </div>

              {/* FRONT IMAGE (Graduate) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] h-[110%] z-10 pointer-events-none">
                <Image 
                  src="/manOne.png" 
                  alt="Graduate" 
                  fill 
                  priority
                  className="object-contain object-bottom drop-shadow-2xl" 
                />
              </div>

              {/* Decorative Background Blur */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/30 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>

        </div>
      </main>

      <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: OVERLAPPING IMAGES */}
          <div className="relative flex justify-center lg:justify-start pt-10 pb-20 lg:py-0">
            {/* Main Large Image */}
            <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[500px] rounded-[40px] overflow-hidden ">
              <Image
                src="/image 1.jpg" // Replace with your collage image
                alt="Students Collage"
                fill
                className="object-cover"
              />
            </div>

            {/* Smaller Overlapping Image */}
            <div className="absolute -bottom-10 right-4 md:-right-4 w-[200px] h-[220px] md:w-[260px] md:h-[280px] rounded-[30px] overflow-hidden border-8 border-white shadow-2xl z-10">
              <Image
                src="/png-head-smiling.jpg" // Replace with your graduation image
                alt="Graduated Student"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div className="space-y-6">
            <h4 className="text-blue-900 font-extrabold text-lg uppercase tracking-wider">
              About Our Consultancy
            </h4>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight uppercase">
              Turning Study Abroad <br /> 
              <span className="text-blue-600">Dreams Into Reality</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
              We help students in Tamil Nadu find the right college and course for their future. 
              From career guidance and college selection to admission support, our experts 
              ensure a smooth and stress-free process so students can confidently step 
              into their dream careers.
            </p>

            {/* List Items */}
            <div className="space-y-3 py-2">
              <div className="flex items-center gap-3 text-gray-900 font-bold">
                <HiOutlineChevronDoubleRight className="text-blue-600 text-xl" />
                <span>Expert Career Guidance</span>
              </div>
              <div className="flex items-center gap-3 text-gray-900 font-bold">
                <HiOutlineChevronDoubleRight className="text-blue-600 text-xl" />
                <span>Top College Network</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/form" >
              <button  className="flex items-center gap-2 bg-white border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all group">
                GET STARTED
                <span className="bg-gray-100 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                  <MoveRight size={18} />
                </span>
              </button>
              </Link>
              <Link  href="/colleges" >
              <button className="flex items-center gap-2 bg-[#8B84E8] text-white px-8 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(139,132,232,0.4)] hover:brightness-110 transition-all">
                <GraduationCap size={20} />
                Explore Colleges
              </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-[#E9F0F8] py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B0E1E] leading-tight">
              Why Vision Leads is Your Trusted Partner
            </h2>
            
            <div className="space-y-8">
              {features.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: STATS GRID */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.bgColor} ${stat.textColor} rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg transition-transform hover:scale-105 duration-300`}
              >
                <span className="text-4xl md:text-5xl font-black mb-2">{stat.value}</span>
                <span className="text-xs md:text-sm font-bold tracking-widest uppercase opacity-80">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      <section className="py-20 px-6 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Our Network of Featured Colleges</h2>
              <p className="text-gray-500 font-medium">Explore top-rated institutions across Tamil Nadu where we have direct tie-ups.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-blue-600 font-bold border-b-2 border-transparent hover:border-blue-600 pb-1">
              View All Colleges <MoveRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {colleges.map((college, i) => (
              <Link 
                href={college.href} 
                key={i} 
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer block"
              >
              <div key={i} className="">
                <div className="relative h-44 w-full">
                  <Image src={college.img} alt={college.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <span className="text-blue-600 text-[10px] font-black tracking-widest uppercase">{college.cat}</span>
                  <h3 className="text-xl font-black text-gray-900 mt-2 mb-3">{college.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{college.desc}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <div className="bg-white font-sans">
        {/* 1. CTA BANNER */}
        <section className="relative overflow-hidden bg-[#FFA500] py-16 px-6">
          {/* Large Background Circle Decor */}
          <div className="absolute top-25 left-[-50%]  md:left-[-10%] w-[500px] h-[500px] bg-[#FF8C00] rounded-full opacity-90 transform -translate-y-1/2" />
          
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Start Your <br />
                <span className="text-white">JOURNEY</span> Today
              </h2>
            </div>
            
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <p className="text-[#1a1a1a] text-xl md:text-2xl font-extrabold mb-6 max-w-sm">
                Get expert guidance and secure admission to the best colleges in Tamil Nadu.
              </p>
              <Link href="/form" >
                <button className="bg-[#7000FF] hover:bg-[#6000EE] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all active:scale-95">
                  Book Free Counseling Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* 2. SERVICES SECTION */}
        <section className="py-24 px-6 md:px-12 bg-gray-50/30">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-black text-[#0B0E1E] mb-4">
              Comprehensive Education Services
            </h3>
            <p className="text-gray-500 max-w-2xl mx-auto font-medium">
              With over a decade of specialized expertise in the Tamil Nadu education ecosystem, 
              we provide end-to-end support for your higher education journey.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-[#F8FAFC] border border-gray-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 bg-blue-100/50 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h4 className="text-xl font-black text-[#0B0E1E] mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <button className="flex items-center gap-1 text-blue-600 font-bold hover:gap-2 transition-all">
                  Learn more <ChevronRight size={18} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-[#E8EAF6] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h4 className="text-blue-600 font-bold mb-2">What Our Students Say</h4>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Student Reviews & Testimonials
          </h2>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Student Image */}
          <div className="relative w-full max-w-[400px] aspect-square rounded-[3rem] overflow-hidden shadow-xl">
            <Image
              src="/2151936273 1.jpg" // Replace with your image
              alt="Student"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Side: Reviews Grid (Animated) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-hidden min-h-[300px]">
            {reviews[index].map((review: Review, i: number) => {
              // Logic must be inside the curly braces of the map function
              const { color, initial } = getAvatarDetails(review.name);

              // Now return the JSX
              return (
                <div
                  key={`${index}-${i}`}
                  className={`flex flex-col gap-4 animate-in fade-in slide-in-from-right-8 duration-700 ${
                    i === 1 ? "md:border-l-2 md:border-gray-300 md:pl-8" : ""
                  }`}
                >
                  {/* Stars */}
                  <div className="flex gap-1 text-red-600">
                    {[...Array(5)].map((_, starI) => (
                      <FaStar key={starI} size={20} />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-900 font-bold italic leading-relaxed text-sm md:text-base">
                    "{review.text}"
                  </p>

                  {/* User Info */}
                  <div className="flex items-center gap-3 mt-4">
                    {/* Dynamic Avatar - 'color' and 'initial' are now recognized */}
                    <div className={`w-12 h-12 ${color} rounded-full shrink-0 flex items-center justify-center shadow-inner`}>
                      <span className="text-white font-black text-lg">{initial}</span>
                    </div>
                    
                    <div className="text-left">
                      <h5 className="font-black text-gray-900 leading-none">
                        {review.name}
                      </h5>
                      <span className="text-gray-500 text-[10px] font-bold uppercase">
                        {review.location}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {reviews.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 w-2 rounded-full transition-all ${index === i ? "bg-blue-600 w-6" : "bg-gray-400"}`}
            />
          ))}
        </div>
      </section> 

      <div className="bg-white">
        {/* 1. BLOG SECTION */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-[#0B0E1E] mb-10">Expert Insights & Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
              <Link 
                href={blog.href} 
                key={i} 
                className=""
              >
            <div key={i} className="group cursor-pointer">
              {/* IMAGE OR ANIMATED GRADIENT PLACEHOLDER */}
              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100 bg-slate-50">
                                  <div className="relative w-full h-full overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-70 animate-pulse"
                      style={{
                        background: `
                          radial-gradient(circle at 20% 30%, #ACC8E5 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #1e3a8a 0%, transparent 50%),
                          radial-gradient(circle at 40% 80%, #60a5fa 0%, transparent 50%),
                          radial-gradient(circle at 10% 90%, #8b84e8 0%, transparent 50%),
                          radial-gradient(circle at 90% 90%, #C5CBFF 0%, transparent 50%)
                        `,
                        filter: 'blur(30px)',
                        transform: 'scale(1.2)',
                      }}
                    />
                    
                    {/* <div className="absolute inset-0 flex items-center justify-center">
                      <div className="z-10 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                        <span className="text-[10px] font-black text-blue-900 tracking-widest uppercase">
                          Vision Leads
                        </span>
                      </div>
                    </div> */}
                    
                  </div>
                {/* {blog.img ? (
                  <Image 
                    src={blog.img} 
                    alt={blog.title} 
                    fill 
                    className="object-cover transition-transform group-hover:scale-105" 
                  />
                ) : (
                  <div className="relative w-full h-full overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-70 animate-pulse"
                      style={{
                        background: `
                          radial-gradient(circle at 20% 30%, #ACC8E5 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, #1e3a8a 0%, transparent 50%),
                          radial-gradient(circle at 40% 80%, #60a5fa 0%, transparent 50%),
                          radial-gradient(circle at 10% 90%, #8b84e8 0%, transparent 50%),
                          radial-gradient(circle at 90% 90%, #C5CBFF 0%, transparent 50%)
                        `,
                        filter: 'blur(30px)',
                        transform: 'scale(1.2)',
                      }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="z-10 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/50 shadow-sm">
                        <span className="text-[10px] font-black text-blue-900 tracking-widest uppercase">
                          Vision Leads
                        </span>
                      </div>
                    </div>
                    
                  </div>
                )} */}
              </div>

              {/* Metadata */}
              <p className="text-blue-600 text-[10px] font-bold tracking-widest mb-2 uppercase">
                {blog.category}
              </p>
              
              <h3 className="text-lg font-black text-[#0B0E1E] leading-tight mb-3">
                {blog.title}
              </h3>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {blog.desc}
              </p>
            </div>
            </Link>
          ))}
          </div>
        </section>

        {/* 2. FAQ SECTION */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="bg-gray-200 px-4 py-1 rounded-full text-sm font-bold text-stone-800">Visa FAQs</span>
              <h2 className="text-4xl font-black text-[#0B0E1E] mt-6 mb-4 leading-tight">
                Got Questions? <br /> We’ve Got Answers
              </h2>
              <p className="text-gray-600 font-medium mb-8 max-w-sm">
                We understand students often have many questions about studying abroad. Our experts provide clear.
              </p>
              <Link href="/form" >
              <button className="border-2 border-gray-900 px-8 py-2 rounded-xl font-bold hover:bg-gray-900 text-black hover:text-white transition-all">
                Apply Now
              </button>
              </Link>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden transition-all ${openIndex === i ? "bg-[#ECECEC]" : "bg-[#F3F3F3]"}`}>
                  <button 
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex justify-between items-center p-5 text-left"
                  >
                    <span className="text-[10px] md:text-xs font-black text-gray-800 tracking-tighter">{faq.q}</span>
                    <span className="text-purple-600">
                      {openIndex === i ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                    </span>
                  </button>
                  {openIndex === i && faq.a && (
                    <div className="px-5 pb-5 text-xs font-bold text-gray-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}