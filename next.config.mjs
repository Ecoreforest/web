/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Paso 14: redirect 301 permanente de /proceso a /proyecto.
   *
   * La página /proceso se elimina en el sweep de coherencia. Su contenido
   * único (Balance del ciclo, Trazabilidad) migra a /proyecto y /tecnologia.
   * El redirect asegura que:
   * - Los enlaces externos existentes (Search Console indexó la URL) no rompen
   * - Google transfiere el peso SEO de /proceso al destino apropiado
   * - Cualquier bookmark antiguo del usuario funciona
   *
   * Se usa /proyecto como destino porque ahí queda el Balance del ciclo (la
   * sección de más peso de la antigua /proceso). Trazabilidad va a /tecnologia
   * pero es una capa más técnica; el visitante genérico buscará "el proceso"
   * pensando en el ciclo completo.
   */
  async redirects() {
    return [
      {
        source: '/proceso',
        destination: '/proyecto',
        permanent: true, // 308 (preserva el método); Google lo trata igual que 301 para SEO
      },
    ];
  },
};

export default nextConfig;
