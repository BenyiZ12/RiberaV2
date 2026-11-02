/**
 * Configuración centralizada del negocio Centro Ecológico La Ribera.
 * Toda la información pública editable debe vivir aquí.
 *
 * IMPORTANTE (verificar con el propietario antes de publicar):
 * - Dominio: se usa un placeholder; reemplazar por el dominio real contratado.
 * - Teléfono / WhatsApp: existen diferentes números publicados en directorios.
 *   No se ha seleccionado ninguno arbitrariamente. El campo `whatsapp` queda en null
 *   hasta que el propietario confirme el número oficial.
 * - Correo electrónico: placeholder por confirmar.
 * - Fotografías: no existen fotografías oficiales en el proyecto; los componentes
 *   ImagePlaceholder esperan las imágenes reales del negocio.
 * - Coordenadas exactas / indicaciones por carretera: pendientes de confirmación.
 */

export const SITE = {
  name: 'Centro Ecológico La Ribera',
  shortName: 'La Ribera',
  location: 'Mollejones de Platanares, Pérez Zeledón, Costa Rica',
  address: 'Mollejones de Platanares, Pérez Zeledón, Costa Rica',
  region: 'Pérez Zeledón',
  country: 'Costa Rica',
  // Dominio por defecto; configurar con el sitio real en astro.config.mjs
  url: 'https://www.laribera.cr',
  // Descripción institucional real, sin inventar precios ni servicios específicos
  description:
    'Centro de ecoturismo y hospedaje rural en Mollejones de Platanares, Pérez Zeledón, Costa Rica. Cabañas, piscinas, zonas verdes, senderos y restaurante en contacto con la naturaleza.',
};

export const CONTACT = {
  // PENDIENTE DE CONFIRMACIÓN: existen diferentes números publicados en directorios.
  // No se elige ninguno arbitrariamente. Confirmar con el propietario.
  phone: null,
  whatsapp: null,
  email: null, // por confirmar
  // Teléfono de referencia visible SOLO si el propietario lo confirma:
  // phone: '+506 000 0000',
};

export const SOCIAL = {
  instagram: null,
  facebook: null,
};

export const NAV = [
  { href: '/', label: 'Inicio' },
  { href: '/hospedaje', label: 'Hospedaje' },
  { href: '/naturaleza', label: 'Naturaleza' },
  { href: '/restaurante', label: 'Restaurante' },
  { href: '/galeria', label: 'Galería' },
  { href: '/ubicacion', label: 'Ubicación' },
];

export const SEO_DEFAULTS = {
  titleTemplate: (title: string) => `${title} | Centro Ecológico La Ribera`,
  ogType: 'website',
  locale: 'es_CR',
  defaultImage: '/og-image.svg',
};
