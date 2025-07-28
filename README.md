# Proyek UAS: Website Agensi Digital "Spark Digital"

Ini adalah proyek Ujian Akhir Semester (UAS) untuk mata kuliah Pengembangan Perangkat Lunak, yang berfokus pada pembuatan situs web multi-halaman yang interaktif menggunakan HTML5, CSS3, dan Vanilla JavaScript.

## Deskripsi Proyek

Spark Digital adalah sebuah situs web fiktif untuk agensi pemasaran digital. Situs ini dirancang untuk menjadi modern, responsif, dan kaya akan fitur interaktif sesuai dengan persyaratan yang diberikan dalam soal ujian. Tujuannya adalah untuk menunjukkan kemampuan dalam pengembangan front-end, termasuk manipulasi DOM, event handling, dan penggunaan API eksternal sederhana seperti Google Maps dan library JavaScript.

## Fitur Utama

### Halaman Utama (`index.html`)

* **Hero Section Interaktif:**
    * Latar belakang dengan efek *parallax scrolling*.
    * Tagline dengan efek mengetik (*dynamic typing effect*) yang menampilkan beberapa kalimat secara bergantian.
    * Counter statistik yang beranimasi dari 0 ke angka target saat terlihat di layar.
* **Bagian Layanan:**
    * Kartu layanan dengan efek *hover* yang halus (terangkat dan bayangan lebih jelas).
    * Fitur *progressive disclosure* di mana detail tambahan muncul saat tombol "Learn More" diklik.
* **Bagian Testimoni:**
    * Carousel testimoni yang bergeser secara otomatis menggunakan library **Swiper.js**.
    * Tampilan rating bintang untuk setiap testimoni.

### Halaman Tentang Kami (`about.html`)

* **Linimasa Perusahaan:**
    * Tampilan linimasa vertikal yang interaktif.
    * Setiap item di linimasa muncul dengan animasi saat di-scroll ke dalam viewport menggunakan **Intersection Observer API**.
* **Bagian Tim:**
    * Galeri anggota tim dalam format grid.
    * Setiap kartu anggota tim memiliki *overlay* yang muncul saat di-hover, menampilkan ikon media sosial.

### Halaman Layanan (`services.html`)

* **Katalog Layanan Dinamis:**
    * Galeri layanan yang dapat difilter berdasarkan kategori (SEO, Social Media, Content).
    * Tombol filter yang aktif akan memiliki gaya yang berbeda.
* **Kalkulator Harga Interaktif:**
    * Formulir sederhana yang memungkinkan pengguna memilih berbagai opsi layanan.
    * Total estimasi biaya diperbarui secara *real-time* setiap kali pilihan diubah.

### Halaman Portofolio (`portfolio.html`)

* **Galeri Portofolio Dinamis:**
    * Galeri proyek yang dapat difilter berdasarkan jenis proyek (Web Design, Branding, Marketing).
* **Lightbox:**
    * Setiap gambar di portofolio dapat diklik untuk menampilkannya dalam ukuran penuh di tengah layar menggunakan library **basicLightbox**.

### Halaman Kontak (`contact.html`)

* **Formulir Kontak Canggih:**
    * Validasi input dilakukan secara *real-time* saat pengguna mengetik.
    * Pesan error akan muncul di bawah setiap input jika tidak valid (misalnya, email tidak sesuai format, pesan terlalu pendek).
* **Peta Interaktif:**
    * Peta lokasi kantor yang disematkan dari **Google Maps**.
* **FAQ Accordion:**
    * Daftar pertanyaan yang sering diajukan.
    * Jawaban akan muncul atau tersembunyi saat pertanyaan diklik, dengan ikon "+" yang berubah menjadi "-".

## Teknologi yang Digunakan

* **HTML5:** Digunakan untuk struktur dan konten semantik situs web.
* **CSS3:** Digunakan untuk styling, layout (Flexbox & Grid), animasi, transisi, dan desain responsif.
* **Vanilla JavaScript (ES6+):** Digunakan untuk semua logika dan interaktivitas, termasuk:
    * Manipulasi DOM
    * Event Handling (click, scroll, input)
    * Intersection Observer API
    * Penggunaan library eksternal (Swiper.js, basicLightbox)

## Setup dan Instalasi

1.  Clone repositori ini: `git clone https://github.com/Deer-ch/digital-agency-uas.git`
2.  Navigasi ke direktori proyek.
3.  Buka file `index.html` di browser pilihan Anda.

Tidak ada dependensi atau proses build yang diperlukan.
