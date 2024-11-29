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
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center text-[#1C5310] mb-16"
          >
            Key Issues We Address
          </motion.h1>

          <div className="space-y-8">
            {[
              {
                title: 'Workplace Discrimination',
                description: 'Despite progress, major tech companies still face significant gender disparities. Women make up only 30% of the workforce at leading companies like Microsoft and Google, with even lower representation in leadership and technical roles.',
                details: [
                  { label: 'Tech Workforce', value: '30%', description: 'Women in major tech companies' },
                  { label: 'Computer Science', value: '20%', description: 'Female CS graduates in the U.S.' },
                  { label: 'Engineering', value: '22%', description: 'Female engineering graduates' }
                ],
                source: 'CareerFoundry',
                sourceLink: 'https://careerfoundry.com/en/blog/career-change/women-in-tech/#:~:text=Studies%20report%20that%20women%20are,on%20their%20boards%20of%20directors',
                image: '/images/assets/workplace.jpg',
                stats: 'Gender ratio in tech remains 3:1',
                delay: 0
              },
              {
                title: 'Education Access',
                description: 'According to UNESCO data, only a third of STEM graduates globally are women. In the Philippines, 36% of STEM graduates are women, reflecting a broader trend across Southeast Asia where most countries show similar gender disparities in STEM education.',
                details: [
                  { label: 'Global Average', value: '33%', description: 'Women STEM graduates worldwide' },
                  { label: 'Philippines', value: '36%', description: 'Women STEM graduates nationally' },
                  { label: 'ASEAN Leaders', value: '39%', description: 'Malaysia leads ASEAN (excluding Brunei)' },
                  { label: 'Global Best', value: '75%', description: 'Sint Maarten leads worldwide' }
                ],
                source: 'Philippine Institute for Development Studies (PIDS)',
                sourceLink: 'https://pids.gov.ph/details/world-bank-expert-males-still-outnumber-females-in-taking-up-stem-courses',
                image: '/images/assets/education.jpg',
                stats: 'Only 1/3 of global STEM graduates are women',
                delay: 0.1
              },
              {
                title: 'Representation Gap',
                description: 'A significant gender gap persists in STEM fields globally, with 107 out of 114 economies showing fewer female STEM graduates than male. This disparity represents a critical missed opportunity as the digital age creates increasing demand for STEM professionals.',
                details: [
                  { label: 'Global Coverage', value: '94%', description: 'Economies with fewer women in STEM' },
                  { label: 'Lowest Rates', value: '20%', description: 'Women STEM grads in some countries' },
                  { label: 'Digital Growth', value: '↑3x', description: 'Increased demand for STEM professionals' }
                ],
                source: 'World Bank',
                sourceLink: 'https://blogs.worldbank.org/en/opendata/there-are-fewer-female-male-stem-graduates-107-114-economies',
                image: '/images/assets/gap.jpg',
                stats: '107 of 114 economies have fewer female STEM graduates',
                delay: 0.2
              },
              {
                title: 'Inclusive Innovation',
                description: 'McKinsey\'s "Diversity Wins" report demonstrates a strengthening link between diversity and financial performance. Based on data from 15 countries and over 1,000 large companies, the study emphasizes that true success comes from both diversity and inclusion working together.',
                details: [
                  { label: 'Global Scale', value: '1000+', description: 'Companies analyzed worldwide' },
                  { label: 'Coverage', value: '15', description: 'Countries represented in study' },
                  { label: 'Focus Areas', value: '2', description: 'Diversity & Inclusion as key drivers' }
                ],
                source: 'McKinsey & Company',
                sourceLink: 'https://www.mckinsey.com/featured-insights/diversity-and-inclusion/diversity-wins-how-inclusion-matters',
                image: '/images/assets/inclusive.jpg',
                stats: 'Companies with diverse executive teams consistently outperform',
                delay: 0.3
              }
            ].map((issue, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: issue.delay }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-[#1C5310]/10 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex flex-col">
                  <div className="relative h-[300px] w-full overflow-hidden group">
                    <div className="absolute inset-0 bg-[#1C5310]/20 z-10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C5310]/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 transform transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={issue.image}
                        alt={issue.title}
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority={index < 2}
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{issue.title}</h3>
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 inline-block">
                        <p className="text-white font-medium">{issue.stats}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-gray-600 mb-6 leading-relaxed">{issue.description}</p>
                    
                    {issue.details ? (
                      <div className="space-y-4 mb-6">
                        {issue.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-4"
                          >
                            <div className="bg-[#1C5310]/10 rounded-lg p-3">
                              <span className="text-xl font-bold text-[#1C5310]">{detail.value}</span>
                            </div>
                            <div>
                              <div className="font-medium text-[#1C5310]">{detail.label}</div>
                              <div className="text-sm text-gray-600">{detail.description}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <div className="bg-[#1C5310]/5 p-4 rounded-xl mb-6">
                        <p className="text-[#1C5310] font-semibold">{issue.stats}</p>
                      </div>
                    )}
                    
                    {issue.source && (
                      <div className="mt-4 text-sm text-gray-500 italic">
                        Source: {issue.sourceLink ? (
                          <a 
                            href={issue.sourceLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-[#1C5310] hover:underline"
                          >
                            {issue.source}
                          </a>
                        ) : issue.source}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

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
