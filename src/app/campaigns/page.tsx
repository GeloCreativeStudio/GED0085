'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';
import { BiExpand, BiBuildings, BiNetworkChart, BiGlobe } from 'react-icons/bi';

export default function CampaignsPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Educational Campaigns"
        description="Discover our strategic approach to promoting gender equality in technology education across FEU institutions and beyond."
        backgroundImage="/images/feu/FEUTech_Named_Top_University.jpg"
      />

      {/* Strategic Vision Section */}
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
              Our Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Strategic Growth Plan
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Our mission extends beyond the tech community. We aim to establish FEU as a leading institution in promoting gender equality, creating a model that other universities can adopt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: 'Phase 1',
                title: 'Tech Community Focus',
                description: 'Building a strong foundation within the FEU Tech community through targeted programs and initiatives.',
                icon: BiNetworkChart,
                status: 'Current Phase'
              },
              {
                phase: 'Phase 2',
                title: 'FEU Main Integration',
                description: 'Expanding our initiatives to FEU Main campus, adapting our approach for broader implementation.',
                icon: BiBuildings,
                status: 'Coming Soon'
              },
              {
                phase: 'Phase 3',
                title: 'Network Expansion',
                description: 'Sharing our model with other FEU schools, creating a unified approach to gender equality.',
                icon: BiExpand,
                status: 'Future Phase'
              },
              {
                phase: 'Phase 4',
                title: 'National Recognition',
                description: 'Establishing our program as a model for other universities across the Philippines.',
                icon: BiGlobe,
                status: 'Long-term Goal'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-[#1C5310]/10 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-[#1C5310]/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  {<phase.icon className="w-8 h-8 text-[#1C5310]" />}
                </div>
                <div className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-2">
                  {phase.phase}
                </div>
                <h3 className="text-xl font-bold text-[#1C5310] mb-2">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <span className="text-sm text-[#FFB81C] font-medium">{phase.status}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Campaigns */}
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
              Active Initiatives
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Current Campaigns
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Join our ongoing initiatives aimed at promoting gender equality and inclusivity in technology education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Women in Tech Leadership',
                description: 'Empowering women to take leadership roles in technology and innovation, breaking barriers and creating new opportunities.',
                image: '/images/campaigns/leadership.jpg',
                date: 'January - March 2025',
                delay: 0
              },
              {
                title: 'STEM for All',
                description: 'Creating inclusive pathways for everyone to pursue careers in science, technology, engineering, and mathematics.',
                image: '/images/campaigns/stem.jpg',
                date: 'Ongoing',
                delay: 0.1
              },
              {
                title: 'Tech Industry Equality',
                description: 'Advocating for equal opportunities, fair compensation, and transparent career advancement in the tech sector.',
                image: '/images/campaigns/equal-pay.jpg',
                date: 'February - June 2025',
                delay: 0.2
              },
              {
                title: 'Inclusive Innovation',
                description: 'Building safe and inclusive spaces for learning, collaboration, and innovation in technology.',
                image: '/images/campaigns/safe-spaces.jpg',
                date: 'March - August 2025',
                delay: 0.3
              },
            ].map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: campaign.delay }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#1C5310]/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={campaign.image}
                    alt={campaign.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                <div className="p-8">
                  <div className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
                    {campaign.date}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1C5310] mb-4">{campaign.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#1C5310] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white mb-4">
              Making a Difference
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Growing Impact
            </h2>
            <p className="max-w-2xl mx-auto text-white/90 text-lg">
              Together, we're creating a sustainable model for gender equality in education that extends beyond our campus.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Students Reached' },
              { number: '4', label: 'FEU Campuses Engaged' },
              { number: '25+', label: 'Industry Partners' },
              { number: '90%', label: 'Program Success Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm"
              >
                <div className="text-4xl font-bold text-[#FFB81C] mb-3">{stat.number}</div>
                <div className="text-white/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1C5310]/5 via-white to-[#FFB81C]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Upcoming Events
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Participate in our events and be part of the movement towards equality in tech.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Women in Tech Workshop',
                date: 'March 15, 2025',
                location: 'FEU Tech Campus',
                type: 'Workshop'
              },
              {
                title: 'Tech Innovation Summit',
                date: 'April 5, 2025',
                location: 'Virtual Event',
                type: 'Conference'
              },
              {
                title: 'Tech Leadership Forum',
                date: 'May 20, 2025',
                location: 'FEU Tech Building',
                type: 'Symposium'
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-[#1C5310]/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
                  {event.type}
                </div>
                <h3 className="text-2xl font-bold text-[#1C5310] mb-4">{event.title}</h3>
                <div className="space-y-2 text-gray-600">
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    {event.date}
                  </p>
                  <p className="flex items-center">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    {event.location}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction
        title="Join Our Movement"
        description="Be part of our mission to create a more inclusive and equitable tech community. Your participation makes a difference."
        primaryButton={{
          text: "Get Involved",
          href: "/get-involved"
        }}
        secondaryButton={{
          text: "View Resources",
          href: "/resources"
        }}
      />
    </div>
  );
}
