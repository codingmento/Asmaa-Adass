// ============ Mobile menu toggle ============
const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');

menuToggle?.addEventListener('click', () => {
  const isOpen = navbar.classList.toggle('open');
  menuToggle.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navbar?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ Active nav link on scroll ============
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar a');

const setActiveLink = () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

// ============ Show more projects ============
const seeMoreBtn = document.getElementById('seeMoreBtn');
const hiddenProjects = document.querySelectorAll('#webGrid .hidden-project');

seeMoreBtn?.addEventListener('click', () => {
  const isExpanding = seeMoreBtn.dataset.expanded !== 'true';
  hiddenProjects.forEach(el => el.classList.toggle('show', isExpanding));
  seeMoreBtn.dataset.expanded = String(isExpanding);

  const lang = document.documentElement.getAttribute('lang') || 'en';
  const dict = window.translations ? window.translations[lang] : null;
  seeMoreBtn.textContent = dict
    ? (isExpanding ? dict['work.seeFewer'] : dict['work.seeMore'])
    : (isExpanding ? 'Show Fewer Projects' : 'Show More Projects');
});

// ============ Scroll reveal ============
const revealTargets = document.querySelectorAll(
  '.section-head, .about-copy, .about-pillars li, .project-card, .service-card, .skills-block, .timeline-item'
);
revealTargets.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => observer.observe(el));
