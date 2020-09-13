const elements = {
  feature_section: document.getElementById('features-section'),
  about_section: document.getElementById('about-section'),
  theme_toggler: document.getElementById('nav__checkbox'),
  root: document.documentElement
};

window.addEventListener('scroll', e => {
  const y = window.scrollY;

  if (y >= 280) {
    elements.feature_section.classList.add('features-visible');
  }

  if (y >= 890) {
    elements.about_section.classList.add('about-visible');
  }
});

window.addEventListener('load', e => {
  if (elements.theme_toggler.checked) {
    elements.root.style.setProperty('--color-white', 'grey');
  }
});

elements.theme_toggler.addEventListener('change', e => {
  if (e.target.checked) {
    elements.root.style.setProperty('--color-white', 'grey');
  }
});
