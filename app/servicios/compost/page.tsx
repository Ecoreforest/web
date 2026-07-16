import ServicioHero from '../../components/servicios/ServicioHero';
import ServicioFeatures from '../../components/servicios/ServicioFeatures';
import ServicioPasos from '../../components/servicios/ServicioPasos';
import ServicioCTA from '../../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Compost',
  description:
    'Compost UNE 142500 de productores certificados españoles. Servicio de suministro y aplicación para reforestación, agricultura ecológica y jardinería profesional.',
};

export default function Compost() {
  return (
    <>
      <ServicioHero
        eyebrow="Servicio 01"
        title="Compost certificado. UNE 142500 en cada lote."
        italicWord="cada lote."
        description="Distribuimos compost UNE 142500 producido por partners certificados españoles. Selección rigurosa, análisis fisicoquímico por lote y aplicación técnica en proyectos de reforestación o entrega directa a agricultura ecológica, viveros y jardinería profesional."
        imagen="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895092/bosque-mediterraneo_peuyt6.jpg"
      />

      <ServicioFeatures
        eyebrow="Cómo lo entendemos"
        titulo="Selección estricta. Trazabilidad completa."
        italicWord="Trazabilidad completa."
        features={[
          {
            titulo: 'Norma UNE 142500',
            descripcion:
              'Solo trabajamos con productores certificados en la norma española de calidad del compost. Cada partner pasa nuestra auditoría inicial antes de convertirse en proveedor.',
          },
          {
            titulo: 'Análisis por lote',
            descripcion:
              'Cada entrega de compost pasa un análisis fisicoquímico independiente: relación C/N, humedad, pH, patógenos, metales pesados. Solo se aprueba lo que cumple parámetros.',
          },
          {
            titulo: 'Trazabilidad de origen',
            descripcion:
              'Sabemos de qué planta procede cada lote, qué materia prima se usó, en qué fecha se cerró el ciclo. Toda la cadena queda registrada.',
          },
          {
            titulo: 'Aplicación técnica',
            descripcion:
              'Diseñamos la aplicación en cada parcela según análisis previo del suelo, especie a plantar y régimen hídrico. No es echar compost: es aplicar la dosis correcta.',
          },
          {
            titulo: 'Producción local',
            descripcion:
              'Priorizamos partners españoles para minimizar la huella de transporte. Kilómetro cero, no kilómetro cero como eslogan sino como criterio real de selección.',
          },
          {
            titulo: 'Venta directa',
            descripcion:
              'Además de aplicarlo en nuestros proyectos, distribuimos compost UNE 142500 a agricultores, viveros, ayuntamientos y particulares que buscan un fertilizante de calidad verificada.',
          },
        ]}
      />

      <ServicioPasos
        eyebrow="Cómo lo hacemos"
        titulo="Del pedido al primer brote."
        italicWord="primer brote."
        pasos={[
          { numero: '01', titulo: 'Consulta y diseño de necesidad', descripcion: 'Volumen requerido, tipo de aplicación, calendario. Recomendamos el compost más adecuado del catálogo de partners según el uso previsto.' },
          { numero: '02', titulo: 'Selección y validación', descripcion: 'Asignación del lote de un productor certificado. Análisis fisicoquímico independiente antes de aprobar entrega. Solo pasa lo que cumple UNE 142500.' },
          { numero: '03', titulo: 'Entrega y aplicación', descripcion: 'Logística a obra o a proyecto propio de reforestación. En reforestación aplicamos según diseño técnico previo del suelo y las especies. En venta directa, entregamos con ficha técnica del lote.' },
          { numero: '04', titulo: 'Seguimiento', descripcion: 'En proyectos propios, monitoreo posterior de suelo y planta. En venta directa, disponibilidad del equipo técnico para consultas de aplicación durante 30 días.' },
        ]}
      />

      <ServicioCTA
        titulo="¿Necesitas compost UNE 142500 para tu proyecto?"
        italicWord="para tu proyecto?"
        subtitulo="Trabajamos con administraciones, viveros, cooperativas agrícolas, jardineros profesionales y particulares que quieren garantía de calidad. Cuéntanos qué volumen necesitas y cuándo."
        ctaPrimario={{ label: 'Solicitar presupuesto', href: '/contacto' }}
        ctaSecundario={{ label: 'Ver todos los servicios', href: '/servicios' }}
      />
    </>
  );
}
