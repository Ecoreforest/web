'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const fases = [
  {
    numero: 'Fase I',
    periodo: 'Mayo — septiembre 2026',
    nombre: 'Preparación y alianzas',
    descripcion:
      'Con la asociación ya inscrita, construir alianzas territoriales con ayuntamientos, propietarios, universidades y gestores de residuos. Identificar los primeros terrenos piloto, cerrar acuerdos de suministro de biomasa y dejar la estructura técnica preparada para arrancar la primera plantación en otoño.',
    resultado:
      'Dossier técnico completo, red de socios territoriales, terrenos piloto identificados y mapa de convocatorias.',
    tono: 'preparacion',
  },
  {
    numero: 'Fase II',
    periodo: 'Octubre 2026 — diciembre 2027',
    nombre: 'Validación técnica y financiación',
    descripcion:
      'Ejecutar los primeros pilotos de restauración y compostaje, generar datos verificables de supervivencia, captura de carbono, costes y participación social. Preparar una propuesta sólida para LIFE 2027 y captar las primeras subvenciones nacionales y autonómicas.',
    resultado:
      'Pilotos ejecutados, primeras subvenciones obtenidas, propuesta LIFE 2027 presentada y cartera de proyectos para 2028.',
    tono: 'validacion',
  },
  {
    numero: 'Fase III',
    periodo: '2028 en adelante',
    nombre: 'Escalamiento y modelo dual condicionado',
    descripcion:
      'Convertir el modelo de validación en operaciones recurrentes. Ampliar acuerdos con administraciones, escalar Forest Clean y biocompost, lanzar EcoReforest Wear y, si existe volumen comercial suficiente, evaluar la creación de una sociedad limitada instrumental para actividades mercantiles.',
    resultado:
      'Actividad recurrente, expansión territorial y posible SL si los criterios de volumen comercial se cumplen.',
    tono: 'escalamiento',
  },
];

export default function HojaRutaFases() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Tres fases</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            La{' '}
            <span className="italic-display font-normal">secuencia</span>{' '}
            completa, sin atajos.
          </motion.h2>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {fases.map((f, i) => (
            <motion.article
              key={f.numero}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start border-t border-ash pt-10 lg:pt-12"
            >
              <div className="lg:col-span-3">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-3">
                  {f.numero}
                </p>
                <p
                  className="font-semibold tracking-tighter leading-none text-ink"
                  style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}
                >
                  {f.nombre}
                  <span className="italic-display font-normal text-forest">.</span>
                </p>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-smoke">
                  {f.periodo}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base lg:text-lg text-smoke leading-relaxed">
                  {f.descripcion}
                </p>
              </div>

              <div className="lg:col-span-4 border-l border-ash pl-6">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-3">
                  Resultado esperado
                </p>
                <p className="text-base lg:text-lg text-ink leading-relaxed">
                  {f.resultado}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
