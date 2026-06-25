import type { MetadataRoute } from 'next';

/**
 * Sitemap dinámico para Next.js App Router.
 * Next.js lo sirve automáticamente en /sitemap.xml.
 *
 * Páginas excluidas:
 * - /shop: la tienda se va a separar a ecoreforest.com cuando esté lista
 * - /hoja-de-ruta y /impacto: ya no existen
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ecoreforest.org';
  const now = new Date();

  // Página principal — máxima prioridad
  const home = {
    url: `${baseUrl}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  };

  // Páginas principales — alta prioridad, cambian con relativa frecuencia
  const mainPages = [
    '/proyecto',
    '/equipo',
    '/proceso',
    '/tecnologia',
    '/colabora',
    '/contacto',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Subpáginas de servicios — alta prioridad (son las páginas comerciales)
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

  // Páginas legales — baja prioridad, casi nunca cambian
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
