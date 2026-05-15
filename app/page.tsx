"use client";
import { ArrowRight, Award, Users, Home, Star, KeyRound } from 'lucide-react';
import Link from 'next/link';
import BrandWordmark from '@/components/BrandWordmark';
import PropertyCard from '@/components/PropertyCard';
import { useProperties } from '@/hooks/useProperties';

export default function HomePage() {
  const { properties, isLoaded } = useProperties();
  const featuredProperties = properties.filter((property) => property.featured).slice(0, 3);

  const stats = [
    { icon: Home, value: '250+', label: 'Properties Listed' },
    { icon: Users, value: '300+', label: 'Happy Clients' },
    { icon: Award, value: '3+', label: 'Years Experience' },
    { icon: Star, value: '3.5', label: 'Client Rating' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Find Your
              <span className="text-emerald-400 block">Dream Home</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buy"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <Home className="h-5 w-5" />
                <span>Buy a Home</span>
              </Link>
              <Link
                href="/listings?type=Rent"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                <KeyRound className="h-5 w-5" />
                <span>Rent a Home</span>
              </Link>
            </div>
          </div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-[1480px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Featured Properties
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties that define luxury living.
            </p>
          </div>

          {isLoaded && featuredProperties.length > 0 && (
            <div className="grid grid-cols-1 gap-8 mb-12 lg:grid-cols-2 lg:gap-10">
              {featuredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

          <div className="text-center">
            <Link
              href="/listings"
              className="inline-flex items-center space-x-2 bg-slate-950 hover:bg-slate-800 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-lg"
            >
              <span>View All Properties</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <BrandWordmark className="text-5xl lg:text-6xl text-white align-middle" /><BrandWordmark className="text-5xl lg:text-6xl text-white align-middle">?</BrandWordmark>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We provide exceptional service and expertise to help you find the perfect property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Premium Service</h3>
              <p className="text-slate-300">
                Our dedicated team provides personalized service to ensure your property journey is smooth and successful.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Expert Knowledge</h3>
              <p className="text-slate-300">
                With over 3 years of experience, we help clients understand the market clearly before they commit.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Trusted Partner</h3>
              <p className="text-slate-300">
                Over 300 satisfied clients trust us to help them make calm, clear property decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
