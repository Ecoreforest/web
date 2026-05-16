'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const hitos = [
  {
    valor: '270',
    suffix: ' ha',
    titulo: 'Galicia, oct 2026',
    detalle:
      'Primer terreno apalabrado. Inicio del piloto de plantación en la ventana otoño-invierno 2026-2027.',
  },
  {
    valor: '1',
    suffix: 'er',
    titulo: 'Reporte público, ene 2028',
    detalle:
      'Memoria anual auditada por tercero independiente. Datos por parcela y árbol.',
  },
  {
    valor: 'LIFE',
    suffix: ' 2027',
    titulo: 'Convocatoria europea principal',
    detalle:
      'Candidatura preparada durante 2026-2027. LIFE 2026 solo si la inscripción y el consorcio lo permiten.',
  },
  {
    valor: '3',
    suffix: '',
    titulo: 'Fases · 30 meses',
    detalle:
      'De la presentación registral al inicio del escalamiento operativo. Cada fase con un resultado mensurable.',
  },
];

export default function HojaRutaHitos() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow light>Hitos críticos</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold text-bone tracking-tight text-balance"
          >
            Cuatro fechas que{' '}
            <span className="italic-display font-normal">no negociamos.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-bone/65 leading-relaxed max-w-2xl"
          >
            Si alguno se mueve, lo contamos. Si llega antes, también.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {hitos.map((h, i) => (
            <motion.div
              key={h.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="border-t border-bone/15 pt-8"
            >
              <p
                className="font-semibold tracking-tighter leading-none text-bone"
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
              >
                {h.valor}
                <span className="italic-display font-normal text-forest">
                  {h.suffix}
                </span>
              </p>
              <p className="mt-6 text-base lg:text-lg text-bone font-medium">
                {h.titulo}
              </p>
              <p className="mt-3 text-sm text-bone/55 leading-relaxed max-w-[28ch]">
                {h.detalle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
