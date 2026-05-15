"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import ImageWatermark from './ImageWatermark';

interface PropertyCarouselProps {
  images: string[];
  title: string;
}

export default function PropertyCarousel({ images, title }: PropertyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState<boolean[]>(new Array(images.length).fill(false));

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const handleImageError = (index: number) => {
    const newErrors = [...imageError];
    newErrors[index] = true;
    setImageError(newErrors);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative h-[500px] overflow-hidden bg-slate-200 sm:h-[620px] lg:h-[760px]">
        {!imageError[currentIndex] ? (
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="cursor-pointer object-cover"
            sizes="(min-width: 1024px) 960px, 100vw"
            onClick={() => setIsModalOpen(true)}
            onError={() => handleImageError(currentIndex)}
          />
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <div className="h-16 w-16 mx-auto mb-4 bg-slate-300 rounded-lg"></div>
              <p>Image not available</p>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
        <ImageWatermark className="absolute bottom-8 right-8 text-6xl sm:text-7xl" />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-950/55 hover:bg-slate-950/75 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-950/55 hover:bg-slate-950/75 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-slate-950/60 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative h-28 overflow-hidden transition ${
              index === currentIndex 
                ? 'ring-2 ring-emerald-700 ring-offset-2' 
                : 'opacity-75 hover:opacity-100'
            }`}
          >
            {!imageError[index] ? (
              <Image
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 160px, 33vw"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                <div className="h-6 w-6 bg-slate-300 rounded"></div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Modal for Full-Screen View */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-emerald-300 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative max-w-6xl max-h-full">
            {!imageError[currentIndex] ? (
              <div className="relative">
                <Image
                  src={images[currentIndex]}
                  alt={`${title} - Full size ${currentIndex + 1}`}
                  width={1600}
                  height={1000}
                  className="max-w-full max-h-[86vh] object-contain"
                  onError={() => handleImageError(currentIndex)}
                />
                <ImageWatermark className="absolute bottom-6 right-6 text-6xl" />
              </div>
            ) : (
              <div className="w-96 h-64 bg-slate-200 flex items-center justify-center rounded-lg">
                <div className="text-slate-400 text-center">
                  <div className="h-16 w-16 mx-auto mb-4 bg-slate-300 rounded-lg"></div>
                  <p>Image not available</p>
                </div>
              </div>
            )}

            {/* Modal Navigation */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
