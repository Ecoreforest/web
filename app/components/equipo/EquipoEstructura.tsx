'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

type Area = {
  numero: string;
  nombre: string;
  funcion: string;
};

/**
 * Paso 15: área 05 pasa de "Compostaje y biocompost / Recetas, proveedores,
 * control de calidad y permisos" a "Compost certificado / Auditoría de
 * partners UNE 142500, análisis por lote y trazabilidad de origen".
 * Refleja el pivote: no fabricamos, seleccionamos y validamos.
 */

const areas: Area[] = [
  {
    numero: '01',
    nombre: 'Presidencia / dirección estratégica',
    funcion: 'Relaciones institucionales, visión y coordinación general.',
  },
  {
    numero: '02',
    nombre: 'Secretaría',
    funcion: 'Actas, registro documental, socios y cumplimiento normativo.',
  },
  {
    numero: '03',
    nombre: 'Tesorería',
    funcion: 'Presupuesto, contabilidad, donaciones y control financiero.',
  },
  {
    numero: '04',
    nombre: 'Técnica forestal',
    funcion: 'Diseño de pilotos, selección de especies, suelos y seguimiento.',
  },
  {
    numero: '05',
    nombre: 'Compost certificado',
    funcion: 'Auditoría de partners UNE 142500, análisis por lote y trazabilidad de origen.',
  },
  {
    numero: '06',
    nombre: 'Comunicación y comunidad',
    funcion: 'Web, socios, campañas y relaciones públicas.',
  },
];

export default function EquipoEstructura() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Estructura y áreas operativas</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Cómo nos{' '}
            <span className="italic-display font-normal">organizamos.</span>
          </motion.h2>
        </div>

        <div className="space-y-4 lg:space-y-5">
          {areas.map((a, i) => (
            <motion.article
              key={a.numero}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-4 lg:gap-8 items-baseline border-b border-ash pb-5 lg:pb-6"
            >
              <div className="lg:col-span-1">
                <p className="font-mono text-sm tracking-[0.25em] text-forest">
                  {a.numero}
                </p>
              </div>

              <div className="lg:col-span-5">
                <h3 className="text-lg lg:text-xl font-semibold tracking-tight">
                  {a.nombre}
                </h3>
              </div>

              <div className="lg:col-span-6">
                <p className="text-sm lg:text-base text-smoke leading-relaxed">
                  {a.funcion}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
