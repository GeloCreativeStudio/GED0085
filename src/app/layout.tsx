import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import AnimatedLayout from '@/components/AnimatedLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gender Equality Advocacy - FEU',
  description: 'Advocating for gender equality and empowerment at Far Eastern University.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white`}>
        <Navigation />
        <AnimatedLayout>{children}</AnimatedLayout>
        <footer className="bg-[#1C5310] text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm sm:text-base">
                  You can reach out to us at our{' '}
                  <a
                    href="https://www.angelomanalo.me/#contact"
                    className="underline text-sm sm:text-base hover:text-[#FFB81C] transition-colors"
                  >
                    Developer's contact page
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">About Us</a></li>
                  <li><a href="/issues" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">Key Issues</a></li>
                  <li><a href="/campaigns" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">Campaigns</a></li>
                  <li><a href="/resources" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">Facebook</a>
                  <a href="#" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">Twitter</a>
                  <a href="#" className="text-sm sm:text-base hover:text-[#FFB81C] transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#FFB81C]/20 text-center">
              <p className="text-sm sm:text-base">
                &copy; {new Date().getFullYear()} GED0085 - FEU TECH
                <br className="hidden sm:block" />
                Designed and developed by <a href="https://www.angelomanalo.me/" className="text-[#FFB81C] hover:underline">Angelo Manalo</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
