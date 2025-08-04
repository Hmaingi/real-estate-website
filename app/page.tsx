import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/skyline.jpg')" }}
    >
      {/* Navbar */}
      <nav className="flex items-center px-8 py-4 gap-8">
        <div>
          <img src="/logo.png" alt="Legacy Logo" className="h-24 w-auto" />
        </div>
        <ul className="ml-8 flex flex-wrap gap-4 md:gap-8 text-black font-medium text-sm md:text-base">
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/divisions">Our Divisions</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/properties">Properties</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/rent-to-own">Rent-to-Own</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/landowners">For Landowners</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="cursor-pointer hover:text-yellow-500 focus:text-yellow-500 active:text-yellow-600 transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Hero Card */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl max-w-2xl p-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 drop-shadow-sm">
            Build. Own. Manage. Grow.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-slate-800">
            Legacy Genuine’s 360° Real Estate Ecosystem: Development, Capital,
            Legal, Marketing, Management & Policy – All in One.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold">
              Explore Our Ecosystem
            </button>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-full font-semibold">
              View Properties for Sale
            </button>
          </div>
        </div>
      </div>
      {/* About Section */}
<section className="bg-white py-16 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Welcome to Legacy Genuine</h2>
    <p className="text-lg md:text-xl text-gray-700">
      We are a holistic real estate company redefining the property experience through development, capital, legal services, marketing, and management — all under one roof.
    </p>
  </div>
</section>
{/* Our Divisions Section */}
<section className="bg-gradient-to-br from-white via-yellow-50 to-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-600 drop-shadow-md">
      Our Divisions
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[
        { title: 'Legacy Agency', description: 'Connecting buyers and sellers with curated property listings.' },
        { title: 'Legacy Management', description: 'Efficient property management for residential and commercial real estate.' },
        { title: 'Legacy Developments', description: 'Planning and constructing future-forward property solutions.' },
        { title: 'Legacy Capital', description: 'Flexible real estate funding for developers and investors.' },
        { title: 'Legacy Legal', description: 'Property due diligence, title checks, and transaction security.' },
        { title: 'Legacy Policy', description: 'Shaping housing policies and driving public-private initiatives.' }
      ].map((division, index) => (
        <div
          key={index}
          className="bg-white border border-yellow-400 p-6 rounded-xl shadow-md transition-all duration-200 active:ring-2 active:ring-yellow-300 active:shadow-yellow-400"
        >
          <h3 className="text-xl font-semibold text-black mb-2">{division.title}</h3>
          <p className="text-slate-700 text-sm">{division.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Why Choose Us Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-600">Why Choose Legacy</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        {
          icon: "🏆",
          title: "Proven Track Record",
          description: "Years of experience delivering top-tier property solutions across Kenya."
        },
        {
          icon: "🤝",
          title: "Client-First Approach",
          description: "We prioritize transparency, trust, and lasting relationships."
        },
        {
          icon: "📍",
          title: "Strategic Locations",
          description: "Access prime properties in Nairobi, Mombasa, Kisumu, and beyond."
        },
        {
          icon: "⚖️",
          title: "Legal Assurance",
          description: "Every listing verified with full title checks and legal support."
        }
      ].map((item, index) => (
        <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
          <div className="text-4xl mb-3">{item.icon}</div>
          <h3 className="text-lg font-semibold text-black mb-1">{item.title}</h3>
          <p className="text-sm text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Testimonials Section */}
<section className="py-16 px-6 bg-gray-50">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-600">What Our Clients Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          name: "Jane M.",
          quote: "Legacy helped me buy my first home — smooth, professional, and honest service!",
        },
        {
          name: "Samuel K.",
          quote: "They handled our rentals with total efficiency. Highly recommend Legacy Management.",
        },
        {
          name: "Amina W.",
          quote: "I got legal support and land purchase guidance that saved me big time!",
        },
      ].map((testimony, index) => (
        <div key={index} className="bg-white rounded-xl shadow-md p-6 border border-yellow-100">
          <p className="text-gray-700 italic">“{testimony.quote}”</p>
          <p className="mt-4 font-semibold text-black">— {testimony.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Featured Properties Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-yellow-600">Featured Properties</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {[1, 2, 3].map((num) => (
        <div key={num} className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden">
          <div className="bg-gray-300 h-48 w-full"></div> {/* Replace with actual image */}
          <div className="p-4 text-left">
            <h3 className="text-lg font-semibold text-black mb-1">Property Title {num}</h3>
            <p className="text-sm text-gray-600">Ksh 8.5M · 3 Bed · Kileleshwa</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Newsletter Signup */}
<section className="py-16 px-6 bg-yellow-100">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Stay Updated</h2>
    <p className="text-gray-700 mb-6">Subscribe to get the latest listings, market tips, and Legacy updates.</p>
    <form className="flex flex-col sm:flex-row gap-4 justify-center">
      <input type="email" placeholder="Enter your email" className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none w-full sm:w-auto" />
      <button type="submit" className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md hover:bg-yellow-600 transition">Subscribe</button>
    </form>
  </div>
</section>


    </main>
  );
}
