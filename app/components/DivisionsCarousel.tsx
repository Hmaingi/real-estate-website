'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ import Autoplay
import Link from 'next/link'; 

import 'swiper/css';
import 'swiper/css/pagination';

const divisions = [
  {
    name: 'Legacy Agency',
    description: 'Property buying, selling & letting services.',
    image: '/rhouse.jpg',
    slug: 'agency', // for link
  },
  {
    name: 'Legacy Management',
    description: 'Professional property management solutions.',
    image: '/apartment.jpg',
    slug: 'management',
  },
  {
    name: 'Legacy Developments',
    description: 'Innovative property development & planning.',
    image: '/estate.jpg',
    slug: 'developments',
  },
];

const DivisionsCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000, disableOnInteraction: false }} // ✅ autoplay
      modules={[Pagination, Autoplay]} // ✅ add Autoplay here
      className="w-full"
    >
      {divisions.map((division, index) => (
        <SwiperSlide key={index}>
          <Link href={`/divisions/${division.slug}`}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300">
              <img
                src={division.image}
                alt={division.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{division.name}</h3>
                <p className="text-gray-600">{division.description}</p>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DivisionsCarousel;
