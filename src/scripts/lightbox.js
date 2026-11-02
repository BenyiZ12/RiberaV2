/**
 * Lightbox accesible para la galería.
 * Se activa sobre enlaces con data-lightbox.
 * Navegación por teclado: Esc para cerrar, flechas para navegar.
 */
(function () {
  const triggers = Array.from(document.querySelectorAll('[data-lightbox]'));
  if (!triggers.length) return;

  let currentIndex = 0;

  const overlay = document.createElement('div');
  overlay.className =
    'fixed inset-0 z-[60] bg-black/92 flex items-center justify-center p-6 md:p-12 hidden';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Galería de fotografías');

  const inner = document.createElement('div');
  inner.className = 'relative max-w-6xl w-full';

  const img = document.createElement('img');
  img.className = 'w-full h-auto rounded-organic block mx-auto shadow-2xl';
  img.setAttribute('loading', 'lazy');
  img.setAttribute('decoding', 'async');

  const caption = document.createElement('p');
  caption.className =
    'mt-6 text-center text-ivory/90 text-sm md:text-base font-body leading-relaxed';

  const prev = document.createElement('button');
  prev.className =
    'absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center';
  prev.innerHTML =
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>';
  prev.setAttribute('aria-label', 'Imagen anterior');

  const next = document.createElement('button');
  next.className =
    'absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center';
  next.innerHTML =
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>';
  next.setAttribute('aria-label', 'Imagen siguiente');

  const close = document.createElement('button');
  close.className =
    'absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center';
  close.innerHTML =
    '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
  close.setAttribute('aria-label', 'Cerrar galería');

  const counter = document.createElement('span');
  counter.className =
    'absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-ivory/70 text-xs font-body tracking-widest uppercase';

  inner.appendChild(prev);
  inner.appendChild(img);
  inner.appendChild(next);
  inner.appendChild(caption);
  inner.appendChild(counter);
  overlay.appendChild(inner);
  overlay.appendChild(close);
  document.body.appendChild(overlay);

  function open(index) {
    currentIndex = index;
    const trigger = triggers[currentIndex];
    const href = trigger.getAttribute('href');
    const alt = trigger.querySelector('img')?.getAttribute('alt') || '';
    const cap = trigger.dataset.caption || alt;
    img.setAttribute('src', href);
    img.setAttribute('alt', alt);
    caption.textContent = cap;
    counter.textContent = `${currentIndex + 1} / ${triggers.length}`;
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    close.focus();
  }

  function closeBox() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function show(index) {
    if (index < 0) index = triggers.length - 1;
    if (index >= triggers.length) index = 0;
    open(index);
  }

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      open(index);
    });
  });

  close.addEventListener('click', closeBox);
  prev.addEventListener('click', () => show(currentIndex - 1));
  next.addEventListener('click', () => show(currentIndex + 1));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeBox();
  });

  document.addEventListener('keydown', (e) => {
    if (overlay.classList.contains('hidden')) return;
    if (e.key === 'Escape') closeBox();
    if (e.key === 'ArrowLeft') show(currentIndex - 1);
    if (e.key === 'ArrowRight') show(currentIndex + 1);
  });
})();
