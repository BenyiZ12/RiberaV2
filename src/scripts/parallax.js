/**
 * Parallax moderado sobre elementos con data-parallax y data-speed.
 * Se desactiva con prefers-reduced-motion y en pantallas táctiles pequeñas.
 */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobileTouch = window.matchMedia('(pointer: coarse)');

  const targets = Array.from(document.querySelectorAll('[data-parallax]'));

  if (!targets.length || prefersReduced.matches || isMobileTouch.matches) return;

  let ticking = false;

  function update() {
    const scrollY = window.pageYOffset;
    targets.forEach((el) => {
      const speed = parseFloat(el.dataset.speed || '0.08');
      const offset = scrollY * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  requestTick();
})();
