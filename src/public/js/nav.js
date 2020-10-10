const aside = document.getElementById('aside');
const bars = document.getElementById('bars');
const closeNav = document.getElementById('closeNav');

bars.onclick = function () {
  aside.style.display = 'flex';
  closeNav.style.display = 'inline-block';
  bars.style.display = 'none';
};

const close = () => {
  aside.style.display = 'none';
  closeNav.style.display = 'none';
  bars.style.display = 'inline-block';
};

closeNav.onclick = () => close();

function navigate(section = 'about') {
  if (window.matchMedia('(max-width: 600px)').matches) {
    close();
  }
  window.location.href = `./#${section}`;
}
