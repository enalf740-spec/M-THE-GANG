import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  MapPin,
  Users,
  Utensils,
  Wind,
} from 'lucide-react';
import {
  DESTINATIONS,
  GALLERY_PHOTOS,
  TOUR_PACKAGES,
  VILLAGE_INFO,
} from '../data/villageData';
import { ScreenId, TourPackage } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { VillageMap } from '../components/VillageMap';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectPackage: (pkg: TourPackage) => void;
  onOpenBooking: (pkg?: TourPackage) => void;
  onOpenGalleryPhoto: (photoId: string) => void;
}

const WHY_ITEMS = [
  {
    id: 'udara',
    title: 'Udara Sejuk Pegunungan',
    description:
      'Berada di ketinggian lereng hijau yang tenang, bebas polusi kota, dan nyaman untuk anak maupun orang tua.',
    icon: Wind,
  },
  {
    id: 'kuliner',
    title: 'Budaya & Kuliner Desa Asli',
    description:
      'Masakan rumahan hangat dari tungku kayu, kebun sayur organik, dan kerajinan bambu warisan warga.',
    icon: Utensils,
  },
  {
    id: 'pemandu',
    title: 'Dipandu Warga Setempat',
    description:
      'Setiap tamu disambut dan didampingi langsung oleh warga desa yang hafal jalur aman dan cerita setempat.',
    icon: Users,
  },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenBooking,
  onOpenGalleryPhoto,
}) => {
  const [showAllDestinations, setShowAllDestinations] = useState(false);

  return (
    <div className="w-full">
      {/* 2. Hero Full-Bleed */}
      <section className="relative w-full min-h-[520px] md:min-h-[580px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <ResilientImage
            src={VILLAGE_INFO.heroImage}
            alt={VILLAGE_INFO.heroAlt}
            loading="eager"
            className="w-full h-full object-cover object-center"
            fallbackLabel="Pemandangan Desa Wisata Lereng Asri"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25"
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-16">
          <div className="max-w-2xl">
            <h1 className="font-serif text-[32px] sm:text-[40px] md:text-[46px] font-semibold text-white leading-[1.18] tracking-tight drop-shadow-sm">
              Selamat Datang di Desa Wisata Lereng Asri
            </h1>
            <p className="mt-4 text-[17px] md:text-[18px] leading-[1.6] text-white/95 max-w-xl">
              {VILLAGE_INFO.tagline}
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="w-full sm:w-auto sm:min-w-[230px] min-h-[56px] px-6 rounded-[14px] bg-[#D9822B] hover:bg-[#B86B1E] text-white text-[18px] font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
              >
                <span>Lihat Paket Wisata</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto sm:min-w-[240px] min-h-[56px] px-6 rounded-[14px] bg-[#25D366] hover:bg-[#1EB858] text-white text-[18px] font-bold flex items-center justify-center gap-3 shadow-md cursor-pointer transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Pesan lewat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Kenapa Lereng Asri */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-[#8DB580]/15 border-b border-[#8DB580]/20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-[#2F6B3F] leading-snug">
              Kenapa Lereng Asri
            </h2>
            <p className="mt-2 text-[17px] leading-[1.6] text-[#2B2A26]/85">
              Suasana desa yang tenang, bersih, dan ramah untuk liburan keluarga maupun rombongan.
            </p>
          </div>

          <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {WHY_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] border border-[#8DB580]/20 flex flex-col gap-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8DB580]/20 text-[#2F6B3F] flex items-center justify-center">
                    <IconComponent className="w-6 h-6" strokeWidth={2.4} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-[20px] font-semibold text-[#2F6B3F] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[17px] leading-[1.6] text-[#2B2A26]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Destinasi Pilihan */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-[#2F6B3F] leading-snug">
                Destinasi Pilihan
              </h2>
              <p className="mt-1.5 text-[17px] leading-[1.6] text-[#2B2A26]/85">
                Geser ke samping untuk melihat tempat-tempat favorit di desa kami.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowAllDestinations((prev) => !prev)}
              className="min-h-[48px] inline-flex items-center gap-1.5 text-[17px] font-bold text-[#2F6B3F] hover:text-[#235230] underline underline-offset-4 cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>
                {showAllDestinations ? 'Tampilkan geser samping' : 'Lihat semua destinasi'}
              </span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div
            className={
              showAllDestinations
                ? 'mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'
                : 'mt-7 flex overflow-x-auto snap-x snap-mandatory gap-4 pb-3 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0'
            }
          >
            {DESTINATIONS.map((dest) => {
              const linkedPkg =
                TOUR_PACKAGES.find((p) => p.id === dest.recommendedPackageId) ||
                TOUR_PACKAGES[0];
              return (
                <article
                  key={dest.id}
                  className={
                    showAllDestinations
                      ? 'bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] border border-[#8DB580]/20 flex flex-col'
                      : 'w-[82vw] max-w-[320px] md:w-auto md:max-w-none shrink-0 snap-start bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] border border-[#8DB580]/20 flex flex-col'
                  }
                >
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#E7E2D7]">
                    <ResilientImage
                      src={dest.image}
                      alt={dest.alt}
                      className="w-full h-full object-cover"
                      fallbackLabel={dest.name}
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[14px] font-bold text-[#2F6B3F]">
                        {dest.label} · {dest.walkTime}
                      </p>
                      <h3 className="mt-1.5 font-serif text-[20px] font-semibold text-[#2B2A26] leading-snug">
                        {dest.name}
                      </h3>
                      <p className="mt-2 text-[17px] leading-[1.6] text-[#2B2A26]/90">
                        {dest.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onSelectPackage(linkedPkg)}
                      className="mt-4 min-h-[48px] inline-flex items-center gap-1 text-[16px] font-bold text-[#D9822B] hover:text-[#B86B1E] cursor-pointer self-start"
                    >
                      <span>Lihat paket terkait</span>
                      <ChevronRight className="w-5 h-5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Paket Populer */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-[#8DB580]/15 border-y border-[#8DB580]/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-[#2F6B3F] leading-snug">
                Paket Populer
              </h2>
              <p className="mt-1.5 text-[17px] leading-[1.6] text-[#2B2A26]/85">
                Harga jelas per orang, sudah termasuk makan hangat dan pemandu warga.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('packages')}
              className="min-h-[48px] inline-flex items-center gap-1.5 text-[17px] font-bold text-[#2F6B3F] hover:text-[#235230] underline underline-offset-4 cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>Bandingkan semua paket</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {TOUR_PACKAGES.map((pkg) => (
              <article
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] border border-[#8DB580]/20 flex flex-col justify-between"
              >
                <div>
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="block w-full aspect-[4/3] overflow-hidden bg-[#E7E2D7] cursor-pointer text-left"
                    aria-label={`Lihat detail paket ${pkg.name}`}
                  >
                    <ResilientImage
                      src={pkg.image}
                      alt={pkg.alt}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-200"
                      fallbackLabel={pkg.name}
                    />
                  </button>

                  <div className="p-6">
                    <p className="text-[14px] font-bold text-[#2F6B3F]">
                      {pkg.duration} · Minimal {pkg.minParticipants} orang
                    </p>
                    <h3 className="mt-1.5 font-serif text-[22px] font-semibold text-[#2B2A26] leading-snug">
                      <button
                        type="button"
                        onClick={() => onSelectPackage(pkg)}
                        className="text-left hover:text-[#2F6B3F] cursor-pointer"
                      >
                        {pkg.name}
                      </button>
                    </h3>

                    <p className="mt-3 text-[24px] font-bold text-[#D9822B] tabular-nums leading-tight">
                      {pkg.priceFormatted}{' '}
                      <span className="text-[16px] font-semibold text-[#2B2A26]/80">
                        per orang
                      </span>
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#8DB580]/20">
                      <p className="text-[15px] font-bold text-[#2F6B3F] mb-2.5">
                        Termasuk:
                      </p>
                      <ul className="space-y-2">
                        {pkg.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-[16px] leading-[1.5] text-[#2B2A26]"
                          >
                            <Check
                              className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-0.5"
                              strokeWidth={2.4}
                              aria-hidden="true"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(pkg)}
                    className="w-full min-h-[56px] px-5 rounded-[14px] bg-[#D9822B] hover:bg-[#B86B1E] text-white text-[18px] font-bold flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                  >
                    Pesan
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full min-h-[56px] px-5 rounded-[14px] bg-white border border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#FAF5EA] text-[18px] font-bold flex items-center justify-center cursor-pointer transition-colors"
                  >
                    Lihat Jadwal &amp; Detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Galeri (2 kolom, 6 foto) */}
      <section className="py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-[#2F6B3F] leading-snug">
                Galeri
              </h2>
              <p className="mt-1.5 text-[17px] leading-[1.6] text-[#2B2A26]/85">
                Potret keseharian warga, kebun, sawah, dan hangatnya suasana desa kami.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('gallery')}
              className="min-h-[48px] inline-flex items-center gap-1.5 text-[17px] font-bold text-[#2F6B3F] hover:text-[#235230] underline underline-offset-4 cursor-pointer self-start sm:self-auto shrink-0"
            >
              <span>Lihat semua foto</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-5">
            {GALLERY_PHOTOS.slice(0, 6).map((photo) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => onOpenGalleryPhoto(photo.id)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#E7E2D7] shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] cursor-pointer text-left"
              >
                <ResilientImage
                  src={photo.image}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
                  fallbackLabel={photo.title}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/75 via-black/35 to-transparent"
                />
                <span className="absolute bottom-2.5 left-3 right-3 text-[14px] sm:text-[15px] font-bold text-white leading-snug">
                  {photo.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Cara Menuju Desa */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-[#8DB580]/15 border-t border-[#8DB580]/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <VillageMap heightClass="h-64 sm:h-72" interactive={true} />
            </div>
            <div className="lg:col-span-5 space-y-4">
              <h2 className="font-serif text-[26px] md:text-[32px] font-semibold text-[#2F6B3F] leading-snug">
                Cara Menuju Desa
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#2B2A26]">
                Sekitar 45 menit berkendara dari Kota Salatiga atau 1 jam dari Semarang melalui jalur beraspal mulus dan mudah dilalui mobil keluarga maupun bus medium.
              </p>
              <div className="flex items-start gap-2.5 text-[16px] text-[#2B2A26]/85">
                <MapPin
                  className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-1"
                  aria-hidden="true"
                />
                <span>{VILLAGE_INFO.address}</span>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={VILLAGE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full min-h-[56px] px-5 rounded-[14px] bg-[#D9822B] hover:bg-[#B86B1E] text-white text-[18px] font-bold flex items-center justify-center gap-2.5 shadow-sm transition-colors"
                >
                  <ExternalLink className="w-5 h-5 shrink-0" aria-hidden="true" />
                  <span>Buka di Google Maps</span>
                </a>
                <button
                  type="button"
                  onClick={() => onNavigate('location')}
                  className="w-full min-h-[56px] px-5 rounded-[14px] bg-white border border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#FAF5EA] text-[18px] font-bold flex items-center justify-center cursor-pointer transition-colors"
                >
                  Lihat Petunjuk Arah &amp; Fasilitas
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
