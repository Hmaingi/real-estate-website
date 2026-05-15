"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Bed, Bath, Square, ChevronLeft, ChevronRight, MapPin, Play } from 'lucide-react';
import { Property } from '@/lib/properties';
import { getYouTubeThumbnailUrl, isMp4Video } from '@/lib/video';
import ImageWatermark from './ImageWatermark';

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const hasImages = property.images.length > 0;
  const youtubeThumbnailUrl = getYouTubeThumbnailUrl(property.videoUrl || "");

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <article className="group relative overflow-hidden bg-slate-200 shadow-sm transition-shadow duration-500 hover:shadow-2xl">
      <a href={`/property/${property.id}`} className="absolute inset-0 z-10" aria-label={`View ${property.title}`} />

      {/* Image Container */}
      <div className="relative aspect-[16/10] min-h-[360px] overflow-hidden bg-slate-200 sm:min-h-[430px] lg:min-h-[500px]">
        {hasImages && !imageError ? (
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(min-width: 1024px) 720px, (min-width: 640px) 92vw, 100vw"
            onError={handleImageError}
          />
        ) : property.videoUrl ? (
          <div className="relative h-full w-full bg-slate-950">
            {youtubeThumbnailUrl ? (
              <img src={youtubeThumbnailUrl} alt={property.title} className="h-full w-full object-cover opacity-80" />
            ) : isMp4Video(property.videoUrl) ? (
              <video src={property.videoUrl} className="h-full w-full object-cover opacity-80" muted playsInline preload="metadata" />
            ) : null}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/90 p-4 text-slate-950 shadow-lg">
                <Play className="h-8 w-8 fill-current" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full bg-slate-200 flex items-center justify-center">
            <div className="text-slate-400 text-center">
              <Square className="h-12 w-12 mx-auto mb-2" />
              <p>Image not available</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/88 via-slate-950/30 to-slate-950/5 transition-opacity duration-500 group-hover:from-slate-950/92" />
        <ImageWatermark className="absolute bottom-8 right-8 z-20 text-5xl opacity-80 sm:text-6xl" />
        
        {property.featured && (
          <span className="pointer-events-none absolute left-6 top-6 z-20 rounded-sm bg-emerald-700/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            Featured
          </span>
        )}

        <div className="pointer-events-none absolute left-6 right-6 bottom-7 z-20 sm:left-8 sm:right-8 sm:bottom-8">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur ${
            property.type === 'Rent' 
              ? 'bg-slate-950/85 text-white' 
              : 'bg-emerald-700/90 text-white'
          }`}>
            For {property.type}
            </span>
          </div>

          <h3 className="max-w-[92%] text-2xl font-semibold leading-tight text-white line-clamp-2 sm:text-3xl lg:text-[2.15rem]">
            {property.title}
          </h3>

          <div className="mt-2 flex items-center text-sm text-white/90 sm:text-base">
            <MapPin className="mr-2 h-4 w-4" />
            <span className="line-clamp-1">{property.location}</span>
          </div>

          <div className="mt-5 border-t border-white/20 pt-4">
            <div>
              <div className="text-2xl font-semibold text-white sm:text-3xl">
                {property.price}
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-light text-white/90">
                <div className="flex items-center">
                  <Bed className="mr-1.5 h-4 w-4" />
                  <span>Beds: {property.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-1.5 h-4 w-4" />
                  <span>Baths: {property.bathrooms}</span>
                </div>
                {property.area && (
                  <div className="flex items-center">
                    <Square className="mr-1.5 h-4 w-4" />
                    <span>{property.area}</span>
                  </div>
                )}
              </div>
            </div>
            <span className="mt-4 hidden w-fit max-w-full whitespace-nowrap border border-white/70 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-white group-hover:text-slate-950 sm:inline-flex">
              View Details
            </span>
          </div>
        </div>

        {/* Image Navigation */}
        {property.images.length > 1 && !imageError && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 z-30 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 z-30 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="h-4 w-4" />
            </button>

            {/* Image Counter */}
            <div className="absolute right-5 top-5 z-30 rounded-full bg-slate-950/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </>
        )}
      </div>
    </article>
  );
}
