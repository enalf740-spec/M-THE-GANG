import {
  DestinationItem,
  FaqItem,
  GalleryPhoto,
  NearbyFacility,
  TourPackage,
} from '../types';

export const VILLAGE_INFO = {
  brandShort: 'Lereng Asri',
  brandFull: 'Desa Wisata Lereng Asri',
  tagline:
    'Nikmati udara sejuk pegunungan, sawah berundak, kebun warga, dan masakan dapur kayu tradisional bersama keluarga.',
  address:
    'Dusun Krajan RT 02 / RW 04, Desa Lereng Asri, Kec. Kopeng, Kab. Semarang, Jawa Tengah 50774',
  replyHours: 'Setiap hari, pukul 07.00 – 20.00 WIB (balas cepat ±10 menit)',
  whatsappNumberDisplay: '+62 812-3456-7890',
  whatsappNumberRaw: '6281234567890',
  coordinates: {
    lat: -7.3142,
    lng: 110.4218,
  },
  googleMapsUrl: 'https://maps.google.com/?q=-7.3142,110.4218',
  heroImage: '/src/assets/images/hero_lereng_asri_1794888798504.jpg',
  heroAlt:
    'Lanskap sawah berundak hijau dan rumah warga Desa Wisata Lereng Asri diselimuti kabut tipis cahaya pagi',
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${VILLAGE_INFO.whatsappNumberRaw}?text=${encodeURIComponent(message)}`;
}

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'sawah-terasering',
    name: 'Sawah Terasering Pagi',
    description:
      'Menyusuri pematang bambu yang landai dan aman sambil menghirup udara segar berkabut di kaki gunung.',
    label: 'Cocok untuk keluarga',
    walkTime: '10 menit jalan santai',
    image: '/src/assets/images/dest_sawah_terasering_1794888799378.jpg',
    alt: 'Hamparan sawah berundak hijau dengan jembatan bambu dan petani bekerja di pagi hari',
    recommendedPackageId: 'jelajah-sehari',
  },
  {
    id: 'kebun-petik',
    name: 'Kebun Petik Sayur & Jeruk',
    description:
      'Belajar berkebun organik bersama petani lokal dan membawa pulang hasil panen segar pilihan sendiri.',
    label: 'Ramah anak & lansia',
    walkTime: '5 menit dari balai desa',
    image: '/src/assets/images/dest_kebun_petik_1794888799892.jpg',
    alt: 'Petani desa tersenyum ramah di kebun sayur organik dan pohon jeruk membawa keranjang bambu',
    recommendedPackageId: 'petik-kebun-dapur',
  },
  {
    id: 'dapur-tradisional',
    name: 'Dapur Tungku Mbah Sari',
    description:
      'Mencicipi jajanan pasar hangat, wedang jahe gula aren, dan kopi tubruk yang diseduh di atas tungku kayu.',
    label: 'Wisata kuliner desa',
    walkTime: '3 menit dari area parkir',
    image: '/src/assets/images/dest_dapur_tradisional_1794888800338.jpg',
    alt: 'Ibu warga desa tersenyum memasak jajanan tradisional di dapur tungku kayu bakar yang hangat',
    recommendedPackageId: 'petik-kebun-dapur',
  },
  {
    id: 'curug-embun',
    name: 'Curug Embun Pagi',
    description:
      'Aliran air pegunungan yang jernih dan dangkal di sela bebatuan berlumut, teduh untuk bersantai bersama rombongan.',
    label: 'Favorit anak muda',
    walkTime: '20 menit jalur teduh',
    image: '/src/assets/images/pemandangan_curug_asri_1794888802410.jpg',
    alt: 'Air terjun kecil dan aliran sungai jernih dikelilingi tanaman pakis hijau di lereng desa',
    recommendedPackageId: 'homestay-asri',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'jelajah-sehari',
    name: 'Jelajah Desa Sehari',
    duration: '1 Hari',
    durationLabel: '1 Hari (08.00 – 16.00 WIB)',
    pricePerPerson: 165000,
    priceFormatted: 'Rp 165.000',
    shortDescription:
      'Jalan pagi menyusuri sawah berundak, bermain di aliran air curug yang jernih, dan makan siang bersama di saung bambu.',
    image: '/src/assets/images/act_keluarga_panen_1794888801393.jpg',
    alt: 'Keluarga dan pemandu lokal berjalan santai menyusuri jalur hijau sawah berundak',
    highlights: [
      'Pemandu warga lokal berpengalaman & ramah anak',
      'Makan siang nasi liwet hangat di saung sawah',
      'Minuman sambutan wedang jahe & jajanan desa',
    ],
    minParticipants: 4,
    maxGroupNote: 'Bisa untuk rombongan hingga 45 orang',
    targetAudience: 'Keluarga & Rombongan Kantor',
    mealsIncluded: '1x Makan siang + 1x Kudapan pagi',
    stayIncluded: 'Tidak menginap',
    schedule: [
      {
        time: '08.00',
        activity: 'Penyambutan di Balai Desa & Wedang Hangat',
        note: 'Parkir kendaraan, perkenalan dengan pemandu warga, dan menikmati kudapan pagi.',
      },
      {
        time: '08.45',
        activity: 'Jalan Santai Menyusuri Sawah Terasering',
        note: 'Rute datar dan aman untuk anak-anak, mengenal sistem irigasi subak desa.',
      },
      {
        time: '10.30',
        activity: 'Singgah di Curug Embun Pagi',
        note: 'Bermain air jernih dan berfoto di jembatan bambu yang teduh.',
      },
      {
        time: '12.15',
        activity: 'Makan Siang Nasi Liwet di Saung Bambu',
        note: 'Sajian lauk rumahan di atas daun pisang sambil beristirahat.',
      },
      {
        time: '14.00',
        activity: 'Belajar Anyaman Bambu atau Menanam Bibit',
        note: 'Aktivitas santai bersama pengrajin lokal; hasil karya boleh dibawa pulang.',
      },
      {
        time: '15.45',
        activity: 'Penutupan & Belanja Oleh-Oleh Kebun',
        note: 'Singgah di lapak hasil bumi warga sebelum perjalanan pulang.',
      },
    ],
    included: [
      'Pemandu wisata warga setempat (1 pemandu per 8 orang)',
      'Tiket masuk seluruh kawasan sawah dan curug',
      '1x makan siang nasi liwet tradisional + air mineral',
      '1x wedang jahe/teh hangat dan jajanan pasar pagi',
      'Caping bambu pinjaman selama kegiatan',
      'Dokumentasi foto kegiatan (dikirim lewat WhatsApp)',
    ],
    excluded: [
      'Transportasi dari dan menuju Desa Lereng Asri',
      'Pembelian hasil kebun atau oleh-oleh pribadi',
      'Asuransi perjalanan pribadi',
    ],
    cancellationPolicy: [
      'Pembatalan 3 hari sebelum kunjungan: uang muka kembali 100%.',
      'Pembatalan 1–2 hari sebelum kunjungan: bebas ubah tanggal kunjungan hingga 60 hari ke depan.',
      'Jika hujan deras berkepanjangan saat hari H, kegiatan dialihkan ke pendopo desa dengan aktivitas masak dan kerajinan tanpa biaya tambahan.',
    ],
    whatToBring: [
      'Sepatu atau sandal gunung yang tidak licin',
      'Jaket tipis atau baju ganti untuk anak-anak',
      'Topi tambahan, botol minum pribadi, dan obat-obatan pribadi',
    ],
  },
  {
    id: 'petik-kebun-dapur',
    name: 'Petik Kebun & Dapur Desa',
    duration: '1 Hari',
    durationLabel: '1 Hari (07.30 – 15.30 WIB)',
    pricePerPerson: 195000,
    priceFormatted: 'Rp 195.000',
    shortDescription:
      'Memetik sayur organik dan jeruk manis langsung dari kebun petani, lalu memasaknya di dapur tungku kayu bersama ibu-ibu desa.',
    image: '/src/assets/images/dest_kebun_petik_1794888799892.jpg',
    alt: 'Petani lokal tersenyum memegang keranjang anyaman berisi sayur dan jeruk segar di kebun',
    highlights: [
      'Bawa pulang 1 keranjang sayur & 1 kg jeruk segar',
      'Kelas memasak di dapur tungku kayu bersama warga',
      'Makan siang prasmanan daun pisang hasil masakan sendiri',
    ],
    minParticipants: 2,
    maxGroupNote: 'Cocok untuk pasangan, keluarga kecil, atau arisan',
    targetAudience: 'Keluarga, Ibu-ibu & Pecinta Kuliner',
    mealsIncluded: '1x Makan siang + 2x Kudapan & Kopi/Teh',
    stayIncluded: 'Tidak menginap',
    schedule: [
      {
        time: '07.30',
        activity: 'Kopi Pagi & Penjelasan Kebun Organik',
        note: 'Berkumpul di teras Dapur Mbah Sari sambil mencicipi singkong rebus hangat.',
      },
      {
        time: '08.15',
        activity: 'Panen Sayur Organik & Petik Jeruk Manis',
        note: 'Didampingi petani desa, memetik sawi, wortel, tomat, dan jeruk keprok.',
      },
      {
        time: '10.15',
        activity: 'Sesi Memasak di Dapur Tungku Kayu',
        note: 'Meracik bumbu ulek tradisional, menggoreng tempe mendoan, dan menanak nasi liwet.',
      },
      {
        time: '12.15',
        activity: 'Makan Siang Bersama di Meja Bambu',
        note: 'Menikmati hasil masakan bersama keluarga dengan sambal terasi dan lalapan segar.',
      },
      {
        time: '14.00',
        activity: 'Membuat Jajanan Tradisional Getuk & Klepon',
        note: 'Aktivitas seru untuk anak-anak dan orang tua sebelum berkemas pulang.',
      },
      {
        time: '15.30',
        activity: 'Bungkus Oleh-Oleh Panen & Selesai',
        note: 'Setiap peserta membawa pulang hasil petikan kebun masing-masing.',
      },
    ],
    included: [
      'Pemandu petani dan pendamping dapur desa',
      'Keranjang petik pinjaman & 1 kg jeruk + ikat sayur bawa pulang',
      'Seluruh bahan masak dan perlengkapan dapur tungku',
      'Makan siang prasmanan, kopi tubruk/teh serai, dan kudapan sore',
      'Resep masakan desa dalam lembar cetak rapi',
    ],
    excluded: [
      'Transportasi pulang-pergi ke lokasi desa',
      'Tambahan petik buah di luar jatah 1 kg per orang',
      'Keperluan pribadi di warung warga',
    ],
    cancellationPolicy: [
      'Pembatalan minimal H-3 mendapat pengembalian penuh tanpa potongan.',
      'Perubahan jadwal (reschedule) gratis jika diinformasikan maksimal H-1 pukul 15.00 WIB.',
      'Dapur tungku beratap penuh sehingga kegiatan memasak tetap berjalan nyaman meski gerimis.',
    ],
    whatToBring: [
      'Pakaian santai yang nyaman dan tidak mudah kotor',
      'Tas kain tambahan untuk membawa hasil panen pulang',
      'Alas kaki tertutup atau sandal jepit yang nyaman dipakai di kebun',
    ],
  },
  {
    id: 'homestay-asri',
    name: 'Menginap di Homestay Asri',
    duration: '2 Hari 1 Malam',
    durationLabel: '2 Hari 1 Malam (Check-in 13.00 – Check-out 11.00)',
    pricePerPerson: 420000,
    priceFormatted: 'Rp 420.000',
    shortDescription:
      'Rasakan tenangnya malam pegunungan di rumah kayu warga yang bersih dan hangat, lengkap dengan makan malam, api unggun, dan jelajah pagi.',
    image: '/src/assets/images/pkg_homestay_desa_1794888801210.jpg',
    alt: 'Rumah kayu homestay desa dengan teras bersih, tanaman hijau, dan latar perbukitan asri',
    highlights: [
      'Menginap 1 malam di homestay kayu keluarga (kamar mandi dalam)',
      '3x makan masakan rumahan hangat & bakar jagung malam',
      'Jalan pagi kabut terasering & petik sayur segar',
    ],
    minParticipants: 2,
    maxGroupNote: 'Tersedia 8 unit rumah warga (kapasitas 30 tamu)',
    targetAudience: 'Keluarga & Anak Muda Pencari Ketenangan',
    mealsIncluded: '3x Makan utama + Bakar jagung malam + Teh/Kopi bebas',
    stayIncluded: '1 Malam di Homestay Kayu Warga',
    schedule: [
      {
        time: 'Hari 1 · 13.00',
        activity: 'Check-in Homestay & Sambutan Tuan Rumah',
        note: 'Menempati kamar bersih berseprai katun segar, beristirahat di beranda kayu.',
      },
      {
        time: 'Hari 1 · 15.30',
        activity: 'Sore Santai di Kebun & Dapur Teh',
        note: 'Melihat proses panen sore dan mencicipi gorengan hangat di beranda.',
      },
      {
        time: 'Hari 1 · 18.30',
        activity: 'Makan Malam Rumahan & Api Unggun Hangat',
        note: 'Sajian sop sayur lereng, ayam kampung goreng, bakar jagung manis, dan obrolan santai.',
      },
      {
        time: 'Hari 2 · 06.00',
        activity: 'Menyambut Matahari Terbit & Jalan Pagi Kabut',
        note: 'Berjalan di jalur terasering saat kabut pagi mulai terangkat di lereng gunung.',
      },
      {
        time: 'Hari 2 · 08.00',
        activity: 'Sarapan Hangat & Petik Sayur Segar',
        note: 'Sarapan nasi goreng kampung atau bubur hangat, lalu memetik oleh-oleh kebun.',
      },
      {
        time: 'Hari 2 · 11.00',
        activity: 'Berkemas & Check-out Homestay',
        note: 'Pamitan dengan keluarga tuan rumah dan foto kenang-kenangan.',
      },
    ],
    included: [
      'Kamar menginap 1 malam di homestay warga (air hangat, handuk bersih, selimut tebal)',
      '3x makan utama (makan malam, sarapan, makan siang awal/akhir) & camilan malam',
      'Pemandu jalan pagi terasering dan aktivitas petik kebun',
      'Kopi, teh, dan air mineral isi ulang sepuasnya di homestay',
      'Area parkir aman bermalam di halaman balai desa',
    ],
    excluded: [
      'Transportasi menuju desa dan kembali ke kota asal',
      'Pengeluaran pribadi di luar jadwal paket',
      'Permintaan kamar tambahan tunggal di luar kapasitas standar (2–3 orang/kamar)',
    ],
    cancellationPolicy: [
      'Pembatalan maksimal 5 hari sebelum tanggal menginap: uang muka kembali 100%.',
      'Pembatalan 2–4 hari sebelumnya: dapat dijadwalkan ulang satu kali hingga 3 bulan.',
      'Pembatalan kurang dari 24 jam atau tidak hadir: uang muka tidak dapat dikembalikan.',
    ],
    whatToBring: [
      'Jaket tebal atau sweter hangat (suhu malam sekitar 16–19 °C)',
      'Sandal untuk di dalam rumah & sepatu olahraga untuk jalan pagi',
      'Perlengkapan mandi pribadi tambahan dan obat-obatan rutin',
    ],
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'Mentari Pagi di Lereng Asri',
    caption:
      'Kabut tipis pagi hari menyelimuti lembah sawah berundak sebelum pukul tujuh pagi.',
    category: 'Pemandangan',
    image: '/src/assets/images/hero_lereng_asri_1794888798504.jpg',
    alt: 'Pemandangan desa lereng gunung dengan kabut pagi dan cahaya matahari terbit keemasan',
  },
  {
    id: 'gal-2',
    title: 'Pematang Bambu Sawah Terasering',
    caption:
      'Jalur jalan kaki berlantai bambu yang aman dilalui anak-anak dan orang tua.',
    category: 'Pemandangan',
    image: '/src/assets/images/dest_sawah_terasering_1794888799378.jpg',
    alt: 'Sawah terasering hijau bertingkat dengan jalur bambu dan petani di pagi hari',
  },
  {
    id: 'gal-3',
    title: 'Senyum Petani di Kebun Organik',
    caption:
      'Pak Darmo dan Bu Wati siap menemani wisatawan memetik sayur segar bebas pestisida.',
    category: 'Kegiatan',
    image: '/src/assets/images/dest_kebun_petik_1794888799892.jpg',
    alt: 'Petani desa tersenyum memegang keranjang anyaman bambu penuh sayuran dan jeruk',
  },
  {
    id: 'gal-4',
    title: 'Hangatnya Dapur Tungku Kayu',
    caption:
      'Aroma kayu bakar dan rebusan wedang jahe menyambut tamu yang datang di pagi hari.',
    category: 'Kuliner',
    image: '/src/assets/images/dest_dapur_tradisional_1794888800338.jpg',
    alt: 'Ibu warga desa memasak di atas tungku kayu tradisional dengan senyum hangat',
  },
  {
    id: 'gal-5',
    title: 'Beranda Homestay Rumah Kayu',
    caption:
      'Teras kayu yang teduh dan bersih untuk bersantai menikmati teh sore bersama keluarga.',
    category: 'Penginapan',
    image: '/src/assets/images/pkg_homestay_desa_1794888801210.jpg',
    alt: 'Rumah kayu homestay desa berteras bersih dikelilingi tanaman pakis hijau',
  },
  {
    id: 'gal-6',
    title: 'Jalan Santai Bersama Pemandu Lokal',
    caption:
      'Keluarga berjalan santai di jalur kebun sambil mendengar cerita sejarah desa.',
    category: 'Kegiatan',
    image: '/src/assets/images/act_keluarga_panen_1794888801393.jpg',
    alt: 'Keluarga bertopi anyaman berjalan santai bersama pemandu desa di jalur bukit hijau',
  },
  {
    id: 'gal-7',
    title: 'Sajian Nasi Liwet Daun Pisang',
    caption:
      'Makan siang bersama di atas anyaman bambu dengan tempe bacem, lalapan kebun, dan sambal terasi.',
    category: 'Kuliner',
    image: '/src/assets/images/kuliner_nasi_liwet_1794888801819.jpg',
    alt: 'Hidangan nasi liwet tradisional beralas daun pisang dengan lauk lengkap di meja bambu',
  },
  {
    id: 'gal-8',
    title: 'Kesegaran Air Curug Embun Pagi',
    caption:
      'Sumber mata air pegunungan yang jernih, dangkal, dan sejuk sepanjang tahun.',
    category: 'Pemandangan',
    image: '/src/assets/images/pemandangan_curug_asri_1794888802410.jpg',
    alt: 'Aliran air terjun kecil yang jernih di sela batu berlumut dan hutan pakis hijau',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-bayar',
    question: 'Bagaimana cara memesan dan melakukan pembayaran?',
    answer:
      'Cukup klik tombol WhatsApp, sebutkan tanggal dan jumlah peserta. Setelah jadwal dikonfirmasi pengelola, Anda cukup transfer uang muka (DP) 30% ke rekening resmi BUMDes Lereng Asri, dan pelunasan dilakukan saat tiba di desa.',
  },
  {
    id: 'faq-anak',
    question: 'Apakah ada potongan harga untuk anak-anak?',
    answer:
      'Anak usia di bawah 4 tahun gratis (mengikuti porsi orang tua). Anak usia 4–10 tahun mendapat potongan 30% dari harga paket dewasa, baik untuk paket 1 hari maupun menginap di homestay.',
  },
  {
    id: 'faq-hujan',
    question: 'Bagaimana jika hari kunjungan turun hujan?',
    answer:
      'Kami selalu menyiapkan jas hujan poncho gratis untuk setiap tamu. Jika hujan turun deras, kegiatan luar ruang akan dialihkan ke pendopo desa dan dapur tradisional (membuat jajanan, meracik wedang, dan anyaman bambu) tanpa biaya tambahan.',
  },
  {
    id: 'faq-kendaraan',
    question: 'Apakah jalan menuju desa bisa dilalui bus atau mobil keluarga?',
    answer:
      'Jalan sudah beraspal mulus dan cukup lebar untuk mobil keluarga maupun bus pariwisata medium (hingga 35 kursi). Area parkir berada tepat di sebelah Balai Desa yang landai dan dijaga petugas warga.',
  },
];

export const NEARBY_FACILITIES: NearbyFacility[] = [
  {
    id: 'fac-parkir',
    name: 'Area Parkir Luas (Mobil & Bus)',
    detail: 'Lahan datar beraspal aman dijaga petugas karang taruna, muat 25 mobil atau 4 bus medium.',
    distance: 'Tepat di titik kedatangan',
  },
  {
    id: 'fac-toilet',
    name: 'Toilet & Kamar Bilas Bersih',
    detail: '6 bilik bersih terpisah pria dan wanita dengan pasokan air pegunungan yang lancar.',
    distance: '20 meter dari area parkir',
  },
  {
    id: 'fac-mushola',
    name: 'Mushola Al-Ikhlas',
    detail: 'Tempat ibadah tenang dan bersih lengkap dengan tempat wudhu, mukena, dan sajadah.',
    distance: '35 meter dari balai desa',
  },
  {
    id: 'fac-warung',
    name: 'Warung & Lapak Warga',
    detail: 'Menjual kopi hangat, mie rebus, camilan lokal, serta sayuran segar hasil kebun warga.',
    distance: '50 meter di depan balai desa',
  },
];

export function formatRupiah(amount: number): string {
  return 'Rp ' + amount.toLocaleString('id-ID');
}
