/* nav scroll */
const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* burger menu */
const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-menu');
const mmLinks = document.querySelectorAll('.mm-link');

burger.addEventListener('click', () => {
  const isOpen = burger.classList.toggle('open');
  mobileMenu.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
  mobileMenu.setAttribute('aria-hidden', !isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mmLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

/* whatsapp click tracking */
document.querySelectorAll('[data-track^="whatsapp"]').forEach(el => {
  el.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', { send_to: 'AW-18238606211/BBmtCJv2478cEIOX7PhD' });
      gtag('event', 'whatsapp_click', { event_label: el.dataset.track });
    }
  });
});

/* scroll reveal */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.ci, .section-header, .contact-info, .privacy-note')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
