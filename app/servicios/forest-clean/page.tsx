import ServicioHero from '../../components/servicios/ServicioHero';
import ServicioFeatures from '../../components/servicios/ServicioFeatures';
import ServicioPasos from '../../components/servicios/ServicioPasos';
import ServicioCTA from '../../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Forest Clean — Limpieza y gestión forestal',
  description: 'Servicio integral de limpieza y gestión de biomasa forestal en 4 fases. Prevención de incendios y valorización circular de la biomasa obtenida.',
};

export default function ForestClean() {
  return (
    <>
      <ServicioHero
        eyebrow="Servicio 03"
        title="Forest Clean. Bosques limpios, comunidades protegidas."
        italicWord="comunidades protegidas."
        description="Servicio integral de limpieza y gestión de biomasa forestal. Reducimos el riesgo de incendios mientras alimentamos la economía circular del compostaje y la valorización energética."
        imagen="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1780492612/servicio-hero-forest-clean_aj7hwi.png"
      />

      <ServicioFeatures
        eyebrow="Por qué Forest Clean"
        titulo="El problema no es el fuego. Es lo que arde."
        italicWord="lo que arde."
        fondo="ink"
        features={[
          {
            titulo: 'Prevención real',
            descripcion: 'Cada hectárea correctamente gestionada reduce el riesgo de incendio entre un 60% y un 80% durante los primeros cinco años posteriores a la intervención.',
          },
          {
            titulo: 'Desbroce selectivo',
            descripcion: 'Eliminamos el sotobosque combustible respetando la vegetación autóctona de valor ecológico. Ciencia forestal, no tala indiscriminada.',
          },
          {
            titulo: 'Biomasa valorizada',
            descripcion: 'Toda la biomasa obtenida se reincorpora al ciclo: compostaje, biochar o astilla energética. Cero residuo, cero quema en campo.',
          },
          {
            titulo: 'Empleo rural',
            descripcion: 'Cada 100 hectáreas tratadas generan entre 3 y 5 empleos directos a tiempo completo en zonas con altas tasas de desempleo.',
          },
          {
            titulo: 'Certificación FSC/PEFC',
            descripcion: 'Trabajos certificados según los estándares internacionales de gestión forestal sostenible. Trazabilidad completa.',
          },
          {
            titulo: 'Carbono protegido',
            descripcion: 'Un incendio de 1.000 hectáreas puede emitir 50.000 toneladas de CO₂. La prevención forestal es acción climática medible.',
          },
        ]}
      />

      <ServicioPasos
        eyebrow="Cómo lo hacemos"
        titulo="Del diagnóstico técnico al monte protegido."
        italicWord="monte protegido."
        pasos={[
          { numero: '01', titulo: 'Diagnóstico y planificación', descripcion: 'Evaluación técnica del estado del monte, cartografía de zonas de riesgo, plan de actuación con criterios de biodiversidad y tramitación de permisos administrativos.' },
          { numero: '02', titulo: 'Trabajos silvícolas', descripcion: 'Desbroce selectivo del sotobosque, poda de formación, eliminación de árboles muertos o enfermos, y apertura y mantenimiento de cortafuegos.' },
          { numero: '03', titulo: 'Recogida y clasificación', descripcion: 'Separación en campo según el destino de cada material: leñoso para astilla, herbáceo para compostaje, carbonizado para biochar.' },
          { numero: '04', titulo: 'Valorización y trazabilidad', descripcion: 'Transporte a nuestras instalaciones, incorporación al proceso de compostaje y certificados de gestión sostenible para el cliente.' },
        ]}
      />

      <ServicioCTA
        titulo="¿Gestionas un monte que necesita atención?"
        italicWord="necesita atención?"
        subtitulo="Trabajamos con ayuntamientos, comunidades autónomas, propietarios privados, sector minero y energético. Cuéntanos qué necesitas."
        ctaPrimario={{ label: 'Pedir diagnóstico', href: '/contacto' }}
        ctaSecundario={{ label: 'Ver todos los servicios', href: '/servicios' }}
      />
    </>
  );
}
