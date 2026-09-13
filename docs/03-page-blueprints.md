# 03 — Blueprint Halaman & Copywriting

Catatan: semua angka (kuota, gaji, jumlah alumni, harga) diambil dari screenshot situs lama sebagai referensi. **Wajib dikonfirmasi ulang ke tim HATESE sebelum publish** — jangan biarkan copywriter/AI generate angka yang tidak diverifikasi untuk konten seputar visa & pekerjaan.

---

## 1. Beranda (`/`)

### Hero
```
┌─────────────────────────────────────────────────────┐
│  [Logo]        Beranda Program Karier Kegiatan ...   │
├─────────────────────────────────────────────────────┤
│  Wujudkan Kerja di Jepang,          [Foto siswa asli │
│  Bukan Sekadar Mimpi.                pakai seragam   │
│                                       kelas, bukan    │
│  Program pelatihan bahasa &          model kimono     │
│  keterampilan kerja dengan jalur      stok generik]  │
│  resmi menuju SSW dan JFT-A2/N4.                     │
│                                                        │
│  [Konsultasi Sekarang]  [Lihat Program →]            │
│                                                        │
│  Terdaftar resmi — SK Kemenkumham No. 0047730.AH.01.01│
└─────────────────────────────────────────────────────┘
```
**Copy headline:** "Wujudkan Kerja di Jepang, Bukan Sekadar Mimpi."
**Sub-headline:** "HATESE membimbingmu dari nol bahasa Jepang sampai siap kerja — lengkap dengan pendampingan ujian, interview, dan keberangkatan."

Catatan desain: foto hero situs lama pakai model berkimono generik yang tidak relevan dengan konten (kerja pabrik/perawatan/konstruksi). Ganti dengan foto siswa/alumni asli berseragam kelas atau foto keberangkatan di bandara (sudah ada asetnya di halaman LP1) — ini juga langsung memperkuat kredibilitas.

### Section: Legalitas & Kepercayaan (ganti "Tentang Kami" versi panjang)
Ringkas jadi 3 kalimat + 3 angka, link "Selengkapnya →" ke `/tentang`:

> PT. Harapan Terang Sejahtera berdiri 3 Juli 2024 di Kota Cirebon, terdaftar resmi di Kementerian Hukum dan HAM RI (SK No. 0047730.AH.01.01 Tahun 2023). Kami membimbing siswa dari nol bahasa Jepang sampai siap bekerja, dengan tiga jaminan: sertifikat JFT-A2/JLPT N4, sertifikat SSW, dan penempatan kerja di Jepang.

Statistik (kartu 3 kolom): **1.000+ Siswa Terdaftar** · **100+ Alumni Berangkat ke Jepang** · **10.000+ Kuota Kerja Terbuka per Tahun**

### Section: Kenapa Harus Kerja di Jepang (pertahankan struktur 3 kartu, perbaiki copy)
1. **Peluang Kerja Terbuka Lebar** — Jepang kekurangan tenaga kerja usia produktif di berbagai sektor industri, dan terus membuka kuota untuk pekerja asing.
2. **10.000+ Kuota Setiap Tahun** — Kuota pekerja asing di Jepang terus bertambah tiap tahunnya, mencakup belasan bidang kerja resmi (SSW).
3. **Gaji Setara hingga ¥350.000/bulan** — Setara sekitar Rp35 juta per bulan, jauh di atas rata-rata gaji sektor yang sama di Indonesia.

### Section: Program Bimbingan Kerja
Pertahankan 6 kartu (Kelas Intensif, Modul & Latihan Soal, Mess/Asrama Gratis, Kaos Olahraga Gratis, Pendampingan Interview, Pendampingan Keberangkatan) tapi ganti foto stok generik dengan foto aktivitas kelas asli, dan tambahkan 1 kalimat manfaat di tiap kartu (situs lama hanya judul tanpa penjelasan):

- **Kelas Intensif Online & Offline** — Belajar bahasa Jepang dari nol dengan kurikulum terstruktur, pilih jadwal reguler di kelas atau online via Zoom.
- **Modul Materi & Latihan Soal** — Materi belajar dan bank soal simulasi ujian JFT-A2/JLPT N4 yang disusun mengikuti standar ujian terbaru.
- **Gratis Mess/Asrama** — Untuk siswa kelas offline, tersedia tempat tinggal gratis selama masa pelatihan supaya bisa fokus belajar.
- **Gratis Kaos Olahraga** — Perlengkapan kelas offline disediakan tanpa biaya tambahan.
- **Pendampingan Matching Job & Interview** — Kami membantu mencocokkan siswa dengan lowongan yang sesuai dan mendampingi proses interview (mensetsu) dengan perusahaan Jepang.
- **Pendampingan Proses Keberangkatan** — Dari pengurusan dokumen sampai hari keberangkatan, tim kami mendampingi setiap tahap.

### Section: Perjalanan 3 Bulan Menuju Jepang (BARU — pakai komponen stepper)
Ini menggantikan penjelasan proses yang sekarang tersebar di FAQ dan tidak terlihat sebagai satu alur utuh:
`Daftar & Konsultasi → Kelas Intensif (3 Bulan) → Ujian JFT-A2/SSW → Interview (Mensetsu) → Keberangkatan ke Jepang`

### Section: Kisah Alumni (ringkas, link ke halaman penuh)
Tampilkan 3 testimoni teks + 1 carousel video singkat (maks 4 video), CTA "Lihat Semua Kisah Alumni →" ke `/kisah-alumni`. Jangan duplikasi 100% seperti sekarang (homepage dan halaman Testimonials isinya identik).

### Section: FAQ
Pertahankan daftar pertanyaan yang sudah ada (sudah relevan: dana talangan, biaya pendaftaran, PraMCU, lama pendidikan, dll.) — cukup benahi UI accordion (lihat design system) dan kelompokkan jadi 3 kategori dengan tab: **Pendaftaran** · **Biaya & Dana Talangan** · **Proses & Keberangkatan**.

---

## 2. Program & Karier (`/program`, `/karier`)

Pisahkan jadi dua konsep yang situs lama campur aduk: **Program** = kelas belajar bahasa (produk yang dijual), **Karier** = bidang kerja yang tersedia setelah lulus (hasil akhir yang dijanjikan).

### `/program` — Hero
**Headline:** "Investasi Belajar dari Rp2 Jutaan per Bulan, Selama 3 Bulan."
**Sub:** "Siap kerja ke Jepang dengan bekal bahasa dan keterampilan yang teruji."

(Ganti foto pasangan berhelm oranye yang terkesan seperti stok "construction romance" dengan foto siswa sungguhan di kelas atau memegang sertifikat.)

### Kelas Tersedia (grid kartu, bukan kotak foto sejajar tanpa deskripsi)
Tiap kartu tambahkan 1 baris deskripsi + siapa yang cocok:
- **Kelas Reguler (Offline)** — Belajar tatap muka intensif di kelas, cocok untuk yang ingin lingkungan belajar fokus dan disiplin.
- **Kelas Online via Zoom** — Belajar fleksibel dari mana saja, cocok untuk yang punya kesibukan lain.
- **Kelas Online Berbasis LMS** *(Coming Soon)* — Belajar mandiri dengan modul terstruktur, bisa diakses kapan saja.
- **Kelas Karyawan** — Jadwal di luar jam kerja, cocok untuk yang sudah bekerja tapi ingin bersiap ke Jepang.
- **Kelas Pemantapan JFT & SSW** — Fokus latihan soal dan simulasi ujian untuk yang sudah punya dasar bahasa Jepang.

### `/karier` — Bidang Kerja (perbaikan carousel yang rusak)
**Headline:** "14 Bidang Kerja Resmi Menanti di Jepang."
**Sub:** "Setiap bidang punya jalur sertifikasi SSW sendiri — pilih sesuai minat dan keahlianmu."

Gunakan komponen "kartu boarding pass" dari design system, grid 3 kolom + filter chip kategori. Contoh isi kartu (isi final wajib dikonfirmasi ke data internal HATESE, daftar 14 bidang SSW resmi bisa berubah sesuai regulasi Kementerian Ketenagakerjaan Jepang terbaru):

| Bidang | Kategori |
|---|---|
| Food Service (Restoran & Kuliner) | Jasa |
| Perawatan Lansia (Kaigo) | Perawatan |
| Konstruksi | Konstruksi |
| Manufaktur & Perakitan Mesin | Manufaktur |
| Perhotelan (Akomodasi) | Jasa |
| Pertanian | Pertanian & Perikanan |
| Perikanan | Pertanian & Perikanan |
| Pengolahan Makanan & Minuman | Manufaktur |
| Kebersihan Gedung | Jasa |
| Perawatan Kendaraan (Otomotif) | Manufaktur |
| Industri Perkapalan | Manufaktur |
| Elektro & Elektronik | Manufaktur |
| Perawatan Pesawat (Aviasi) | Jasa |
| Layanan Publik & Lainnya | Jasa |

CTA di bagian bawah tiap kartu: "Cek Persyaratan →" membuka detail (persyaratan usia, tinggi badan, sertifikat yang dibutuhkan spesifik bidang tersebut — bukan digeneralisasi seperti sekarang).

---

## 3. Kisah Alumni (`/kisah-alumni`)

### Hero
**Headline:** "Mereka Sudah Berangkat. Kamu Berikutnya."
**Sub:** "100+ alumni HATESE kini bekerja di berbagai kota di Jepang — dari Okinawa sampai Kagoshima."

### Section: Testimoni Teks
Pertahankan 5 testimoni yang ada (Sutrisna, Adidtya Kamil, Ahmad Nursidik, Aji Pamungkas, Irpan Ripana), tapi:
- Lengkapi foto profil yang masih kosong (2 dari 5 di screenshot) — minimal pakai inisial di lingkaran berwarna, jangan lingkaran kosong.
- Tambahkan nama perusahaan tempat kerja sebagai badge kecil, bukan cuma teks polos di bawah nama.

### Section: Video Testimoni (carousel + modal lightbox)
Ganti grid 4×3 mentah dengan carousel horizontal, kategori filter berdasarkan bidang kerja atau kota. Setiap video wajib punya poster/thumbnail asli (bukan kotak hitam) dan caption nama + kota + bidang kerja di bawah kartu.

### CTA penutup
"Tertarik Bekerja Profesional di Jepang?" + tombol "Konsultasi Sekarang" (pertahankan, ini sudah bagus & konsisten di situs lama).

---

## 4. Kegiatan Kami (`/kegiatan`)

Halaman ini paling darurat dibenahi karena sekarang benar-benar kosong. Struktur baru — kartu editorial bergantian, tiap kegiatan dapat 1 section penuh:

### Hero
**Headline:** "Di Balik Layar Persiapan Menuju Jepang."
**Sub:** "Setiap siswa HATESE melalui rangkaian kegiatan ini sebelum resmi berangkat kerja."

### 1. Sosialisasi Siswa
> Sesi pengenalan program bagi calon siswa baru — menjelaskan alur belajar, biaya, dan apa yang perlu dipersiapkan sebelum mendaftar, supaya tidak ada kejutan di tengah jalan.

### 2. Sosialisasi Orang Tua
> Karena keputusan bekerja ke luar negeri melibatkan keluarga, kami mengadakan sesi khusus untuk orang tua/wali siswa — menjelaskan proses, keamanan, dan dukungan yang HATESE berikan selama anak mereka belajar dan bekerja di Jepang.

### 3. Pra-MCU (Medical Check-Up)
> Pemeriksaan kesehatan awal untuk memastikan calon siswa memenuhi syarat kesehatan sebelum melanjutkan ke tahap pelatihan dan keberangkatan.

### 4. Pembelajaran
> Kelas intensif bahasa Jepang dan pelatihan keterampilan kerja, dengan pendekatan yang membangun pola pikir *growth mindset* — bukan sekadar hafalan bahasa.

### 5. Ujian JFT & SSW
> Simulasi dan pelaksanaan ujian sertifikasi resmi (JFT-A2/JLPT N4 dan SSW) yang menjadi syarat wajib untuk bekerja di Jepang lewat jalur tenaga kerja spesialis.

### 6. Interview (Mensetsu)
> Sesi wawancara kerja dengan perusahaan Jepang, didampingi tim HATESE dari persiapan hingga hari pelaksanaan — termasuk latihan menjawab pertanyaan umum dalam bahasa Jepang.

(Tiap section di atas **wajib** disertai minimal 1 foto dokumentasi nyata dari kegiatan tersebut — ini prioritas tertinggi karena kontennya sudah ada judulnya, tinggal diisi bukti visual dan deskripsi.)

---

## 5. Tentang Kami (`/tentang`) — halaman baru, dipecah dari homepage

- Sejarah singkat (paragraf yang sudah ada di homepage, dipindah ke sini apa adanya)
- Legalitas (nomor SK, tanggal berdiri, lokasi kantor)
- 3 Jaminan (sertifikat JFT-A2/N4, sertifikat SSW, penempatan kerja) — ditampilkan sebagai kartu, bukan daftar bernomor polos
- Tim/instruktur (kalau ada foto & profil, tambahkan — situs lama sama sekali tidak menampilkan siapa yang mengajar, padahal ini sumber kepercayaan besar untuk institusi pendidikan)
- Peta lokasi kantor (embed Google Maps — sudah ada di halaman LP1, pindahkan ke sini secara permanen)
