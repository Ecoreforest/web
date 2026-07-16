'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 14: Trazabilidad migrada desde /proceso a /tecnologia.
 *
 * Los 4 niveles de trazabilidad (L1-L4) son una capa técnica del stack:
 * dependen de los sensores IoT, los identificadores únicos, la API abierta
 * y la infraestructura de datos. Encaja mejor en /tecnologia que en un
 * "proceso operativo".
 *
 * Contenido reciclado 1:1 del antiguo ProcesoTrazabilidad.tsx.
 */

const niveles = [
  {
    nivel: 'L1',
    titulo: 'Por lote',
    descripcion:
      'Cada lote de compost lleva asociado origen del biorresiduo, fechas de proceso, parámetros fisicoquímicos y destino final.',
  },
  {
    nivel: 'L2',
    titulo: 'Por parcela',
    descripcion:
      'Cada parcela reforestada tiene ficha pública con coordenadas, especies plantadas, suelo de partida y compost utilizado.',
  },
  {
    nivel: 'L3',
    titulo: 'Por árbol',
    descripcion:
      'Cada ejemplar dispone de identificador único y registro de supervivencia, crecimiento y captura estimada de carbono.',
  },
  {
    nivel: 'L4',
    titulo: 'Por colaborador',
    descripcion:
      'Cualquier colaborador puede ver, en abierto, qué hectáreas, qué árboles y qué resultados están vinculados a su aportación.',
  },
];

export default function TecnologiaTrazabilidad() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionEyebrow>Trazabilidad</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight text-balance"
            >
              Cuatro niveles de{' '}
              <span className="italic-display font-normal">verdad pública.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base lg:text-lg text-smoke leading-relaxed max-w-md"
            >
              El sector forestal y de créditos de carbono carga con un
              historial de greenwashing. Para no formar parte del problema,
              construimos el proyecto para ser auditable desde el primer día.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-forest"
            >
              Datos públicos · API abierta · Auditoría externa anual
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {niveles.map((n, i) => (
                <motion.article
                  key={n.nivel}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-12 gap-4 lg:gap-6 items-baseline border-t border-ash pt-8"
                >
                  <div className="col-span-2">
                    <p className="font-mono text-sm tracking-[0.2em] text-forest">
                      {n.nivel}
                    </p>
                  </div>
                  <div className="col-span-10 lg:col-span-4">
                    <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
                      {n.titulo}
                    </h3>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <p className="text-base text-smoke leading-relaxed">
                      {n.descripcion}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
