'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';
import { motion } from 'framer-motion';

export default function IssuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="Key Issues"
        description="Explore the critical challenges we're addressing in the fight for gender equality in technology and education."
        backgroundImage="/images/feu/FEUTech_Named_Top_University.jpg"
      />

      {/* Issues Grid */}
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
              Current Challenges
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Issues We're Addressing
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              Understanding these challenges is the first step toward creating meaningful change in our tech community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Workplace Discrimination',
                description: 'Addressing gender-based discrimination in tech careers, including hiring practices, promotion opportunities, and pay equity disparities.',
                image: '/images/issues/workplace.jpg',
                stats: '78% of women in tech report experiencing workplace discrimination',
                delay: 0
              },
              {
                title: 'Education Access',
                description: 'Ensuring equal access to quality STEM education and creating inclusive learning environments for all students.',
                image: '/images/issues/education.jpg',
                stats: 'Only 28% of computing workforce are women',
                delay: 0.1
              },
              {
                title: 'Representation Gap',
                description: 'Addressing the underrepresentation of women in technology leadership positions and decision-making roles.',
                image: '/images/issues/representation.jpg',
                stats: 'Less than 25% of tech executive positions are held by women',
                delay: 0.2
              },
              {
                title: 'Inclusive Innovation',
                description: 'Promoting diverse perspectives in technology development to ensure products and services serve all users equally.',
                image: '/images/issues/innovation.jpg',
                stats: 'Diverse teams are 87% better at making decisions',
                delay: 0.3
              },
            ].map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: issue.delay }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-[#1C5310]/10 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={issue.image}
                    alt={issue.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#1C5310] mb-4">{issue.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{issue.description}</p>
                  <div className="bg-[#1C5310]/5 p-4 rounded-xl">
                    <p className="text-[#1C5310] font-semibold">{issue.stats}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
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
              By the Numbers
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Impact of Gender Inequality
            </h2>
            <p className="max-w-2xl mx-auto text-white/90 text-lg">
              These statistics highlight the urgent need for change in the technology sector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '$160T', label: 'Lost in Global Wealth Due to Gender Pay Gap' },
              { number: '2.7B', label: 'Women Restricted from Same Tech Opportunities' },
              { number: '48%', label: 'of Women Leave Tech Careers Mid-career' },
              { number: '40%', label: 'of Countries Lack Equal Pay Laws' },
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

      {/* Call to Action */}
      <CallToAction
        title="Be Part of the Solution"
        description="Join us in addressing these critical issues and creating positive change in our tech community. Your voice and actions matter."
        primaryButton={{
          text: "Get Involved",
          href: "/get-involved"
        }}
        secondaryButton={{
          text: "Learn More",
          href: "/resources"
        }}
      />
    </div>
  );
}
