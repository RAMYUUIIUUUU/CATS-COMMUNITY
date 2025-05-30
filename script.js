const cursor = document.getElementById('cursor-trail');

document.addEventListener('mousemove', e => {
  cursor.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 8}px, 0)`;
});

// Smooth scroll nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const href = link.getAttribute('href');
    if (href.startsWith('#')) {
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// Panel tilt effect
document.querySelectorAll('.cheat-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = (x - cx) / cx;
    const dy = (y - cy) / cy;
    card.style.transform = `rotateX(${-dy * 8}deg) rotateY(${dx * 8}deg) translateZ(30px) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});
