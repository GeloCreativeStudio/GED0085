'use client';

import React from 'react';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import { BiGroup, BiShare, BiBuildings, BiBook, BiPencil, BiCalendarEvent, BiSearch } from 'react-icons/bi';

const volunteerOpportunities = [
  {
    title: "Workshop Facilitator",
    description: "Lead educational workshops on gender equality and inclusivity",
    commitment: "4-6 hours per month",
    requirements: ["Good communication skills", "Basic knowledge of gender issues", "Willingness to learn"],
    icon: BiBook
  },
  {
    title: "Content Creator",
    description: "Create engaging content for our social media and website",
    commitment: "2-3 hours per week",
    requirements: ["Creative writing skills", "Social media savvy", "Visual design skills (optional)"],
    icon: BiPencil
  },
  {
    title: "Event Coordinator",
    description: "Help organize and manage advocacy events and campaigns",
    commitment: "6-8 hours per month",
    requirements: ["Organizational skills", "Event planning experience", "Team player"],
    icon: BiCalendarEvent
  },
  {
    title: "Research Assistant",
    description: "Support our research initiatives on gender equality",
    commitment: "3-4 hours per week",
    requirements: ["Research skills", "Attention to detail", "Academic writing experience"],
    icon: BiSearch
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
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Get Involved"
        description="Help us create a more inclusive future in technology education"
        backgroundImage="/images/feu/FEUTech_Named_Top_University.jpg"
      />

      {/* Ways to Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C5310]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C5310]/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Join Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Ways to Help
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Discover how you can contribute to our mission of promoting gender equality in technology education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Volunteer",
                description: "Join our team of dedicated volunteers and contribute your skills to promote gender equality.",
                icon: BiGroup,
                action: () => document.getElementById('volunteer-opportunities')?.scrollIntoView({ behavior: 'smooth' }),
                actionText: "View Opportunities"
              },
              {
                title: "Spread the Word",
                description: "Share our message and resources with your network to amplify our impact.",
                icon: BiShare,
                action: null,
                actionText: "Share Now"
              },
              {
                title: "Partner With Us",
                description: "Organizations can partner with us to create a bigger impact in promoting gender equality.",
                icon: BiBuildings,
                action: () => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' }),
                actionText: "Contact Us"
              }
            ].map((way, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#1C5310]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#1C5310]/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {<way.icon className="w-8 h-8 text-[#1C5310]" />}
                </div>
                <h3 className="text-xl font-bold text-[#1C5310] mb-4">{way.title}</h3>
                <p className="text-gray-600 mb-6">{way.description}</p>
                <button
                  onClick={way.action || undefined}
                  className="text-[#1C5310] hover:text-[#FFB81C] font-semibold transition-colors inline-flex items-center"
                >
                  {way.actionText}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section id="volunteer-opportunities" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C5310]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Make an Impact
            </span>
            <h2 className="text-4xl font-bold text-[#1C5310] mb-6">
              Volunteer Opportunities
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Choose from various roles where you can contribute your skills and time to our cause.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#1C5310]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="bg-[#1C5310]/10 rounded-2xl p-4 flex-shrink-0">
                      {<opportunity.icon className="w-8 h-8 text-[#1C5310]" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1C5310] mb-3">{opportunity.title}</h3>
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
                        className="mt-6 inline-flex items-center text-[#1C5310] hover:text-[#FFB81C] font-semibold transition-colors"
                      >
                        Apply Now
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Get in Touch
            </span>
            <h2 className="text-4xl font-bold text-[#1C5310] mb-6">
              Contact Us
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Ready to make a difference? Reach out to us and let's discuss how you can contribute.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-[#1C5310]/10"
          >
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1C5310] focus:border-[#1C5310]"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1C5310] focus:border-[#1C5310]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1C5310] focus:border-[#1C5310]"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1C5310] focus:border-[#1C5310]"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#1C5310] text-white py-3 px-6 rounded-lg hover:bg-[#1C5310]/90 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
