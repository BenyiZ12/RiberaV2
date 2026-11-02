import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// TODO: Reemplazar 'https://www.laribera.cr' por el dominio real una vez confirmado por el propietario.
// No usar vercel.app en producción.
export default defineConfig({
  site: 'https://www.laribera.cr',
  integrations: [tailwind()],
  build: {
    format: 'file',
    assets: 'assets',
  },
  trailingSlash: 'never',
  compressHTML: true,
  // Los sourcemaps no se generan en build de Astro por defecto en producción (punto 17).
});
