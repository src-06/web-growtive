import './bootstrap';

const to_top = document.getElementById('to-top');

to_top.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('nav-sticky');
  if (window.pageYOffset > 300){
    navbar.classList.remove('-translate-y-25');
    navbar.classList.add('translate-y-0');
  } else {
    navbar.classList.remove('translate-y-0');
    navbar.classList.add('-translate-y-25');
  }
  if (window.pageYOffset > 400){
    to_top.classList.remove('opacity-0');
    to_top.classList.add('opacity-100');
  } else {
    to_top.classList.remove('opacity-100');
    to_top.classList.add('opacity-0');
  }
});
