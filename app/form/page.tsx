'use client';
import { useState } from 'react';

export default function StudentRegistrationForm() {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    gender: '',
    studentMobile: '',
    parentMobile: '',
    city: '',
    state: '',
    schoolName: '',
    board: '',
    studentClass: '10th', // Default option
    group: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUjRMpPEt6GURhr4TrpeIA3yxnMFsGQdSfoIAO4Bz2fadRUWzBEcVvEpreUY0t3wMV/exec';

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
          // ✅ SHOW POPUP
    setSuccess(true);
      // alert('Data submitted successfully to Google Sheets!');
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error(err);
      // alert('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
<div className=" mx-auto p-10 bg-white/90 backdrop-blur-lg   border border-gray-200 text-black">
  
  {/* Header */}
  <div className="mb-10 text-center">
    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
      Student Registration
    </h2>
    <p className="text-gray-500 mt-3 text-lg">
      Join Vision Leads Educational Services to start your journey 🚀
    </p>
  </div>

  <form onSubmit={handleSubmit} className="space-y-8">

    {/* PERSONAL INFO */}
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Full Name</label>
          <input
            name="fullName"
            placeholder="Enter your full name"
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all shadow-sm"
            required
          />
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Gender</label>
          <select
            name="gender"
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Student Mobile */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Student Contact</label>
          <input
            name="studentMobile"
            type="tel"
            placeholder="Mobile Number"
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
            required
          />
        </div>

        {/* Parent Mobile */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Parent Contact</label>
          <input
            name="parentMobile"
            type="tel"
            placeholder="Parent's Mobile"
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
            required
          />
        </div>

      </div>
    </div>

    {/* ACADEMIC INFO */}
    <div className="border-t pt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Academic Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Class */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Current Class</label>
          <select
            name="studentClass"
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
            required
          >
            <option value="">Select Class</option>
            <option value="10th">10th Grade</option>
            <option value="12th">12th Grade</option>
            <option value="Diploma">Diploma</option>
          </select>
        </div>

        {/* GROUP / STREAM DROPDOWN */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Group / Stream</label>
          <select
            name="group"
            onChange={handleChange}
            className="border border-gray-300 px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
          >
            <option value="">Select Group</option>

            {/* 12th Streams */}
            <option value="Bio-Maths">Bio-Maths</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Commerce">Commerce</option>
            <option value="Arts">Arts</option>

            {/* Diploma */}
            <option value="Mechanical">Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical">Electrical</option>
            <option value="Computer Engineering">Computer Engineering</option>
          </select>
        </div>

      </div>
    </div>

    {/* BUTTON */}
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-linear-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-green-300 hover:-translate-y-1 transition-all active:scale-95 disabled:opacity-50"
    >
      {loading ? "Processing..." : "Complete Registration"}
    </button>

  </form>
  {success && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    
    {/* Background Blur */}
    <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

    {/* Popup */}
    <div className="relative bg-white px-8 py-6 rounded-2xl shadow-2xl animate-scaleIn">
      <div className="flex flex-col items-center text-center">
        
        {/* Tick Icon */}
        <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full mb-4">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-gray-800">
          Submitted Successfully!
        </h3>
        <p className="text-gray-500 mt-1">
          Your registration has been received.
        </p>
      </div>
    </div>
  </div>
)}
</div>
  );
}