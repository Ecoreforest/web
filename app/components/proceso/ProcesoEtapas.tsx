'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 13: reordenado completo de las 4 etapas tras externalización del
 * compost. Ya no hay "Recolección" ni "Compostaje" — ahora la Etapa 01
 * es Selección de terreno, la 02 es Suministro certificado de compost,
 * la 03 sigue siendo Plantación y la 04 sigue siendo Monitoreo.
 *
 * La lógica de negocio real:
 * - El compost lo compramos a productores UNE 142500
 * - Nosotros aportamos el diseño técnico, la ejecución en campo,
 *   el monitoreo y la trazabilidad pública
 */

const etapas = [
  {
    numero: '01',
    titulo: 'Selección de terreno y diseño técnico',
    duracion: '2 — 4 meses',
    descripcion:
      'Identificamos parcelas con administraciones, propietarios privados y comunidades locales. Estudio edafoclimático, cartografía detallada, selección de especies autóctonas por bioma y diseño en mosaico ajustado al terreno.',
    detalles: [
      'Acuerdos con propietarios y administraciones',
      'Análisis de suelo y régimen hídrico previo',
      'Diseño técnico revisado con ingeniería forestal',
    ],
  },
  {
    numero: '02',
    titulo: 'Suministro certificado de compost',
    duracion: 'Por lote, con antelación a la ventana de plantación',
    descripcion:
      'Adquirimos compost UNE 142500 a productores españoles certificados. Cada lote entrante pasa un análisis fisicoquímico independiente antes de aprobarse para uso en parcela. Externalizamos la producción del compost para concentrarnos en el diseño y la ejecución de la reforestación.',
    detalles: [
      'Compra a productores certificados UNE 142500',
      'Análisis por lote antes de aprobar entrada',
      'Trazabilidad completa desde el proveedor',
    ],
  },
  {
    numero: '03',
    titulo: 'Plantación',
    duracion: 'Ventana otoño / primavera',
    descripcion:
      'Aplicación del compost en el suelo degradado seguida de la plantación de especies autóctonas. Densidades bajas, sin monocultivos, replicando la estructura natural del ecosistema mediterráneo.',
    detalles: [
      'Especies nativas adaptadas al clima local',
      'Diseño en mosaico, no plantación en hilera',
      'Aplicación técnica del compost por parcela',
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
            Un proceso{' '}
            <span className="italic-display font-normal">medido,</span>{' '}
            trazable y sin humo.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Externalizamos la producción del compost a partners certificados
            para concentrarnos en lo que solo nosotros podemos aportar: diseño
            técnico regenerativo, ejecución en campo y monitoreo científico.
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
