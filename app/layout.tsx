import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Graceful Properties - Luxury Properties in Nairobi | Real Estate',
  description: 'Discover luxury properties, modern apartments, and exclusive homes in Nairobi\'s most prestigious neighborhoods. Your trusted real estate partner since 2009.',
  keywords: 'real estate Nairobi, luxury properties Kenya, apartments for rent Nairobi, houses for sale Kenya, property investment',
  authors: [{ name: 'Graceful Properties' }],
  openGraph: {
    title: 'Graceful Properties - Luxury Properties in Nairobi',
    description: 'Find your dream home with Kenya\'s premier real estate agency. Luxury properties in Karen, Westlands, Kilimani and more.',
    type: 'website',
    locale: 'en_KE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}