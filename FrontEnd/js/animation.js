const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

// Observe all sections on the page
const sections = document.querySelectorAll('section');
sections.forEach((section) => observer.observe(section));
