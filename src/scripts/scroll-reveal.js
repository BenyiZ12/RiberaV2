/**
 * Scroll reveal con Intersection Observer.
 * Los elementos con clase `.reveal` se animan al entrar al viewport.
 * Soporte de escalonado mediante atributo `data-stagger="n"` (delay en ms entre hermanos).
 * Respeta prefers-reduced-motion.
 */
(function () {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function init() {
    if (prefersReduced.matches) {
      document
        .querySelectorAll('.reveal, .reveal-image')
        .forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0% 0% -10% 0%' }
    );

    document.querySelectorAll('.reveal, .reveal-image').forEach((el) => {
      observer.observe(el);
    });

    // Escalonado: los hijos de un contenedor con [data-stagger] se revelan con delay progresivo
    document.querySelectorAll('[data-stagger]').forEach((container) => {
      const delay = parseInt(container.dataset.stagger, 10) || 120;
      const children = Array.from(
        container.querySelectorAll('.reveal, .reveal-image')
      );
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * delay}ms`;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
