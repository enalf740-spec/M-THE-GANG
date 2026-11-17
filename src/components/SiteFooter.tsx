import React from 'react';
import { Clock, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { VILLAGE_INFO, buildWhatsAppUrl } from '../data/villageData';
import { ScreenId } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface SiteFooterProps {
  showClosingCta?: boolean;
  onOpenBooking: () => void;
  onNavigate: (screen: ScreenId) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  showClosingCta = true,
  onOpenBooking,
  onNavigate,
}) => {
  return (
    <footer>
      {showClosingCta && (
        <section className="bg-[#2F6B3F] text-white py-12 md:py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-[28px] md:text-[34px] font-semibold leading-tight text-white">
              Siap Menghirup Udara Segar di Lereng Asri?
            </h2>
            <p className="mt-4 text-[17px] leading-[1.6] text-white/90 max-w-2xl mx-auto">
              Tanyakan ketersediaan jadwal, sesuaikan rute untuk anak dan orang tua, atau pesan langsung dengan pengurus desa kami yang ramah.
            </p>
            <div className="mt-7 max-w-md mx-auto">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full min-h-[56px] px-6 rounded-[14px] bg-[#25D366] hover:bg-[#1EB858] text-white text-[18px] font-bold flex items-center justify-center gap-3 shadow-md cursor-pointer transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Tanya &amp; Pesan lewat WhatsApp</span>
              </button>
            </div>
          </div>
        </section>
      )}

      <div className="bg-[#2B2A26] text-[#FAF5EA] py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold text-white">
              Desa Wisata Lereng Asri
            </h3>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#FAF5EA]/85">
              Dikelola langsung oleh warga dan BUMDes Lereng Asri untuk menjaga alam desa sekaligus menyambut tamu seperti keluarga sendiri.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-[#8DB580]">
              Alamat &amp; Jam Balasan
            </h4>
            <div className="flex items-start gap-3 text-[16px] leading-[1.6] text-[#FAF5EA]/90">
              <MapPin className="w-5 h-5 text-[#8DB580] shrink-0 mt-1" aria-hidden="true" />
              <span>{VILLAGE_INFO.address}</span>
            </div>
            <div className="flex items-start gap-3 text-[16px] leading-[1.6] text-[#FAF5EA]/90">
              <Clock className="w-5 h-5 text-[#8DB580] shrink-0 mt-1" aria-hidden="true" />
              <span>{VILLAGE_INFO.replyHours}</span>
            </div>
            <div className="flex items-center gap-3 text-[16px] text-[#FAF5EA]/90">
              <Phone className="w-5 h-5 text-[#8DB580] shrink-0" aria-hidden="true" />
              <a
                href={buildWhatsAppUrl('Halo Desa Wisata Lereng Asri, saya ingin bertanya tentang paket wisata.')}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[#8DB580]/60 underline-offset-4 hover:text-white min-h-[48px] inline-flex items-center"
              >
                {VILLAGE_INFO.whatsappNumberDisplay}
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#8DB580]">
              Halaman &amp; Media Sosial
            </h4>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[16px]">
              <button
                type="button"
                onClick={() => onNavigate('home')}
                className="min-h-[48px] text-[#FAF5EA]/90 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Beranda
              </button>
              <button
                type="button"
                onClick={() => onNavigate('packages')}
                className="min-h-[48px] text-[#FAF5EA]/90 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Paket Wisata
              </button>
              <button
                type="button"
                onClick={() => onNavigate('gallery')}
                className="min-h-[48px] text-[#FAF5EA]/90 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Galeri
              </button>
              <button
                type="button"
                onClick={() => onNavigate('location')}
                className="min-h-[48px] text-[#FAF5EA]/90 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Lokasi
              </button>
            </div>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Desa Wisata Lereng Asri"
                className="min-w-[48px] min-h-[48px] rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Desa Wisata Lereng Asri"
                className="min-w-[48px] min-h-[48px] rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="mailto:salam@lerengasri.id"
                aria-label="Email Desa Wisata Lereng Asri"
                className="min-w-[48px] min-h-[48px] rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/15 text-[14px] text-[#FAF5EA]/70 flex flex-col sm:flex-row justify-between gap-2">
          <span>© 2026 Desa Wisata Lereng Asri</span>
          <span>Wisata Ramah Keluarga &amp; Komunitas</span>
        </div>
      </div>
    </footer>
  );
};
