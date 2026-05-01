'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

const hitos = [
  {
    fecha: '2026',
    momento: 'Octubre',
    titulo: 'Primera plantación oficial',
    descripcion: 'Galicia. 270 hectáreas de zonas boscosas afectadas por incendios. Roble y castaño autóctonos.',
    estado: 'Próximo',
  },
  {
    fecha: '2026 — 2027',
    momento: 'Solicitud',
    titulo: 'LIFE 2026 · Next Generation EU',
    descripcion: 'Presentación de propuesta a fondos europeos. Potencial de 3-7 millones de euros para escalar el modelo.',
    estado: 'En preparación',
  },
  {
    fecha: '2027',
    momento: 'Enero',
    titulo: 'Constitución EcoReforest SL',
    descripcion: 'Transición al modelo dual: la asociación mantiene I+D y proyectos públicos; la SL escala las operaciones comerciales.',
    estado: 'Planificado',
  },
  {
    fecha: '2027 — 2030',
    momento: 'Despliegue',
    titulo: 'Escalamiento nacional',
    descripcion: 'Plantas de compostaje en Cataluña, Andalucía, Valencia y Murcia. Más de 1.000 hectáreas restauradas al año.',
    estado: 'Visión',
  },
];

const estadoColor: Record<string, string> = {
  'Próximo': 'text-forest border-forest/30',
  'En preparación': 'text-ink border-ink/30',
  'Planificado': 'text-smoke border-smoke/30',
  'Visión': 'text-smoke border-smoke/20',
};

export default function HomeHojaRuta() {
  return (
    <section className="relative py-32 lg:py-48 bg-bone">
      <div className="container-x max-w-6xl">
        <div className="max-w-4xl mb-20 lg:mb-28">
          <SectionEyebrow>Hoja de ruta</SectionEyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Lo que ya vemos venir,{' '}
            <span className="italic-display font-normal">paso a paso.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke leading-relaxed mt-8 max-w-2xl"
          >
            Sin promesas vacías. Compromisos verificables y plazos reales.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-ash hidden md:block" />

          <div className="space-y-16 lg:space-y-24">
            {hitos.map((hito, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
                className="relative grid md:grid-cols-12 gap-6 md:gap-12 md:pl-12"
              >
                <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-bone border-2 border-forest hidden md:block" />

                <div className="md:col-span-3">
                  <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-2">
                    {hito.momento}
                  </p>
                  <p className="text-2xl lg:text-3xl font-medium tracking-tight">
                    {hito.fecha}
                  </p>
                </div>

                <div className="md:col-span-7">
                  <h3 className="text-display-sm font-semibold tracking-tight mb-4">
                    {hito.titulo}
                  </h3>
                  <p className="text-base text-smoke leading-relaxed max-w-xl">
                    {hito.descripcion}
                  </p>
                </div>

                <div className="md:col-span-2 md:text-right">
                  <span className={`inline-block text-xs font-mono uppercase tracking-[0.2em] px-3 py-1.5 border rounded-full ${estadoColor[hito.estado]}`}>
                    {hito.estado}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <Link
            href="/hoja-de-ruta"
            className="inline-flex items-center gap-2 text-base font-medium underline underline-offset-4 decoration-ash hover:decoration-ink transition-colors"
          >
            Ver hoja de ruta completa →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
