import Link from 'next/link';
import { Building, Mail, Phone, Instagram, Facebook } from 'lucide-react';
import BrandWordmark from '@/components/BrandWordmark';

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M16.7 2c.3 2.4 1.7 4 4 4.2v3.4c-1.5 0-2.8-.4-4-1.2v6.2c0 4.1-2.7 7-6.6 7-3.4 0-6.1-2.4-6.1-5.7 0-3.5 2.8-5.8 6.3-5.8.5 0 1 .1 1.5.2v3.5c-.5-.2-.9-.3-1.4-.3-1.6 0-2.8.9-2.8 2.4 0 1.4 1.1 2.3 2.5 2.3 1.6 0 2.7-1 2.7-3.1V2h3.9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="currentColor">
      <path d="M5.3 8.7H2.1V22h3.2V8.7ZM3.7 2C2.7 2 2 2.7 2 3.7s.7 1.8 1.7 1.8 1.7-.8 1.7-1.8S4.7 2 3.7 2ZM22 14.4V22h-3.2v-7.1c0-1.8-.6-3-2.2-3-1.2 0-1.9.8-2.2 1.6-.1.3-.1.7-.1 1.1V22h-3.2s.1-12 0-13.3h3.2v1.9c.4-.7 1.2-1.7 3-1.7 2.2 0 4.7 1.4 4.7 5.5Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <BrandWordmark className="text-3xl text-white" />
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              A real estate companion brand helping people buy, rent, and place residential
              properties with care, clarity, and calmness.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">info@gracefulproperties.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-slate-300">+254 768 809 923</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/listings', label: 'All Properties' },
                { href: '/listings?type=Rent', label: 'Rentals' },
                { href: '/buy', label: 'Buy a Home' },
                { href: '/dashboard', label: 'Agent Dashboard' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://instagram.com/@gracefulproperties"
                className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-lg transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/@gracefulproperties"
                className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-lg transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com/@gracefulproperties"
                className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-lg transition-colors"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://linkedin.com/company/@graceful-properties"
                className="bg-slate-800 hover:bg-emerald-600 p-3 rounded-lg transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            &copy; 2026 <BrandWordmark className="text-2xl text-slate-400 align-middle" />. All rights reserved. | gracefulproperties.co.ke
          </p>
        </div>
      </div>
    </footer>
  );
}
