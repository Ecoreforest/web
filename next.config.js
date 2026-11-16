/** @type {import('next').NextConfig} */

/**
 * Paso 31: un solo archivo de configuración.
 *
 * El repositorio tenía dos, `next.config.js` y `next.config.mjs`, y
 * Next.js solo lee el primero que encuentra. Resultado: la
 * configuración de imágenes funcionaba —vivía aquí— y el redirect de
 * /proceso no, porque vivía en el `.mjs` y ese archivo se ignoraba
 * entero. De ahí el 404 que reporta Search Console.
 *
 * Al fusionarlos, el `.mjs` sobra y hay que borrarlo: si se queda,
 * cualquiera que lo abra en el futuro creerá que está en vigor.
 */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  /**
   * /proceso se eliminó en el paso 14 y su contenido se repartió entre
   * /proyecto y la home. El redirect permanente evita que los enlaces
   * antiguos, los marcadores y lo que Google tenga indexado acaben en
   * una página de error, y además traslada a /proyecto la autoridad que
   * esa URL hubiera acumulado.
   */
  async redirects() {
    return [
      {
        source: '/proceso',
        destination: '/proyecto',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
