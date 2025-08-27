"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import DivisionsCarousel from "./components/DivisionsCarousel";
import dynamic from "next/dynamic";
import FeaturedProperties from './components/FeaturedProperties';
import BlogSection from './components/BlogSection';
import HeroCarousel from "./components/HeroCarousel";


const PropertyMap = dynamic(() => import("./components/PropertyMap"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-yellow-600">
            Legacy
          </Link>

          {/* Nav Links */}
          <div className="space-x-6">
            <Link href="/" className="text-black hover:text-yellow-600">Home</Link>
            <a href="#our-divisions" className="text-black hover:text-yellow-600">Our Divisions</a>
            <a href="#featured-properties" className="text-black hover:text-yellow-600">Properties</a>
            <a href="#contact" className="text-black hover:text-yellow-600">Contact</a>
          </div>
        </div>
      </nav>

 {/* HERO CAROUSEL */}
<HeroCarousel />

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
            Welcome to Legacy Genuine
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            We are a holistic real estate company redefining the property
            experience through development, capital, legal services, marketing,
            and management — all under one roof.
          </p>
        </div>
      </section>

     {/* OUR DIVISIONS SECTION */}
<section id="our-divisions" className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Our Divisions</h2>
    <DivisionsCarousel />
  </div>
</section>

{/* FEATURED PROPERTIES SECTION */}
        <section id="featured-properties" className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Featured Properties</h2>
    <FeaturedProperties />
  </div>
</section>

{/* BLOG SECTION */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-8">Latest Blog Posts</h2>
    <BlogSection />
  </div>
</section>

    {/* WHY CHOOSE US */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
      Why Choose Legacy
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          icon: "🏆",
          title: "Proven Track Record",
          description:
            "Years of experience delivering top-tier property solutions across Kenya.",
        },
        {
          icon: "🤝",
          title: "Client-First Approach",
          description:
            "We prioritize transparency, trust, and lasting relationships.",
        },
        {
          icon: "📍",
          title: "Strategic Locations",
          description:
            "Access prime properties in Nairobi, Mombasa, Kisumu, and beyond.",
        },
        {
          icon: "⚖️",
          title: "Legal Assurance",
          description:
            "Every listing verified with full title checks and legal support.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
        >
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* MAP SECTION */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-6">
          <h2 className="text-3xl font-bold text-yellow-600">Explore Our Locations</h2>
          <p className="text-gray-700 mt-2 mb-6">View where our properties and offices are located</p>
          <PropertyMap />
        </div>
      </section>
{/* TESTIMONIALS */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-600">
      What Our Clients Say
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: "Jane M.", quote: "Legacy helped me buy my first home — smooth, professional, and honest service!" },
        { name: "Samuel K.", quote: "They handled our rentals with total efficiency. Highly recommend Legacy Management." },
        { name: "Amina W.", quote: "I got legal support and land purchase guidance that saved me big time!" }
      ].map((testimony, index) => (
        <div
          key={index}
          className="bg-white border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200"
        >
          <p className="text-gray-700 italic">“{testimony.quote}”</p>
          <p className="mt-4 font-semibold text-black">— {testimony.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* NEWSLETTER */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-2xl mx-auto text-center bg-white border border-yellow-200 rounded-xl p-8 shadow-sm">
    <h2 className="text-3xl md:text-4xl font-bold text-yellow-600 mb-4">
      Stay Updated
    </h2>
    <p className="text-gray-700 mb-6">
      Subscribe to get the latest listings, market tips, and Legacy updates.
    </p>
    <form className="flex flex-col sm:flex-row gap-4 justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 rounded-md border border-yellow-200 focus:outline-none w-full sm:w-auto"
      />
      <button
        type="submit"
        className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition"
      >
        Subscribe
      </button>
    </form>
  </div>
</section>

{/* CONTACT CTA */}
<section id="contact" className="py-20 bg-yellow-100">
  <div className="max-w-3xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">
      Get in Touch
    </h2>
    <p className="text-center text-gray-700 mb-10">
      Have questions or want to list a property? Send us a message and we'll get back to you!
    </p>

    <form className="grid gap-6">
      <input
        type="text"
        placeholder="Your Name"
        className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none w-full"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none w-full"
      />
      <textarea
        placeholder="Your Message"
        rows={5}
        className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none w-full"
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>

import Footer from '@/components/Footer';


      {/* Scoped styles restored + responsive overrides for carousel lib */}
      <style jsx scoped>{`
        /* Target carousel library elements using :global */
        :global(.carousel .slide img) {
          object-fit: cover;
          height: calc(100vh - 72px);
        }

        /* Smaller screens: reduce height to avoid huge hero on mobile */
        @media (max-width: 1024px) {
          :global(.carousel .slide img) {
            height: 500px;
          }
        }
        @media (max-width: 640px) {
          :global(.carousel .slide img) {
            height: 300px;
          }
        }

        /* Arrows / controls */
        :global(.carousel .control-arrow) {
          opacity: 0.85;
          transition: opacity 0.2s ease;
          z-index: 20;
        }
        :global(.carousel .control-arrow:hover) {
          opacity: 1;
        }
        :global(.carousel .control-prev.control-arrow:before) {
          border-right: 10px solid white;
        }
        :global(.carousel .control-next.control-arrow:before) {
          border-left: 10px solid white;
        }

        /* Dots */
        :global(.carousel .control-dots .dot) {
          background: white;
          box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  );
}