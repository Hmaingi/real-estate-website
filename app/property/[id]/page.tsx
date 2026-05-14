"use client";

import PropertyCarousel from '@/components/PropertyCarousel';
import ContactForm from '@/components/ContactForm';
import { MapPin, Bed, Bath, Square, Home, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useProperties } from '@/hooks/useProperties';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const propertyId = parseInt(params.id);
  const { properties, isLoaded } = useProperties();
  const property = properties.find(p => p.id === propertyId);

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <h1 className="text-2xl font-bold text-slate-900 mb-3">
            {isLoaded ? "Property not found" : "Loading property..."}
          </h1>
          {isLoaded && (
            <Link href="/listings" className="text-emerald-700 hover:text-emerald-800 font-semibold">
              Back to listings
            </Link>
          )}
        </div>
      </div>
    );
  }

  const features = [
    { icon: Bed, label: 'Bedrooms', value: property.bedrooms },
    { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
    ...(property.area ? [{ icon: Square, label: 'Area', value: property.area }] : []),
    { icon: Home, label: 'Type', value: `For ${property.type}` },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Images */}
            <PropertyCarousel images={property.images} title={property.title} />

            {/* Property Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center text-slate-600 mb-4">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span className="text-lg">{property.location}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl lg:text-4xl font-bold text-emerald-700">
                    {property.price}
                  </span>
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    property.type === 'Rent' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    For {property.type}
                  </span>
                </div>
              </div>

              {/* Property Features Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-slate-50 rounded-xl">
                    <feature.icon className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-slate-800 mb-1">
                      {feature.value}
                    </div>
                    <div className="text-sm text-slate-600">
                      {feature.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">
                  Property Description
                </h2>
                <p className="text-slate-700 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Additional Features */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-800 mb-6">
                Property Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Modern Kitchen</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Secure Parking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">24/7 Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Garden/Balcony</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Swimming Pool Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Gym Facilities</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <ContactForm propertyTitle={property.title} />

            {/* Property Summary */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-6">
                Property Summary
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Property ID</span>
                  <span className="font-medium text-slate-800">PE-{property.id.toString().padStart(3, '0')}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Type</span>
                  <span className="font-medium text-slate-800">For {property.type}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Bedrooms</span>
                  <span className="font-medium text-slate-800">{property.bedrooms}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-200">
                  <span className="text-slate-600">Bathrooms</span>
                  <span className="font-medium text-slate-800">{property.bathrooms}</span>
                </div>
                {property.area && (
                  <div className="flex justify-between items-center py-3">
                    <span className="text-slate-600">Area</span>
                    <span className="font-medium text-slate-800">{property.area}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Need More Information?
              </h3>
              <p className="text-slate-700 mb-6">
                Our expert agents are ready to help you with this property and answer any questions you may have.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-600 p-2 rounded-lg">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Schedule a Viewing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-600 p-2 rounded-lg">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-slate-700">Property Location Tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
