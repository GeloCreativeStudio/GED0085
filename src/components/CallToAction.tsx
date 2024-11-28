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
  className = ''
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
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FFB81C]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={primaryButton.href}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#FFB81C] text-[#1C5310] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#FFD700] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {primaryButton.text}
              </Link>
            </motion.div>

            {secondaryButton && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={secondaryButton.href}
                  target={secondaryButton.href.startsWith('http') ? '_blank' : undefined}
                  rel={secondaryButton.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-[#FFB81C] text-[#FFB81C] px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#FFB81C]/10 transition-all duration-300"
                >
                  {secondaryButton.text}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
