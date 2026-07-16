/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Paso 14 (re-subido en paso 15): redirect permanente /proceso → /proyecto.
   * Asegura que enlaces externos (Search Console) y bookmarks antiguos no rompan.
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

export default nextConfig;
