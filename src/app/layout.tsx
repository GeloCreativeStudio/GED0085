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
        <main className="flex-grow">
          <AnimatedLayout>{children}</AnimatedLayout>
        </main>
        <footer className="bg-[#1C5310] text-white py-8 mt-16">
          <div className="container-width">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                <p className="text-sm">
                  You can reach out to us at our{' '}
                  <a
                    href="https://www.angelomanalo.me/#contact"
                    className="underline hover:text-[#FFB81C] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Developer's contact page
                  </a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="/about" className="text-sm hover:text-[#FFB81C] transition-colors">About Us</a></li>
                  <li><a href="/issues" className="text-sm hover:text-[#FFB81C] transition-colors">Key Issues</a></li>
                  <li><a href="/campaigns" className="text-sm hover:text-[#FFB81C] transition-colors">Campaigns</a></li>
                  <li><a href="/resources" className="text-sm hover:text-[#FFB81C] transition-colors">Resources</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-sm hover:text-[#FFB81C] transition-colors">Facebook</a>
                  <a href="#" className="text-sm hover:text-[#FFB81C] transition-colors">Twitter</a>
                  <a href="#" className="text-sm hover:text-[#FFB81C] transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-[#FFB81C]/20 text-center text-sm">
              <p> 2024 GED0085 - FEU TECH. Developed by Angelo Manalo.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
