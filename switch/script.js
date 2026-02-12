let lastScrollY = window.scrollY;
const navbar = document.querySelector('.floating-navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    // 下にスクロール → 縮む
    navbar.classList.add('shrink');
  } else {
    // 上にスクロール → 元に戻る
    navbar.classList.remove('shrink');
  }

  lastScrollY = currentScrollY;
});