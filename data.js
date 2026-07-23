window.PORTFOLIO_DATA = {
  meta: {
    defaultLanguage: "en",
    title: "Amirul Fahmi A — GIS, Survey & Geospatial Portfolio",
    description: "Portfolio of Amirul Fahmi A: GIS, land surveying, geodetic engineering, drone mapping, remote sensing, GeoAI, spatial data, and WebGIS development.",
    lastUpdated: "2026-07-23"
  },
  profile: {
    name: "Amirul Fahmi A",
    fullName: "Amirul Fahmi Ash-Shiddiqie",
    role: { en: "GIS & Geospatial Professional", id: "Profesional GIS & Geospasial" },
    headline: {
      en: "Turning field measurements, drone imagery, and spatial data into decision-ready maps and digital products.",
      id: "Mengubah pengukuran lapangan, citra drone, dan data spasial menjadi peta serta produk digital yang siap digunakan untuk pengambilan keputusan."
    },
    summary: {
      en: "Applied Bachelor's candidate in Geographic Information Systems at Universitas Gadjah Mada with hands-on experience in land surveying, geodetic workflows, drone mapping, cadastral data, spatial analysis, and WebGIS development. Experienced in managing 35,780+ population and land-parcel records, digitizing certificates across 34 villages, and producing standardized cadastral layouts for 22 villages.",
      id: "Kandidat Sarjana Terapan Sistem Informasi Geografis Universitas Gadjah Mada dengan pengalaman praktis dalam survei pertanahan, alur kerja geodesi, pemetaan drone, data kadastral, analisis spasial, dan pengembangan WebGIS. Berpengalaman mengelola lebih dari 35.780 data penduduk dan bidang tanah, mendigitalkan sertipikat pada 34 desa, serta menghasilkan layout kadastral terstandar untuk 22 desa."
    },
    location: "Sleman, Daerah Istimewa Yogyakarta, Indonesia",
    availability: { en: "Open to GIS, Surveying, Geodetic & Drone opportunities", id: "Terbuka untuk peluang GIS, Survei, Geodesi & Drone" },
    photo: "assets/amirul-profile.jpg",
    email: "amirulfahmiash-shiddiqie@mail.ugm.ac.id",
    phoneDisplay: "+62 858-8203-4026",
    phone: "6285882034026",
    linkedin: "https://bit.ly/LinkedIn_Amirul",
    github: "https://github.com/amirulash",
    oldPortfolio: "https://sites.google.com/view/amirulfahmi-portofolio/home?authuser=0",
    resume: "assets/Amirul-Fahmi-CV.docx"
  },
  stats: [
    { value: "35,780+", label: { en: "Population & parcel records managed", id: "Data penduduk & bidang dikelola" } },
    { value: "34", label: { en: "Villages covered in certificate digitization", id: "Desa dalam digitalisasi sertipikat" } },
    { value: "22", label: { en: "Standardized cadastral map layouts", id: "Layout peta kadastral terstandar" } },
    { value: "3.64/4.00", label: { en: "Current cumulative GPA", id: "IPK kumulatif saat ini" } }
  ],
  capabilities: [
    { icon: "map", title: { en: "GIS & Spatial Analysis", id: "GIS & Analisis Spasial" }, description: { en: "Spatial modelling, thematic mapping, land-use analysis, cartographic layout, and decision-ready geospatial outputs.", id: "Pemodelan spasial, pemetaan tematik, analisis penggunaan lahan, layout kartografi, dan keluaran geospasial untuk pengambilan keputusan." } },
    { icon: "survey", title: { en: "Land Survey & Geodetic", id: "Survei Tanah & Geodesi" }, description: { en: "GNSS geodetic survey, staking-out, boundary determination, parcel measurement, field data collection, and quality control.", id: "Survei GNSS geodetik, staking-out, penetapan batas, pengukuran bidang, pengumpulan data lapangan, dan kendali mutu." } },
    { icon: "drone", title: { en: "Drone Mapping", id: "Pemetaan Drone" }, description: { en: "Flight operations, aerial data acquisition, orthophoto and DEM production, photogrammetric processing, and field instruction.", id: "Operasi penerbangan, akuisisi data udara, produksi orthophoto dan DEM, pengolahan fotogrametri, serta instruksi lapangan." } },
    { icon: "code", title: { en: "WebGIS Development", id: "Pengembangan WebGIS" }, description: { en: "Interactive spatial products using JavaScript, Leaflet, Laravel/PHP, React, dashboards, databases, and map-based CRUD workflows.", id: "Produk spasial interaktif menggunakan JavaScript, Leaflet, Laravel/PHP, React, dashboard, basis data, dan alur CRUD berbasis peta." } },
    { icon: "satellite", title: { en: "Remote Sensing & GeoAI", id: "Penginderaan Jauh & GeoAI" }, description: { en: "Sentinel-5P analysis, Google Earth Engine, LiDAR processing, land-cover classification, U-Net segmentation, and environmental monitoring.", id: "Analisis Sentinel-5P, Google Earth Engine, pengolahan LiDAR, klasifikasi tutupan lahan, segmentasi U-Net, dan pemantauan lingkungan." } },
    { icon: "database", title: { en: "Spatial Data Management", id: "Manajemen Data Spasial" }, description: { en: "Large-record administration, certificate digitization, database entry, data standardization, documentation, and technical reporting.", id: "Administrasi data skala besar, digitalisasi sertipikat, entri basis data, standardisasi data, dokumentasi, dan pelaporan teknis." } }
  ],
  projects: [
    {
      id: "jagasleman", featured: true, category: "webgis", year: "2026", image: "assets/jagasleman-cover.svg",
      title: "JagaSleman", kicker: { en: "Latest live project", id: "Project live terbaru" },
      description: { en: "My latest web project for Sleman. Open the live website to explore its current product, features, and implementation.", id: "Project web terbaru saya untuk Sleman. Buka situs live untuk melihat produk, fitur, dan implementasi terkininya." },
      tags: ["Live Web", "Sleman", "Digital Product"], live: "https://jagasleman.my.id", source: ""
    },
    {
      id: "sispar-v2", featured: true, category: "webgis", year: "2024", image: "assets/sispar-dashboard.png",
      title: "SISPAR Pacitanku V2", kicker: { en: "Tourism WebGIS & dashboard", id: "WebGIS pariwisata & dashboard" },
      description: { en: "A tourism branding platform combining a landing page, interactive WebGIS, authorization dashboard, map-based data management, and Leaflet integration.", id: "Platform branding pariwisata yang menggabungkan landing page, WebGIS interaktif, dashboard otorisasi, pengelolaan data berbasis peta, dan integrasi Leaflet." },
      tags: ["Laravel", "Leaflet", "JavaScript", "PHP", "Database"], live: "https://amirulash.github.io/Pacitanku/", source: "https://github.com/amirulash/pgwebl_responsi"
    },
    {
      id: "ikn-air", featured: true, category: "remote", year: "2024", image: "assets/no2-tuban.png",
      title: { en: "Deforestation & Air Pollution Analysis", id: "Analisis Deforestasi & Polusi Udara" }, kicker: "Seminar Nasional Geomatika VII",
      description: { en: "Land-cover and air-pollution analysis using Google Earth Engine and Sentinel-5P imagery, including NO₂, CO, SO₂, Pearson correlation, and map-based air-quality interpretation.", id: "Analisis tutupan lahan dan polusi udara menggunakan Google Earth Engine serta citra Sentinel-5P, mencakup NO₂, CO, SO₂, korelasi Pearson, dan interpretasi kualitas udara berbasis peta." },
      tags: ["Google Earth Engine", "Sentinel-5P", "Remote Sensing", "Statistics"], live: "", source: ""
    },
    {
      id: "tuban-mobile", featured: false, category: "webgis", year: "2024", image: "assets/mobile-map-cover.svg",
      title: { en: "Tuban Mosque Map Mobile App", id: "Aplikasi Mobile Peta Masjid Tuban" }, kicker: { en: "React-based mobile GIS", id: "Mobile GIS berbasis React" },
      description: { en: "An interactive spatial application showing mosque distribution in Tuban, with map-based data creation and editing workflows.", id: "Aplikasi spasial interaktif yang menampilkan persebaran masjid di Tuban, dengan alur penambahan dan penyuntingan data langsung pada peta." },
      tags: ["React", "Mobile GIS", "CRUD", "Interactive Map"], live: "", source: ""
    },
    {
      id: "geoai-mine", featured: false, category: "remote", year: "2024", image: "assets/geoai-cover.svg",
      title: { en: "GeoAI Mine Opening Detection", id: "Deteksi Bukaan Tambang dengan GeoAI" }, kicker: { en: "Deep learning for geospatial extraction", id: "Deep learning untuk ekstraksi geospasial" },
      description: { en: "Topographic-map analysis and mining feature extraction using ArcGIS Pro, U-Net classification, large geospatial datasets, and semantic segmentation.", id: "Analisis peta topografi dan ekstraksi fitur pertambangan menggunakan ArcGIS Pro, klasifikasi U-Net, dataset geospasial skala besar, dan segmentasi semantik." },
      tags: ["ArcGIS Pro", "U-Net", "GeoAI", "Semantic Segmentation"], live: "", source: ""
    },
    {
      id: "yia-flowmap", featured: false, category: "mapping", year: "2024", image: "assets/yia-flight-route.jpg",
      title: { en: "YIA Domestic Flight Flow Map", id: "Peta Flow Rute Penerbangan Domestik YIA" }, kicker: { en: "Cartographic visualization", id: "Visualisasi kartografis" },
      description: { en: "A national-scale flow map visualizing domestic flight routes and passenger volumes from Yogyakarta International Airport.", id: "Peta flow skala nasional yang memvisualisasikan rute penerbangan domestik dan volume penumpang dari Yogyakarta International Airport." },
      tags: ["Flow Map", "Cartography", "Thematic Mapping"], live: "", source: ""
    },
    {
      id: "lidar", featured: false, category: "mapping", year: "2023", image: "assets/sispar-map.png",
      title: { en: "LiDAR Processing — Yogyakarta & Gunungkidul", id: "Pengolahan LiDAR — Yogyakarta & Gunungkidul" }, kicker: "Global Mapper 23.0",
      description: { en: "LiDAR point-cloud processing to generate DSM, DTM, terrain profiles, and map products for Yogyakarta City and Panggang, Gunungkidul.", id: "Pengolahan point cloud LiDAR untuk menghasilkan DSM, DTM, profil medan, dan produk peta wilayah Kota Yogyakarta serta Panggang, Gunungkidul." },
      tags: ["LiDAR", "DSM", "DTM", "Point Cloud"], live: "", source: ""
    }
  ],
  experience: [
    {
      organization: "KJSB Afradon Aditya S dan Rekan", location: "Sleman & Purworejo", period: "Sep 2025 — Jul 2026", role: "Surveyor & Geodetic Engineer",
      highlights: {
        en: ["Coordinated land-measurement activities with village authorities and landowners.", "Conducted systematic cadastral surveys, staking-out, boundary determination, and field data collection.", "Digitized land certificates across 34+ villages and managed 35,780+ population and parcel records.", "Standardized maps and produced detailed AutoCAD layouts for 22 villages, with data quality control."],
        id: ["Mengoordinasikan kegiatan pengukuran tanah dengan pemerintah desa dan pemilik lahan.", "Melaksanakan survei kadastral sistematis, staking-out, penetapan batas, dan pengumpulan data lapangan.", "Mendigitalkan sertipikat tanah pada 34+ desa dan mengelola 35.780+ data penduduk serta bidang.", "Menstandarkan peta dan menghasilkan layout AutoCAD terperinci untuk 22 desa disertai kendali mutu data."]
      }
    },
    {
      organization: "Lembaga Pendidikan Perkebunan (LPP)", location: "Sleman, DIY", period: "Dec 2025", role: "Surveyor & Geodetic Engineer",
      highlights: { en: ["Assisted drone operation instruction and flight practice.", "Facilitated hands-on drone mapping and surveying sessions."], id: ["Mendukung pengajaran pengoperasian drone dan praktik penerbangan.", "Memfasilitasi sesi praktik pemetaan drone dan survei."] }
    },
    {
      organization: "KKN-PPM UGM Sabat Pulau Nasi", location: "Aceh Besar, Aceh", period: "Jun — Aug 2025", role: "Team Coordinator",
      highlights: { en: ["Created a tsunami evacuation-route map through geospatial analysis.", "Led drone operations, aerial mapping, documentation, field data collection, and photo processing."], id: ["Menyusun peta jalur evakuasi tsunami melalui analisis geospasial.", "Memimpin operasi drone, pemetaan udara, dokumentasi, pengumpulan data lapangan, dan pengolahan foto."] }
    },
    {
      organization: "BPN East Java Regional Office", location: "Surabaya, East Java", period: "Feb — Jun 2025", role: "GIS Intern — Structuring & Empowerment Division",
      highlights: { en: ["Supported RDTR map development across East Java and analyzed spatial-planning regulations.", "Contributed to PTP technical-guideline revision, Agrarian Reform coordination, thematic maps, ArcMap Add-Ins, and toolboxes."], id: ["Mendukung pengembangan peta RDTR di Jawa Timur dan menganalisis regulasi penataan ruang.", "Berkontribusi pada revisi Juknis PTP, koordinasi Reforma Agraria, peta tematik, ArcMap Add-Ins, dan toolbox."] }
    },
    {
      organization: "BPN Tuban", location: "Tuban, East Java", period: "Dec 2024 — Jan 2025", role: "Intern — Survey & Measurement Division",
      highlights: { en: ["Digitized construction-site projects from aerial photographs in Dasin Village.", "Prepared and updated electronic land-survey certificate data for Kapu and Sumurgeneng villages."], id: ["Mendigitalkan proyek lokasi konstruksi dari foto udara di Desa Dasin.", "Menyiapkan dan memperbarui data sertipikat survei tanah elektronik untuk Desa Kapu dan Sumurgeneng."] }
    },
    {
      organization: "Program Ormawa Membangun Negeri", location: "Ngargosari, Kulon Progo", period: "May — Nov 2024", role: "Head of Team",
      highlights: { en: ["Led partnership, tourism-guide training, MSME digitalization, map-album creation, tourism infrastructure, and WebGIS launch."], id: ["Memimpin kemitraan, pelatihan pemandu wisata, digitalisasi UMKM, penyusunan album peta, infrastruktur wisata, dan peluncuran WebGIS."] }
    },
    {
      organization: "Badan Informasi Geospasial", location: "Yogyakarta", period: "Sep — Oct 2023", role: "Early Stage Assessment Committee",
      highlights: { en: ["Evaluated PetaKita competition teams based on spatial and attribute-data accuracy and assigned assessment scores."], id: ["Mengevaluasi tim kompetisi PetaKita berdasarkan akurasi data spasial dan atribut serta memberikan skor penilaian."] }
    }
  ],
  organizations: [
    { name: "CSSMoRA UGM", role: { en: "Chairman", id: "Ketua Umum" }, period: "2024 — 2025", detail: { en: "Coordinated programs, national collaboration, social service, Qur'an completion events, and cross-department execution.", id: "Mengoordinasikan program, kolaborasi nasional, bakti sosial, khataman Al-Qur'an, dan pelaksanaan lintas departemen." } },
    { name: "KMDTK UGM", role: { en: "Head of Research & Development", id: "Kepala Riset & Pengembangan" }, period: "2023 — 2024", detail: { en: "Organized technical learning, industry visits, CV/LinkedIn mentoring, and Leica geospatial-instrument training.", id: "Mengelola pembelajaran teknis, kunjungan industri, mentoring CV/LinkedIn, dan pelatihan instrumen geospasial Leica." } },
    { name: "Komunitas Geosains UGM", role: { en: "Treasurer", id: "Bendahara" }, period: "2023 — 2024", detail: { en: "Managed a 10.5 million IDR budget, competition funding, expense records, and accountability reporting.", id: "Mengelola anggaran Rp10,5 juta, pendanaan kompetisi, pencatatan pengeluaran, dan laporan pertanggungjawaban." } },
    { name: "UPII UGM", role: { en: "Competition & Achievement Staff", id: "Staf Kompetisi & Prestasi" }, period: "2022 — 2024", detail: { en: "Supported business-plan training, national competitions, vendor coordination, and event delivery.", id: "Mendukung pelatihan business plan, kompetisi nasional, koordinasi vendor, dan pelaksanaan acara." } }
  ],
  achievements: [
    { year: "2024", title: { en: "Selected Geomatics Seminar Proceeding", id: "Prosiding Terpilih Seminar Geomatika" }, description: { en: "Research on changes in air-pollutant concentration associated with deforestation in Indonesia's new capital area.", id: "Riset perubahan konsentrasi polutan udara yang berkaitan dengan deforestasi di kawasan Ibu Kota Nusantara." } },
    { year: "2023", title: { en: "GIS Competition Finalist", id: "Finalis GIS Competition" }, description: { en: "Carbon-stock estimation using linear regression on multispectral imagery in the Mount Salakan mining expansion area.", id: "Estimasi stok karbon dengan regresi linear pada citra multispektral di area perluasan tambang Gunung Salakan." } },
    { year: "2023", title: { en: "Student Judge — PetaKita Application Competition", id: "Juri Mahasiswa — Kompetisi Aplikasi PetaKita" }, description: { en: "Assessed spatial and attribute-data quality in a competition organized by Badan Informasi Geospasial.", id: "Menilai kualitas data spasial dan atribut pada kompetisi yang diselenggarakan Badan Informasi Geospasial." } },
    { year: "2022", title: { en: "Santri Achievement Scholarship Awardee", id: "Penerima Beasiswa Santri Berprestasi" }, description: { en: "Scholarship awarded by the Ministry of Religious Affairs of the Republic of Indonesia.", id: "Beasiswa yang diberikan oleh Kementerian Agama Republik Indonesia." } },
    { year: "2022", title: { en: "1st Place — East Java High School Science Competition", id: "Juara 1 Kompetisi Sains SMA Jawa Timur" }, description: { en: "Award from the East Java Education Service.", id: "Penghargaan dari Dinas Pendidikan Jawa Timur." } },
    { year: "2022", title: { en: "1st Runner-Up — UNY National Geography Competition", id: "Juara 2 Kompetisi Geografi Nasional UNY" }, description: { en: "National-level geography competition achievement.", id: "Prestasi kompetisi geografi tingkat nasional." } }
  ],
  education: [
    { school: "Universitas Gadjah Mada", program: { en: "Applied Bachelor's Degree in Geographic Information Systems", id: "Sarjana Terapan Sistem Informasi Geografis" }, period: "Aug 2022 — Aug 2026 (expected)", note: { en: "Cumulative GPA 3.64/4.00 • 145 credits", id: "IPK kumulatif 3,64/4,00 • 145 SKS" } },
    { school: "SMA Plus Ar-Rahmat Bojonegoro", program: { en: "Senior High School — Science", id: "Sekolah Menengah Atas — IPA" }, period: "Aug 2019 — Aug 2022", note: { en: "Science and geography competition achievements", id: "Prestasi kompetisi sains dan geografi" } }
  ],
  skills: {
    technical: ["Land Survey", "GNSS Geodetic", "Staking Out", "AutoCAD Map 3D", "ArcGIS Pro", "ArcMap", "QGIS", "Google Earth Engine", "Remote Sensing", "Drone Pilot", "Photogrammetry", "LiDAR", "DSM / DTM", "WebGIS", "Leaflet", "JavaScript", "Laravel", "PHP", "React", "Spatial Database", "GeoAI", "Spatial Statistics"],
    soft: ["Leadership", "Communication", "Public Speaking", "Teamwork", "Critical Thinking", "Stakeholder Coordination", "Technical Documentation"],
    languages: ["Indonesian — Native", "English — Intermediate", "Arabic"]
  }
};
