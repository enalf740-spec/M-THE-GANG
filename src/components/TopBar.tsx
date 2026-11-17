import React, { useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ScreenId } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface TopBarProps {
  currentScreen: ScreenId;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onNavigate: (screen: ScreenId) => void;
  onOpenBooking: () => void;
}

const NAV_ITEMS: { id: ScreenId; label: string }[] = [
  { id: 'home', label: 'Beranda' },
  { id: 'packages', label: 'Paket Wisata' },
  { id: 'gallery', label: 'Galeri' },
  { id: 'location', label: 'Lokasi' },
];

export const TopBar: React.FC<TopBarProps> = ({
  currentScreen,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onNavigate,
  onOpenBooking,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        onCloseMenu();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, onCloseMenu]);

  const activeNavId = currentScreen === 'package-detail' ? 'packages' : currentScreen;

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF5EA]/95 backdrop-blur-md border-b border-[#8DB580]/25">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-8">
          <button
            type="button"
            onClick={() => {
              onNavigate('home');
              onCloseMenu();
            }}
            className="font-serif text-[22px] font-bold tracking-tight text-[#2F6B3F] whitespace-nowrap shrink-0 min-h-[48px] flex items-center cursor-pointer"
          >
            Lereng Asri
          </button>

          <nav
            aria-label="Navigasi utama"
            className="hidden md:flex items-center gap-7"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeNavId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`min-h-[48px] px-1 flex items-center text-[16px] font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                    isActive
                      ? 'text-[#2F6B3F] border-[#2F6B3F]'
                      : 'text-[#2B2A26] border-transparent hover:text-[#2F6B3F] hover:border-[#8DB580]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={onToggleMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation-drawer"
              className="min-h-[48px] min-w-[48px] px-3.5 rounded-xl bg-white border border-[#8DB580]/35 text-[#2F6B3F] font-bold text-[16px] flex items-center justify-center gap-2 shadow-[0_2px_10px_rgba(43,42,38,0.05)] hover:bg-[#F2EDE3] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              {menuOpen ? (
                <X className="w-5 h-5" strokeWidth={2.3} aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2.3} aria-hidden="true" />
              )}
              <span>{menuOpen ? 'Tutup' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-label="Menu navigasi Desa Wisata Lereng Asri"
          className="fixed inset-0 z-50 flex flex-col justify-start bg-black/45 backdrop-blur-[2px]"
          onClick={onCloseMenu}
        >
          <div
            className="bg-[#FAF5EA] w-full max-w-md ml-auto h-full md:h-auto md:max-h-[90vh] md:mt-4 md:mr-6 md:rounded-2xl shadow-2xl border-l md:border border-[#8DB580]/30 flex flex-col justify-between p-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#8DB580]/25">
                <span className="font-serif text-xl font-bold text-[#2F6B3F]">
                  Desa Wisata Lereng Asri
                </span>
                <button
                  type="button"
                  onClick={onCloseMenu}
                  aria-label="Tutup menu"
                  className="min-h-[48px] min-w-[48px] rounded-xl bg-white border border-[#8DB580]/35 text-[#2B2A26] flex items-center justify-center cursor-pointer hover:bg-[#F2EDE3]"
                >
                  <X className="w-6 h-6" strokeWidth={2.2} />
                </button>
              </div>

              <nav className="mt-4 flex flex-col gap-2" aria-label="Daftar halaman">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeNavId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        onNavigate(item.id);
                        onCloseMenu();
                      }}
                      className={`w-full min-h-[56px] px-4 rounded-xl text-left text-[18px] font-bold flex items-center justify-between transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[#2F6B3F] text-white'
                          : 'bg-white text-[#2B2A26] border border-[#8DB580]/25 hover:bg-[#F2EDE3]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="text-sm font-semibold opacity-90">Aktif</span>}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="mt-6 pt-5 border-t border-[#8DB580]/25 space-y-3">
              <p className="text-[15px] text-[#2B2A26]/80 leading-relaxed">
                Butuh bantuan memilih paket atau jadwal untuk keluarga dan rombongan?
              </p>
              <button
                type="button"
                onClick={() => {
                  onCloseMenu();
                  onOpenBooking();
                }}
                className="w-full min-h-[56px] px-5 rounded-[14px] bg-[#25D366] hover:bg-[#1EB858] text-white text-[18px] font-bold flex items-center justify-center gap-3 shadow-sm cursor-pointer transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6 shrink-0" />
                <span>Pesan lewat WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
