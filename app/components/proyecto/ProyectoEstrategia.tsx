'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const fases = [
  {
    fase: 'Fase 01',
    horizonte: '2026 — 2027',
    titulo: 'EcoReforest Asociación',
    subtitulo: 'Sin ánimo de lucro',
    items: [
      'Investigación, desarrollo y validación del modelo',
      'Acceso a subvenciones públicas y fondos europeos',
      'Régimen fiscal favorable y cofinanciación del 80-100%',
      'Primera plantación piloto: octubre 2026 (Galicia, 270 ha)',
    ],
    estado: 'Activo',
  },
  {
    fase: 'Fase 02',
    horizonte: '2027 +',
    titulo: 'EcoReforest SL',
    subtitulo: 'Sociedad limitada',
    items: [
      'Comercialización de productos y servicios a empresas',
      'Distribución de beneficios y captación de inversión privada',
      'Expansión geográfica a otras regiones del Mediterráneo',
      'Operación dual coordinada con la asociación',
    ],
    estado: 'Planificado',
  },
];

const estadoColor: Record<string, string> = {
  Activo: 'text-forest border-forest/40 bg-forest/5',
  Planificado: 'text-smoke border-smoke/30 bg-bone',
};

export default function ProyectoEstrategia() {
  return (
    <section className="relative py-32 lg:py-48 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-4xl mb-20 lg:mb-28">
          <SectionEyebrow>Estrategia dual</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Una idea, dos{' '}
            <span className="italic-display font-normal">vehículos.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-2xl"
          >
            Empezamos como asociación porque es donde mejor encaja la fase de
            validación. Evolucionamos hacia un modelo dual cuando el proyecto
            esté listo para escalar comercialmente. Cada estructura, en su
            momento.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10">
          {fases.map((f, i) => (
            <motion.article
              key={f.fase}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-ivory rounded-sm p-8 lg:p-12 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke">
                  {f.fase} · {f.horizonte}
                </p>
                <span
                  className={`text-xs font-mono uppercase tracking-[0.2em] px-3 py-1.5 border rounded-full ${estadoColor[f.estado]}`}
                >
                  {f.estado}
                </span>
              </div>

              <h3 className="text-display-md font-semibold tracking-tight leading-[1.05] mb-3">
                {f.titulo}
              </h3>
              <p className="font-mono text-sm tracking-wide text-smoke mb-10">
                {f.subtitulo}
              </p>

              <ul className="space-y-4 mt-auto">
                {f.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-baseline gap-4 text-base text-ink/85 leading-relaxed"
                  >
                    <span className="font-mono text-xs text-forest shrink-0">
                      0{j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
