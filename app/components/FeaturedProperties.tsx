'use client';

import Link from 'next/link';

type Property = {
  title: string;
  location: string;
  price: string;
  image: string; // path in /public
  link: string;
};

const properties: Property[] = [
  {
    title: '7-Bedroom Villa',
    location: 'Nairobi, Kenya',
    price: 'KES 25,000,000',
    image: '/rhouse.jpg',
    link: '/properties/villa-3-bed',
  },
  {
    title: 'Modern Apartment',
    location: 'Westlands, Nairobi',
    price: 'KES 12,500,000',
    image: '/apartment.jpg',
    link: '/properties/modern-apartment',
  },
  {
    title: 'Beachfront House',
    location: 'Diani, Kenya',
    price: 'KES 40,000,000',
    image: '/beach.jpg',
    link: '/properties/beachfront-house',
  },
];

export default function FeaturedProperties() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((property, index) => (
        <Link
          key={index}
          href={property.link}
          className="group bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="h-56 w-full overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="p-5">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-yellow-600 font-bold mt-2">{property.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
