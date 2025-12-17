import './bootstrap';

function drpDwnHandler() {
  const srv_drp_dwn = document.getElementById('srv-drp-dwn')
  const srv_chevron = document.getElementById('srv-chevron')
  if (srv_drp_dwn.classList.contains('hidden')) {
    srv_drp_dwn.classList.remove('hidden')
    srv_drp_dwn.classList.add('flex')
    srv_chevron.classList.add('rotate-90')
  } else {
    srv_drp_dwn.classList.remove('flex')
    srv_drp_dwn.classList.add('hidden')
    srv_chevron.classList.remove('rotate-90')
  }
}

document.getElementById('srv-btn')
.addEventListener('click', drpDwnHandler)

function drpDwnHandlerf() {
  const srv_drp_dwn = document.getElementById('srv-drp-dwn-f')
  const srv_chevron = document.getElementById('srv-chevron-f')
  if (srv_drp_dwn.classList.contains('hidden')) {
    srv_drp_dwn.classList.remove('hidden')
    srv_drp_dwn.classList.add('flex')
    srv_chevron.classList.add('rotate-90')
  } else {
    srv_drp_dwn.classList.remove('flex')
    srv_drp_dwn.classList.add('hidden')
    srv_chevron.classList.remove('rotate-90')
  }
}

document.getElementById('srv-btn-f')
.addEventListener('click', drpDwnHandlerf)

const to_top = document.getElementById('to-top'),
  contact_wa = document.getElementById('contact-wa');

to_top.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  // const navbar = document.getElementById('nav-sticky');
  // if (window.pageYOffset > 300){
  //   navbar.classList.remove('-translate-y-25');
  //   navbar.classList.add('translate-y-0');
  // } else {
  //   navbar.classList.remove('translate-y-0');
  //   navbar.classList.add('-translate-y-25');
  // }
  if (window.pageYOffset > 400) {
    to_top.classList.remove('opacity-0');
    to_top.classList.add('opacity-100');
    contact_wa.classList.remove('opacity-0');
    contact_wa.classList.add('opacity-100');
  } else {
    to_top.classList.remove('opacity-100');
    to_top.classList.add('opacity-0');
    contact_wa.classList.remove('opacity-100');
    contact_wa.classList.add('opacity-0');
  }
});
