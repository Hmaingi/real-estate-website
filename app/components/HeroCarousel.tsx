"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/postsale.jpg",
    title: "Legacy Agency",
    subtitle: "Connecting buyers and sellers with curated property listings.",
    link: "/divisions/agency",
  },
  {
    image: "/inspection.jpg",
    title: "Legacy Management",
    subtitle: "Efficient property management for residential and commercial real estate.",
    link: "/divisions/management",
  },
  {
    image: "/estate.jpg",
    title: "Legacy Developments",
    subtitle: "Planning and constructing future-forward property solutions.",
    link: "/divisions/developments",
  },
  {
    image: "/hso.jpg",
    title: "Legacy Capital",
    subtitle: "Flexible real estate funding for developers and investors.",
    link: "/divisions/capital",
  },
];

export default function HeroCarousel() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation
      className="w-full h-[90vh]" // Fix height for hero
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index} className="relative h-[90vh]">
          <a href={slide.link} className="block w-full h-full relative overflow-hidden">
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Text Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
                {slide.subtitle}
              </p>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
