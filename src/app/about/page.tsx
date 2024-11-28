'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Card from '@/components/Card';
import CallToAction from '@/components/CallToAction';
import TeamStructure from '@/components/TeamStructure';
import { BiNetworkChart, BiBookReader, BiBuildings } from 'react-icons/bi';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <PageHeader
        title="About Us"
        description="Learn about our mission, vision, and the team behind our gender equality initiatives."
        backgroundImage="/images/feu/FEUTech_Named_Top_University.jpg"
      />

      {/* Mission & Vision Section */}
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
              Our Purpose
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Empowering Through Education
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 text-lg">
              We believe in creating a more inclusive and equitable future in technology through education, advocacy, and meaningful action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#1C5310]/10 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#1C5310]/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BiNetworkChart className="w-8 h-8 text-[#1C5310]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C5310] mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To promote and advance gender equality through education, advocacy, and community engagement. We work tirelessly to create an environment where everyone has equal opportunities to excel in technology and innovation, regardless of their gender identity.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    Foster inclusive learning environments
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    Provide mentorship opportunities
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    Build supportive communities
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#1C5310]/10 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-[#1C5310]/10 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <BiBookReader className="w-8 h-8 text-[#1C5310]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1C5310] mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where gender equality is the norm, not the exception. We envision a future where every individual can pursue their passion for technology and innovation without facing gender-based discrimination or barriers.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    Equal representation in tech
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    Inclusive leadership opportunities
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#FFB81C] rounded-full mr-3"></span>
                    Sustainable long-term impact
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1C5310]/5 via-white to-[#FFB81C]/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Core Values
            </span>
            <h2 className="text-3xl font-bold text-[#1C5310]">What We Stand For</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Equality',
                description: 'We believe in equal rights and opportunities for all individuals, regardless of gender.',
                icon: <BiNetworkChart className="w-8 h-8" />,
              },
              {
                title: 'Education',
                description: 'We are committed to spreading awareness and knowledge about gender equality.',
                icon: <BiBookReader className="w-8 h-8" />,
              },
              {
                title: 'Empowerment',
                description: 'We work to empower individuals to stand up for their rights and the rights of others.',
                icon: <BiBuildings className="w-8 h-8" />,
              },
            ].map((value, index) => (
              <Card
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="font-['DellaRobbia'] uppercase text-feu-green">FEU TECH</span>
            <br />
            <span className="text-feu-gold">ADVOCACY TEAM</span>
          </h2>
          
          <TeamStructure />
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction
        title="Join Our Mission"
        description="Be part of our journey to create a more inclusive and equitable society. Your support makes a difference."
        programs={[
          "Gender Equality Workshops",
          "Mentorship Programs",
          "Tech Skills Training",
          "Community Outreach",
          "Research & Advocacy"
        ]}
      />
    </div>
  );
}
