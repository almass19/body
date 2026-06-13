/* nav scroll effect */
const nav = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* scroll reveal */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .about-text, .about-visual, .contact-item, .contact-form-wrap, .section-header')
  .forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

/* form submit */
const form = document.querySelector('.booking-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.textContent = 'Заявка отправлена ✓';
  btn.disabled = true;
  btn.style.background = '#5A8A5A';
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
    btn.style.background = '';
    form.reset();
  }, 3500);
});
