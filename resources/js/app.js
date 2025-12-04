import './bootstrap';

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('nav-sticky');
  if (window.pageYOffset > 230){
    navbar.classList.remove('-translate-y-25');
    navbar.classList.add('translate-y-0');
  } else {
    navbar.classList.remove('translate-y-0');
    navbar.classList.add('-translate-y-25');
  }
});
