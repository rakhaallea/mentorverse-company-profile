# 🚀 MentorVerse - Company Profile Website

> Tugas Kelompok Mata Kuliah: **Web Client Development**  
> Tema: **Startup Terbaru (EdTech & Career Acceleration)**  

---

## 📌 Tentang Proyek
**MentorVerse** adalah platform akselerasi karier teknologi yang menghubungkan mahasiswa dan *fresh graduate* langsung dengan praktisi industri berpengalaman melalui sesi *1-on-1 career mentoring*, bedah portofolio berstandar industri, dan simulasi wawancara teknis (*mock technical interview*).

Website ini dibangun sebagai media profil perusahaan (*company profile*) yang mengedepankan kode semantik standar web modern, desain responsif multi-perangkat tanpa framework CSS, serta interaktivitas murni.

---

## 👥 Tim Pengembang (Founders)

| Nama Anggota | Jabatan Startup | Peran Teknis Web | Fokus Kontribusi |
| :--- | :--- | :--- | :--- |
| **Rakha** | Chief Executive Officer (CEO) | Structural & Content Lead | Arsitektur Semantic HTML5, copy konten, inisiasi repo Git, & Laporan Bab 1 |
| **Alvi** | Chief Technology Officer (CTO) | Base UI & Desktop Specialist | CSS Design System (:root), layout CSS Grid & Flexbox, & Laporan Bab 2 |
| **Chaplin** | Lead UI/UX Engineer | Responsive & JS Specialist | Mobile-first Media Queries, drawer/toggle menu JS murni, & Laporan Bab 3 |

---

## 🛠️ Spesifikasi & Tumpukan Teknologi (Tech Stack)

Sesuai dengan ketentuan ketat pengerjaan tugas:
* **Markup:** **Semantic HTML5**  
  Menggunakan elemen semantik berstruktur jelas (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>`) guna mendukung aksesibilitas serta struktur dokumen yang bersih (bebas dari *div-soup*).
* **Styling:** **Vanilla CSS (Murni)**  
  Dibuat tanpa bantuan CSS Framework apa pun (No Bootstrap, No Tailwind). Layout memanfaatkan perpaduan **CSS Grid** (untuk pembagian area konten vs sidebar dan grid kartu program) serta **Flexbox** (untuk perataan navbar, button group, dan founder card).
* **Responsivitas:** **CSS Media Queries**  
  Mendukung layout adaptif pada layar Mobile (< 768px), Tablet (≥ 768px), dan Desktop (≥ 992px/1200px) dengan prinsip tata letak bertumpuk (*stacking/column drop*) tanpa horizontal overflow.
* **Interaktivitas:** **Vanilla JavaScript (ES6+)**  
  Menangani pembukaan menu navigasi seluler secara dinamis dan validasi formulir kontak cepat/newsletter.

---

## 📁 Struktur Folder Repositori

```text
Kelompok_TugasWCD/
├── index.html              # Dokumen HTML semantik utama
├── css/
│   ├── style.css           # Variabel global (:root), reset, layout desktop & komponen
│   └── responsive.css      # Aturan @media query (Mobile & Tablet)
├── js/
│   └── script.js           # Interaktivitas DOM murni (menu & interaksi card)
├── assets/
│   ├── images/             # Aset foto founder, logo, dan ikon vektor
│   └── docs/               # Laporan Proyek Akhir (PDF)
└── README.md               # Dokumentasi proyek
```

## 🌿 Standar & Alur Kolaborasi Git (Git Workflow)

Proyek ini menerapkan model **Feature Branch Workflow** untuk memisahkan siklus pengembangan tiap anggota tim:

* **Branch Utama (`main`):** Hanya berisi kode versi stabil yang siap dinilai.
* **Branch Fitur:**
  * `feat/html-structure-content` (Rakha)
  * `feat/desktop-css-layout` (Alvi)
  * `feat/responsive-mobile-js` (Chaplin)
* **Konvensi Pesan Commit:**
  * `feat: add semantic founders section markup`
  * `style: implement css grid layout for main and sidebar`
  * `responsive: add media queries for tablet and mobile navigation`
  * `docs: update final project report draft`

---

## 🚀 Cara Menjalankan Proyek Secara Lokal

1. **Masuk ke direktori proyek:**
   ```bash
   git clone [https://github.com/](https://github.com/)[username]/mentorverse-company-profile.git
   ```

2. **Masuk ke direktori proyek:**
   ```bash
   cd mentorverse-company-profile
    ```

3. **Buka file index.html:** 
  * Klik dua kali file index.html pada File Explorer / Finder, atau
  * Gunakan ekstensi seperti Live Server di VS Code untuk live reload.

  ---

## 📦 Instruksi Pengemasan & Pengumpulan Tugas
**Klon repositori ini:**
1. Pastikan seluruh source code web (`HTML`, `CSS`, `JS`, `assets`) dan dokumen Laporan Proyek (PDF) berada di dalam folder proyek.
2. Namai folder sesuai format resmi:
`Kelompok [Nomor/Nama]_TugasWCD`
3. Kompres folder ke dalam arsip format `.zip` atau `.rar`.
4. Unggah arsip tersebut ke portal pembelajaran sebelum batas tenggat waktu.
    