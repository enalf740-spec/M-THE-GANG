/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { TOUR_PACKAGES } from './data/villageData';
import { ScreenId, TourPackage } from './types';
import { TopBar } from './components/TopBar';
import { SiteFooter } from './components/SiteFooter';
import { BookingSheet } from './components/BookingSheet';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { HomeScreen } from './screens/HomeScreen';
import { PackagesScreen } from './screens/PackagesScreen';
import { PackageDetailScreen } from './screens/PackageDetailScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import { LocationScreen } from './screens/LocationScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [selectedPackage, setSelectedPackage] = useState<TourPackage>(
    TOUR_PACKAGES[0]
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingPackage, setBookingPackage] = useState<TourPackage | null>(null);
  const [galleryInitialPhotoId, setGalleryInitialPhotoId] = useState<string | null>(
    null
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentScreen, selectedPackage.id]);

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
  };

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setCurrentScreen('package-detail');
  };

  const handleOpenBooking = (pkg?: TourPackage) => {
    setBookingPackage(pkg || null);
    setBookingOpen(true);
  };

  const handleOpenGalleryPhoto = (photoId: string) => {
    setGalleryInitialPhotoId(photoId);
    setCurrentScreen('gallery');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF5EA] text-[#2B2A26]">
      <TopBar
        currentScreen={currentScreen}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
        onCloseMenu={() => setMenuOpen(false)}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1">
        {currentScreen === 'home' && (
          <HomeScreen
            onNavigate={handleNavigate}
            onSelectPackage={handleSelectPackage}
            onOpenBooking={handleOpenBooking}
            onOpenGalleryPhoto={handleOpenGalleryPhoto}
          />
        )}

        {currentScreen === 'packages' && (
          <PackagesScreen
            onSelectPackage={handleSelectPackage}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'package-detail' && (
          <PackageDetailScreen
            pkg={selectedPackage}
            onBack={() => handleNavigate('packages')}
            onOpenBooking={handleOpenBooking}
          />
        )}

        {currentScreen === 'gallery' && (
          <GalleryScreen
            initialPhotoId={galleryInitialPhotoId}
            onClearInitialPhoto={() => setGalleryInitialPhotoId(null)}
          />
        )}

        {currentScreen === 'location' && (
          <LocationScreen onOpenBooking={() => handleOpenBooking()} />
        )}
      </main>

      {currentScreen !== 'package-detail' && (
        <SiteFooter
          showClosingCta={currentScreen === 'home' || currentScreen === 'packages'}
          onOpenBooking={() => handleOpenBooking()}
          onNavigate={handleNavigate}
        />
      )}

      {/* Floating Round WhatsApp Button (56px) */}
      {currentScreen !== 'package-detail' && (
        <button
          type="button"
          onClick={() => handleOpenBooking()}
          aria-label="Pesan atau tanya lewat WhatsApp"
          className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 w-[56px] h-[56px] rounded-full bg-[#25D366] hover:bg-[#1EB858] text-white shadow-[0_6px_22px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer transition-transform active:scale-95"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </button>
      )}

      <BookingSheet
        isOpen={bookingOpen}
        initialPackage={bookingPackage}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
