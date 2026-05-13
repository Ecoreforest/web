import ServicioHero from '../../components/servicios/ServicioHero';
import ServicioFeatures from '../../components/servicios/ServicioFeatures';
import ServicioPasos from '../../components/servicios/ServicioPasos';
import ServicioCTA from '../../components/servicios/ServicioCTA';

export const metadata = {
  title: 'Compost certificado',
  description: 'Fertilizante orgánico de alta calidad producido con tecnología de compostaje acelerado. Norma UNE 142500, apto para agricultura ecológica.',
};

export default function Compost() {
  return (
    <>
      <ServicioHero
        eyebrow="Servicio 01"
        title="Compost certificado. Lo que era residuo, ahora es suelo fértil."
        italicWord="suelo fértil."
        description="Fertilizante orgánico de alta calidad producido con tecnología de compostaje acelerado. Cumple la norma UNE 142500 y es apto para agricultura ecológica."
        imagen="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895082/linea-compost_jepie9.jpg"
      />

      <ServicioFeatures
        eyebrow="Por qué es diferente"
        titulo="Compost de verdad, no marketing verde."
        italicWord="marketing verde."
        features={[
          {
            titulo: 'Norma UNE 142500',
            descripcion: 'Cumplimiento estricto del estándar técnico oficial. Contenido de materia orgánica superior al 40%, relación C/N controlada y ausencia de patógenos.',
          },
          {
            titulo: 'Compostaje acelerado',
            descripcion: 'Microorganismos especializados y sensores IoT reducen el ciclo de 90-120 días a 30-45 días sin sacrificar calidad nutricional.',
          },
          {
            titulo: 'Apto para ecológico',
            descripcion: 'Aprobado para agricultura ecológica certificada. Trazabilidad completa desde el origen del residuo hasta el saco final.',
          },
          {
            titulo: 'Circular de verdad',
            descripcion: 'Hecho con residuos de frutas y verduras que de otro modo acabarían generando metano en vertederos.',
          },
          {
            titulo: 'Mejora medible',
            descripcion: 'Aumenta la materia orgánica del suelo, mejora la retención de agua y reduce la dependencia de fertilizantes sintéticos.',
          },
          {
            titulo: 'Producción nacional',
            descripcion: 'Procesado íntegramente en España. Cadena corta de suministro, baja huella de transporte.',
          },
        ]}
      />

      <ServicioPasos
        eyebrow="Cómo lo hacemos"
        titulo="De la cáscara al saco, en cuatro fases."
        italicWord="cuatro fases."
        pasos={[
          { numero: '01', titulo: 'Recolección selectiva', descripcion: 'Recogemos residuos orgánicos de mercados, supermercados y centrales hortofrutícolas con logística optimizada y trazabilidad por origen.' },
          { numero: '02', titulo: 'Pretratamiento e inoculación', descripcion: 'Trituración, mezcla equilibrada de materiales ricos en carbono y nitrógeno, e inoculación con consorcios microbianos termófilos.' },
          { numero: '03', titulo: 'Fermentación controlada', descripcion: 'Sensores IoT monitorizan temperatura, humedad, pH y oxígeno. Volteo automatizado para acelerar la descomposición aeróbica.' },
          { numero: '04', titulo: 'Cribado y certificación', descripcion: 'Cribado por granulometría, análisis de laboratorio y certificación según UNE 142500 antes del envasado y distribución.' },
        ]}
      />

      <ServicioCTA
        titulo="¿Quieres compost para tu proyecto?"
        italicWord="tu proyecto?"
        subtitulo="Atendemos a agricultores, viveros, ayuntamientos y empresas paisajistas. Pídenos información sobre formatos, volúmenes y plazos de entrega."
        ctaPrimario={{ label: 'Solicitar presupuesto', href: '/contacto' }}
        ctaSecundario={{ label: 'Ver todos los servicios', href: '/servicios' }}
      />
    </>
  );
}
