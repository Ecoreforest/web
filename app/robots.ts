import type { MetadataRoute } from 'next';

/**
 * robots.txt dinámico para Next.js App Router.
 * Next.js lo sirve automáticamente en /robots.txt.
 *
 * - Permite indexar todo por defecto
 * - Bloquea /shop (la tienda actual está oculta del menú; cuando se
 *   reactive en ecoreforest.com separada, quitar este disallow)
 * - Apunta a sitemap.xml para acelerar la indexación
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/shop', '/api/'],
      },
    ],
    sitemap: 'https://ecoreforest.org/sitemap.xml',
    host: 'https://ecoreforest.org',
  };
}
