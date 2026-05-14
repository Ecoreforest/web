'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const ventajas = [
  {
    titulo: 'Reporte de impacto verificable',
    descripcion:
      'Informe trimestral con datos por parcela: especies, hectáreas, supervivencia y captura estimada de carbono. Listo para integrar en memoria de sostenibilidad.',
  },
  {
    titulo: 'Trazabilidad por aportación',
    descripcion:
      'Cada euro queda vinculado a parcelas concretas. Visualización pública desde la página de la empresa y posibilidad de visita técnica.',
  },
  {
    titulo: 'Cobertura comunicacional',
    descripcion:
      'Visibilidad en web, redes y materiales del proyecto, sin promesas exageradas. Contamos lo que hay, no lo que conviene.',
  },
  {
    titulo: 'Asesoría circular interna',
    descripcion:
      'Acompañamiento técnico a equipos internos para reducir residuos orgánicos y diseñar un programa circular propio.',
  },
];

export default function ColaboraEmpresas() {
  return (
    <section className="relative py-24 lg:py-32 bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionEyebrow light>Para empresas</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold text-bone tracking-tight text-balance"
            >
              Impacto que se{' '}
              <span className="italic-display font-normal">demuestra.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base lg:text-lg text-bone/65 leading-relaxed max-w-md"
            >
              La inversión corporativa en restauración solo tiene sentido si
              es auditable. Trabajamos como si nuestro cliente fuese a
              someternos a una due diligence cada año.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-forest"
            >
              Acuerdos a partir de 1 hectárea · 12 — 36 meses
            </motion.p>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-6">
              {ventajas.map((v, i) => (
                <motion.article
                  key={v.titulo}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-t border-bone/15 pt-8"
                >
                  <p className="font-mono text-xs tracking-[0.25em] text-forest mb-4">
                    0{i + 1}
                  </p>
                  <h3 className="text-xl lg:text-2xl font-semibold text-bone tracking-tight mb-3">
                    {v.titulo}
                  </h3>
                  <p className="text-base text-bone/65 leading-relaxed max-w-2xl">
                    {v.descripcion}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
