'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';
import { BiBook, BiMovie, BiFile, BiBookReader, BiBuildings } from 'react-icons/bi';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <PageHeader
        title="Resources"
        description="Access educational materials, research, and tools to support gender equality."
        backgroundImage="/images/feu/FEUTech_Named_Top_University.jpg"
      />

      {/* Resource Categories Section */}
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
              Knowledge Hub
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Educational Resources
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Explore our comprehensive collection of resources designed to educate, inspire, and drive meaningful change in gender equality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Educational Materials',
                description: 'Access lesson plans, worksheets, and comprehensive guides for educators and students.',
                icon: BiBook,
                link: '/resources/education',
              },
              {
                title: 'Research & Reports',
                description: 'Dive into academic studies, research papers, and detailed reports on gender equality.',
                icon: BiFile,
                link: '/resources/research',
              },
              {
                title: 'Multimedia Content',
                description: 'Watch videos, listen to podcasts, and engage with interactive learning materials.',
                icon: BiMovie,
                link: '/resources/multimedia',
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#1C5310]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#1C5310]/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {<category.icon className="w-8 h-8 text-[#1C5310]" />}
                </div>
                <h3 className="text-2xl font-bold text-[#1C5310] mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <a
                  href={category.link}
                  className="inline-flex items-center text-[#1C5310] hover:text-[#FFB81C] font-semibold transition-colors"
                >
                  Explore Resources
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#1C5310]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Featured Content
            </span>
            <h2 className="text-4xl font-bold text-[#1C5310] mb-6">
              Latest Resources
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Discover our most impactful and recently updated resources to support your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Gender Equality in Education Guide',
                type: 'PDF Guide',
                description: 'Comprehensive guide for implementing gender-inclusive practices in educational settings.',
                icon: BiBookReader,
              },
              {
                title: 'Workplace Equality Toolkit',
                type: 'Online Resource',
                description: 'Tools and strategies for promoting gender equality in professional environments.',
                icon: BiBuildings,
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8 flex items-start space-x-6 w-full">
                  <div className="bg-[#1C5310]/10 rounded-2xl p-6 flex-shrink-0">
                    {<resource.icon className="w-12 h-12 text-[#1C5310]" />}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[#1C5310] font-semibold mb-2">{resource.type}</div>
                    <h3 className="text-xl font-bold text-[#1C5310] mb-3">{resource.title}</h3>
                    <p className="text-gray-600">{resource.description}</p>
                    <button className="mt-4 text-[#1C5310] hover:text-[#FFB81C] font-semibold transition-colors inline-flex items-center">
                      Access Resource
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Ready to Make a Difference?"
        description="Join us in our mission to promote gender equality through education and advocacy."
        buttonText="Get Involved"
        buttonLink="/get-involved"
      />
    </div>
  );
}
