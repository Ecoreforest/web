import type { MetadataRoute } from 'next';

/**
 * Sitemap dinámico para Next.js App Router.
 * Paso 14 (re-subido en paso 15): eliminada /proceso del sitemap.
 * Redirect 301 en next.config.mjs → /proyecto.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ecoreforest.org';
  const now = new Date();

  const home = {
    url: `${baseUrl}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  const mainPages = [
    '/proyecto',
    '/equipo',
    '/tecnologia',
    '/colabora',
    '/contacto',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const servicesPages = [
    '/servicios/compost',
    '/servicios/reforestacion',
    '/servicios/forest-clean',
    '/servicios/auditorias',
    '/servicios/creditos-carbono',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const legalPages = [
    '/aviso-legal',
    '/privacidad',
    '/cookies',
    '/condiciones',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [home, ...mainPages, ...servicesPages, ...legalPages];
}
