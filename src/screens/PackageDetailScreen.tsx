import React from 'react';
import {
  ArrowLeft,
  Backpack,
  CalendarX2,
  Check,
  Clock,
  Users,
  XCircle,
} from 'lucide-react';
import { TourPackage } from '../types';
import { ResilientImage } from '../components/ResilientImage';
import { WhatsAppIcon } from '../components/WhatsAppIcon';

interface PackageDetailScreenProps {
  pkg: TourPackage;
  onBack: () => void;
  onOpenBooking: (pkg: TourPackage) => void;
}

export const PackageDetailScreen: React.FC<PackageDetailScreenProps> = ({
  pkg,
  onBack,
  onOpenBooking,
}) => {
  return (
    <div className="w-full pb-28">
      <div className="max-w-4xl mx-auto px-4 md:px-8 pt-6 md:pt-8">
        {/* Back button */}
        <button
          type="button"
          onClick={onBack}
          className="min-h-[48px] px-4 -ml-2 rounded-xl inline-flex items-center gap-2 text-[17px] font-bold text-[#2F6B3F] hover:bg-[#8DB580]/15 cursor-pointer transition-colors"
        >
          <ArrowLeft className="w-5 h-5" strokeWidth={2.3} aria-hidden="true" />
          <span>Kembali ke Paket Wisata</span>
        </button>

        {/* Main Photo */}
        <div className="mt-4 aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#E7E2D7] shadow-[0_4px_20px_-2px_rgba(43,42,38,0.08)]">
          <ResilientImage
            src={pkg.image}
            alt={pkg.alt}
            loading="eager"
            className="w-full h-full object-cover"
            fallbackLabel={pkg.name}
          />
        </div>

        {/* Title & Key Overview */}
        <header className="mt-6">
          <p className="text-[16px] font-bold text-[#2F6B3F]">
            {pkg.durationLabel}
          </p>
          <h1 className="mt-1.5 font-serif text-[30px] md:text-[38px] font-semibold text-[#2B2A26] leading-tight">
            {pkg.name}
          </h1>
          <p className="mt-3 text-[17px] leading-[1.6] text-[#2B2A26]/90">
            {pkg.shortDescription}
          </p>

          {/* Min participants & group info */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-white rounded-2xl p-4 border border-[#8DB580]/25 flex items-start gap-3">
              <Users
                className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              <div>
                <p className="text-[15px] font-bold text-[#2F6B3F]">Minimal Peserta</p>
                <p className="text-[17px] font-semibold text-[#2B2A26] tabular-nums">
                  {pkg.minParticipants} orang ({pkg.maxGroupNote})
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 border border-[#8DB580]/25 flex items-start gap-3">
              <Clock
                className="w-6 h-6 text-[#2F6B3F] shrink-0 mt-0.5"
                strokeWidth={2.2}
                aria-hidden="true"
              />
              <div>
                <p className="text-[15px] font-bold text-[#2F6B3F]">Konsumsi &amp; Inap</p>
                <p className="text-[17px] font-semibold text-[#2B2A26]">
                  {pkg.mealsIncluded} · {pkg.stayIncluded}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Hourly Activity Schedule */}
        <section className="mt-10">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-[#2F6B3F]">
            Jadwal Kegiatan per Jam
          </h2>
          <div className="mt-4 bg-white rounded-2xl border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] divide-y divide-[#8DB580]/20">
            {pkg.schedule.map((slot, index) => (
              <div
                key={index}
                className="p-5 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6"
              >
                <div className="sm:w-36 shrink-0 text-[17px] font-bold text-[#D9822B] tabular-nums">
                  {slot.time}
                </div>
                <div>
                  <h3 className="font-serif text-[19px] font-semibold text-[#2B2A26] leading-snug">
                    {slot.activity}
                  </h3>
                  <p className="mt-1 text-[17px] leading-[1.6] text-[#2B2A26]/85">
                    {slot.note}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Termasuk & Tidak Termasuk */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)]">
            <h2 className="font-serif text-[22px] font-semibold text-[#2F6B3F]">
              Termasuk dalam Paket
            </h2>
            <ul className="mt-4 space-y-3">
              {pkg.included.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[17px] leading-[1.6] text-[#2B2A26]"
                >
                  <Check
                    className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-1"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)]">
            <h2 className="font-serif text-[22px] font-semibold text-[#2B2A26]">
              Tidak Termasuk
            </h2>
            <ul className="mt-4 space-y-3">
              {pkg.excluded.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-[17px] leading-[1.6] text-[#2B2A26]/85"
                >
                  <XCircle
                    className="w-5 h-5 text-[#D9822B] shrink-0 mt-1"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Cancellation Policy & What to Bring */}
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-6 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)]">
            <div className="flex items-center gap-2.5 text-[#2F6B3F]">
              <CalendarX2 className="w-6 h-6 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              <h2 className="font-serif text-[22px] font-semibold">
                Aturan Pembatalan
              </h2>
            </div>
            <ul className="mt-4 space-y-2.5 list-disc pl-5 text-[17px] leading-[1.6] text-[#2B2A26]">
              {pkg.cancellationPolicy.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)]">
            <div className="flex items-center gap-2.5 text-[#2F6B3F]">
              <Backpack className="w-6 h-6 shrink-0" strokeWidth={2.2} aria-hidden="true" />
              <h2 className="font-serif text-[22px] font-semibold">
                Apa yang Perlu Dibawa
              </h2>
            </div>
            <ul className="mt-4 space-y-2.5 list-disc pl-5 text-[17px] leading-[1.6] text-[#2B2A26]">
              {pkg.whatToBring.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>

      {/* Sticky Bottom Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-[#8DB580]/30 shadow-[0_-4px_18px_rgba(43,42,38,0.08)]">
        <div className="max-w-4xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
          <div className="shrink-0">
            <p className="text-[13px] font-semibold text-[#2B2A26]/75 leading-tight">
              Mulai dari
            </p>
            <p className="text-[20px] sm:text-[22px] font-bold text-[#D9822B] tabular-nums leading-tight">
              {pkg.priceFormatted}
              <span className="text-[14px] font-semibold text-[#2B2A26]/80">
                {' '}
                /orang
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => onOpenBooking(pkg)}
            className="flex-1 sm:flex-initial sm:min-w-[260px] min-h-[56px] px-5 rounded-[14px] bg-[#25D366] hover:bg-[#1EB858] text-white text-[18px] font-bold flex items-center justify-center gap-2.5 shadow-sm cursor-pointer transition-colors"
          >
            <WhatsAppIcon className="w-6 h-6 shrink-0" />
            <span>Pesan paket ini</span>
          </button>
        </div>
      </div>
    </div>
  );
};
