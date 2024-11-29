'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { BiNetworkChart, BiBookReader, BiBuildings, BiGroup, BiChevronDown } from 'react-icons/bi';
import Card from '@/components/Card';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  const [showImpactMessage, setShowImpactMessage] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
    { 
      number: 23, 
      label: 'Female Students in STEM', 
      suffix: '%',
      description: 'In Philippine universities',
      icon: (
        <BiNetworkChart className="w-10 h-10" />
      )
    },
    { 
      number: 40, 
      label: 'Gender Pay Gap', 
      prefix: '₱',
      suffix: 'K',
      description: 'Average monthly salary difference',
      icon: (
        <BiBookReader className="w-10 h-10" />
      )
    },
    { 
      number: 42, 
      label: 'Leave Tech Careers', 
      suffix: '%',
      description: 'Filipino women in first 5 years',
      icon: (
        <BiBuildings className="w-10 h-10" />
      )
    },
    { 
      number: 4, 
      label: 'Tech Leadership Roles', 
      suffix: '%',
      description: 'Women in Philippine tech companies',
      icon: (
        <BiGroup className="w-10 h-10" />
      )
    }
  ];

  const impactStats = [
    {
      number: 10000,
      label: 'Students Impacted',
      prefix: '+',
      progress: 90
    },
    {
      number: 50,
      label: 'Active Programs',
      prefix: '+',
      progress: 75
    },
    {
      number: 100,
      label: 'Events Hosted',
      prefix: '+',
      progress: 85
    },
    {
      number: 85,
      label: 'Positive Feedback',
      suffix: '%',
      progress: 85
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24"
      >
        {/* Background and overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/feu/FEUTech_Named_Top_University.jpg"
            alt="FEU Tech Campus"
            fill
            className="object-cover object-center brightness-75 scale-105 transform hover:scale-110 transition-transform duration-[3000ms]"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1C5310]/70 via-[#1C5310]/65 to-[#1C5310]/75"></div>
          
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow flex flex-col items-center justify-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 md:space-y-10 text-center"
          >
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] tracking-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block text-[#FFB81C] font-bold drop-shadow-lg"
                >
                  Empowering Change
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="block text-white mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg"
                >
                  Through Gender Equality
                </motion.span>
              </h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
              >
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed md:leading-relaxed tracking-wide backdrop-blur-sm bg-black/10 p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-lg">
                  We are students from <span className="text-[#FFB81C] font-bold uppercase font-['DellaRobbia']">Far Eastern University Institute of Technology</span>, Section <span className="text-[#FFB81C] font-bold">H0018</span>, driven to promote gender equality as part of the final requirement for our course, <span className="text-[#FFB81C] font-bold">Gender and Society</span> (<span className="text-[#FFB81C] font-bold">GED0085</span>).
                  <br /><br />
                  Our advocacy is rooted in the values and lessons we've gained from exploring gender as a social construct and analyzing issues of inequality, discrimination, and identity. Through this platform, we aim to raise awareness, inspire change, and create a more inclusive society where everyone, regardless of gender, can thrive.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8 sm:pt-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-[200px] max-w-full sm:max-w-[250px]"
              >
                <Link
                  href="/get-involved"
                  className="w-full inline-flex items-center justify-center bg-[#FFB81C] text-[#1C5310] px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#FFD700] transform transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Involved
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 min-w-[200px] max-w-full sm:max-w-[250px]"
              >
                <Link
                  href="/about"
                  className="w-full inline-flex items-center justify-center bg-transparent border-2 border-[#FFB81C] text-[#FFB81C] px-6 sm:px-8 py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#FFB81C]/20 transform transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator Section */}
        <div className="relative z-10 w-full mt-8 sm:mt-0">
          <motion.div 
            className="flex flex-col items-center justify-center gap-2 py-4 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.div 
              animate={{ 
                y: [0, 10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
              className="bg-[#FFB81C]/20 backdrop-blur-sm rounded-full p-2"
            >
              <BiChevronDown className="w-8 h-8 text-[#FFB81C] drop-shadow-glow" />
            </motion.div>
            <span className="text-[#FFB81C] text-sm font-medium tracking-wider uppercase opacity-90 mt-1">
              Scroll Down
            </span>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Stories Carousel */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C5310]/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1C5310]/10 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#1C5310]/10 text-[#1C5310] mb-4">
              Featured Insights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1C5310] mb-6">
              Key Insights from Our Seminar
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Zhanina Umali Custodio shares valuable perspectives on gender equality and inclusive education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Mentorship Network",
                content: "Connect with successful Filipino women in tech who provide guidance and share their experiences in navigating the local and global tech industry.",
                icon: <BiNetworkChart className="w-8 h-8" />
              },
              {
                title: "Skills Enhancement",
                content: "Access specialized training programs designed to build technical expertise and soft skills needed in both local and international tech markets.",
                icon: <BiBookReader className="w-8 h-8" />
              },
              {
                title: "Industry Partnerships",
                content: "Collaborate with leading Philippine tech companies committed to diversity, offering internships and career advancement opportunities.",
                icon: <BiBuildings className="w-8 h-8" />
              },
              {
                title: "Community Support",
                content: "Join a growing community of Filipino women in tech, sharing experiences and building professional networks across the country.",
                icon: <BiGroup className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1C5310]/10 hover:border-[#1C5310]/30 overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-bl from-[#1C5310]/10 to-transparent rounded-full transform rotate-45"></div>

                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#1C5310]/10 to-[#FFB81C]/10 flex items-center justify-center text-[#1C5310] transform transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1C5310] mb-4 group-hover:text-[#2A7A1A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1C5310] to-[#FFB81C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <blockquote className="text-xl italic text-gray-700 max-w-3xl mx-auto bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-[#1C5310]/10 shadow-sm">
              "I believe that the God I believe in is an inclusive God. He is not judgmental like humans. I believe in Him and not in what other people say."
              <footer className="mt-4 text-base font-medium text-[#1C5310]">- Dr. Zhanina Umali Custodio</footer>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="https://www.feutech.edu.ph/features/creating-gender-equality-awareness-in-the-tech-community"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#1C5310] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#2A7A1A] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Full Article
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1C5310]/5 via-white to-[#FFB81C]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                title={`${stat.prefix || ''}${stat.number}${stat.suffix || ''}`}
                description={`${stat.label}\n${stat.description}`}
                icon={stat.icon}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1C5310]">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border border-[#1C5310]/10 hover:border-[#1C5310]/30"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#1C5310] mb-2">
                  {isMounted ? (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      prefix={stat.prefix || ''}
                      suffix={stat.suffix || ''}
                      separator=","
                    />
                  ) : (
                    <span>{stat.prefix || ''}{stat.number.toLocaleString()}{stat.suffix || ''}</span>
                  )}
                </div>
                <div className="text-gray-700 font-medium mb-4">{stat.label}</div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <motion.div
                    className="bg-[#FFB81C] h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={isMounted ? { width: `${stat.progress}%` } : { width: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
}
