import ServicioHero from '../../components/servicios/ServicioHero';
import ServicioFeatures from '../../components/servicios/ServicioFeatures';
import ServicioPasos from '../../components/servicios/ServicioPasos';
import ServicioCTA from '../../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Créditos de carbono',
  description: 'Captura de CO₂ certificada bajo estándares Verra y Gold Standard. Cada tonelada compensada está vinculada a una hectárea reforestada real.',
};

export default function CreditosCarbono() {
  return (
    <>
      <ServicioHero
        eyebrow="Servicio 05"
        title="Créditos de carbono. Tu compensación, verificable y trazable."
        italicWord="verificable y trazable."
        description="Captura de CO₂ certificada bajo estándares internacionales Verra y Gold Standard. Cada tonelada compensada está vinculada a una hectárea reforestada real, con seguimiento durante décadas."
        imagen="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895082/linea-carbono_zmr4n4.jpg"
      />

      <ServicioFeatures
        eyebrow="Por qué nuestros créditos"
        titulo="Carbono real. No papel."
        italicWord="No papel."
        features={[
          {
            titulo: 'Estándares internacionales',
            descripcion: 'Certificación bajo Verra (VCS) o Gold Standard, los dos estándares más exigentes del mercado voluntario de carbono mundial.',
          },
          {
            titulo: 'Vinculación a proyecto',
            descripcion: 'Cada crédito está vinculado a una hectárea y un proyecto de reforestación específico que tu empresa puede visitar y verificar.',
          },
          {
            titulo: 'Captura medida',
            descripcion: 'Entre 8 y 10 toneladas de CO₂ por hectárea y año durante los primeros 10 años. Datos medidos en campo, no estimaciones.',
          },
          {
            titulo: 'Verificación independiente',
            descripcion: 'Auditorías por terceros certificados que validan la cantidad real de carbono capturado antes de la emisión de cada crédito.',
          },
          {
            titulo: 'Adicionalidad real',
            descripcion: 'Los proyectos no existirían sin la venta de créditos. Cada compensación crea bosque que de otro modo no estaría plantado.',
          },
          {
            titulo: 'Permanencia 30+ años',
            descripcion: 'Monitoreo y mantenimiento continuo de los bosques durante décadas. Buffer de garantía contra incendios o eventos climáticos.',
          },
        ]}
      />

      <ServicioPasos
        eyebrow="Cómo funciona"
        titulo="Del compromiso a la tonelada certificada."
        italicWord="tonelada certificada."
        pasos={[
          { numero: '01', titulo: 'Cálculo de necesidades', descripcion: 'Analizamos contigo el alcance de tu huella de carbono (Scope 1, 2 y 3) y diseñamos un plan de compensación coherente con tus compromisos climáticos.' },
          { numero: '02', titulo: 'Asignación a proyecto', descripcion: 'Vinculamos tu compensación a un proyecto específico de reforestación. Recibes documentación detallada del proyecto: ubicación, especies, calendario.' },
          { numero: '03', titulo: 'Implementación y monitoreo', descripcion: 'Ejecutamos la plantación con tu acompañamiento opcional. Drones multiespectrales y sensores IoT monitorizan el crecimiento en tiempo real.' },
          { numero: '04', titulo: 'Certificación anual', descripcion: 'Emisión anual de créditos verificados según Verra o Gold Standard. Recibes la certificación oficial y un reporte de impacto cuantificado.' },
        ]}
      />

      <ServicioCTA
        titulo="¿Quieres compensar de verdad?"
        italicWord="de verdad?"
        subtitulo="Acompañamos a empresas con compromisos serios de neutralidad carbónica. Sin greenwashing, sin atajos. Hablemos del plan que necesitas."
        ctaPrimario={{ label: 'Hablar con el equipo', href: '/contacto' }}
        ctaSecundario={{ label: 'Ver todos los servicios', href: '/servicios' }}
      />
    </>
  );
}
