'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

type DivisionInfo = {
  title: string;
  description: string;
  image: string;
};

const divisionsData: Record<string, DivisionInfo> = {
  agency: {
    title: 'Legacy Agency',
    description: 'Connecting buyers and sellers with curated property listings.',
    image: '/postsale.jpg',
  },
  management: {
    title: 'Legacy Management',
    description: 'Efficient property management for residential and commercial real estate.',
    image: '/inspection.jpg',
  },
  developments: {
    title: 'Legacy Developments',
    description: 'Planning and constructing future-forward property solutions.',
    image: '/estate.jpg',
  },
  capital: {
    title: 'Legacy Capital',
    description: 'Flexible real estate funding for developers and investors.',
    image: '/hso.jpg',
  },
};

export default function DivisionPage() {
  const params = useParams();
  const divisionKey = params.division as string; // matches the folder name
  const division = divisionsData[divisionKey];

  if (!division) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Division not found</h2>
        <Link href="/" className="text-yellow-600 underline mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src={division.image}
          alt={division.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{division.title}</h1>
        <p className="text-gray-700 text-lg">{division.description}</p>
        <Link
          href="/"
          className="inline-block mt-8 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
