import Link from 'next/link';
import { Building, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-amber-500 p-2 rounded-lg">
                <Building className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Graceful Properties</span>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your trusted partner in finding the perfect property. We specialize in luxury homes, 
              modern apartments, and commercial spaces across Nairobi and beyond.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500" />
                <span className="text-slate-300">info@gracefulproperties.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500" />
                <span className="text-slate-300">+254 700 123 456</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/listings', label: 'All Properties' },
                { href: '/listings?type=Rent', label: 'Rentals' },
                { href: '/listings?type=Sale', label: 'For Sale' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-slate-800 hover:bg-amber-500 p-3 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-amber-500 p-3 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-slate-800 hover:bg-amber-500 p-3 rounded-lg transition-colors"
                aria-label="TikTok"
              >
                <div className="h-5 w-5 bg-white rounded-sm"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Graceful Properties. All rights reserved. | Designed for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}