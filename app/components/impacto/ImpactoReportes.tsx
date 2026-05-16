'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const reportes = [
  {
    nombre: 'Reporte anual de impacto',
    descripcion:
      'Memoria pública con todas las cifras del ejercicio: hectáreas reforestadas, supervivencia, captura de carbono, biorresiduos valorizados y desviaciones respecto a los objetivos.',
    cadencia: 'Una vez al año · enero',
    formato: 'PDF + datos abiertos en CSV',
  },
  {
    nombre: 'Auditoría externa',
    descripcion:
      'Auditor independiente revisa el reporte anual, los datos de campo y los modelos de captura. Firma o señala discrepancias antes de la publicación.',
    cadencia: 'Una vez al año · marzo',
    formato: 'Informe firmado por tercero',
  },
  {
    nombre: 'API pública',
    descripcion:
      'Endpoint REST con consulta libre por lote de compost, parcela y árbol. Permite a empresas, administraciones y prensa contrastar cualquier cifra publicada.',
    cadencia: 'Tiempo real',
    formato: 'JSON',
  },
  {
    nombre: 'Reporte por colaborador',
    descripcion:
      'Cada empresa, mecenas o inversor recibe un informe específico con las parcelas, los árboles y la captura de carbono asociados a su aportación.',
    cadencia: 'Trimestral',
    formato: 'PDF + dashboard privado',
  },
];

export default function ImpactoReportes() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Reportes</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Qué publicamos,{' '}
            <span className="italic-display font-normal">cuándo,</span>{' '}
            quién lo audita.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Los datos no son útiles si no son accesibles. Cuatro canales para
            que cualquiera pueda contrastar lo que afirmamos.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-ash border-t border-b border-ash">
          {reportes.map((r, i) => (
            <motion.article
              key={r.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-bone p-8 lg:p-12 flex flex-col"
            >
              <p className="font-mono text-xs tracking-[0.25em] text-forest mb-6">
                0{i + 1}
              </p>

              <h3
                className="font-semibold tracking-tight leading-[1.05] mb-5"
                style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.5rem)' }}
              >
                {r.nombre}
                <span className="italic-display font-normal text-forest">.</span>
              </h3>

              <p className="text-base lg:text-lg text-smoke leading-relaxed flex-1">
                {r.descripcion}
              </p>

              <dl className="mt-8 pt-6 border-t border-ash grid grid-cols-2 gap-4">
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke mb-2">
                    Cadencia
                  </dt>
                  <dd className="text-sm text-ink/85">{r.cadencia}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-smoke mb-2">
                    Formato
                  </dt>
                  <dd className="text-sm text-ink/85">{r.formato}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
