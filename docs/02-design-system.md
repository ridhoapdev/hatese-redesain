# 02 — Design System: HATESE Redesign

## A. Konsep dasar (kenapa arah ini, bukan template generik)

HATESE menjembatani Indonesia dan Jepang lewat jalur kerja resmi (sertifikasi bahasa JFT-A2/JLPT N4, status SSW). Ini bukan brand lifestyle atau SaaS — ini institusi yang menjual **kepercayaan dan kepastian administratif** (SK Kemenkumham, sertifikat, dana talangan, kontrak kerja). Arah visualnya harus terasa seperti dokumen resmi yang dipercaya (paspor, tiket keberangkatan, sertifikat kelulusan) tapi tetap hangat dan memotivasi — karena audiensnya anak muda usia kerja (18-33 tahun) yang sedang menimbang masa depan.

Dua dunia yang dijembatani (Indonesia & Jepang) jadi sumber palet dan tipografi — bukan skema warna generik SaaS (biru-ungu gradient) atau tema hangat krem+terracotta yang sudah jadi default AI.

**Dihindari secara sadar:** eyebrow label ALL CAPS di atas tiap judul, kartu rounded seragam dengan shadow abu-abu lembut yang sama di semua tempat, badge "01 / 02 / 03" untuk konten yang bukan urutan (kartu fitur/keunggulan bukan sequence — beda dengan tahapan program yang memang sequence dan boleh pakai stepper).

---

## B. Palet warna

| Token | Hex | Peran |
|---|---|---|
| `ink` (Sumi) | `#1C2029` | Teks utama, bukan hitam pekat — meniru tinta sumi Jepang |
| `indigo` (Aizome) | `#1F3A63` | Warna brand primer — header, tombol sekunder, latar section gelap |
| `indigo-deep` | `#142A49` | Hover/aktif state dari indigo, latar footer |
| `paper` (Washi) | `#F5F3EC` | Latar utama — putih kertas, bukan krem hangat khas AI |
| `vermillion` (Shu-iro) | `#D2472A` | Aksen & CTA utama — warna torii gate, dipakai *hanya* untuk aksi (tombol, link penting), bukan dekorasi |
| `gold` (Kuchinashi) | `#E3A93F` | Aksen sekunder — badge "Baru", highlight pencapaian/statistik |
| `mist` | `#DEDDD3` | Border, divider, latar kartu netral |
| `success` | `#3E7A57` | Status positif (lolos ujian, diterima kerja) — hijau teh, bukan hijau neon |

Tailwind config (`tailwind.config.mjs`):

```js
colors: {
  ink: '#1C2029',
  indigo: { DEFAULT: '#1F3A63', deep: '#142A49' },
  paper: '#F5F3EC',
  vermillion: '#D2472A',
  gold: '#E3A93F',
  mist: '#DEDDD3',
  success: '#3E7A57',
}
```

Aturan pemakaian: `paper` untuk 90% latar. `indigo` untuk section yang perlu terasa "resmi/berat" (Tentang Kami, hero). `vermillion` **hanya** untuk CTA dan penanda status aktif — kalau semua tombol jadi vermillion, dia kehilangan makna sebagai penanda aksi utama.

---

## C. Tipografi

- **Display / judul:** `Source Serif 4` (serif tegas, terasa seperti judul sertifikat/dokumen resmi — bukan serif hangat editorial seperti Fraunces/Playfair yang sudah jadi default AI).
- **Body & UI:** `IBM Plex Sans` — dipilih bukan sembarangan: keluarga Plex punya varian `Plex Sans JP` yang mendukung aksara Jepang dengan metrik yang selaras. Karena situs ini kadang perlu menampilkan istilah Jepang (JFT, SSW, nama kota di Jepang di testimoni), satu keluarga font yang konsisten di dua aksara adalah pilihan yang berakar dari kebutuhan nyata, bukan tren.

Skala tipografi (rasio ~1.25, dasar 16px):

| Level | Ukuran | Font | Pemakaian |
|---|---|---|---|
| Display XL | 56px / 1.05 | Source Serif 4, weight 600 | Headline hero |
| Display L | 40px / 1.1 | Source Serif 4, weight 600 | Judul section |
| H3 | 28px / 1.2 | Source Serif 4, weight 500 | Judul kartu besar |
| Body L | 18px / 1.6 | IBM Plex Sans, weight 400 | Paragraf pembuka section |
| Body | 16px / 1.6 | IBM Plex Sans, weight 400 | Teks umum |
| Label | 14px / 1.4 | IBM Plex Sans, weight 500 | Caption, meta info (sentence case, bukan ALL CAPS) |

Lebar baris teks dibatasi `max-w-[68ch]` untuk paragraf panjang (Tentang Kami) — situs lama membiarkan paragraf melebar penuh layar di beberapa breakpoint.

---

## D. Komponen UI

### 1. Tombol
- **Primer** (`vermillion` solid, teks putih, radius 8px — bukan pill 999px yang generik): dipakai untuk "Konsultasi Sekarang", "Daftar Sekarang".
- **Sekunder** (`indigo` outline 1.5px, teks indigo, latar transparan → saat hover, latar terisi `indigo` teks putih dengan transisi 150ms): dipakai untuk "Lihat Detail Program".
- Hover state tombol primer: sedikit gelapkan vermillion (`#B93B21`) + `translateY(-1px)`, bukan scale-up berlebihan.
- Semua tombol berlabel aksi konkret ("Cek Jadwal Kelas", bukan "Submit" atau "Klik Disini").

### 2. Kartu Program/Kelas
Radius 12px, border 1px `mist` (bukan shadow abu-abu difus di semua kartu — border tipis lebih terasa "presisi dokumen" dibanding shadow lembut generik). Saat hover: border berubah jadi `indigo`, muncul garis aksen vermillion 3px di sisi kiri kartu (bukan animasi bounce/scale).

### 3. Kartu Karier — gaya "boarding pass"
Ini jawaban untuk masalah "Career 14 program hanya tampil 1". Setiap bidang kerja (Food Service, Konstruksi, Perawatan/Kaigo, Manufaktur, Perhotelan, dll.) ditampilkan sebagai kartu bergaya tiket keberangkatan:

```
┌───────────────────────────────┬╌╌╌┐
│  🍜  FOOD SERVICE               ┊   │  ← perforasi vertikal titik-titik
│  Bidang: Kuliner & Restoran      ┊   │     memisahkan info & "stub"
│  Kuota terbuka · Gaji ¥180-220rb ┊ ➜ │  ← stub berisi ikon panah "lihat detail"
└───────────────────────────────┴╌╌╌┘
```
- Grid responsif: 3 kolom desktop, 2 tablet, 1 mobile — bukan carousel/slider (yang justru gagal di situs lama). Ditambah filter chip di atas grid: "Semua", "Manufaktur", "Jasa", "Perawatan", "Konstruksi", "Pertanian & Perikanan" — filter di sisi klien pakai Alpine.js/vanilla JS ringan, tanpa reload halaman.
- Filter chip aktif: latar `indigo`, teks putih; nonaktif: border `mist`, teks `ink`.

### 4. Timeline / Stepper — perjalanan 3 bulan menuju Jepang
Konten ini **memang** sequential (Pendaftaran → Kelas Intensif → Ujian JFT/SSW → Interview/Mensetsu → Keberangkatan), jadi stepper bernomor di sini justru tepat guna (beda dengan kartu fitur di section lain yang tidak boleh diberi angka 01/02/03 tanpa alasan).

```
①────────②────────③────────④────────⑤
Daftar   Kelas    Ujian    Interview  Berangkat
         Intensif  JFT/SSW  Mensetsu   ke Jepang
```
Desktop: garis horizontal dengan titik yang membesar saat section itu di-scroll ke viewport (progress terasa hidup, motion terikat scroll — bukan animasi acak). Mobile: berubah jadi vertikal.

### 5. Testimoni Video — jawaban untuk grid 12 video yang berantakan
Ganti grid 4×3 mentah dengan:
- **Carousel horizontal** (bukan grid penuh) berisi kartu video rasio 9:16 seragam (sesuai footage asli), tiap kartu: thumbnail poster (bukan kotak hitam kosong), nama + kota Jepang tempat bekerja, badge perusahaan, ikon play bulat vermillion di tengah.
- Klik kartu → buka **modal lightbox** (latar gelap semi-transparan `rgba(20,26,41,.85)`, video autoplay dengan kontrol custom minimalis, tombol next/prev di kiri-kanan modal, tombol close pojok kanan atas). Ini menghilangkan native browser video player yang terlihat mentah di situs lama.
- Filter di atas carousel: "Semua", "Berdasarkan Bidang Kerja", "Berdasarkan Kota" — dropdown ringan, bukan filter permanen yang makan tempat.
- Testimoni teks (bukan video) tetap dalam kartu terpisah di atas carousel video, dengan foto profil placeholder yang **konsisten** (kalau foto asli belum ada, pakai inisial nama dalam lingkaran berwarna indigo — jangan biarkan lingkaran kosong seperti sekarang).

### 6. Halaman Kegiatan (dulu kosong)
Tiap kegiatan (Sosialisasi Siswa, Sosialisasi Orang Tua, Pra MCU, Pembelajaran, Ujian JFT & SSW, Interview) jadi **kartu editorial** bergantian kiri-kanan (gambar—teks, teks—gambar) berisi: 1 foto dokumentasi asli, judul kegiatan, deskripsi 2-3 kalimat tentang apa yang terjadi & kenapa penting bagi calon siswa, dan opsional 1 kutipan singkat dari peserta. Ini mengubah halaman dari daftar judul kosong menjadi bukti sosial yang membangun kepercayaan.

### 7. Accordion FAQ
Radius 8px, hanya 1 item terbuka default (bukan yang pertama otomatis terbuka dan mengganggu ritme scroll seperti sekarang) — biarkan semua tertutup di awal, ikon `+`/`−` berputar 45° saat toggle dengan transisi 200ms.

---

## E. Motion & interaksi (aturan, bukan hiasan)

Prinsip: **satu momen animasi yang diorkestrasi lebih baik dari efek fade-in di setiap section.** Situs lama nyaris tanpa motion sama sekali (statis, terasa seperti brosur PDF) — solusinya bukan menambah fade-up di semua section (itu justru jadi tell AI-generated berikutnya), tapi memilih 2-3 momen yang benar-benar berarti:

1. **Hero load:** satu sequence singkat saat pertama kali halaman dibuka — headline muncul, lalu foto hero, lalu tombol CTA (staggered ringan, total < 800ms, sekali saja, tidak berulang).
2. **Stepper perjalanan 3 bulan:** titik progress terisi seiring scroll (motion yang menjawab aksi user — scroll — bukan motion acak).
3. **Hover kartu program/karier:** transisi border + garis aksen (150ms), bukan scale/shadow besar-besaran.
4. **Modal video testimoni:** transisi fade + scale-in 200ms saat dibuka, respect `prefers-reduced-motion` (matikan semua transisi non-esensial untuk user yang mengaktifkannya).

Library yang cukup untuk Astro tanpa framework client-side berat: **Motion One** (ringan, native Web Animations API) atau native **View Transitions API** Astro (`<ClientRouter />`) untuk transisi antar halaman. Hindari menambahkan React/Framer Motion penuh hanya demi animasi — situs ini seharusnya tetap ringan (itu alasan utama pindah ke Astro).

---

## F. Aksesibilitas & kualitas dasar

- Kontras teks `ink` di atas `paper` = rasio ~14:1 (jauh di atas AA).
- Semua tombol & link punya `focus-visible` ring 2px warna `gold` (bukan menghilangkan outline default tanpa pengganti).
- Video testimoni: sediakan `<track>` teks/caption bila memungkinkan, atau minimal transkrip ringkas di bawah video untuk aksesibilitas dan SEO.
- Semua gambar strok (foto siswa, dokumentasi kegiatan) wajib `alt` deskriptif — situs lama kemungkinan besar tidak punya alt text sama sekali (umum di export WordPress/Elementor).
