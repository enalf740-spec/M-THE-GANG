import React, { useEffect, useState } from 'react';
import { Calendar, Check, Copy, Minus, Plus, Users, X } from 'lucide-react';
import { TOUR_PACKAGES, buildWhatsAppUrl, formatRupiah } from '../data/villageData';
import { TourPackage } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface BookingSheetProps {
  isOpen: boolean;
  initialPackage?: TourPackage | null;
  onClose: () => void;
}

export const BookingSheet: React.FC<BookingSheetProps> = ({
  isOpen,
  initialPackage,
  onClose,
}) => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    initialPackage?.id || TOUR_PACKAGES[0].id
  );
  const [guests, setGuests] = useState<number>(initialPackage?.minParticipants || 4);
  const [visitDate, setVisitDate] = useState<string>('');
  const [guestName, setGuestName] = useState<string>('');
  const [copiedMessage, setCopiedMessage] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      const targetPkg = initialPackage || TOUR_PACKAGES[0];
      setSelectedPkgId(targetPkg.id);
      setGuests((prev) => Math.max(targetPkg.minParticipants, prev || targetPkg.minParticipants));
      setCopiedMessage(false);
    }
  }, [isOpen, initialPackage]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentPkg =
    TOUR_PACKAGES.find((p) => p.id === selectedPkgId) || TOUR_PACKAGES[0];
  const estimatedTotal = currentPkg.pricePerPerson * guests;

  const formattedMessage = [
    `Halo Pengelola Desa Wisata Lereng Asri, saya ingin memesan paket wisata:`,
    `- Paket: ${currentPkg.name} (${currentPkg.duration})`,
    `- Jumlah peserta: ${guests} orang`,
    visitDate ? `- Rencana tanggal: ${visitDate}` : `- Rencana tanggal: (belum ditentukan)`,
    guestName.trim() ? `- Atas nama: ${guestName.trim()}` : '',
    `Mohon informasi ketersediaan jadwalnya. Terima kasih.`,
  ]
    .filter(Boolean)
    .join('\n');

  const waUrl = buildWhatsAppUrl(formattedMessage);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      setCopiedMessage(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-sheet-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-[2px] p-0 sm:p-4"
      onClick={onClose}
    >
      <div
        className="w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-y-auto p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-10 h-1.5 bg-[#8DB580]/40 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#8DB580]/20">
          <div>
            <h2
              id="booking-sheet-title"
              className="font-serif text-2xl font-semibold text-[#2F6B3F]"
            >
              Pesan lewat WhatsApp
            </h2>
            <p className="text-[15px] text-[#2B2A26]/75 mt-1">
              Atur jumlah peserta dan tanggal, lalu langsung terhubung ke pengurus desa.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup jendela pemesanan"
            className="min-h-[48px] min-w-[48px] rounded-xl bg-[#FAF5EA] text-[#2B2A26] flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#F2EDE3]"
          >
            <X className="w-6 h-6" strokeWidth={2.2} />
          </button>
        </div>

        <div className="mt-5 space-y-5">
          {/* Package selector */}
          <div>
            <label
              htmlFor="booking-package"
              className="block text-[15px] font-bold text-[#2B2A26] mb-2"
            >
              Pilih paket wisata
            </label>
            <select
              id="booking-package"
              value={selectedPkgId}
              onChange={(e) => {
                const nextId = e.target.value;
                setSelectedPkgId(nextId);
                const pkg = TOUR_PACKAGES.find((p) => p.id === nextId);
                if (pkg && guests < pkg.minParticipants) {
                  setGuests(pkg.minParticipants);
                }
              }}
              className="w-full min-h-[56px] px-4 rounded-xl bg-[#FAF5EA] border border-[#8DB580]/40 text-[#2B2A26] text-[17px] font-semibold"
            >
              {TOUR_PACKAGES.map((pkg) => (
                <option key={pkg.id} value={pkg.id}>
                  {pkg.name} ({pkg.priceFormatted}/orang)
                </option>
              ))}
            </select>
          </div>

          {/* Guest count stepper */}
          <div>
            <span className="block text-[15px] font-bold text-[#2B2A26] mb-2">
              Jumlah peserta (minimal {currentPkg.minParticipants} orang)
            </span>
            <div className="flex items-center justify-between bg-[#FAF5EA] border border-[#8DB580]/40 rounded-xl p-2">
              <button
                type="button"
                onClick={() =>
                  setGuests((prev) => Math.max(currentPkg.minParticipants, prev - 1))
                }
                aria-label="Kurangi jumlah peserta"
                className="min-h-[48px] min-w-[48px] rounded-lg bg-white border border-[#8DB580]/40 text-[#2F6B3F] flex items-center justify-center cursor-pointer hover:bg-[#F2EDE3]"
              >
                <Minus className="w-5 h-5" strokeWidth={2.4} />
              </button>
              <div className="flex items-center gap-2 text-[18px] font-bold text-[#2B2A26] tabular-nums">
                <Users className="w-5 h-5 text-[#2F6B3F]" aria-hidden="true" />
                <span>{guests} orang</span>
              </div>
              <button
                type="button"
                onClick={() => setGuests((prev) => Math.min(45, prev + 1))}
                aria-label="Tambah jumlah peserta"
                className="min-h-[48px] min-w-[48px] rounded-lg bg-white border border-[#8DB580]/40 text-[#2F6B3F] flex items-center justify-center cursor-pointer hover:bg-[#F2EDE3]"
              >
                <Plus className="w-5 h-5" strokeWidth={2.4} />
              </button>
            </div>
          </div>

          {/* Date and Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="booking-date"
                className="block text-[15px] font-bold text-[#2B2A26] mb-2"
              >
                Rencana tanggal
              </label>
              <div className="relative">
                <input
                  id="booking-date"
                  type="date"
                  value={visitDate}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full min-h-[56px] px-4 rounded-xl bg-[#FAF5EA] border border-[#8DB580]/40 text-[#2B2A26] text-[16px]"
                />
                <Calendar
                  className="w-5 h-5 text-[#2F6B3F] pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="booking-name"
                className="block text-[15px] font-bold text-[#2B2A26] mb-2"
              >
                Nama pemesan (opsional)
              </label>
              <input
                id="booking-name"
                type="text"
                placeholder="Contoh: Ibu Rina"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full min-h-[56px] px-4 rounded-xl bg-[#FAF5EA] border border-[#8DB580]/40 text-[#2B2A26] text-[16px] placeholder:text-[#2B2A26]/45"
              />
            </div>
          </div>

          {/* Summary Box */}
          <div className="rounded-xl bg-[#FAF5EA] border border-[#8DB580]/30 p-4 flex items-center justify-between gap-4">
            <div>
              <p className="text-[14px] text-[#2B2A26]/75">Perkiraan total biaya</p>
              <p className="text-[22px] font-bold text-[#D9822B] tabular-nums">
                {formatRupiah(estimatedTotal)}
              </p>
            </div>
            <p className="text-[13px] text-[#2B2A26]/75 text-right max-w-[170px]">
              Bayar DP 30% setelah jadwal dikonfirmasi admin desa.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col gap-3 pt-1">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[56px] px-5 rounded-[14px] bg-[#25D366] hover:bg-[#1EB858] text-white text-[18px] font-bold flex items-center justify-center gap-3 shadow-sm transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6 shrink-0" />
              <span>Kirim Pesan ke WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={handleCopyMessage}
              className="w-full min-h-[56px] px-5 rounded-[14px] bg-white border border-[#2F6B3F] text-[#2F6B3F] text-[18px] font-bold flex items-center justify-center gap-2.5 hover:bg-[#FAF5EA] cursor-pointer transition-colors"
            >
              {copiedMessage ? (
                <>
                  <Check className="w-5 h-5" strokeWidth={2.5} />
                  <span>Teks Pesan Tersalin</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" strokeWidth={2.2} />
                  <span>Salin Teks Pemesanan</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
