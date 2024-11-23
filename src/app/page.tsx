'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [showImpactMessage, setShowImpactMessage] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setActiveStory((prev) => (prev + 1) % stories.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const stories = [
    {
      quote: "Education gave me the confidence to stand up for myself and others.",
      author: "Maria Santos",
      role: "Student Leader"
    },
    {
      quote: "Equal opportunities in tech helped me break barriers and inspire others.",
      author: "Sarah Chen",
      role: "Tech Innovator"
    },
    {
      quote: "Mentorship programs changed my perspective on leadership.",
      author: "Alex Rivera",
      role: "Community Organizer"
    }
  ];

  const stats = [
    { number: 10000, label: 'Students Impacted', prefix: '+' },
    { number: 50, label: 'Active Programs', prefix: '+' },
    { number: 100, label: 'Events Hosted', prefix: '+' },
    { number: 85, label: 'Positive Feedback', prefix: '', suffix: '%' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1920&auto=format&fit=crop"
            alt="Gender Equality"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C5310]/80 to-[#1C5310]/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-20">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFB81C] mb-6 leading-tight">
              Empowering Change Through
              <span className="block text-white mt-2">Gender Equality</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              We are students from <span className="font-dellarobbia text-[#FFB81C]">Far Eastern University Institute of Technology</span>, driven to promote gender equality
              as part of the final requirement for our course, <span className="font-dellarobbia text-[#FFB81C]">Gender and Society</span> <span className="font-dellarobbia text-white">(GED0085)</span>. Our advocacy is rooted
              in the values and lessons we've gained from exploring gender as a social construct and analyzing issues
              of inequality, discrimination, and identity. Through this platform, we aim to raise awareness, inspire
              change, and create a more inclusive society where everyone, regardless of gender, can thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/get-involved"
                  className="w-full sm:w-auto inline-block bg-[#FFB81C] text-[#1C5310] px-8 sm:px-10 py-4 rounded-full font-semibold text-lg hover:bg-white transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Involved
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/about"
                  className="w-full sm:w-auto inline-block bg-transparent border-2 border-[#FFB81C] text-[#FFB81C] px-8 sm:px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#FFB81C] hover:text-[#1C5310] transform transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-[#FFB81C]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.section>

      {/* Impact Stories Carousel */}
      <section className="py-16 bg-gradient-to-r from-[#1C5310]/5 to-[#1C5310]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1C5310] mb-4">Real Stories, Real Impact</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">Voices of change from our community</p>
          </motion.div>
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl max-w-3xl mx-auto"
          >
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 italic">"{stories[activeStory].quote}"</p>
            <div className="flex items-center justify-center">
              <div>
                <p className="font-semibold text-[#1C5310]">{stories[activeStory].author}</p>
                <p className="text-sm text-gray-500">{stories[activeStory].role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 sm:p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#1C5310]/5 to-[#1C5310]/10 backdrop-blur-sm transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C5310] mb-2">
                  {stat.prefix}
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    separator=","
                  />
                  {stat.suffix}
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Initiatives with Hover Effects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1C5310]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFB81C] mb-4">Latest Initiatives</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our current programs and see how you can get involved
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Gender Equality Workshop Series',
                date: 'Starting March 2025',
                description: 'Join our comprehensive workshop series focusing on gender awareness and advocacy.',
                image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop',
              },
              {
                title: 'Women in Leadership Summit',
                date: 'April 2025',
                description: 'A gathering of influential leaders discussing the future of gender equality in leadership.',
                image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
              },
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                <div className="relative h-64">
                  <Image
                    src={initiative.image}
                    alt={initiative.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-8">
                  <div className="text-sm text-[#FFB81C] font-semibold mb-2">{initiative.date}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C5310] mb-3">{initiative.title}</h3>
                  <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-4">{initiative.description}</p>
                  <Link
                    href="/campaigns"
                    className="inline-block text-[#FFB81C] hover:text-[#1C5310] font-semibold transition-colors duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Call to Action */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[#1C5310]">
          <Image
            src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1920&auto=format&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-7xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#FFB81C] mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-12 max-w-3xl mx-auto">
            Join our community of advocates and help create lasting change in gender equality.
            Your voice matters in shaping a better future for all.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/get-involved"
                className="w-full sm:w-auto inline-block bg-[#FFB81C] text-[#1C5310] px-8 sm:px-10 py-4 rounded-full font-semibold text-lg hover:bg-white transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Involved Now
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/resources"
                className="w-full sm:w-auto inline-block bg-transparent border-2 border-[#FFB81C] text-[#FFB81C] px-8 sm:px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#FFB81C] hover:text-[#1C5310] transform transition-all duration-300"
              >
                Explore Resources
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
