'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import {
  HomeIcon,
  UserGroupIcon,
  NewspaperIcon,
  AcademicCapIcon,
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navigationItems = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'About', href: '/about', icon: UserGroupIcon },
  { name: 'Issues', href: '/issues', icon: NewspaperIcon },
  { name: 'Campaigns', href: '/campaigns', icon: AcademicCapIcon },
  { name: 'Resources', href: '/resources', icon: BookOpenIcon },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = twMerge(
    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
    isScrolled
      ? 'bg-white/90 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
  );

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-dellarobbia text-2xl nav:text-3xl text-[#1C5310] tracking-wide">GED0085</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden nav:flex nav:space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`inline-flex items-center px-1 pt-1 text-sm nav:text-base font-medium
                  ${
                    pathname === item.href
                      ? 'text-[#1C5310] border-b-2 border-[#1C5310]'
                      : 'text-gray-500 hover:text-[#1C5310] hover:border-b-2 hover:border-[#1C5310]/50'
                  }
                  transition-colors duration-200
                `}
              >
                <item.icon className="h-5 w-5 mr-1" />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <div className="nav:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#1C5310] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#1C5310]"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="nav:hidden bg-white border-t border-gray-200"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block pl-3 pr-4 py-2 text-base font-medium border-l-4
                    ${
                      pathname === item.href
                        ? 'border-[#1C5310] text-[#1C5310] bg-[#1C5310]/5'
                        : 'border-transparent text-gray-500 hover:text-[#1C5310] hover:bg-gray-50 hover:border-[#1C5310]/50'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-2" />
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
