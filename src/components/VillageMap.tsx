import React, { useState } from 'react';
import { MapPin, Minus, Plus, RotateCcw } from 'lucide-react';

interface Landmark {
  id: string;
  name: string;
  detail: string;
  x: number;
  y: number;
  isMain?: boolean;
}

const LANDMARKS: Landmark[] = [
  {
    id: 'balai-desa',
    name: 'Balai Desa Lereng Asri (Titik Kumpul)',
    detail: 'Titik kedatangan, parkir bus & mobil, serta loket penyambutan tamu.',
    x: 52,
    y: 52,
    isMain: true,
  },
  {
    id: 'sawah-terasering',
    name: 'Sawah Terasering Pagi',
    detail: '10 menit jalan kaki melalui jalur pematang bambu.',
    x: 24,
    y: 38,
  },
  {
    id: 'kebun-petik',
    name: 'Kebun Petik Sayur & Jeruk',
    detail: '5 menit ke arah timur dari Balai Desa.',
    x: 74,
    y: 34,
  },
  {
    id: 'dapur-tungku',
    name: 'Dapur Tungku Mbah Sari',
    detail: 'Tempat sajian wedang jahe dan kelas masak tradisional.',
    x: 64,
    y: 68,
  },
  {
    id: 'curug-embun',
    name: 'Curug Embun Pagi',
    detail: '20 menit jalur teduh melewati rumpun bambu.',
    x: 20,
    y: 74,
  },
];

interface VillageMapProps {
  heightClass?: string;
  interactive?: boolean;
}

export const VillageMap: React.FC<VillageMapProps> = ({
  heightClass = 'h-60 md:h-72',
  interactive = true,
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [selectedLandmark, setSelectedLandmark] = useState<Landmark>(LANDMARKS[0]);

  const handleZoomIn = () => setZoom((prev) => Math.min(1.4, Number((prev + 0.15).toFixed(2))));
  const handleZoomOut = () => setZoom((prev) => Math.max(0.9, Number((prev - 0.15).toFixed(2))));
  const handleReset = () => {
    setZoom(1);
    setSelectedLandmark(LANDMARKS[0]);
  };

  return (
    <div
      className={`relative w-full ${heightClass} rounded-2xl overflow-hidden bg-[#E9EFE4] border border-[#8DB580]/40 select-none`}
      aria-label="Peta lokasi Desa Wisata Lereng Asri"
    >
      {/* Topographic Map Canvas */}
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out origin-center"
        style={{ transform: `scale(${zoom})` }}
      >
        <svg
          viewBox="0 0 800 480"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          {/* Base green terrain */}
          <rect width="800" height="480" fill="#E6EFE0" />

          {/* Contour elevation hills */}
          <path
            d="M-40,120 Q180,40 380,140 T840,90 L840,480 L-40,480 Z"
            fill="#DCE8D4"
          />
          <path
            d="M-40,260 Q220,180 460,290 T840,220 L840,480 L-40,480 Z"
            fill="#D0E1C5"
          />
          <path
            d="M-40,380 Q280,320 520,400 T840,350 L840,480 L-40,480 Z"
            fill="#C4D9B7"
          />

          {/* Terraced contour lines */}
          <path
            d="M40,90 C170,60 280,110 420,90 C560,70 670,115 770,85"
            fill="none"
            stroke="#8DB580"
            strokeWidth="2"
            strokeOpacity="0.45"
          />
          <path
            d="M20,210 C190,175 310,235 480,215 C620,195 700,245 790,210"
            fill="none"
            stroke="#8DB580"
            strokeWidth="2"
            strokeOpacity="0.45"
          />

          {/* Mountain river stream */}
          <path
            d="M110,480 C130,410 155,365 165,335 C180,295 220,260 265,245"
            fill="none"
            stroke="#73B3C8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeOpacity="0.65"
          />

          {/* Main asphalt access road from Jl. Raya Kopeng */}
          <path
            d="M800,320 C670,315 560,285 416,250 C310,225 180,200 0,140"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M800,320 C670,315 560,285 416,250 C310,225 180,200 0,140"
            fill="none"
            stroke="#D5CFC0"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            d="M800,320 C670,315 560,285 416,250 C310,225 180,200 0,140"
            fill="none"
            stroke="#FAF5EA"
            strokeWidth="2"
            strokeDasharray="10 10"
          />

          {/* Village side paths */}
          <path
            d="M416,250 C455,215 520,185 592,163"
            fill="none"
            stroke="#FAF5EA"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M416,250 C445,285 475,305 512,326"
            fill="none"
            stroke="#FAF5EA"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M416,250 C320,265 250,300 160,355"
            fill="none"
            stroke="#FAF5EA"
            strokeWidth="5"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />

          {/* Road direction labels */}
          <text
            x="640"
            y="292"
            fill="#2F6B3F"
            fontSize="13"
            fontWeight="700"
            fontFamily="Nunito Sans, sans-serif"
          >
            Jl. Raya Kopeng →
          </text>
          <text
            x="38"
            y="132"
            fill="#2F6B3F"
            fontSize="13"
            fontWeight="700"
            fontFamily="Nunito Sans, sans-serif"
          >
            ← Arah Salatiga / Semarang
          </text>
        </svg>

        {/* Landmark Pins */}
        {LANDMARKS.map((landmark) => {
          const isSelected = selectedLandmark.id === landmark.id;
          return (
            <button
              key={landmark.id}
              type="button"
              onClick={() => interactive && setSelectedLandmark(landmark)}
              style={{ left: `${landmark.x}%`, top: `${landmark.y}%` }}
              aria-label={landmark.name}
              className={`absolute -translate-x-1/2 -translate-y-full min-w-[48px] min-h-[48px] flex flex-col items-center justify-end cursor-pointer transition-transform ${
                isSelected ? 'z-20 scale-110' : 'z-10 hover:scale-105'
              }`}
            >
              <span
                className={`px-2.5 py-1 rounded-lg text-[12px] font-bold whitespace-nowrap shadow-sm mb-1 ${
                  landmark.isMain
                    ? 'bg-[#2F6B3F] text-white'
                    : isSelected
                    ? 'bg-[#D9822B] text-white'
                    : 'bg-white text-[#2B2A26] border border-[#8DB580]/40'
                }`}
              >
                {landmark.isMain ? 'Desa Lereng Asri' : landmark.name.split(' (')[0]}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center shadow-md border-2 border-white ${
                  landmark.isMain
                    ? 'bg-[#D9822B] text-white'
                    : isSelected
                    ? 'bg-[#2F6B3F] text-white'
                    : 'bg-[#8DB580] text-white'
                }`}
              >
                <MapPin className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Zoom Controls */}
      {interactive && (
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-2">
          <button
            type="button"
            onClick={handleZoomIn}
            aria-label="Perbesar peta"
            className="w-12 h-12 rounded-xl bg-white/95 border border-[#8DB580]/40 text-[#2F6B3F] flex items-center justify-center shadow-sm hover:bg-[#FAF5EA] cursor-pointer"
          >
            <Plus className="w-5 h-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={handleZoomOut}
            aria-label="Perkecil peta"
            className="w-12 h-12 rounded-xl bg-white/95 border border-[#8DB580]/40 text-[#2F6B3F] flex items-center justify-center shadow-sm hover:bg-[#FAF5EA] cursor-pointer"
          >
            <Minus className="w-5 h-5" strokeWidth={2.4} />
          </button>
          <button
            type="button"
            onClick={handleReset}
            aria-label="Pusatkan peta ke Balai Desa"
            className="w-12 h-12 rounded-xl bg-white/95 border border-[#8DB580]/40 text-[#2F6B3F] flex items-center justify-center shadow-sm hover:bg-[#FAF5EA] cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" strokeWidth={2.2} />
          </button>
        </div>
      )}

      {/* Selected Landmark Info Strip */}
      <div className="absolute bottom-3 left-3 right-3 sm:right-auto sm:max-w-sm z-20 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-[#8DB580]/30 shadow-sm">
        <p className="text-[14px] font-bold text-[#2F6B3F] leading-snug">
          {selectedLandmark.name}
        </p>
        <p className="text-[13px] text-[#2B2A26]/80 leading-snug mt-0.5">
          {selectedLandmark.detail}
        </p>
      </div>
    </div>
  );
};
