import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS, TOUR_PACKAGES } from '../data/villageData';
import { PackageDurationFilter, TourPackage } from '../types';
import { ResilientImage } from '../components/ResilientImage';

interface PackagesScreenProps {
  onSelectPackage: (pkg: TourPackage) => void;
  onOpenBooking: (pkg: TourPackage) => void;
}

const DURATION_FILTERS: PackageDurationFilter[] = [
  'Semua',
  '1 Hari',
  '2 Hari 1 Malam',
];

export const PackagesScreen: React.FC<PackagesScreenProps> = ({
  onSelectPackage,
  onOpenBooking,
}) => {
  const [selectedDuration, setSelectedDuration] =
    useState<PackageDurationFilter>('Semua');
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);

  const filteredPackages =
    selectedDuration === 'Semua'
      ? TOUR_PACKAGES
      : TOUR_PACKAGES.filter((pkg) => pkg.duration === selectedDuration);

  return (
    <div className="w-full py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Page Header */}
        <header>
          <h1 className="font-serif text-[30px] md:text-[38px] font-semibold text-[#2F6B3F] leading-tight">
            Paket Wisata Lereng Asri
          </h1>
          <p className="mt-3 text-[17px] leading-[1.6] text-[#2B2A26]/90 max-w-2xl">
            Pilih paket kegiatan sehari atau menginap di rumah warga. Semua paket sudah termasuk pemandu lokal dan hidangan desa yang dimasak segar.
          </p>
        </header>

        {/* Duration Filter Tabs */}
        <div
          role="tablist"
          aria-label="Saring paket berdasarkan durasi"
          className="mt-6 flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1"
        >
          {DURATION_FILTERS.map((duration) => {
            const isSelected = selectedDuration === duration;
            return (
              <button
                key={duration}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedDuration(duration)}
                className={`min-h-[48px] px-5 rounded-xl text-[16px] font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#2F6B3F] text-white shadow-sm'
                    : 'bg-white text-[#2B2A26] border border-[#8DB580]/35 hover:bg-[#F2EDE3]'
                }`}
              >
                {duration}
              </button>
            );
          })}
        </div>

        {/* Single-Column Package Cards */}
        <div className="mt-7 flex flex-col gap-6">
          {filteredPackages.map((pkg) => (
            <article
              key={pkg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] border border-[#8DB580]/20"
            >
              <button
                type="button"
                onClick={() => onSelectPackage(pkg)}
                className="block w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-[#E7E2D7] cursor-pointer"
                aria-label={`Lihat rincian ${pkg.name}`}
              >
                <ResilientImage
                  src={pkg.image}
                  alt={pkg.alt}
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-200"
                  fallbackLabel={pkg.name}
                />
              </button>

              <div className="p-6 md:p-7">
                <p className="text-[15px] font-bold text-[#2F6B3F]">
                  {pkg.durationLabel} · Minimal {pkg.minParticipants} orang
                </p>
                <h2 className="mt-1.5 font-serif text-[24px] md:text-[28px] font-semibold text-[#2B2A26] leading-snug">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="text-left hover:text-[#2F6B3F] cursor-pointer"
                  >
                    {pkg.name}
                  </button>
                </h2>

                <p className="mt-3 text-[26px] font-bold text-[#D9822B] tabular-nums leading-tight">
                  {pkg.priceFormatted}{' '}
                  <span className="text-[17px] font-semibold text-[#2B2A26]/80">
                    per orang
                  </span>
                </p>

                <p className="mt-3 text-[17px] leading-[1.6] text-[#2B2A26]/90">
                  {pkg.shortDescription}
                </p>

                <div className="mt-5 pt-4 border-t border-[#8DB580]/20">
                  <p className="text-[16px] font-bold text-[#2F6B3F] mb-2.5">
                    Termasuk dalam paket:
                  </p>
                  <ul className="space-y-2.5">
                    {pkg.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-[17px] leading-[1.55] text-[#2B2A26]"
                      >
                        <Check
                          className="w-5 h-5 text-[#2F6B3F] shrink-0 mt-1"
                          strokeWidth={2.4}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking(pkg)}
                    className="w-full min-h-[56px] px-6 rounded-[14px] bg-[#D9822B] hover:bg-[#B86B1E] text-white text-[18px] font-bold flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                  >
                    Pesan paket ini
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full min-h-[56px] px-6 rounded-[14px] bg-white border border-[#2F6B3F] text-[#2F6B3F] hover:bg-[#FAF5EA] text-[18px] font-bold flex items-center justify-center cursor-pointer transition-colors"
                  >
                    Lihat Jadwal &amp; Detail
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Simple Comparison Table */}
        <section className="mt-12 md:mt-16">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-[#2F6B3F] leading-snug">
            Perbandingan Singkat Antar Paket
          </h2>
          <p className="mt-1.5 text-[17px] leading-[1.6] text-[#2B2A26]/85">
            Bandingkan durasi, tarif per orang, dan fasilitas utama secara cepat.
          </p>

          <div className="mt-5 bg-white rounded-2xl border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.06)] overflow-x-auto">
            <table className="w-full min-w-[600px] text-left border-collapse">
              <thead>
                <tr className="bg-[#2F6B3F] text-white">
                  <th className="py-4 px-5 text-[16px] font-bold">Nama Paket</th>
                  <th className="py-4 px-4 text-[16px] font-bold">Durasi</th>
                  <th className="py-4 px-4 text-[16px] font-bold">Harga / Orang</th>
                  <th className="py-4 px-4 text-[16px] font-bold">Min. Peserta</th>
                  <th className="py-4 px-5 text-[16px] font-bold">Konsumsi &amp; Inap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#8DB580]/20 text-[16px]">
                {TOUR_PACKAGES.map((pkg) => (
                  <tr key={pkg.id} className="hover:bg-[#FAF5EA]/70">
                    <td className="py-4 px-5 font-bold text-[#2F6B3F]">
                      <button
                        type="button"
                        onClick={() => onSelectPackage(pkg)}
                        className="text-left underline underline-offset-4 cursor-pointer"
                      >
                        {pkg.name}
                      </button>
                    </td>
                    <td className="py-4 px-4 text-[#2B2A26] whitespace-nowrap">
                      {pkg.duration}
                    </td>
                    <td className="py-4 px-4 font-bold text-[#D9822B] tabular-nums whitespace-nowrap">
                      {pkg.priceFormatted}
                    </td>
                    <td className="py-4 px-4 text-[#2B2A26] tabular-nums whitespace-nowrap">
                      {pkg.minParticipants} orang
                    </td>
                    <td className="py-4 px-5 text-[#2B2A26]/90">
                      {pkg.mealsIncluded} · {pkg.stayIncluded}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-12 md:mt-16">
          <h2 className="font-serif text-[24px] md:text-[28px] font-semibold text-[#2F6B3F] leading-snug">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-1.5 text-[17px] leading-[1.6] text-[#2B2A26]/85">
            Informasi penting seputar pembayaran, potongan harga anak, dan cuaca.
          </p>

          <div className="mt-5 space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#8DB580]/25 shadow-[0_4px_20px_-2px_rgba(43,42,38,0.04)] overflow-hidden"
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    className="w-full min-h-[56px] px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF5EA]/60"
                  >
                    <span className="text-[18px] font-bold text-[#2F6B3F] leading-snug">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp
                        className="w-6 h-6 text-[#2F6B3F] shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDown
                        className="w-6 h-6 text-[#2F6B3F] shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-[17px] leading-[1.6] text-[#2B2A26]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
