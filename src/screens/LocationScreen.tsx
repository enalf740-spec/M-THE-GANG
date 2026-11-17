import React, { useState } from 'react';
import {
  Car,
  Check,
  Compass,
  Copy,
  Droplets,
  ExternalLink,
  Landmark,
  MapPin,
  Store,
} from 'lucide-react';
import { NEARBY_FACILITIES, VILLAGE_INFO } from '../data/villageData';
import { VillageMap } from '../components/VillageMap';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface LocationScreenProps {
  onOpenBooking: () => void;
}

const FACILITY_ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'fac-parkir': Car,
  'fac-toilet': Droplets,
  'fac-mushola': Landmark,
  'fac-warung': Store,
};

export const LocationScreen: React.FC<LocationScreenProps> = ({
  onOpenBooking,
}) => {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VILLAGE_INFO.address);
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2600);
    } catch {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2600);
    }
  };

  return (
    <div className="w-full pb-12">
      {/* Full-width Half-height Map */}
      <section aria-label="Peta Desa Wisata Lereng Asri" className="w-full">
        <div className="w-full [&>div]:rounded-none [&>div]:border-x-0 [&>div]:border-t-0">
          <VillageMap heightClass="h-[50vh] min-h-[320px]" interactive={true} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-8">
        <header>
          <h1 className="font-serif text-[30px] md:text-[38px] font-semibold text-[#2F6B3F] leading-tight">
            Lokasi &amp; Cara Menuju Desa
          </h1>
          <div className="mt-4 bg-white rounded-2xl p-5 md:p-6 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] flex items-start gap-3.5">
            <MapPin
              className="w-6 h-6 text-[#D9822B] shrink-0 mt-1"
              strokeWidth={2.3}
              aria-hidden="true"
            />
            <div>
              <p className="text-[15px] font-bold text-[#2F6B3F]">
                Alamat Lengkap Titik Kedatangan (Balai Desa)
              </p>
              <p className="mt-1 text-[17px] leading-[1.6] text-[#2B2A26] font-semibold">
                {VILLAGE_INFO.address}
              </p>
            </div>
          </div>
        </header>

        {/* Plain-language Directions */}
        <section className="mt-8 bg-white rounded-2xl p-5 md:p-6 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)]">
          <div className="flex items-center gap-2.5 text-[#2F6B3F]">
            <Compass className="w-6 h-6 shrink-0" strokeWidth={2.2} aria-hidden="true" />
            <h2 className="font-serif text-[22px] md:text-[24px] font-semibold">
              Petunjuk Arah Singkat
            </h2>
          </div>
          <div className="mt-3 space-y-3 text-[17px] leading-[1.6] text-[#2B2A26]">
            <p>
              Dari arah Tol Semarang–Salatiga, keluar di Gerbang Tol Salatiga lalu ambil jalan menuju Kopeng. Lurus mengikuti papan penunjuk arah wisata sekitar 25 menit hingga bertemu pertigaan Pasar Kopeng.
            </p>
            <p>
              Dari pertigaan tersebut, belok kiri masuk jalan desa beraspal sejauh 1,5 kilometer. Balai Desa Lereng Asri dan area parkir luas berada di sebelah kanan jalan dengan gapura kayu bertuliskan selamat datang.
            </p>
          </div>
        </section>

        {/* Nearby Facilities */}
        <section className="mt-8">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-[#2F6B3F]">
            Fasilitas Terdekat di Area Kedatangan
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {NEARBY_FACILITIES.map((fac) => {
              const IconComp = FACILITY_ICONS[fac.id] || MapPin;
              return (
                <div
                  key={fac.id}
                  className="bg-white rounded-2xl p-5 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.05)] flex items-start gap-3.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#8DB580]/20 text-[#2F6B3F] flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5" strokeWidth={2.3} />
                  </div>
                  <div>
                    <h3 className="font-serif text-[19px] font-semibold text-[#2B2A26] leading-snug">
                      {fac.name}
                    </h3>
                    <p className="text-[14px] font-bold text-[#2F6B3F] mt-0.5">
                      {fac.distance}
                    </p>
                    <p className="mt-1.5 text-[16px] leading-[1.55] text-[#2B2A26]/85">
                      {fac.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Three Big Action Buttons */}
        <section className="mt-9 flex flex-col gap-3">
          <a
            href={VILLAGE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full min-h-[56px] px-6 rounded-[14px] bg-[#D9822B] hover:bg-[#B86B1E] text-white text-[18px] font-bold flex items-center justify-center gap-3 shadow-sm transition-colors"
          >
            <ExternalLink className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span>Buka di Google Maps</span>
          </a>

          <button
            type="button"
            onClick={handleCopyAddress}
            className="w-full min-h-[56px] px-6 rounded-[14px] bg-white border border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#F2EDE3] text-[18px] font-bold flex items-center justify-center gap-3 cursor-pointer transition-colors"
          >
            {addressCopied ? (
              <>
                <Check className="w-5 h-5 shrink-0" strokeWidth={2.5} aria-hidden="true" />
                <span>Alamat Tersalin</span>
              </>
            ) : (
              <>
                <Copy className="w-5 h-5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                <span>Salin alamat</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full min-h-[56px] px-6 rounded-[14px] bg-[#25D366] hover:bg-[#1EB858] text-white text-[18px] font-bold flex items-center justify-center gap-3 shadow-sm cursor-pointer transition-colors"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Hubungi via WhatsApp</span>
          </button>
        </section>
      </div>
    </div>
  );
};
