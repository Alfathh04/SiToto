// Pure JavaScript for Standalone Export Portfolio

document.addEventListener('DOMContentLoaded', () => {

  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  const roles = [
    'Full-Stack Web Developer',
    'Siswa RPL SMK Impian',
    'React & Node.js Specialist',
    'Software Engineer Aspirant'
  ];

  const typewriterEl = document.getElementById('typewriter');
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function typeText() {
    if (!typewriterEl) return;
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typewriterEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      typewriterEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
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

  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formStatus) {
        formStatus.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => {
          formStatus.classList.add('hidden');
        }, 5000);
      }
    });
  }

});
