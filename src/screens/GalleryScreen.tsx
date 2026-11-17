import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/villageData';
import { GalleryCategory, GalleryPhoto } from '../types';
import { ResilientImage } from '../components/ResilientImage';

interface GalleryScreenProps {
  initialPhotoId?: string | null;
  onClearInitialPhoto?: () => void;
}

const CATEGORIES: GalleryCategory[] = [
  'Semua',
  'Pemandangan',
  'Kegiatan',
  'Kuliner',
  'Penginapan',
];

export const GalleryScreen: React.FC<GalleryScreenProps> = ({
  initialPhotoId,
  onClearInitialPhoto,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<GalleryCategory>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const filteredPhotos: GalleryPhoto[] =
    selectedCategory === 'Semua'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  useEffect(() => {
    if (initialPhotoId) {
      setSelectedCategory('Semua');
      const idx = GALLERY_PHOTOS.findIndex((p) => p.id === initialPhotoId);
      if (idx !== -1) {
        setLightboxIndex(idx);
      }
      onClearInitialPhoto?.();
    }
  }, [initialPhotoId, onClearInitialPhoto]);

  const handleCloseLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredPhotos.length - 1 : prev - 1;
    });
  }, [filteredPhotos.length]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredPhotos.length - 1 ? 0 : prev + 1;
    });
  }, [filteredPhotos.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, handleCloseLightbox, handlePrev, handleNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    touchStartX.current = null;
  };

  const activePhoto =
    lightboxIndex !== null ? filteredPhotos[lightboxIndex] || null : null;

  return (
    <div className="w-full py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <header>
          <h1 className="font-serif text-[30px] md:text-[38px] font-semibold text-[#2F6B3F] leading-tight">
            Galeri Desa Lereng Asri
          </h1>
          <p className="mt-3 text-[17px] leading-[1.6] text-[#2B2A26]/90 max-w-2xl">
            Lihat suasana asli sawah terasering, senyum warga di kebun, masakan dapur kayu, dan penginapan rumah kayu sebelum Anda berkunjung.
          </p>
        </header>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Saring foto berdasarkan kategori"
          className="mt-6 flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1"
        >
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                className={`min-h-[48px] px-5 rounded-xl text-[16px] font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#2F6B3F] text-white shadow-sm'
                    : 'bg-white text-[#2B2A26] border border-[#8DB580]/35 hover:bg-[#F2EDE3]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Two-column Photo Grid */}
        <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5">
          {filteredPhotos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] border border-[#8DB580]/20 text-left cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#E7E2D7]">
                <ResilientImage
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                  fallbackLabel={photo.title}
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <p className="text-[13px] font-bold text-[#2F6B3F]">
                  {photo.category}
                </p>
                <h2 className="mt-0.5 font-serif text-[16px] sm:text-[18px] font-semibold text-[#2B2A26] leading-snug">
                  {photo.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Swipeable Lightbox */}
      {activePhoto && lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Tampilan layar penuh: ${activePhoto.title}`}
          className="fixed inset-0 z-50 bg-black/95 text-white flex flex-col justify-between"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar inside Lightbox */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <span className="text-[15px] font-bold text-white/85 tabular-nums">
              {lightboxIndex + 1} / {filteredPhotos.length} · {activePhoto.category}
            </span>
            <button
              type="button"
              onClick={handleCloseLightbox}
              aria-label="Tutup tampilan foto"
              className="min-h-[52px] min-w-[52px] px-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-[16px] flex items-center justify-center gap-2 cursor-pointer"
            >
              <X className="w-6 h-6" strokeWidth={2.5} aria-hidden="true" />
              <span>Tutup</span>
            </button>
          </div>

          {/* Main Photo Stage with Left/Right Controls */}
          <div className="relative flex-1 flex items-center justify-center px-3 sm:px-16 overflow-hidden">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Foto sebelumnya"
              className="absolute left-2 sm:left-4 z-10 min-w-[48px] min-h-[48px] rounded-full bg-black/55 hover:bg-black/80 border border-white/25 text-white flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-7 h-7" strokeWidth={2.4} />
            </button>

            <div className="w-full max-w-4xl max-h-[68vh] flex items-center justify-center">
              <ResilientImage
                src={activePhoto.image}
                alt={activePhoto.alt}
                loading="eager"
                className="max-w-full max-h-[68vh] w-auto h-auto object-contain rounded-xl"
                fallbackLabel={activePhoto.title}
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Foto berikutnya"
              className="absolute right-2 sm:right-4 z-10 min-w-[48px] min-h-[48px] rounded-full bg-black/55 hover:bg-black/80 border border-white/25 text-white flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-7 h-7" strokeWidth={2.4} />
            </button>
          </div>

          {/* Bottom Caption */}
          <div className="px-5 py-5 sm:px-8 bg-black/75 border-t border-white/15">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-[20px] sm:text-[22px] font-semibold text-white">
                {activePhoto.title}
              </h2>
              <p className="mt-1 text-[16px] leading-[1.6] text-white/90">
                {activePhoto.caption}
              </p>
              <p className="mt-2 text-[13px] text-white/65 sm:hidden">
                Geser ke kiri atau kanan untuk melihat foto lainnya.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
