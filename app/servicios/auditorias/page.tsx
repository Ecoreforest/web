import ServicioHero from '../../components/servicios/ServicioHero';
import ServicioFeatures from '../../components/servicios/ServicioFeatures';
import ServicioPasos from '../../components/servicios/ServicioPasos';
import ServicioCTA from '../../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Auditorías forestales',
  description: 'Diagnóstico técnico forestal con certificaciones FSC y PEFC. Informes técnicos, cartografía de riesgo y planificación para administraciones y propietarios.',
};

export default function Auditorias() {
  return (
    <>
      <ServicioHero
        eyebrow="Servicio 04"
        title="Auditorías forestales. Diagnóstico técnico para decidir con datos."
        italicWord="decidir con datos."
        description="Evaluación experta del estado del monte, cartografía de riesgo, certificaciones FSC y PEFC, e informes técnicos para administraciones, propietarios y empresas con obligaciones ambientales."
        imagen="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1780490181/servicio-hero-auditorias_cpq5yu.png"
      />

      <ServicioFeatures
        eyebrow="Qué incluye una auditoría"
        titulo="Datos verificables. Recomendaciones accionables."
        italicWord="accionables."
        features={[
          {
            titulo: 'Cartografía de riesgo',
            descripcion: 'Análisis cartográfico detallado del estado del monte: zonas críticas, puntos calientes, vías de propagación potencial y áreas prioritarias de intervención.',
          },
          {
            titulo: 'Inventario forestal',
            descripcion: 'Evaluación cuantitativa y cualitativa de la masa forestal: especies presentes, edad, estado fitosanitario, densidad y carga combustible por hectárea.',
          },
          {
            titulo: 'Análisis de biodiversidad',
            descripcion: 'Identificación de especies protegidas, hábitats de interés y zonas de alto valor ecológico que requieren protección durante cualquier intervención.',
          },
          {
            titulo: 'Plan técnico',
            descripcion: 'Plan de actuación priorizado por urgencia y coste-beneficio, con estimación de presupuestos y plazos para cada intervención propuesta.',
          },
          {
            titulo: 'Certificación FSC y PEFC',
            descripcion: 'Acompañamiento en procesos de certificación forestal sostenible para acceso a contratos con administraciones y empresas con criterios de compra responsable.',
          },
          {
            titulo: 'Documentación legal',
            descripcion: 'Tramitación ante la administración forestal competente. Informes que cumplen los requisitos de la Ley 43/2003 de Montes y desarrollos autonómicos.',
          },
        ]}
      />

      <ServicioPasos
        eyebrow="Cómo trabajamos"
        titulo="Cuatro fases hasta el informe final."
        italicWord="informe final."
        pasos={[
          { numero: '01', titulo: 'Reunión técnica inicial', descripcion: 'Reunión con el cliente para entender objetivos, restricciones, plazos y alcance esperado. Revisión de documentación previa existente sobre el terreno.' },
          { numero: '02', titulo: 'Trabajo de campo', descripcion: 'Visita técnica al terreno con equipos especializados, drones multiespectrales para cartografía aérea y toma de muestras representativas del estado actual.' },
          { numero: '03', titulo: 'Análisis y diagnóstico', descripcion: 'Procesamiento de datos en gabinete, análisis cruzado con cartografía oficial y elaboración del diagnóstico técnico con métricas verificables.' },
          { numero: '04', titulo: 'Informe y presentación', descripcion: 'Entrega del informe técnico completo con cartografía, recomendaciones priorizadas y presentación ejecutiva al cliente. Acompañamiento posterior si lo requiere.' },
        ]}
      />

      <ServicioCTA
        titulo="¿Necesitas un diagnóstico antes de decidir?"
        italicWord="antes de decidir?"
        subtitulo="Las decisiones forestales son a décadas vista. Un buen diagnóstico técnico hoy te ahorra problemas mañana. Pídenos información sobre nuestras auditorías."
        ctaPrimario={{ label: 'Pedir presupuesto', href: '/contacto' }}
        ctaSecundario={{ label: 'Ver todos los servicios', href: '/servicios' }}
      />
    </>
  );
}
