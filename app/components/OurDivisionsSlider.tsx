// app/components/OurDivisionsSlider.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const divisions = [
  {
    title: 'Legacy Agency',
    description: 'Helping you find the perfect property, fast.',
    image: '/images/agency.jpg',
  },
  {
    title: 'Legacy Management',
    description: 'Expert property and facilities management services.',
    image: '/images/management.jpg',
  },
  {
    title: 'Legacy Developments',
    description: 'Building modern, sustainable communities.',
    image: '/images/developments.jpg',
  },
  {
    title: 'Legacy Legal',
    description: 'Secure legal support for all property transactions.',
    image: '/images/legal.jpg',
  },
  {
    title: 'Legacy Capital',
    description: 'Financing and capital investment solutions.',
    image: '/images/capital.jpg',
  },
];

export default function OurDivisionsSlider() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Our Divisions</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="max-w-5xl mx-auto"
      >
        {divisions.map((division, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[400px] bg-cover bg-center flex items-center justify-center relative rounded-xl shadow-lg overflow-hidden"
              style={{ backgroundImage: `url(${division.image})` }}
            >
              <div className="bg-black bg-opacity-50 text-white p-6 text-center rounded-lg max-w-md">
                <h3 className="text-2xl font-bold mb-2">{division.title}</h3>
                <p className="mb-4">{division.description}</p>
                <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                  Learn More
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
