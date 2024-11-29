import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import AnimatedLayout from '@/components/AnimatedLayout';
import Footer from '@/components/Footer';

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
      <body className={`${inter.className} min-h-screen bg-white flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          <AnimatedLayout>{children}</AnimatedLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
