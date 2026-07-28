import { ProfileData, SkillItem, ProjectItem, ExperienceItem, CertificateItem } from '../types';

export const defaultProfileData: ProfileData = {
  name: "Taqi Alfaht",
  title: "Future Software Engineer",
  subTitle: "Siswa SMK Rekayasa Perangkat Lunak",
  statusBadge: "👑 Royal Kingdom Edition • Software Engineer RPL",
  aboutHeader: "Membangun Masa Depan Melalui Arsitektur Software Modern",
  aboutBio: "Saya merupakan siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) dengan passion mendalam dalam membangun aplikasi web modern, sistem backend terstruktur, dan antarmuka pengguna bergaya luxury modern. Terbiasa menggunakan React, TypeScript, Node.js, PHP/Laravel, dan Tailwind CSS.",
  email: "taqialfahtt29@gmail.com",
  whatsapp: "6281234567890",
  instagram: "https://instagram.com/taqialfaht",
  linkedin: "https://linkedin.com/in/taqialfaht",
  github: "https://github.com/taqialfaht",
  cvUrl: "#",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  stats: {
    projects: 15,
    skills: 12,
    certificates: 8,
    experienceYears: 3,
  },
};

export const defaultSkills: SkillItem[] = [
  {
    id: "sk-1",
    name: "React & Next.js",
    category: "frontend",
    level: 90,
    iconName: "Code2",
    description: "Komponen modern, state management, hooks & Server-Side Rendering.",
    tags: ["Frontend", "SPA", "SSR"],
  },
  {
    id: "sk-2",
    name: "TypeScript",
    category: "frontend",
    level: 88,
    iconName: "FileCode",
    description: "Static typing, generics, strict type safety untuk aplikasi skala besar.",
    tags: ["Type-Safe", "Core"],
  },
  {
    id: "sk-3",
    name: "Tailwind CSS & Motion",
    category: "frontend",
    level: 95,
    iconName: "Palette",
    description: "Glassmorphism, animasi fluid, responsive layout & custom design system.",
    tags: ["Styling", "UI/UX"],
  },
  {
    id: "sk-4",
    name: "Node.js & Express",
    category: "backend",
    level: 85,
    iconName: "Server",
    description: "RESTful API development, JWT authentication, & middleware routing.",
    tags: ["Backend", "API"],
  },
  {
    id: "sk-5",
    name: "PHP & Laravel",
    category: "backend",
    level: 82,
    iconName: "Terminal",
    description: "MVC architecture, Blade engine, Eloquent ORM & secure authentication.",
    tags: ["Backend", "Framework"],
  },
  {
    id: "sk-6",
    name: "MySQL & PostgreSQL",
    category: "database",
    level: 85,
    iconName: "Database",
    description: "Relational database design, query optimization, indexing & foreign keys.",
    tags: ["Database", "SQL"],
  },
  {
    id: "sk-7",
    name: "Git & GitHub",
    category: "tools",
    level: 90,
    iconName: "GitBranch",
    description: "Version control system, branching workflow, pull requests & CI/CD.",
    tags: ["Tools", "DevOps"],
  },
  {
    id: "sk-8",
    name: "Java Desktop App",
    category: "backend",
    level: 78,
    iconName: "Cpu",
    description: "Aplikasi desktop berorientasi objek dengan Swing/JavaFX & MySQL.",
    tags: ["Desktop", "OOP"],
  },
  {
    id: "sk-9",
    name: "Figma UI/UX Design",
    category: "design",
    level: 88,
    iconName: "Layout",
    description: "Prototyping, design system, component variants & dark glassmorphism.",
    tags: ["Design", "Wireframe"],
  },
  {
    id: "sk-10",
    name: "REST API Integration",
    category: "backend",
    level: 92,
    iconName: "Globe",
    description: "Konsumsi API pihak ketiga, Gemini AI integration, Axios & Fetch API.",
    tags: ["Integration", "HTTP"],
  },
  {
    id: "sk-11",
    name: "Responsive Mobile-First",
    category: "frontend",
    level: 95,
    iconName: "Smartphone",
    description: "Desain adaptif dari layar smartphone hingga ultra-wide display.",
    tags: ["Mobile-First", "UX"],
  },
  {
    id: "sk-12",
    name: "Docker & Cloud Deploy",
    category: "tools",
    level: 75,
    iconName: "Cloud",
    description: "Containerization, Cloud Run, Vercel & environment variables management.",
    tags: ["Deployment", "Cloud"],
  },
];

export const defaultProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Aura Portal - Website Sekolah Modern",
    category: "website",
    description: "Portal digital sekolah interaktif dengan sistem berita, pengumuman, dan galeri siswa berbasis React.",
    longDescription: "Aplikasi portal profil sekolah modern dengan arsitektur SPA yang cepat, SEO-friendly, dilengkapi fitur berita real-time, filter jurusan RPL, jadwal kegiatan, dan form pendaftaran calon siswa online.",
    tags: ["React 19", "Tailwind CSS", "TypeScript", "Vite"],
    icon: "🌐",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/taqialfaht/school-portal",
    demoUrl: "https://example.com/demo-sekolah",
    featured: true,
    features: [
      "Responsive Layout Mobile-First",
      "Sistem Filter Pengumuman & Berita",
      "Galeri Foto Prestasi Interaktif",
      "Formulir Kontak & PPDB Online"
    ]
  },
  {
    id: "proj-2",
    title: "Royal Gourmet - Premium Cafe & Bistro",
    category: "website",
    description: "Landing page luxury bistro dengan menu interaktif, reservasi meja, dan efek parallax glassmorphism.",
    longDescription: "Website restoran dan cafe eksklusif yang dirancang dengan estetika glassmorphic dark mode, animasi smooth scroll, galeri menu makanan & minuman interaktif, serta form reservasi meja dengan kalkulasi harga otomatis.",
    tags: ["React", "Framer Motion", "Tailwind CSS"],
    icon: "☕",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/taqialfaht/cafe-bistro-app",
    demoUrl: "https://example.com/demo-cafe",
    featured: true,
    features: [
      "Menu Digital Interaktif berdasarkan Kategori",
      "Reservasi Meja Online dengan Konfirmasi Instant",
      "Visual Glassmorphism & Gold Accent Theme"
    ]
  },
  {
    id: "proj-3",
    title: "Aura Control - Admin Dashboard System",
    category: "dashboard",
    description: "Sistem manajemen data inventaris, statistik penjualan, dan user role permission berbasis PHP & MySQL.",
    longDescription: "Panel admin komprehensif untuk pengelolaan stok barang, laporan keuangan grafik real-time dengan Chart.js, ekspor data PDF/Excel, dan otentikasi bertingkat (Super Admin, Operator, Kasir).",
    tags: ["PHP 8", "MySQL", "Chart.js", "Bootstrap 5"],
    icon: "📊",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/taqialfaht/admin-dashboard-system",
    demoUrl: "https://example.com/demo-dashboard",
    featured: true,
    features: [
      "Grafik Analytics Real-Time",
      "Export Laporan Laba Rugi PDF/Excel",
      "Role Management & Activity Logs"
    ]
  },
  {
    id: "proj-4",
    title: "Royal Portfolio - High-End Engineer Showcase",
    category: "website",
    description: "Website portofolio interaktif versi glassmorphic gold kingdom dengan AI Copilot integration.",
    longDescription: "Portofolio kelas dunia khusus Software Engineer dan siswa RPL yang menginginkan tampilan premium. Dilengkapi dengan live theme customizer, AI profile builder, dan modal detail project.",
    tags: ["React 19", "Tailwind CSS v4", "Gemini AI", "Express"],
    icon: "💼",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/taqialfaht/royal-portfolio",
    demoUrl: "#",
    featured: true,
    features: [
      "AI Copilot Chat Assistant",
      "Portfolio Customizer Studio Live",
      "Filter & Search Proyek Kilat"
    ]
  },
  {
    id: "proj-5",
    title: "DigiLib - Perpustakaan Digital Sekolah",
    category: "fullstack",
    description: "Aplikasi manajemen peminjaman buku, denda otomatis, dan sistem pencarian catalog terpadu.",
    longDescription: "Platform perpustakaan digital untuk memudahkan siswa dan pustakawan mengelola peminjaman, pengembalian, perpanjangan buku, serta sistem scan barcode ID anggota.",
    tags: ["Laravel 11", "MySQL", "Tailwind CSS"],
    icon: "📚",
    imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/taqialfaht/digilib-school",
    demoUrl: "https://example.com/demo-digilib",
    features: [
      "Pencarian Katalog Buku Cepat",
      "Kalkulasi Denda Keterlambatan Otomatis",
      "Riwayat Peminjaman Siswa"
    ]
  },
  {
    id: "proj-6",
    title: "POS Kasir Pro - Java Desktop Application",
    category: "desktop",
    description: "Aplikasi kasir minimarket desktop berbasis Java dengan pencetakan struk termal dan database MySQL.",
    longDescription: "Software Point of Sale (POS) dekstop yang stabil dan responsif untuk transaksi penjualan toko, pengelolaan stok barang, serta laporan pendapatan harian.",
    tags: ["Java", "Swing", "MySQL", "JasperReports"],
    icon: "🖥️",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0a670f4a4591?auto=format&fit=crop&q=80&w=800",
    githubUrl: "https://github.com/taqialfaht/java-pos-desktop",
    demoUrl: "https://example.com/demo-pos",
    features: [
      "Integrasi Thermal Printer Struk",
      "Sistem Diskon & Promo Barang",
      "Backup & Restore Database SQL"
    ]
  }
];

export const defaultExperiences: ExperienceItem[] = [
  {
    id: "exp-1",
    title: "Praktik Kerja Lapangan (PKL)",
    role: "Software Development Intern",
    period: "2025 - Present",
    description: "Mengembangkan aplikasi web internal perusahaan, melakukan slicing UI dari Figma ke React/Tailwind, dan mengoptimalkan performa REST API.",
    highlights: [
      "Mengembangkan 3 modul web aplikasi internal dengan React & Express",
      "Memperbaiki bug dan meningkatkan skor Google Lighthouse hingga 95+",
      "Berkolaborasi dalam tim Agile/Scrum dengan Git version control"
    ],
    type: "internship"
  },
  {
    id: "exp-2",
    title: "Freelance Web Developer",
    role: "Frontend & Full-Stack Craftsman",
    period: "2024 - Present",
    description: "Menerima pembuatan landing page UMKM, website profil sekolah, dan sistem kasir web sesuai kebutuhan klien lokal.",
    highlights: [
      "Menyelesaikan 10+ proyek web dengan tingkat kepuasan klien 100%",
      "Mengintegrasikan payment gateway & WhatsApp notification system"
    ],
    type: "freelance"
  },
  {
    id: "exp-3",
    title: "Komunitas IT & RPL SMK",
    role: "Koordinator Tim Web Development",
    period: "2023 - 2025",
    description: "Memimpin sesi sharing coding untuk adek kelas, menyelenggarakan workshop HTML/CSS/JS, dan membangun proyek kolaborasi.",
    highlights: [
      "Mengedukasi 50+ siswa junior mengenai dasar web development modern",
      "Merancang kurikulum belajar santai tapi terstruktur"
    ],
    type: "community"
  },
  {
    id: "exp-4",
    title: "Lomba Web Design & RPL Tech",
    role: "Peserta & Finalis Terbaik",
    period: "2024",
    description: "Mengikuti kompetisi desain dan pembuatan web tingkat daerah dengan fokus pada aksesibilitas, performa, dan inovasi UI/UX.",
    highlights: [
      "Meraih Juara 2 Kategori Web Design Student Challenge",
      "Membuat prototype aplikasi pencarian magang SMK dalam waktu 8 jam"
    ],
    type: "competition"
  }
];

export const defaultCertificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Full-Stack Web Development Mastery",
    issuer: "Digital Technology Academy",
    date: "2025",
    icon: "🏅",
    imageUrl: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#"
  },
  {
    id: "cert-2",
    title: "React & Modern Front-End Architecture",
    issuer: "Global Software Institute",
    date: "2024",
    icon: "⚛️",
    imageUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#"
  },
  {
    id: "cert-3",
    title: "PHP Laravel & MySQL Database Certification",
    issuer: "Indonesian Developer Network",
    date: "2024",
    icon: "🐘",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#"
  },
  {
    id: "cert-4",
    title: "UI/UX Design & Prototyping Essentials",
    issuer: "Creative Design Guild",
    date: "2024",
    icon: "🎨",
    imageUrl: "https://images.unsplash.com/photo-1542744094-3a31b272c490?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#"
  },
  {
    id: "cert-5",
    title: "Sertifikat Kompetensi Keahlian RPL SMK",
    issuer: "BNSP / Kementrian Pendidikan",
    date: "2025",
    icon: "📜",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#"
  },
  {
    id: "cert-6",
    title: "Git & Version Control Collaboration",
    issuer: "Open Source Tech Forum",
    date: "2023",
    icon: "🔀",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    credentialUrl: "#"
  }
];
