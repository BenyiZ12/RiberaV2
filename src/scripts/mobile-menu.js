/**
 * Inicialización del menú móvil (fallback si el script embebido en Header no carga).
 * Se mantiene separado para evitar duplicación.
 */
(function () {
  const btn = document.getElementById('menu-button');
  const close = document.getElementById('menu-close');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('menu-overlay');

  if (!btn || !menu) return;

  function openMenu() {
    menu.classList.remove('hidden');
    if (overlay) overlay.classList.remove('hidden');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    menu.classList.add('hidden');
    if (overlay) overlay.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openMenu);
  if (close) close.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('#mobile-menu a').forEach((a) =>
    a.addEventListener('click', closeMenu)
  );
})();
