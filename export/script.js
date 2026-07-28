// Pure JavaScript for Standalone Export Portfolio

document.addEventListener('DOMContentLoaded', () => {

  // Mobile Menu Toggle
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

  // Typewriter Role Effect
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

  // Contact Form Submission
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

  // Navbar Scroll Glow Effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-[0_4px_30px_rgba(212,175,55,0.15)]');
    } else {
      navbar.classList.remove('shadow-[0_4px_30px_rgba(212,175,55,0.15)]');
    }
  });

});
const glow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});
/* ==========================================
   PREMIUM TILTED CARD
========================================== */

const tiltedCard = document.querySelector(".card");
const tooltip = document.querySelector(".tooltip");

if (tiltedCard) {

    const maxRotate = 14;

    let currentX = 0;
    let currentY = 0;

    let targetX = 0;
    let targetY = 0;

    function animate() {

        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;

        tiltedCard.style.transform =
        `
        rotateX(${currentY}deg)
        rotateY(${currentX}deg)
        scale(1.04)
        `;

        requestAnimationFrame(animate);

    }

    animate();

    tiltedCard.addEventListener("mousemove", function(e){

        const rect = tiltedCard.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        targetX = ((x - centerX) / centerX) * maxRotate;

        targetY = -((y - centerY) / centerY) * maxRotate;

        tooltip.style.left = x + "px";
        tooltip.style.top = y + "px";

        tooltip.style.opacity = "1";

    });

    tiltedCard.addEventListener("mouseenter", () => {

        tiltedCard.style.transition = "none";

    });

    tiltedCard.addEventListener("mouseleave", () => {

        targetX = 0;
        targetY = 0;

        tooltip.style.opacity = "0";

    });

}