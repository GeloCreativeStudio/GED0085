'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: ReactNode;
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300';
  
  const variants = {
    primary: 'bg-[#FFB81C] text-[#1C5310] hover:bg-white shadow-lg hover:shadow-xl',
    secondary: 'bg-[#1C5310] text-white hover:bg-[#1C5310]/90',
    outline: 'bg-transparent border-2 border-[#FFB81C] text-[#FFB81C] hover:bg-[#FFB81C] hover:text-[#1C5310]',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const buttonClasses = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 },
  };

  if (href) {
    return (
      <motion.div {...motionProps}>
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
}
