// Pure JavaScript (Vanilla JS) for Royal Kingdom Portfolio

document.addEventListener('DOMContentLoaded', () => {

  // DEFAULT PORTFOLIO DATA
  const portfolioData = {
    profile: {
      name: "Taqi Alfaht",
      title: "Future Software Engineer",
      subTitle: "Siswa SMK Rekayasa Perangkat Lunak",
      statusBadge: "ROYAL KINGDOM EDITION • SOFTWARE ENGINEER RPL",
      aboutHeader: "Membangun Masa Depan Melalui Arsitektur Software Modern",
      aboutBio: "Saya merupakan siswa SMK jurusan Rekayasa Perangkat Lunak (RPL) dengan passion mendalam dalam membangun aplikasi web modern, sistem backend terstruktur, dan antarmuka pengguna bergaya luxury modern.",
      email: "taqialfahtt29@gmail.com",
      whatsapp: "6281234567890",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
      stats: { projects: 15, skills: 12, certificates: 8, experienceYears: 3 }
    },
    skills: [
      { id: "sk-1", name: "React & Next.js", category: "frontend", level: 90, desc: "Komponen modern, state management & SSR." },
      { id: "sk-2", name: "TypeScript & JavaScript", category: "frontend", level: 88, desc: "Static typing, ES6+ & type safety." },
      { id: "sk-3", name: "Tailwind CSS & Styling", category: "frontend", level: 95, desc: "Glassmorphism, responsive layout & custom theme." },
      { id: "sk-4", name: "Node.js & Express API", category: "backend", level: 85, desc: "RESTful API development, JWT & middleware." },
      { id: "sk-5", name: "PHP & Laravel Framework", category: "backend", level: 82, desc: "MVC architecture, Eloquent ORM & Blade." },
      { id: "sk-6", name: "MySQL & PostgreSQL", category: "database", level: 85, desc: "Relational DB design, query optimization & SQL." },
      { id: "sk-7", name: "Git & GitHub DevOps", category: "tools", level: 90, desc: "Version control system, branching & CI/CD." },
      { id: "sk-8", name: "Java Desktop Swing", category: "backend", level: 78, desc: "Aplikasi OOP desktop dengan database SQL." },
      { id: "sk-9", name: "Figma UI/UX Design", category: "tools", level: 88, desc: "Prototyping, wireframing & dark glassmorphism." }
    ],
    projects: [
      {
        id: "proj-1",
        title: "Aura Portal - Website Sekolah Modern",
        category: "website",
        description: "Portal digital sekolah interaktif dengan sistem berita, pengumuman, dan galeri siswa.",
        tags: ["React 19", "Tailwind CSS", "TypeScript"],
        imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
        githubUrl: "https://github.com/taqialfaht/school-portal",
        demoUrl: "https://example.com/demo-sekolah",
        features: ["Responsive Mobile Layout", "Filter Pengumuman Kilat", "Formulir PPDB Online"]
      },
      {
        id: "proj-2",
        title: "Royal Gourmet - Premium Cafe & Bistro",
        category: "website",
        description: "Landing page luxury bistro dengan menu interaktif dan reservasi meja online.",
        tags: ["React", "Glassmorphism", "Tailwind"],
        imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
        githubUrl: "https://github.com/taqialfaht/cafe-bistro-app",
        demoUrl: "https://example.com/demo-cafe",
        features: ["Menu Digital Interaktif", "Form Reservasi Meja", "Gold Theme Visuals"]
      },
      {
        id: "proj-3",
        title: "Aura Control - Admin Dashboard POS",
        category: "dashboard",
        description: "Sistem manajemen stok inventaris, grafik penjualan, dan multi-role permission.",
        tags: ["PHP 8", "MySQL", "Chart.js"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        githubUrl: "https://github.com/taqialfaht/admin-dashboard",
        demoUrl: "https://example.com/demo-dashboard",
        features: ["Grafik Real-Time", "Export Laporan PDF/Excel", "Role Permission Kasir"]
      },
      {
        id: "proj-4",
        title: "DigiLib - Perpustakaan Digital Sekolah",
        category: "fullstack",
        description: "Aplikasi manajemen peminjaman buku, denda otomatis, dan katalog digital.",
        tags: ["Laravel 11", "MySQL", "Tailwind"],
        imageUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800",
        githubUrl: "https://github.com/taqialfaht/digilib",
        demoUrl: "https://example.com/demo-digilib",
        features: ["Pencarian Katalog Cepat", "Kalkulasi Denda Otomatis", "Pencetakan Barcode"]
      }
    ],
    experiences: [
      {
        title: "Praktik Kerja Lapangan (PKL)",
        role: "Software Development Intern",
        period: "2025 - Present",
        desc: "Mengembangkan aplikasi web internal perusahaan, slicing UI dari Figma, dan pengujian REST API.",
        highlights: ["Slicing 5+ halaman web", "Meningkatkan kecepatan loading web hingga 95+"]
      },
      {
        title: "Freelance Web Developer",
        role: "Full-Stack Web Craftsman",
        period: "2024 - Present",
        desc: "Menerima pembuatan landing page UMKM, website profil sekolah, dan sistem kasir lokal.",
        highlights: ["10+ Proyek Web Selesai", "Kepuasan Klien 100%"]
      }
    ],
    certificates: [
      {
        title: "Full-Stack Web Development Mastery",
        issuer: "Digital Technology Academy",
        date: "2025",
        icon: "🏅"
      },
      {
        title: "Sertifikat Kompetensi Keahlian RPL SMK",
        issuer: "BNSP / Kementrian Pendidikan",
        date: "2025",
        icon: "📜"
      },
      {
        title: "React & Modern Front-End Architecture",
        issuer: "Global Software Institute",
        date: "2024",
        icon: "⚛️"
      }
    ]
  };

  // LOAD FROM LOCAL STORAGE IF AVAILABLE
  const savedProfile = localStorage.getItem('my_royal_profile');
  if (savedProfile) {
    try {
      portfolioData.profile = { ...portfolioData.profile, ...JSON.parse(savedProfile) };
    } catch (e) { console.error('Error parsing local profile', e); }
  }

  // UPDATE DOM WITH PROFILE
  function updateProfileDOM() {
    const p = portfolioData.profile;
    document.getElementById('hero-name').textContent = p.name;
    document.getElementById('hero-title').textContent = p.subTitle;
    document.getElementById('hero-bio').textContent = p.aboutBio;
    document.getElementById('hero-avatar').src = p.avatarUrl;
    document.getElementById('contact-email').textContent = p.email;
    document.getElementById('contact-wa').textContent = p.whatsapp;
    document.getElementById('footer-name').textContent = `MY PORTOFOLIO • ${p.name}`;
  }

  updateProfileDOM();

  // TYPEWRITER ANIMATION
  const roles = [
    'Full-Stack Web Developer',
    'Siswa RPL SMK Impian',
    'React & Node.js Specialist',
    'Software Engineer Aspirant'
  ];
  let roleIdx = 0, charIdx = 0, isDeleting = false;
  const typewriterEl = document.getElementById('typewriter');

  function typeText() {
    if (!typewriterEl) return;
    const current = roles[roleIdx];
    typewriterEl.textContent = isDeleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
    charIdx = isDeleting ? charIdx - 1 : charIdx + 1;

    let speed = isDeleting ? 40 : 80;
    if (!isDeleting && charIdx === current.length) {
      speed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      speed = 500;
    }
    setTimeout(typeText, speed);
  }
  typeText();

  // RENDER SKILLS
  function renderSkills(categoryFilter = 'all') {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = '';

    const filtered = categoryFilter === 'all' 
      ? portfolioData.skills 
      : portfolioData.skills.filter(s => s.category === categoryFilter);

    filtered.forEach(s => {
      const card = document.createElement('div');
      card.className = 'royal-glass p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 transition-all';
      card.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-amber-300 text-sm">${s.name}</span>
          <span class="text-xs font-mono text-amber-400">${s.level}%</span>
        </div>
        <p class="text-[11px] text-slate-400 mb-3">${s.desc}</p>
        <div class="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
          <div class="h-full gold-gradient-bg rounded-full transition-all duration-1000" style="width: ${s.level}%"></div>
        </div>
      `;
      container.appendChild(card);
    });
  }
  renderSkills();

  // SKILL FILTER LISTENERS
  document.querySelectorAll('.skill-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.skill-filter-btn').forEach(b => {
        b.className = 'skill-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white/5 text-slate-300 hover:text-amber-300';
      });
      e.target.className = 'skill-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
      renderSkills(e.target.getAttribute('data-cat'));
    });
  });

  // RENDER PROJECTS
  function renderProjects(categoryFilter = 'all') {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';

    const filtered = categoryFilter === 'all' 
      ? portfolioData.projects 
      : portfolioData.projects.filter(p => p.category === categoryFilter);

    filtered.forEach(p => {
      const card = document.createElement('div');
      card.className = 'royal-glass rounded-3xl overflow-hidden border border-amber-500/20 group hover:border-amber-400/60 transition-all flex flex-col justify-between';
      card.innerHTML = `
        <div>
          <div class="relative h-48 overflow-hidden">
            <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-amber-400/40 text-xs font-bold text-amber-300 uppercase">
              ${p.category}
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold font-cinzel text-slate-100 group-hover:text-amber-300 transition-colors">${p.title}</h3>
            <p class="text-slate-300 text-xs mt-2 leading-relaxed">${p.description}</p>
            <div class="flex flex-wrap gap-2 mt-4">
              ${p.tags.map(t => `<span class="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300">${t}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="p-6 pt-0">
          <button data-proj-id="${p.id}" class="open-proj-modal-btn w-full py-2.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold text-xs border border-amber-500/30 transition-all">
            Lihat Detail Proyek
          </button>
        </div>
      `;
      container.appendChild(card);
    });

    // Attach click event for detail modals
    document.querySelectorAll('.open-proj-modal-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.target.getAttribute('data-proj-id');
        const proj = portfolioData.projects.find(x => x.id === projId);
        if (proj) openProjectModal(proj);
      });
    });
  }
  renderProjects();

  // PROJECT FILTER LISTENERS
  document.querySelectorAll('.project-filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.project-filter-btn').forEach(b => {
        b.className = 'project-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-white/5 text-slate-300 hover:text-amber-300';
      });
      e.target.className = 'project-filter-btn px-4 py-2 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40';
      renderProjects(e.target.getAttribute('data-cat'));
    });
  });

  // PROJECT MODAL HANDLER
  function openProjectModal(proj) {
    document.getElementById('modal-proj-title').textContent = proj.title;
    document.getElementById('modal-proj-img').src = proj.imageUrl;
    document.getElementById('modal-proj-desc').textContent = proj.description;
    
    const featList = document.getElementById('modal-proj-features');
    featList.innerHTML = (proj.features || []).map(f => `<li>${f}</li>`).join('');

    document.getElementById('modal-proj-github').href = proj.githubUrl || '#';
    document.getElementById('modal-proj-demo').href = proj.demoUrl || '#';

    document.getElementById('project-modal').classList.remove('hidden');
    document.getElementById('project-modal').classList.add('flex');
  }

  document.getElementById('close-project-modal-btn')?.addEventListener('click', () => {
    document.getElementById('project-modal').classList.add('hidden');
    document.getElementById('project-modal').classList.remove('flex');
  });

  // RENDER EXPERIENCES
  function renderExperiences() {
    const container = document.getElementById('experience-container');
    if (!container) return;
    container.innerHTML = '';

    portfolioData.experiences.forEach(e => {
      const card = document.createElement('div');
      card.className = 'royal-glass p-6 sm:p-8 rounded-3xl border border-amber-500/20 relative pl-8 border-l-4 border-l-amber-400';
      card.innerHTML = `
        <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
          <h3 class="text-lg font-bold font-cinzel text-amber-300">${e.title}</h3>
          <span class="text-xs font-mono text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">${e.period}</span>
        </div>
        <p class="text-xs font-semibold text-amber-200/90 mb-2">${e.role}</p>
        <p class="text-xs text-slate-300 leading-relaxed mb-3">${e.desc}</p>
        <ul class="list-disc list-inside text-[11px] text-slate-400 space-y-1">
          ${e.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      `;
      container.appendChild(card);
    });
  }
  renderExperiences();

  // RENDER CERTIFICATES
  function renderCertificates() {
    const container = document.getElementById('certificates-container');
    if (!container) return;
    container.innerHTML = '';

    portfolioData.certificates.forEach(c => {
      const card = document.createElement('div');
      card.className = 'royal-glass p-6 rounded-2xl border border-amber-500/20 flex items-start gap-4 hover:border-amber-400/50 transition-all';
      card.innerHTML = `
        <div class="text-3xl p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">${c.icon}</div>
        <div>
          <h4 class="font-bold text-amber-300 text-sm font-cinzel">${c.title}</h4>
          <span class="text-[11px] text-slate-400 block mt-0.5">${c.issuer}</span>
          <span class="text-[10px] font-mono text-amber-400 block mt-1">Tahun: ${c.date}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }
  renderCertificates();

  // MOBILE MENU TOGGLE
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-menu');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
    mobileDrawer.querySelectorAll('a').forEach(l => {
      l.addEventListener('click', () => mobileDrawer.classList.add('hidden'));
    });
  }

  // AI COPILOT CHAT MODAL
  const aiModal = document.getElementById('ai-modal');
  const openAiBtn = document.getElementById('open-ai-copilot-btn');
  const closeAiBtn = document.getElementById('close-ai-modal-btn');
  const aiForm = document.getElementById('ai-chat-form');
  const aiInput = document.getElementById('ai-input');
  const aiMessages = document.getElementById('ai-chat-messages');

  if (openAiBtn && aiModal) {
    openAiBtn.addEventListener('click', () => {
      aiModal.classList.remove('hidden');
      aiModal.classList.add('flex');
    });
  }

  if (closeAiBtn && aiModal) {
    closeAiBtn.addEventListener('click', () => {
      aiModal.classList.add('hidden');
      aiModal.classList.remove('flex');
    });
  }

  if (aiForm) {
    aiForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const userText = aiInput.value.trim();
      if (!userText) return;

      // Append user msg
      const userMsg = document.createElement('div');
      userMsg.className = 'bg-amber-500 text-black font-semibold p-3 rounded-2xl max-w-[85%] ml-auto text-right';
      userMsg.textContent = userText;
      aiMessages.appendChild(userMsg);
      aiInput.value = '';
      aiMessages.scrollTop = aiMessages.scrollHeight;

      // Loading bubble
      const loadingMsg = document.createElement('div');
      loadingMsg.className = 'bg-amber-500/10 border border-amber-500/20 text-slate-200 p-3 rounded-2xl max-w-[85%] animate-pulse';
      loadingMsg.textContent = '🤖 Mengontak AI Copilot...';
      aiMessages.appendChild(loadingMsg);
      aiMessages.scrollTop = aiMessages.scrollHeight;

      try {
        const res = await fetch('/api/ai/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userText, profileData: portfolioData.profile })
        });
        const data = await res.json();
        loadingMsg.textContent = data.reply || 'Maaf, terjadi masalah saat memproses AI.';
        loadingMsg.classList.remove('animate-pulse');
      } catch (err) {
        loadingMsg.textContent = 'Aura Royal Copilot siap membantu! Saya siap menjawab seputar karya & kualifikasi RPL sang pengembang.';
        loadingMsg.classList.remove('animate-pulse');
      }
      aiMessages.scrollTop = aiMessages.scrollHeight;
    });
  }

  // STUDIO CUSTOMIZER MODAL
  const custModal = document.getElementById('customizer-modal');
  const openCustBtn = document.getElementById('open-customizer-btn');
  const closeCustBtn = document.getElementById('close-customizer-modal-btn');

  if (openCustBtn && custModal) {
    openCustBtn.addEventListener('click', () => {
      document.getElementById('cust-name').value = portfolioData.profile.name;
      document.getElementById('cust-title').value = portfolioData.profile.subTitle;
      document.getElementById('cust-bio').value = portfolioData.profile.aboutBio;
      document.getElementById('cust-avatar').value = portfolioData.profile.avatarUrl;

      custModal.classList.remove('hidden');
      custModal.classList.add('flex');
    });
  }

  if (closeCustBtn && custModal) {
    closeCustBtn.addEventListener('click', () => {
      custModal.classList.add('hidden');
      custModal.classList.remove('flex');
    });
  }

  // Customizer Tabs
  const tabProfile = document.getElementById('cust-tab-profile');
  const tabExport = document.getElementById('cust-tab-export');
  const panelProfile = document.getElementById('cust-panel-profile');
  const panelExport = document.getElementById('cust-panel-export');

  if (tabProfile && tabExport) {
    tabProfile.addEventListener('click', () => {
      tabProfile.className = 'px-3 py-2 font-bold text-amber-300 border-b-2 border-amber-400';
      tabExport.className = 'px-3 py-2 font-bold text-slate-400 hover:text-amber-300';
      panelProfile.classList.remove('hidden');
      panelExport.classList.add('hidden');
    });

    tabExport.addEventListener('click', () => {
      tabExport.className = 'px-3 py-2 font-bold text-amber-300 border-b-2 border-amber-400';
      tabProfile.className = 'px-3 py-2 font-bold text-slate-400 hover:text-amber-300';
      panelExport.classList.remove('hidden');
      panelProfile.classList.add('hidden');
    });
  }

  // Save Profile Live
  document.getElementById('save-cust-profile-btn')?.addEventListener('click', () => {
    portfolioData.profile.name = document.getElementById('cust-name').value;
    portfolioData.profile.subTitle = document.getElementById('cust-title').value;
    portfolioData.profile.aboutBio = document.getElementById('cust-bio').value;
    portfolioData.profile.avatarUrl = document.getElementById('cust-avatar').value;

    localStorage.setItem('my_royal_profile', JSON.stringify(portfolioData.profile));
    updateProfileDOM();

    alert('✅ Data Profil berhasil diperbarui secara Live!');
    custModal.classList.add('hidden');
  });

  // DOWNLOAD HELPER FOR EXPORT
  function downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  document.getElementById('download-html-btn')?.addEventListener('click', () => {
    const htmlContent = document.documentElement.outerHTML;
    downloadFile('index.html', htmlContent, 'text/html');
  });

  document.getElementById('download-css-btn')?.addEventListener('click', () => {
    const cssContent = `/* Pure CSS3 Stylesheet */
.gold-gradient-text { background: linear-gradient(135deg, #fffbeb, #eab308, #b45309); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.royal-glass { background: rgba(13, 13, 20, 0.75); backdrop-filter: blur(16px); }`;
    downloadFile('style.css', cssContent, 'text/css');
  });

  document.getElementById('download-js-btn')?.addEventListener('click', () => {
    const jsContent = `console.log("MY PORTOFOLIO Loaded");`;
    downloadFile('script.js', jsContent, 'text/javascript');
  });

  // CONTACT FORM SUBMISSION
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => formStatus.classList.add('hidden'), 5000);
      }
    });
  }

});
