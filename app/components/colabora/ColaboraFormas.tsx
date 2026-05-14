'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const formas = [
  {
    id: '01',
    titulo: 'Empresas',
    subtitulo: 'Patrocinio y servicios',
    descripcion:
      'Reforestación corporativa, créditos de carbono futuros, auditorías y consultoría circular. Cada acuerdo se traduce en hectáreas reales con trazabilidad.',
    quien: 'Para empresas que quieren impacto medible y reportable.',
  },
  {
    id: '02',
    titulo: 'Voluntariado',
    subtitulo: 'Sobre el terreno',
    descripcion:
      'Jornadas de plantación, mantenimiento y monitoreo en parcela. Sin coste para el voluntario, formación previa incluida, certificado de horas.',
    quien: 'Para particulares, asociaciones y equipos universitarios.',
  },
  {
    id: '03',
    titulo: 'Mecenazgo',
    subtitulo: 'Aportaciones puntuales o recurrentes',
    descripcion:
      'Aportaciones libres a partir de 5 €, con deducción fiscal según el Régimen de Mecenazgo. Cada euro queda asociado a una parcela y unos resultados.',
    quien: 'Para personas que quieren apoyar el proyecto sin compromiso.',
  },
  {
    id: '04',
    titulo: 'Inversores',
    subtitulo: 'Hoja de ruta a largo plazo',
    descripcion:
      'Conversaciones privadas con quienes quieren acompañar la transición del proyecto hacia una estructura mixta. Discreción y rigor financiero.',
    quien: 'Para family offices, fondos y socios estratégicos.',
  },
];

export default function ColaboraFormas() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <SectionEyebrow>Cuatro formas</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Tu papel{' '}
            <span className="italic-display font-normal">en el bosque.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Cada modalidad tiene su contrato, su seguimiento y sus métricas.
            Ninguna funciona sin compromiso real por ambas partes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ash">
          {formas.map((f, i) => (
            <motion.article
              key={f.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bone p-10 lg:p-14 flex flex-col"
            >
              <p className="font-mono text-xs tracking-[0.25em] text-forest mb-8">
                {f.id} — {f.subtitulo}
              </p>

              <h3
                className="font-semibold tracking-tight leading-[0.95] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.5rem)' }}
              >
                {f.titulo}
                <span className="italic-display font-normal text-forest">.</span>
              </h3>

              <p className="text-base lg:text-lg text-smoke leading-relaxed">
                {f.descripcion}
              </p>

              <p className="mt-8 pt-6 border-t border-ash text-sm text-ink/70 italic">
                {f.quien}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
