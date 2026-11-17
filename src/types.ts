export type ScreenId = 'home' | 'packages' | 'package-detail' | 'gallery' | 'location';

export type PackageDurationFilter = 'Semua' | '1 Hari' | '2 Hari 1 Malam';

export type GalleryCategory = 'Semua' | 'Pemandangan' | 'Kegiatan' | 'Kuliner' | 'Penginapan';

export interface DestinationItem {
  id: string;
  name: string;
  description: string;
  label: string;
  walkTime: string;
  image: string;
  alt: string;
  recommendedPackageId: string;
}

export interface ScheduleSlot {
  time: string;
  activity: string;
  note: string;
}

export interface TourPackage {
  id: string;
  name: string;
  duration: '1 Hari' | '2 Hari 1 Malam';
  durationLabel: string;
  pricePerPerson: number;
  priceFormatted: string;
  shortDescription: string;
  image: string;
  alt: string;
  highlights: [string, string, string];
  minParticipants: number;
  maxGroupNote: string;
  targetAudience: string;
  mealsIncluded: string;
  stayIncluded: string;
  schedule: ScheduleSlot[];
  included: string[];
  excluded: string[];
  cancellationPolicy: string[];
  whatToBring: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, 'Semua'>;
  image: string;
  alt: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface NearbyFacility {
  id: string;
  name: string;
  detail: string;
  distance: string;
}
