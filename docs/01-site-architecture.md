# 01 — Arsitektur Situs & Navigasi Baru (LPK HATESE)

## A. Masalah struktural pada situs saat ini

Dari screenshot yang dilampirkan, ini bukan cuma soal "kurang cantik" — ada masalah struktur informasi:

1. **Halaman "Our Activities" kosong.** Isinya cuma 6 judul teks (Sosialisasi Siswa, Sosialisasi Orang Tua, Pra MCU, Pembelajaran, Ujian JFT & SSW, Interview) tanpa gambar, deskripsi, atau urutan visual apa pun. Ini halaman yang seharusnya paling membangun kepercayaan (bukti kegiatan nyata), tapi malah paling kosong.
2. **Carousel Career rusak.** Section "Career" di halaman Product & Career cuma menampilkan 1 kartu ("Food Service") padahal seharusnya menampilkan belasan bidang kerja (SSW). Slider/carousel-nya gagal render sisanya.
3. **"LP1" nongol di navigasi utama.** Ini jelas halaman landing page kampanye iklan (ada banner "PENTING", form pendaftaran, desain warna berbeda total — merah/navy/kuning vs navy/putih di halaman lain) yang harusnya *tidak pernah* jadi menu publik permanen. Ini bocoran halaman internal/testing ke navigasi produksi.
4. **Testimonials halaman = duplikat homepage + grid video berantakan.** 12 video ditumpuk 4x3 tanpa keseragaman rasio, ada kotak hitam (thumbnail gagal load), campur dengan gambar dekoratif sakura yang berulang tanpa pola jelas, native video player browser tampil apa adanya (tidak dibungkus UI).
5. **Error PHP terekspos ke publik** ("Trying to access array offset...") di *setiap* halaman. Ini bug WordPress/Elementor, tapi dampaknya ke persepsi: institusi yang mengelola visa & masa depan kerja orang terlihat tidak profesional dari baris pertama.
6. **Tentang Kami jadi satu section panjang di homepage** tanpa halaman sendiri — padahal untuk institusi yang menjual kepercayaan (LPK resmi, SK Kemenkumham), "Tentang Kami" pantas dapat halaman dan porsi bukti (legalitas, tim, fasilitas) yang lebih besar.
7. **Footer tidak konsisten antar halaman** — LP1 punya alamat lengkap + Google Maps + kontak, halaman lain tidak. Info krusial (alamat kantor, nomor WA) seharusnya ada di *semua* halaman, bukan cuma satu.
8. **Copy tahun tidak konsisten** — footer utama bilang "© 2024", LP1 bilang "Copyright © 2026". Detail kecil ini menurunkan kepercayaan saat orang scroll cepat.

Kesimpulan: masalahnya bukan cuma visual, tapi *arsitektur informasi* yang tidak direncanakan — halaman ditambah satu-satu tanpa peta situs.

---

## B. Sitemap baru

Struktur ini dipetakan berdasarkan *journey* calon siswa: sadar (aware) → percaya (trust) → paham program → lihat bukti → daftar.

```
/                       Beranda
├── /program            Program & Kelas (dulu "Product & Career", dipecah)
│   └── /program/[slug] Detail 1 kelas (Reguler, Online, Karyawan, Pemantapan JFT & SSW)
├── /karier              Bidang Kerja di Jepang (dulu section "Career" yang rusak)
│   └── /karier/[slug]  Detail 1 bidang kerja (mis. Food Service, Kaigo/Perawatan, Konstruksi, dst.)
├── /kegiatan            Kegiatan Kami (dulu "Our Activities", sekarang diisi konten nyata)
├── /kisah-alumni        Testimoni & Kisah Sukses (dulu "Testimonials")
├── /tentang             Tentang Kami (dipisah dari homepage jadi halaman sendiri)
├── /daftar              Formulir Pendaftaran / Konsultasi (CTA utama, satu halaman terpusat)
└── /faq                 (opsional, dipisah dari homepage agar homepage tidak terlalu panjang)
```

Landing page kampanye iklan (isi "LP1" sekarang) **dipindah keluar dari struktur situs utama**, jadi halaman standalone tanpa navigasi global — misalnya `/promo/kerja-jepang-2026` — yang dipakai khusus untuk traffic iklan (Meta Ads, Google Ads). Halaman promo ini boleh punya desain kampanye sendiri (urgency banner, form ringkas), tapi **tidak** didaftarkan ke menu utama dan **tidak** ditautkan dari halaman lain, supaya tidak membingungkan pengunjung organik yang mengharapkan pengalaman situs yang konsisten.

---

## C. Navigasi (header)

```
[Logo HATESE]     Beranda   Program   Karier di Jepang   Kegiatan   Kisah Alumni   Tentang Kami     [Konsultasi Sekarang →]
```

Aturan:
- Maksimal 6 item teks + 1 CTA tombol yang berbeda gaya (bukan link biasa) supaya "Konsultasi Sekarang" tetap jadi satu-satunya aksi utama yang menonjol di header — sekarang tombol WA merah muncul berkali-kali di body tapi tidak ada di header sama sekali.
- Di mobile: hamburger menu standar + tombol "Konsultasi Sekarang" tetap terlihat sebagai sticky bar bawah (bukan disembunyikan di hamburger), karena ini adalah *satu-satunya* konversi yang situs ini kejar.
- "FAQ" cukup jadi anchor link di footer, bukan item nav utama (isinya sudah bagus di homepage, jangan dipecah jadi halaman sendiri kecuali kontennya bertambah banyak).

## D. Footer (konsisten di semua halaman)

```
Kolom 1: Logo + tagline + deskripsi singkat 1 kalimat
Kolom 2: Sitemap ringkas (Program, Karier, Kegiatan, Kisah Alumni, Tentang Kami)
Kolom 3: Kontak — alamat lengkap, telepon/WA, email, jam operasional
Kolom 4: Peta lokasi kecil (embed) + ikon sosial media (IG, TikTok, FB — konsisten ikonnya, sekarang ada halaman yang pakai Twitter/X, ada yang TikTok, tidak sama)
Baris bawah: © [tahun berjalan otomatis] Hatese (Harapan Terang Sejahtera). Nomor SK Kemenkumham ditampilkan di sini sebagai penanda legalitas, bukan cuma disebutkan di paragraf "Tentang Kami".
```

Karena Astro adalah static site generator, footer taruh sebagai satu komponen (`Footer.astro`) yang di-*import* di semua layout — otomatis konsisten selamanya, tidak akan lagi ada halaman yang "ketinggalan" info kontak seperti sekarang.

## E. Catatan migrasi SEO

Situs lama sudah punya URL WordPress (kemungkinan `/testimonials/`, `/our-activities/`, dst. — index-kan dulu via Google Search Console sebelum migrasi). Saat pindah ke Astro:
1. Ekspor daftar URL yang ter-index dari Search Console.
2. Petakan 301 redirect dari URL lama → URL baru di atas (redirect ini diatur di level hosting/CDN, misalnya `vercel.json` atau `_redirects` kalau pakai Netlify/Cloudflare Pages).
3. Submit sitemap.xml baru (Astro bisa generate otomatis lewat `@astrojs/sitemap`) begitu domain live.
