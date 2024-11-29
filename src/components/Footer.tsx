'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi';

export default function Footer() {
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-b from-[#1C5310] to-[#153D0C] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFB81C]/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/images/feu/FEU-TECH-Seal.png"
                alt="FEU Tech Seal"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-lg text-[#FFB81C]">GED0085</h3>
                <p className="text-sm text-white/80">Section H0018</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Advocating for gender equality and empowerment at Far Eastern University through education, awareness, and action.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#FFB81C]">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/issues', label: 'Key Issues' },
                { href: '/campaigns', label: 'Campaigns' },
                { href: '/resources', label: 'Resources' },
                { href: '/get-involved', label: 'Get Involved' }
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-white/80 hover:text-[#FFB81C] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFB81C]/50"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#FFB81C]">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-sm text-white/80 leading-relaxed">
                Have questions or want to get involved? Reach out to us at our{' '}
                <a
                  href="https://www.angelomanalo.me/#contact"
                  className="text-[#FFB81C] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Developer's contact page
                </a>
              </p>
              <div className="pt-4">
                <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { Icon: BiLogoFacebook, href: '#', label: 'Facebook' },
                    { Icon: BiLogoTwitter, href: '#', label: 'Twitter' },
                    { Icon: BiLogoInstagram, href: '#', label: 'Instagram' },
                    { Icon: BiLogoLinkedin, href: '#', label: 'LinkedIn' }
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#FFB81C] hover:text-[#1C5310] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[#FFB81C]">Stay Updated</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for updates on our advocacy campaigns and events.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-[#FFB81C] transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2.5 rounded-lg bg-[#FFB81C] text-[#1C5310] text-sm font-semibold hover:bg-[#FFD700] transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariant}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 mt-8 border-t border-white/10 text-center"
        >
          <p className="text-sm text-white/60">
            &copy; FEU TECH 2024. Developed by GED0085 - H0018 (Gender and Society).
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
