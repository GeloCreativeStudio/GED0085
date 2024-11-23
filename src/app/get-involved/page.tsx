'use client';

import React from 'react';

const volunteerOpportunities = [
  {
    title: "Workshop Facilitator",
    description: "Lead educational workshops on gender equality and inclusivity",
    commitment: "4-6 hours per month",
    requirements: ["Good communication skills", "Basic knowledge of gender issues", "Willingness to learn"],
  },
  {
    title: "Content Creator",
    description: "Create engaging content for our social media and website",
    commitment: "2-3 hours per week",
    requirements: ["Creative writing skills", "Social media savvy", "Visual design skills (optional)"],
  },
  {
    title: "Event Coordinator",
    description: "Help organize and manage advocacy events and campaigns",
    commitment: "6-8 hours per month",
    requirements: ["Organizational skills", "Event planning experience", "Team player"],
  },
  {
    title: "Research Assistant",
    description: "Support our research initiatives on gender equality",
    commitment: "3-4 hours per week",
    requirements: ["Research skills", "Attention to detail", "Academic writing experience"],
  },
];

export default function GetInvolvedPage() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#1C5310] text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">Get Involved</h1>
            <p className="mt-4 text-lg">Help Us Create a Gender-Inclusive Future</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Ways to Help Section */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-[#1C5310] mb-8">Ways to Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#1C5310]">
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team of dedicated volunteers and contribute your skills to promote gender equality.
              </p>
              <a 
                href="#volunteer-opportunities" 
                className="text-[#1C5310] hover:text-[#2E7D32] font-medium inline-flex items-center"
              >
                View Opportunities
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#1C5310]">
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-4">
                Share our message and resources with your network to amplify our impact.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-[#1C5310] hover:text-[#2E7D32]"
                  aria-label="Share on Facebook"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-[#1C5310] hover:text-[#2E7D32]"
                  aria-label="Share on Twitter"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-[#1C5310] hover:text-[#2E7D32]"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#1C5310]">
              <h3 className="text-xl font-semibold text-[#2E7D32] mb-4">Partner With Us</h3>
              <p className="text-gray-600 mb-4">
                Organizations can partner with us to create a bigger impact in promoting gender equality.
              </p>
              <button 
                onClick={scrollToContact}
                className="text-[#1C5310] hover:text-[#2E7D32] font-medium inline-flex items-center"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Volunteer Opportunities */}
        <section id="volunteer-opportunities" className="mb-20">
          <h2 className="text-2xl font-bold text-[#1C5310] mb-8">Volunteer Opportunities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold text-[#2E7D32] mb-4">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-[#1C5310]">Time Commitment:</span>
                  <span className="text-sm text-gray-600 ml-2">{opportunity.commitment}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-[#1C5310] block mb-2">Requirements:</span>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    {opportunity.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={scrollToContact}
                  className="mt-6 w-full bg-[#1C5310] text-white py-2 px-4 rounded-md hover:bg-[#2E7D32] transition-colors"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section id="contact-form" className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-[#1C5310] mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1C5310] focus:border-[#1C5310]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1C5310] focus:border-[#1C5310]"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1C5310] focus:border-[#1C5310]"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1C5310] focus:border-[#1C5310]"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-[#1C5310] text-white py-3 px-4 rounded-md hover:bg-[#2E7D32] transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
