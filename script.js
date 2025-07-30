// Sample data for news
const newsData = [
{
  id: 2,
  title: "Banda Aceh Juara Umum Ospenas 2025",
  category: "prestasi",
  date: "2025-05-26",
  author: "Admin Portal",
  image:
    "img/opesnas.jpg",
  excerpt:
    "Banda Aceh meraih juara umum Olimpiade Sains Hardiknas 2025 lewat prestasi gemilang pelajar SD dan SMP.",
  content:
    "Puluhan pelajar SD dan SMP di Banda Aceh meraih prestasi gemilang sebagai juara umum Olimpiade Sains Hardiknas (Ospenas) 2025 yang digelar secara online. SDN 66 Banda Aceh menyumbang 26 medali dan SMPN 10 Banda Aceh mengoleksi 103 medali. Wali Kota Illiza Sa’aduddin menyampaikan apresiasi atas prestasi ini, yang dinilai sebagai bukti keberhasilan kolaborasi dunia pendidikan di Banda Aceh. Para peraih medali direncanakan akan mendapat penghargaan khusus dari Disdikbud pada akhir tahun.",
},

{
  id: 1722134400000, // bisa gunakan Date.now() jika dinamis
  title: "Launching GSMS untuk SD dan SMP di Banda Aceh",
  category: "akademik",
  date: "2025-05-19",
  author: "Admin Portal",
  image:
    "img/gerakansenimanmasuksekolah.jpg",
  excerpt:
    "Program Gerakan Seniman Masuk Sekolah resmi diluncurkan untuk jenjang SD dan SMP se-Kota Banda Aceh.",
  content:
    "Pemerintah Kota Banda Aceh resmi meluncurkan Program Gerakan Seniman Masuk Sekolah (GSMS) pada jenjang SD dan SMP, bertempat di SMPN 19 Percontohan. Wali Kota Illiza Sa’aduddin menyampaikan bahwa GSMS menjadi sarana efektif untuk menumbuhkan kreativitas siswa di bidang seni dan budaya. Pada 2025, program ini akan diterapkan di 40 sekolah, dan ke depan akan mencakup seluruh SD dan SMP baik negeri maupun swasta. Program ini juga akan didukung kolaborasi dengan Dinas Perpustakaan untuk peningkatan literasi budaya.",
},
{
  id: 1720348800000,
  title: "SMPN 18 Banda Aceh Juara Umum NOOS 2025",
  category: "prestasi",
  date: "2025-05-07",
  author: "Admin Portal",
  image:
    "img/smpn18bandaaceh.jpg",
  excerpt:
    "SMP Negeri 18 Banda Aceh meraih juara umum nasional pada ajang NOOS 2025 dengan total 28 medali.",
  content:
    "SMP Negeri 18 Banda Aceh meraih juara umum tingkat nasional dalam ajang National Olympiad of Outstanding Students (NOOS) 2025 yang digelar daring. Sebanyak 14 siswa berhasil membawa pulang 12 emas, 11 perak, dan 5 perunggu di berbagai bidang, termasuk Fisika, Matematika, dan Bahasa Inggris. Dian Karunia dari kelas VII menyumbang prestasi terbanyak dengan empat emas dan satu perak. Keberhasilan ini diumumkan bertepatan dengan Hari Pendidikan Nasional dan diapresiasi oleh Kadisdikbud Banda Aceh sebagai inspirasi bagi sekolah lain.",
},

{
  id: 1713830400000,
  title: "Training of Trainer Guru Diniyah dan Tahfidz",
  category: "pelatihan",
  date: "2025-04-23",
  author: "Admin Portal",
  image:
    "img/pemko.jpeg",
  excerpt:
    "Wakil Wali Kota Banda Aceh membuka pelatihan untuk 550 guru diniyah dan tahfidz dalam kegiatan ToT yang digelar Disdikbud.",
  content:
    "Kegiatan Training of Trainer Guru Diniyah dan Tahfidz dibuka oleh Wakil Wali Kota Banda Aceh, Afdhal Khalilullah, pada 23 April 2025 di Hotel Hanifi. Sebanyak 550 guru mengikuti pelatihan yang berlangsung hingga 8 Mei 2025. Kadisdikbud Banda Aceh, Sulaiman Bakri, menjelaskan kegiatan ini penting untuk meningkatkan kompetensi guru dalam metode pengajaran dan ilmu tahfidz. Wakil Wali Kota menekankan pentingnya sinergi antara pendidikan formal dan pendidikan keagamaan untuk membentuk siswa yang berilmu dan berakhlak mulia.",
},

{
  id: 1741200000000,
  title: "SMPN 10 Juara Umum PUSKANTARA 2025",
  category: "lomba",
  date: "2025-03-06",
  author: "Admin Portal",
  image:
    "img/optamus2025.jpg",
  excerpt:
    "SMP Negeri 10 Banda Aceh meraih juara umum Olimpiade Talenta Muda Sains 2025 dengan perolehan 92 medali.",
  content:
    "SMPN 10 Banda Aceh meraih juara umum Olimpiade Talenta Muda Sains (OPTAMUS) 2025 yang diselenggarakan oleh PUSKANTARA secara daring. Kompetisi ini melibatkan 18.147 peserta dari seluruh Indonesia. SMPN 10 berhasil meraih total 92 medali: 27 emas, 32 perak, dan 33 perunggu dari berbagai bidang studi. Kadisdikbud Banda Aceh, Sulaiman Bakri, dan Wali Kota Illiza Sa’duddin Djamal memberikan apresiasi atas prestasi luar biasa ini dan menyatakan dukungan penuh terhadap pengembangan pendidikan di Banda Aceh.",
},

{
  id: 1737753600000,
  title: "SMPN 6 Hadirkan Dapu, Gallery & Shop Siswa",
  category: "non-akademik",
  date: "2025-01-25",
  author: "Admin Portal",
  image:
    "img/galleryandshop.jpg",
  excerpt:
    "SMPN 6 Banda Aceh resmikan Dapu, Gallery & Shop sebagai ruang kreativitas siswa dalam kewirausahaan dan gizi.",
  content:
    "SMP Negeri 6 Banda Aceh menghadirkan Dapu, Gallery & Shop sebagai ruang inovasi dan kewirausahaan siswa. Diresmikan oleh Kadisdikbud Kota Banda Aceh, Sulaiman Bakri, inisiatif ini menampilkan produk siswa seperti sabun, handsanitizer, pakaian daur ulang, serta makanan bergizi hasil olahan Dapu. Kepala sekolah, Syarifah Nargis, menyebutkan bahwa program ini mendukung pengembangan layanan pendidikan dan gizi siswa sesuai dengan visi Pemerintah. Gallery & Shop juga diharapkan mampu melatih siswa berwirausaha sambil belajar di sekolah."
},

{
  id: 1714003200000,
  title: "SMPN 1 Wakili Banda Aceh di FLS2N Provinsi (Tari Kreasi Baru)",
  category: "non-akademik",
  date:"2025-06-18",
  image:
    "img/tarikreasi.jpg",
  excerpt:
    "SMPN 1 Banda Aceh raih juara 1 FLS2N cabang tari kreasi baru dan melaju ke tingkat Provinsi Aceh. Juga raih juara 2 menyanyi solo & juara 3 assambel campuran.",
  content:
    "Pada Festival Lomba Seni Siswa Nasional (FLS2N) jenjang SMP tingkat Kota Banda Aceh 2024, SMP Negeri 1 Banda Aceh berhasil meraih juara satu pada cabang tari kreasi baru. Kemenangan ini membawa mereka untuk mewakili Kota Banda Aceh ke tingkat Provinsi Aceh. Selain itu, siswa SMPN 1 juga meraih juara dua cabang menyanyi solo dan juara tiga assambel campuran. Kepala sekolah, Rima Afriani, M.Pd., mengapresiasi semangat para siswa dan kerja keras guru pembimbing yang telah melatih peserta didik hingga meraih prestasi membanggakan."
},
{
  id: 1721961600000,
  title: "Juara 2 Musik Tradisional FLS2N Kota Banda Aceh 2025",
  category: "non-akademik",
  date:"2025-06-18",
  image:
    "img/fl3sn.jpg",
  excerpt:
    "Lima siswa SMPN 14 Banda Aceh raih juara 2 cabang musik tradisional dalam ajang FLS2N tingkat Kota Banda Aceh tahun 2025.",
  content:
    "Lima orang siswa/i SMP Negeri 14 Banda Aceh berhasil meraih juara 2 dalam lomba musik tradisional pada ajang Festival Lomba Seni Siswa Nasional (FLS2N) jenjang SMP tingkat Kota Banda Aceh tahun 2025. Kepala sekolah menyampaikan terima kasih kepada Coach Ibkar, GTK, dan seluruh siswa atas dukungan serta doa terbaiknya. Prestasi ini menjadi bukti dedikasi dan semangat siswa dalam melestarikan seni dan budaya tradisional."
},
{
  id: 1731004800000,
  title: "Penutupan Lomba Cerdas Cermat dan Pidato SD-SMP Kota Banda Aceh 2024",
  category: "akademik",
  date: "2024-10-11",
  image:
    "img/cerdascermat.png",
  excerpt:
    "Kadisdikbud Kota Banda Aceh, Sulaiman Bakri, resmi menutup lomba Cerdas Cermat dan Pidato jenjang SD dan SMP tahun 2024 di Aula Tekkomdik.",
  content:
    "Kepala Dinas Pendidikan dan Kebudayaan Kota Banda Aceh, Sulaiman Bakri S.Pd., M.Pd., menutup Lomba Cerdas Cermat dan Pidato jenjang SD dan SMP Kota Banda Aceh tahun 2024 dalam program Pembinaan Minat, Bakat, dan Kreatifitas Siswa bersama program Jaksa Masuk Sekolah (JMS). Acara ini juga dirangkai dengan Sosialisasi Pendidikan Antikorupsi, Pencegahan Pungli, dan Penanganan Kekerasan di Satuan Pendidikan.\n\nAcara berlangsung pada 8 November 2024 di Aula Tekkomdik dan turut dihadiri oleh Kabid Pembinaan SD, SMP, Kebudayaan, PAUD dan Non Formal, GTK, K3TK, K3S SD, serta MKKS SMP.\n\nBerikut daftar pemenang:\n\n🧠 Cerdas Cermat SD:\n1. Juara 1: SDN 67 Percontohan (Gugus Langsat)\n2. Juara 2: SD IT Nurul Ishlah (Gugus Kupula)\n3. Juara 3: SDN 2 Banda Aceh (Gugus Pisang)\nHarapan: SDN 5, 36, 31 Banda Aceh\n\n🧠 Cerdas Cermat SMP:\n1. Juara 1: SMP Islam Al Azhar Cairo\n2. Juara 2: SMPN 19 Percontohan\n3. Juara 3: SMP Methodist\nHarapan: SMPN 10, 7, 6 Banda Aceh\n\n🎤 Pidato SD:\n1. Juara 1: SDN 56 Banda Aceh (Gugus Bungong Kupula)\n2. Juara 2: SDN 39 Banda Aceh (Gugus Jeruk)\n3. Juara 3: SD Karya Budi (Gugus Markisa)\nHarapan: SDN 4, 20, 2 Banda Aceh\n\n🎤 Pidato SMP:\n1. Juara 1: SMPN 10 Banda Aceh\n2. Juara 2: SMPN 18 Banda Aceh\n3. Juara 3: SMP Keumala Bhayangkari\nHarapan: SMPN 8, 9, 1 Banda Aceh\n\nKadisdikbud mengapresiasi seluruh siswa dan guru pembimbing atas kerja keras dan dedikasi mereka dalam mempersiapkan lomba. Ia berharap agar prestasi ini menjadi batu loncatan untuk meraih prestasi yang lebih tinggi."
},
{
  id: 1730073600000,
  title: "Dua SMP Banda Aceh Kembali Ukir Prestasi Nasional",
  category: "prestasi",
  date:"2024-10-28",
  image:
    "img/ukbi.jpeg",
  excerpt:
    "SMPN 1 dan SMPN 10 Banda Aceh kembali harumkan nama daerah dengan torehan prestasi tingkat nasional dalam ajang UKBI Adaptif Merdeka dan OHSN 2024.",
  content:
    "Dua sekolah jenjang SMP di Kota Banda Aceh, yakni SMPN 1 dan SMPN 10, kembali mencatatkan prestasi membanggakan di tingkat nasional. SMPN 1 Banda Aceh meraih predikat sebagai salah satu dari 25 sekolah terbaik pada Apresiasi Giat UKBI Adaptif Merdeka 2024. Sementara itu, siswi SMPN 10, Nanda Alzakia, meraih penghargaan Absolute Winner dalam cabang lomba Sejarah Kebudayaan Islam pada Olimpiade Hari Santri Nasional (OHSN) 2024.\n\nPenghargaan Apresiasi Giat UKBI merupakan program unggulan dari Pusat Pembinaan Bahasa dan Sastra, Badan Pengembangan dan Pembinaan Bahasa, Kemendikbudristek. UKBI adalah tes standar nasional untuk mengukur kecakapan berbahasa Indonesia yang sangat strategis dalam meningkatkan kualitas penggunaan bahasa serta memupuk kebanggaan terhadap Bahasa Indonesia.\n\nSMPN 1 Banda Aceh menjadi satu-satunya sekolah dari Provinsi Aceh yang berhasil masuk 25 besar dari 169 sekolah peserta UKBI tingkat nasional. Ini merupakan prestasi berkelanjutan sejak tahun 2021.\n\nSementara itu, Nanda Alzakia dari SMPN 10 Banda Aceh menjadi peraih nilai tertinggi nasional dalam cabang lomba Sejarah Kebudayaan Islam di ajang OHSN 2024. Gelar Absolute Winner hanya diberikan kepada satu peserta dengan nilai tertinggi di tiap kategori.\n\nPj Wali Kota Banda Aceh, Ade Surya, mengapresiasi prestasi ini sebagai dorongan untuk terus meningkatkan kualitas pendidikan di Banda Aceh. Kadisdikbud Banda Aceh, Sulaiman Bakri, juga memberikan apresiasi kepada kepala sekolah, guru, siswa, dan orang tua atas sinergi mereka dalam memfasilitasi potensi siswa.\n\n“Kami mendorong seluruh sekolah SD dan SMP di Banda Aceh untuk memberikan ruang seluas-luasnya kepada peserta didik dalam menyalurkan minat dan bakat mereka,” ujar Kadisdikbud Banda Aceh."
}


];

// Sample data for gallery
const galleryData = [
{
  id: 1753056000000,
  title: "Upacara Bendera Hari Senin",
  category: "akademik",
  image:
    "img/upacara.jpg",
  excerpt:
    "Upacara bendera Senin, 21 Juli 2025 diikuti seluruh warga SMKN 1, 2, 3 Banda Aceh dengan pembina upacara Bapak Jhon Abdi, Plt. Kacabdin.",
  content:
    "Kegiatan upacara bendera hari Senin pada tanggal 21 Juli 2025 dilaksanakan di lapangan upacara gabungan SMKN 1, 2, dan 3 Banda Aceh. Upacara ini dihadiri oleh seluruh warga sekolah dan dipimpin langsung oleh Bapak Plt. Kepala Cabang Dinas Pendidikan Kota Banda Aceh dan Kabupaten Aceh Besar, Jhon Abdi, S.Pd., M.Pd. sebagai pembina upacara. Kegiatan ini berlangsung dengan khidmat dan menjadi momen penting untuk memperkuat semangat kedisiplinan serta nasionalisme di lingkungan sekolah."
},
  {
    id: 2,
    title: "Pertunjukan Tari Kreasi",
    category: "non-akademik",
    image:
      "img/tarikreasigallery.jpg",
  },
  {
    id: 3,
    title: "Lomba Cerdas Cermat",
    category: "lomba",
    image:
      "img/cerdascermat.png",
  },
  {
    id: 4,
    title: "FL2SN",
    category: "prestasi",
    image:
      "img/fl3sn.jpg",
  },
  {
    id: 5,
    title: "Kegiatan Ekstrakurikuler",
    category: "non-akademik",
    image:
      "img/pramuka.jpeg",
  },
  {
    id: 6,
    title: "Praktikum Laboratorium",
    category: "akademik",
    image:
      "img/ukbi.jpeg",
  },
];

let currentNewsPage = 0;
const newsPerPage = 3;
let currentCategory = "semua";

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  loadNews();
  loadGallery();
  setupEventListeners();
  animateStats();
});

// Load news based on category and pagination
function loadNews() {
  const container = document.getElementById("newsContainer");
  const filteredNews =
    currentCategory === "semua"
      ? newsData
      : newsData.filter((news) => news.category === currentCategory);

  const startIndex = currentNewsPage * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const newsToShow = filteredNews.slice(startIndex, endIndex);

  if (currentNewsPage === 0) {
    container.innerHTML = "";
  }

  newsToShow.forEach((news) => {
    const newsCard = createNewsCard(news);
    container.appendChild(newsCard);
  });

  // Hide load more button if no more news
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (endIndex >= filteredNews.length) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

// Create news card element
function createNewsCard(news) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6";

  col.innerHTML = `
                <div class="card news-card" data-category="${news.category}">
                    <img src="${news.image}" class="card-img-top" alt="${
    news.title
  }">
                    <div class="card-body">
                        <h5 class="card-title">${news.title}</h5>
                        <div class="news-meta">
                            <i class="fas fa-calendar"></i> ${formatDate(
                              news.date
                            )}
                            <span class="ms-3"><i class="fas fa-user"></i> ${
                              news.author
                            }</span>
                        </div>
                        <p class="card-text">${news.excerpt}</p>
                        <button class="btn btn-primary" onclick="showNewsDetail(${
                          news.id
                        })">
                            <i class="fas fa-eye"></i> Baca Selengkapnya
                        </button>
                    </div>
                </div>
            `;

  return col;
}

// Load gallery items
function loadGallery() {
  const container = document.getElementById("galleryContainer");
  container.innerHTML = "";

  galleryData.forEach((item) => {
    const galleryItem = createGalleryItem(item);
    container.appendChild(galleryItem);
  });
}

// Create gallery item element
function createGalleryItem(item) {
  const col = document.createElement("div");
  col.className = "col-lg-4 col-md-6";

  col.innerHTML = `
                <div class="gallery-item" onclick="showGalleryDetail(${item.id})">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-overlay">
                        <div>
                            <i class="fas fa-search-plus fa-2x mb-2"></i>
                            <h5>${item.title}</h5>
                        </div>
                    </div>
                </div>
            `;

  return col;
}

// Setup event listeners
function setupEventListeners() {
  // Category filter buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      currentCategory = this.dataset.category;
      currentNewsPage = 0;
      loadNews();
    });
  });

  // Load more button
  document.getElementById("loadMoreBtn").addEventListener("click", function () {
    currentNewsPage++;
    loadNews();
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Show news detail in modal
function showNewsDetail(newsId) {
  const news = newsData.find((n) => n.id === newsId);
  if (news) {
    document.getElementById("newsModalTitle").textContent = news.title;
    document.getElementById("newsModalBody").innerHTML = `
                    <img src="${
                      news.image
                    }" class="img-fluid mb-3 rounded" alt="${news.title}">
                    <div class="news-meta mb-3">
                        <i class="fas fa-calendar"></i> ${formatDate(news.date)}
                        <span class="ms-3"><i class="fas fa-user"></i> ${
                          news.author
                        }</span>
                        <span class="ms-3"><i class="fas fa-tag"></i> ${getCategoryName(
                          news.category
                        )}</span>
                    </div>
                    <p>${news.content}</p>
                `;

    const modal = new bootstrap.Modal(document.getElementById("newsModal"));
    modal.show();
  }
}

// Show gallery detail in modal
function showGalleryDetail(itemId) {
  const item = galleryData.find((i) => i.id === itemId);
  if (item) {
    document.getElementById("galleryModalTitle").textContent = item.title;
    document.getElementById("galleryModalBody").innerHTML = `
                    <img src="${item.image}" class="img-fluid rounded" alt="${item.title}">
                    <p class="mt-3">${item.title}</p>
                `;

    const modal = new bootstrap.Modal(document.getElementById("galleryModal"));
    modal.show();
  }
}

// Animate statistics numbers
function animateStats() {
  const stats = document.querySelectorAll(".stat-number");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.target);
        animateNumber(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  });

  stats.forEach((stat) => observer.observe(stat));
}

// Animate number counting
function animateNumber(element, target) {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 30);
}

// Utility functions
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("id-ID", options);
}

function getCategoryName(category) {
  const categories = {
    akademik: "Akademik",
    "non-akademik": "Non-Akademik",
    lomba: "Lomba",
    prestasi: "Prestasi",
  };
  return categories[category] || category;
}
