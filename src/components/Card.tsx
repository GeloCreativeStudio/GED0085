'use client';

import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export default function Card({ 
  title, 
  description, 
  icon, 
  className = '',
  animate = true,
  delay = 0 
}: CardProps) {
  const content = (
    <div className="relative z-10">
      {icon && (
        <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#1C5310]/10 to-[#FFB81C]/10 flex items-center justify-center text-[#1C5310] transform transition-transform duration-300 group-hover:scale-110">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold text-[#1C5310] mb-4 group-hover:text-[#2A7A1A] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );

  const card = (
    <div className={`group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#1C5310]/10 hover:border-[#1C5310]/30 overflow-hidden ${className}`}>
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-bl from-[#1C5310]/10 to-transparent rounded-full transform rotate-45"></div>
      
      {content}

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1C5310] to-[#FFB81C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );

  if (!animate) {
    return card;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {card}
    </motion.div>
  );
}
