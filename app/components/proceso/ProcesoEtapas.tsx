'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const etapas = [
  {
    numero: '01',
    titulo: 'Recolección',
    duracion: '24 — 72 h',
    descripcion:
      'Recogemos biorresiduos de mercados municipales, restaurantes, supermercados y poda urbana. Cadena de frío y logística diseñadas para evitar fermentaciones no controladas antes del procesado.',
    detalles: [
      'Acuerdos con ayuntamientos bajo Ley 7/2022',
      'Trazabilidad por lote desde el punto de origen',
      'Vehículos eléctricos en última milla urbana',
    ],
  },
  {
    numero: '02',
    titulo: 'Compostaje acelerado',
    duracion: '21 — 28 días',
    descripcion:
      'Tecnología termófila en biorreactores con sensores de temperatura, humedad y oxígeno. Lo que en un compostador casero tarda 6 meses, aquí ocurre en tres semanas, con calidad UNE 142500.',
    detalles: [
      'Control automático de aireación y humedad',
      'Fase termófila estable a 65 °C — eliminación de patógenos',
      'Análisis fisicoquímico por lote antes de salida',
    ],
  },
  {
    numero: '03',
    titulo: 'Plantación',
    duracion: 'Ventana otoño / primavera',
    descripcion:
      'Aplicación del compost en el suelo degradado seguida de la plantación de especies autóctonas seleccionadas por bioma. Densidades bajas, sin monocultivos, replicando la estructura natural del ecosistema.',
    detalles: [
      'Especies nativas adaptadas al clima local',
      'Diseño en mosaico, no plantación en hilera',
      'Plantilla técnica revisada con ingeniería forestal',
    ],
  },
  {
    numero: '04',
    titulo: 'Monitoreo',
    duracion: '5 — 30 años',
    descripcion:
      'Sensores IoT en parcela, drones multiespectrales y análisis satelital. Cada árbol queda asociado a un identificador único. Los datos son públicos y verificables por terceros.',
    detalles: [
      'Supervivencia, crecimiento y salud vegetal',
      'Captura de carbono y humedad del suelo',
      'Reportes anuales abiertos a colaboradores',
    ],
  },
];

export default function ProcesoEtapas() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <SectionEyebrow>Las cuatro etapas</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Un ciclo{' '}
            <span className="italic-display font-normal">cerrado,</span> medido
            y trazable.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            No reinventamos la rueda: aplicamos ciencia conocida a una escala
            donde, hasta hoy, casi nadie lo había hecho con honestidad.
          </motion.p>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {etapas.map((etapa, i) => (
            <motion.article
              key={etapa.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 border-b border-ash pb-16 lg:pb-24 last:border-b-0"
            >
              <div className="lg:col-span-3">
                <p
                  className="font-semibold tracking-tighter leading-none text-forest"
                  style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}
                >
                  {etapa.numero}
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-smoke">
                  {etapa.duracion}
                </p>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-display-sm font-semibold tracking-tight mb-6">
                  {etapa.titulo}
                  <span className="italic-display font-normal text-forest">.</span>
                </h3>
                <p className="text-base lg:text-lg text-smoke leading-relaxed">
                  {etapa.descripcion}
                </p>
              </div>

              <div className="lg:col-span-4">
                <ul className="space-y-4 lg:pt-3">
                  {etapa.detalles.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-base text-ink/85 leading-relaxed border-l border-forest/30 pl-4"
                    >
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
