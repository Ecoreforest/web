import ServicioHero from '../../components/servicios/ServicioHero';
import ServicioFeatures from '../../components/servicios/ServicioFeatures';
import ServicioPasos from '../../components/servicios/ServicioPasos';
import ServicioCTA from '../../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Reforestación integral',
  description: 'Diseño, plantación y mantenimiento de proyectos de restauración ecológica con especies autóctonas y garantía de supervivencia del 85%.',
};

/**
 * Paso 15: dos fixes tras el pivote de externalización del compost:
 * - Feature "Sustrato propio" → "Compost certificado" (compramos, no producimos).
 * - Paso 02 "enmiendas con compost propio" → "enmiendas con compost UNE 142500".
 */
export default function Reforestacion() {
  return (
    <>
      <ServicioHero
        eyebrow="Servicio 02"
        title="Reforestación integral. Del proyecto al primer brote, todo bajo control."
        italicWord="todo bajo control."
        description="Diseño, plantación y mantenimiento de proyectos de restauración ecológica con especies autóctonas, sistemas de riego eficiente y monitoreo digital con garantía de supervivencia."
        imagen="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1780491605/servicio-hero-reforestacion_gtttm6.png"
      />

      <ServicioFeatures
        eyebrow="Cómo lo entendemos"
        titulo="Plantar es fácil. Que sobreviva, no."
        italicWord="sobreviva, no."
        features={[
          {
            titulo: 'Especies autóctonas',
            descripcion: 'Encina, algarrobo, pino carrasco, acebuche, retama y otras especies adaptadas al clima local. Sin experimentos con flora invasora.',
          },
          {
            titulo: 'Garantía 85%',
            descripcion: 'Tasa de supervivencia garantizada por contrato. Si una planta muere en el periodo de garantía, la reponemos sin coste.',
          },
          {
            titulo: 'Compost certificado',
            descripcion: 'Cada plantón se aplica con compost UNE 142500 de productores partners españoles, con análisis por lote. Cierre del ciclo desde el primer día.',
          },
          {
            titulo: 'Riego eficiente',
            descripcion: 'Sistemas de riego por goteo con sensores de humedad. Solo se aplica agua cuando y donde es necesaria.',
          },
          {
            titulo: 'Conservación de agua',
            descripcion: 'Zanjas de infiltración, pozos zai, terrazas de piedra y mulching orgánico. Técnicas probadas para retener cada gota.',
          },
          {
            titulo: 'Monitoreo digital',
            descripcion: 'Drones multiespectrales, sensores IoT y análisis satelital. Vigilancia continua para intervenir antes de que haya un problema.',
          },
        ]}
      />

      <ServicioPasos
        eyebrow="Cómo lo hacemos"
        titulo="Del primer plano técnico al árbol adulto."
        italicWord="árbol adulto."
        pasos={[
          { numero: '01', titulo: 'Diagnóstico del terreno', descripcion: 'Análisis edafoclimático, topográfico y de biodiversidad. Cartografía detallada del área y diseño técnico ajustado a las condiciones locales.' },
          { numero: '02', titulo: 'Acondicionamiento', descripcion: 'Subsolado, enmiendas con compost UNE 142500, instalación de sistemas de riego y preparación de microsites favorables para cada especie.' },
          { numero: '03', titulo: 'Plantación', descripcion: 'Plantación en otoño-invierno con plantas de vivero propio. Densidad de 400-1.200 plantas por hectárea según especie y objetivos del proyecto.' },
          { numero: '04', titulo: 'Mantenimiento y monitoreo', descripcion: 'Seguimiento durante 2-3 años: riego, reposición de marras, control de plagas y monitoreo continuo con tecnología de campo y satélite.' },
        ]}
      />

      <ServicioCTA
        titulo="¿Tienes un terreno que necesita un bosque?"
        italicWord="necesita un bosque?"
        subtitulo="Trabajamos con administraciones, empresas con obligaciones ambientales, propietarios privados y comunidades locales. Cuéntanos tu proyecto."
        ctaPrimario={{ label: 'Hablar con nosotros', href: '/contacto' }}
        ctaSecundario={{ label: 'Ver todos los servicios', href: '/servicios' }}
      />
    </>
  );
}
