'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

const indicadores = [
  {
    indicador: 'Supervivencia arbórea',
    metodo: 'Drones multiespectrales + inspección de campo',
    frecuencia: 'Trimestral',
  },
  {
    indicador: 'Captura de carbono',
    metodo: 'Modelo basado en biomasa medida + factores IPCC',
    frecuencia: 'Anual',
  },
  {
    indicador: 'Humedad del suelo',
    metodo: 'Sensores IoT LoRaWAN distribuidos por parcela',
    frecuencia: 'Cada 15 minutos',
  },
  {
    indicador: 'Cobertura vegetal (NDVI)',
    metodo: 'Análisis satelital Sentinel-2',
    frecuencia: 'Semanal',
  },
  {
    indicador: 'Volumen de compost producido',
    metodo: 'Pesaje por lote + análisis fisicoquímico',
    frecuencia: 'Por lote',
  },
  {
    indicador: 'Biorresiduos valorizados',
    metodo: 'Registro de entrada con trazabilidad por origen',
    frecuencia: 'Por entrega',
  },
];

export default function ImpactoMetodologia() {
  return (
    <section className="relative py-24 lg:py-32 bg-ivory">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-16 lg:mb-20">
          <div className="lg:col-span-5">
            <SectionEyebrow>Metodología</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight text-balance"
            >
              Cómo lo{' '}
              <span className="italic-display font-normal">medimos.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base lg:text-lg text-smoke leading-relaxed max-w-md"
            >
              Cada indicador tiene un método asignado, una frecuencia y una
              fuente verificable. Sin esto, una cifra es solo una afirmación.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <Link
                href="/tecnologia"
                className="inline-flex items-center gap-3 text-sm font-medium border-b border-ink/30 pb-1 hover:border-forest hover:text-forest transition-colors"
              >
                Detalle de la pila tecnológica
                <span>→</span>
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-5">
              {indicadores.map((ind, i) => (
                <motion.article
                  key={ind.indicador}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-12 gap-4 lg:gap-6 items-baseline border-b border-ash pt-5 pb-5"
                >
                  <div className="col-span-12 md:col-span-5">
                    <h3 className="text-lg lg:text-xl font-semibold tracking-tight">
                      {ind.indicador}
                    </h3>
                  </div>
                  <div className="col-span-8 md:col-span-5">
                    <p className="text-sm lg:text-base text-smoke leading-relaxed">
                      {ind.metodo}
                    </p>
                  </div>
                  <div className="col-span-4 md:col-span-2 text-right">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest">
                      {ind.frecuencia}
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
