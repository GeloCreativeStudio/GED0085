'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface CallToActionProps {
  title?: string;
  description?: string;
  primaryButton?: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
  programs?: string[];
}

export default function CallToAction({
  title = "Ready to Make a Difference?",
  description = "Join us in creating a more inclusive and equitable tech community. Your voice matters in shaping a future where everyone can thrive.",
  primaryButton = {
    text: "Get Involved",
    href: "/get-involved"
  },
  secondaryButton = {
    text: "Contact Us",
    href: "https://www.angelomanalo.me/#contact"
  },
  backgroundImage = "/images/feu/fitwuribg_2024.jpg",
  className = '',
  programs
}: CallToActionProps) {
  return (
    <section className={`relative py-16 sm:py-20 ${className}`}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-[#1C5310]/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            {description}
          </p>

          {programs && programs.length > 0 && (
            <div className="mb-8">
              <div className="inline-flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {programs.map((program, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur-sm"
                  >
                    {program}
                  </motion.span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButton.href}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#FFB81C] text-[#1C5310] font-semibold hover:bg-white transition-colors duration-300"
            >
              {primaryButton.text}
            </Link>
            <Link
              href={secondaryButton.href}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-colors duration-300"
            >
              {secondaryButton.text}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
