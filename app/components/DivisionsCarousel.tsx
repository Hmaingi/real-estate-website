'use client';

import Link from 'next/link';

type Division = {
  title: string;
  description: string;
  image: string; // stored directly in /public
  link: string;
};

const divisions: Division[] = [
  {
    title: 'Legacy Agency',
    description: 'Connecting buyers and sellers with curated property listings.',
    image: '/postsale.jpg',
    link: '/divisions/agency',
  },
  {
    title: 'Legacy Management',
    description:
      'Efficient property management for residential and commercial real estate.',
    image: '/inspection.jpg',
    link: '/divisions/management',
  },
  {
    title: 'Legacy Developments',
    description:
      'Planning and constructing future-forward property solutions.',
    image: '/estate.jpg',
    link: '/divisions/developments',
  },
  {
    title: 'Legacy Capital',
    description:
      'Flexible real estate funding for developers and investors.',
    image: '/hso.jpg',
    link: '/divisions/capital',
  },
];

export default function DivisionsCards() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {divisions.map((division, index) => (
        <Link
          key={index}
          href={division.link}
          className="group bg-white border border-yellow-100 rounded-2xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl"
        >
          {/* Image */}
          <div className="h-48 w-full overflow-hidden">
            <img
              src={division.image}
              alt={division.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Text */}
          <div className="p-5">
            <h3 className="text-lg font-semibold">{division.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{division.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
