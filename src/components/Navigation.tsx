'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { BiHomeAlt2, BiGroup, BiNews, BiBookAlt, BiLibrary, BiMenu, BiX } from 'react-icons/bi';

const navigationItems = [
  { name: 'Home', href: '/', icon: BiHomeAlt2 },
  { name: 'About', href: '/about', icon: BiGroup },
  { name: 'Issues', href: '/issues', icon: BiNews },
  { name: 'Campaigns', href: '/campaigns', icon: BiBookAlt },
  { name: 'Resources', href: '/resources', icon: BiLibrary },
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
            <Link href="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="relative h-8 w-8 sm:h-10 sm:w-10">
                <Image
                  src="/images/feu/FEU-TECH-Seal.png"
                  alt="FEU TECH Seal"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl sm:text-2xl text-[#1C5310] tracking-wide leading-tight">GED0085</span>
                <span className="text-xs sm:text-sm text-[#1C5310]/80 font-medium -mt-1">Section H0018</span>
              </div>
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
                <BiX className="block h-6 w-6" />
              ) : (
                <BiMenu className="block h-6 w-6" />
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
