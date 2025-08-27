'use client';

import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>
            Phone: <a href="tel:+254700000000" className="hover:text-yellow-500">+254 700 000 000</a>
          </p>
          <p>
            Email: <a href="mailto:info@legacy.com" className="hover:text-yellow-500">info@legacy.com</a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaTiktok />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#divisions" className="hover:text-yellow-500">Our Divisions</a></li>
            <li><a href="#featured-properties" className="hover:text-yellow-500">Properties</a></li>
            <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Legacy Real Estate. All rights reserved.
      </div>
    </footer>
  );
}
