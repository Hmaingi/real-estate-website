"use client";
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
      <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-slate-200">
        {!imageError[currentIndex] ? (
          <Image
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            fill
            className="object-cover cursor-pointer"
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

        {/* Navigation Arrows */}
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

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 lg:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative h-20 rounded-lg overflow-hidden ${
              index === currentIndex 
                ? 'ring-2 ring-amber-500 ring-offset-2' 
                : 'hover:opacity-80'
            }`}
          >
            {!imageError[index] ? (
              <Image
                src={image}
                alt={`${title} - Thumbnail ${index + 1}`}
                fill
                className="object-cover"
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
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          <div className="relative max-w-4xl max-h-full">
            {!imageError[currentIndex] ? (
              <Image
                src={images[currentIndex]}
                alt={`${title} - Full size ${currentIndex + 1}`}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
                onError={() => handleImageError(currentIndex)}
              />
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