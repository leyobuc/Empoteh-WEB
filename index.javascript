const toggleDropdown = (element, btn) => {
  const isVisible = element.classList.contains('active');
  closeAllDropdowns();
  if (!isVisible) {
    element.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  }
};

const closeAllDropdowns = () => {
  [searchInput, menuList].forEach(element => {
    element.classList.remove('active');
    element.previousElementSibling?.setAttribute('aria-expanded', 'false');
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-animate').forEach(el => {
  observer.observe(el);
});

document.querySelectorAll('.mission-section .card').forEach(card => {
  card.classList.add('scroll-animate');
});

document.querySelectorAll('[role="menuitem"]').forEach(item => {
  item.addEventListener('click', function() {
    closeAllDropdowns();
    document.documentElement.style.scrollBehavior = 'smooth';
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
    }, 1000);
  });
});