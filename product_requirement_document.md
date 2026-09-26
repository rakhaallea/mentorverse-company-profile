# PRODUCT REQUIREMENT DOCUMENT (PRD)

| Metadata | Keterangan |
| :--- | :--- |
| **Nama Produk / Startup** | MentorVerse |
| **Jenis Dokumen** | PRD Landing Page & Company Profile |
| **Konteks Proyek** | Tugas Kelompok Mata Kuliah Web Client Development |
| **Tahun Proyek** | 2026 |

---

## 1. Ikhtisar Produk (Product Overview)

* **Latar Belakang:**  
  Tingginya kesenjangan antara kurikulum akademik dengan standar industri digital membuat mahasiswa dan *fresh graduate* kesulitan menembus dunia kerja. MentorVerse hadir sebagai platform akselerasi karier melalui sesi *1-on-1 mentoring*, kurasi portofolio, dan simulasi wawancara bersama praktisi industri terkemuka.
* **Visi:**  
  Menjadi ekosistem akselerasi karier terdepan yang menghubungkan talenta muda dengan para profesional teknologi dunia nyata.
* **Misi:**
  1. Menyediakan bimbingan terarah langsung dari praktisi (*Engineering, Product, Data, Design*).
  2. Memberikan akses *feedback* portofolio yang transparan dan berbasis standar industri.
  3. Membuka jaringan kerja profesional bagi lulusan baru dan *career switchers*.
* **Target Pengguna:**  
  Mahasiswa tingkat akhir, *fresh graduate*, dan *entry-level jobseeker*.

---

## 2. Tujuan & Lingkup Landing Page

* **Tujuan Halaman:**  
  Mengenalkan profil perusahaan, mendemokan nilai jual layanan, menampilkan kredibilitas tim pendiri (*founders*), serta mengonversi pengunjung untuk mendaftar atau berkonsultasi.
* **Batasan Teknis (Sesuai Ketentuan Tugas):**
  * **Markup Semantik:** Wajib dibangun menggunakan Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) tanpa *div-soup*.
  * **CSS Murni:** Tata letak dan styling tampilan wajib **Vanilla CSS murni** (dilarang keras menggunakan Tailwind, Bootstrap, atau framework CSS lainnya).
  * **Desain Responsif:** Menerapkan pendekatan *Mobile-First* memanfaatkan *CSS Media Queries* (Mobile, Tablet `min-width: 768px`, Desktop `min-width: 992px` / `1200px`).
  * **Interaktivitas JavaScript:** Bersifat opsional untuk interaktivitas sederhana (seperti toggle navigasi *hamburger menu* atau validasi form sederhana).

---

## 3. Struktur Tata Letak & Arsitektur Semantik HTML5

Sesuai hierarki HTML semantik standar industri:

```text
<body>
  ├── <header> (Logo & Navigasi Utama)
  ├── <main> (Area Konten Utama)
  │     ├── <section id="hero"> (Banner Pembuka & Call to Action)
  │     ├── <section id="services"> (Pilihan Layanan / Program)
  │     │     └── <article> (Card Program 1, 2, 3)
  │     ├── <section id="founders"> (Profil Tim Founder & Jabatan)
  │     └── <section id="testimonials"> (Testimoni Alumni)
  ├── <aside> (Sidebar: Berita, Event Webinar & Kontak Cepat)
  └── <footer> (Copyright, Navigasi Tambahan, Media Sosial)
```

---

## 4. Rincian Kebutuhan Fitur & Konten per Bagian

### A. Bagian Header & Navbar (`<header>`, `<nav>`)
* **Komponen:**
  * Logo MentorVerse (ikon roket/bintang + tipografi khas).
  * Menu navigasi: Beranda, Program, Tentang Founder, Event, dan Kontak.
  * Tombol CTA: *"Mulai Konsultasi"*.
* **Perilaku Responsif:**  
  Menu berderet horizontal pada layar desktop, dan bertransformasi menjadi navigasi ringkas (*collapsible* / hamburger menu / tumpuk) pada layar perangkat seluler.

### B. Konten Utama (`<main>`)

#### 1. Hero Section (`<section id="hero">`)
* **Teks Judul:** *"Akselerasi Karier Digitalmu Bersama Mentor Top Dunia Industri"*
* **Sub-judul:** *"Dapatkan bimbingan 1-on-1, review portofolio, dan persiapan wawancara kerja langsung dari engineer, designer, dan praktisi berpengalaman."*
* **Komponen:** Tombol CTA *"Jadwalkan Mentoring"* & *"Pelajari Program"*, disertai ilustrasi vektor pendukung.

#### 2. Program & Layanan (`<section id="services">`)
Menampilkan kartu layanan mandiri yang dibungkus dengan `<article>`:
* **Card 1: 1-on-1 Career Mentoring** – Sesi privat mingguan membahas *roadmap* belajar dan target karier.
* **Card 2: Portfolio & Resume Review** – Pengecekan CV standar ATS dan kurasi proyek GitHub/Figma.
* **Card 3: Mock Technical Interview** – Simulasi wawancara teknis *live coding* dan studi kasus nyata.
* **Strategi Layout:** Menggunakan **CSS Grid** (`grid-template-columns`) pada desktop yang melipat menjadi 1 kolom vertikal pada layar seluler.

#### 3. Bagian Tim Founder (`<section id="founders">`) *(Wajib Tugas)*
Menampilkan profil anggota kelompok beserta peran dan foto representatif:
* **Anggota 1:** Chief Executive Officer (CEO) – Pengarah visi produk dan strategi kemitraan industri.
* **Anggota 2:** Chief Technology Officer (CTO) – Pengembang arsitektur platform web dan integrasi sistem.
* **Anggota 3:** Lead UI/UX & Frontend – Perancang visual antarmuka dan implementasi CSS murni.
* **Anggota 4 (Opsional):** Head of Talent & Community – Pengelola relasi mentor dan komunitas talenta.
* **Konten Card:** Foto, nama lengkap, jabatan, ringkasan keahlian, dan tautan profil LinkedIn/GitHub.

#### 4. Testimoni (`<section id="testimonials">`)
* Menampilkan ulasan ringkas alumni yang telah berhasil memperoleh tawaran kerja menggunakan elemen semantik `<figure>` dan `<blockquote>`.

### C. Sidebar (`<aside>`) *(Wajib Tugas)*
Menampilkan informasi sekunder yang melengkapi konten utama:
* **Agenda Webinar Mendatang:** *“Kiat Lolos Wawancara Tech Startup 2026”* (Jadwal, pembicara, tombol RSVP).
* **Tips Karier Cepat:** Artikel mini berupa *bullet-points* tips penulisan portofolio dan resume.
* **Formulir Newsletter / Kontak Cepat:** Input email untuk menerima jadwal pembukaan *batch* mentoring berikutnya.
* **Perilaku Responsif:** Berada di kolom samping kanan pada desktop (menggunakan Flexbox / CSS Grid pada container pembungkus utama), lalu turun ke bawah konten utama secara bertumpuk (*stacked*) pada layar seluler/tablet.

### D. Footer (`<footer>`)
* **Hak Cipta:** *“© 2026 MentorVerse Technologies. Hak cipta dilindungi undang-undang.”*
* **Tautan Tambahan:** Kebijakan privasi (*Privacy Policy*), syarat & ketentuan (*Terms of Service*), dan ikon media sosial (GitHub, LinkedIn, Instagram).

---

## 5. Spesifikasi Teknis & Kualitas Kode

| Aspek | Spesifikasi | Keterangan / Referensi Tugas |
| :--- | :--- | :--- |
| **Markup** | HTML5 Murni | Menggunakan tag semantik secara konsisten tanpa *div-soup* (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`). |
| **Styling** | Vanilla CSS | **Tanpa Tailwind/Bootstrap**; memanfaatkan variabel CSS (`:root`), Flexbox, dan CSS Grid. |
| **Breakpoints** | Mobile-First | Mobile: `< 768px`, Tablet: `@media (min-width: 768px)`, Desktop: `@media (min-width: 992px)` dan `@media (min-width: 1200px)`. |
| **Format Font & Aset** | Web-safe / Google Fonts | Tipografi modern (misal: *Inter* / *Poppins*), gambar terkompresi berekstensi SVG / WebP. |
| **Interaktivitas (JS)** | Vanilla JS (Opsional) | Toggle navigasi mobile atau interaktivitas DOM ringan (hover / validasi form native). |

---

## 6. Rencana Pembagian Tugas Kelompok (Lampiran Laporan)

Sesuai format pembagian kerja teknis proyek:

1. **Frontend / Semantic HTML Developer:**  
   Menyusun seluruh struktur dokumen `index.html` dengan tag semantik valid, terstruktur, dan rapi.
2. **UI/UX & CSS Specialist (Desktop & Base Style):**  
   Merancang skema warna, tipografi, variabel CSS (`:root`), serta layout dasar Flexbox/Grid untuk tampilan layar lebar.
3. **Responsive Specialist (Media Queries):**  
   Mengerjakan aturan `@media` untuk tablet dan layar ponsel agar website sepenuhnya adaptif tanpa scroll horizontal (*no horizontal overflow*).
4. **Technical Writer & Content Strategist:**  
   Menulis teks *copywriting* profil startup, merapikan data founder, dan menyusun laporan akhir PDF.