# 04 — Master Prompt untuk AI Builder (Vibecoding)

Copy seluruh isi di bawah ini (di antara garis `=====`) sebagai satu prompt ke AI coding assistant (Claude Code, Cursor, dsb.) yang punya akses ke ketiga file lain (`01-site-architecture.md`, `02-design-system.md`, `03-page-blueprints.md`). Taruh keempat file ini dalam satu folder `/docs` di root proyek sebelum mulai, supaya AI builder bisa membacanya sebagai referensi sepanjang proses membangun.

=====

Kamu adalah frontend engineer sekaligus design lead yang membangun ulang website company profile **LPK HATESE (Harapan Terang Sejahtera)** — lembaga pelatihan kerja yang menyalurkan tenaga kerja Indonesia ke Jepang lewat jalur sertifikasi JFT-A2/JLPT N4 dan SSW (Specified Skilled Worker).

Sebelum menulis kode apa pun, baca dan ikuti tiga dokumen referensi berikut secara utuh (ada di folder `/docs`):
- `01-site-architecture.md` — sitemap, navigasi, dan struktur URL yang wajib diikuti persis.
- `02-design-system.md` — token warna, tipografi, komponen, dan aturan motion. Ini adalah *sumber kebenaran visual*, jangan menyimpang dari palet dan tipografi yang sudah ditentukan di sana.
- `03-page-blueprints.md` — layout tiap halaman dan copywriting final berbahasa Indonesia yang harus dipakai apa adanya (bukan Lorem Ipsum, bukan placeholder).

## Tech stack

- **Astro** (versi terbaru, output static) sebagai framework utama.
- **Tailwind CSS** untuk styling, dengan `tailwind.config.mjs` diisi persis sesuai token warna & font di `02-design-system.md` (jangan pakai warna Tailwind default seperti `blue-500` atau `red-500` di komponen — selalu pakai token custom: `indigo`, `vermillion`, `paper`, `ink`, `gold`, `mist`, `success`).
- **Motion One** (ringan, native Web Animations API) untuk animasi yang disebutkan di bagian "Motion & interaksi" — jangan install React/Vue/Framer Motion penuh hanya demi animasi.
- Gunakan **Alpine.js** (via CDN atau `@astrojs/alpinejs`) khusus untuk interaksi client-side ringan: filter chip kartu karier, tab kategori FAQ, dan carousel/modal video testimoni. Jangan pakai React kecuali benar-benar diperlukan untuk state kompleks.
- `@astrojs/sitemap` untuk sitemap.xml otomatis, karena situs ini butuh SEO yang baik (alasan utama migrasi dari WordPress).
- Font dari Google Fonts: `Source Serif 4` dan `IBM Plex Sans` (+ `IBM Plex Sans JP` untuk potongan teks berbahasa Jepang seperti "mensetsu" bila ditulis dalam aksara Jepang). Muat via `@fontsource` package, bukan `<link>` ke CDN Google Fonts langsung, supaya lebih cepat dan tidak bergantung koneksi eksternal saat build.

## Struktur folder proyek

```
src/
├── content/
│   ├── programs/          # 1 file .md per kelas (Reguler, Online, Karyawan, Pemantapan JFT & SSW)
│   ├── careers/           # 1 file .md per bidang kerja SSW (14 entri sesuai 03-page-blueprints.md)
│   ├── activities/        # 1 file .md per kegiatan (Sosialisasi Siswa, Pra MCU, dst.)
│   └── testimonials/      # 1 file .md per testimoni, dengan frontmatter: nama, kota, perusahaan, video_url (opsional), foto (opsional)
├── layouts/
│   └── BaseLayout.astro   # head, Header, Footer, meta SEO per halaman
├── components/
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Button.astro       # variant: primary | secondary
│   ├── CareerTicketCard.astro
│   ├── ProgramCard.astro
│   ├── JourneyStepper.astro
│   ├── TestimonialCard.astro
│   ├── VideoCarousel.astro   # + modal lightbox internal
│   ├── FaqAccordion.astro
│   └── StatBadge.astro
├── pages/
│   ├── index.astro
│   ├── program/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── karier/
│   │   ├── index.astro
│   │   └── [slug].astro
│   ├── kegiatan.astro
│   ├── kisah-alumni.astro
│   ├── tentang.astro
│   ├── daftar.astro
│   └── faq.astro
└── styles/
    └── global.css          # @tailwind base/components/utilities + font-face lokal
```

Gunakan **Astro Content Collections** (`src/content/config.ts`) dengan schema Zod untuk `programs`, `careers`, `activities`, `testimonials` — ini membuat konten mudah diedit tim non-teknis lewat file markdown tanpa menyentuh komponen, dan menyiapkan situs untuk kemungkinan pindah ke headless CMS (mis. Astro + Keystatic/Tina) di masa depan.

## Urutan pengerjaan

1. Setup project, `tailwind.config.mjs`, font lokal, dan `global.css` sesuai token di `02-design-system.md`.
2. Bangun `BaseLayout.astro`, `Header.astro`, `Footer.astro` — konsisten di semua halaman (ini memperbaiki masalah #7 di `01-site-architecture.md`: footer tidak konsisten di situs lama).
3. Bangun komponen inti satu per satu: `Button`, `ProgramCard`, `CareerTicketCard`, `JourneyStepper`, `TestimonialCard`, `VideoCarousel`, `FaqAccordion`.
4. Bangun halaman sesuai urutan prioritas bisnis: `index.astro` → `karier/` (perbaikan carousel yang rusak di situs lama, prioritas tinggi) → `kegiatan.astro` (halaman kosong, prioritas tinggi) → `kisah-alumni.astro` → `program/` → `tentang.astro` → `daftar.astro` → `faq.astro`.
5. Isi seluruh 14 entri `content/careers/` dan 6 entri `content/activities/` — jangan biarkan ada satupun yang kosong atau "coming soon" tanpa placeholder yang jelas ("Detail bidang ini sedang disiapkan, hubungi kami untuk info terbaru" — bukan section kosong seperti bug di situs lama).
6. Tambahkan animasi sesuai bagian E di `02-design-system.md` — hanya di titik yang disebutkan (hero load, stepper on-scroll, hover kartu, modal video). Jangan tambahkan fade-in di setiap section sebagai default.
7. Pasang `@astrojs/sitemap`, `robots.txt`, meta tag Open Graph per halaman (judul & deskripsi unik, bukan disalin identik di semua halaman seperti kemungkinan besar terjadi di situs WordPress lama).
8. Uji responsif di breakpoint mobile (375px), tablet (768px), desktop (1280px) — terutama `CareerTicketCard` grid dan `VideoCarousel`, karena ini dua komponen yang paling rusak di versi lama.
9. Uji `prefers-reduced-motion` dan keyboard navigation (tab order, focus ring `gold`) di modal video dan accordion FAQ.

## Batasan & larangan eksplisit

- **Jangan** membuat halaman atau komponen bernama "LP1" atau menautkannya ke navigasi utama — landing page kampanye adalah proyek terpisah di luar scope situs utama (lihat bagian B di `01-site-architecture.md`).
- **Jangan** memakai kartu rounded seragam dengan shadow abu-abu difus di semua tempat, eyebrow label ALL CAPS di atas judul section, atau badge angka 01/02/03 di section yang bukan urutan proses (hanya stepper "Perjalanan 3 Bulan" yang boleh bernomor).
- **Jangan** memakai warna Tailwind default (`blue-600`, `red-500`, dst.) — semua warna harus dari token custom di `02-design-system.md`.
- **Jangan** menyalin foto stok generik yang tidak relevan dengan konten (kimono di hero kelas kerja pabrik, pasangan berhelm oranye untuk halaman harga) — beri komentar `<!-- TODO: ganti dengan foto asli siswa/alumni -->` di tempat yang butuh foto asli dari tim HATESE, jangan diam-diam dibiarkan pakai foto stok yang tidak relevan.
- **Jangan** menampilkan error/warning teknis apa pun ke pengguna akhir (build Astro harus bersih — ini memperbaiki bug PHP warning yang selama ini bocor ke publik di setiap halaman situs lama).
- Semua copywriting memakai teks final dari `03-page-blueprints.md` — tandai dengan komentar mana angka yang masih perlu diverifikasi ke tim HATESE (kuota, gaji, jumlah alumni) sebelum go-live.

## Definisi selesai (definition of done)

- Build Astro (`astro build`) sukses tanpa warning.
- Skor Lighthouse (mobile) ≥ 90 di Performance, Accessibility, SEO, Best Practices.
- Tidak ada halaman kosong — setiap section di `03-page-blueprints.md` terisi konten dan minimal 1 gambar/placeholder yang jelas.
- Navigasi, footer, dan warna/tipografi konsisten 100% di seluruh halaman.
- `/karier` menampilkan seluruh entri bidang kerja (bukan cuma 1) dengan filter berfungsi.
- Video testimoni terbuka dalam modal lightbox, bukan native player mentah, dan bisa dinavigasi dengan keyboard.

=====

**Tips pemakaian:** kalau AI builder yang kamu pakai membangun secara bertahap, minta dia mengerjakan satu section dari daftar "Urutan pengerjaan" per giliran chat, lalu review hasilnya (screenshot/preview) sebelum lanjut ke section berikutnya — ini menghindari AI membangun 10 halaman sekaligus dengan asumsi yang salah lalu harus dirombak ulang semua.
