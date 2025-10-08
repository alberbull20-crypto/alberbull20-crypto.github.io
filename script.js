// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});

// Optional: Highlight active nav link on scroll
window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY || window.pageYOffset;
  sections.forEach(section => {
    const top = section.offsetTop - 80;
    const bottom = top + section.offsetHeight;
    const navLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
    if (scrollPos >= top && scrollPos < bottom) {
      navLink && navLink.classList.add('active');
    } else {
      navLink && navLink.classList.remove('active');
    }
  });
});