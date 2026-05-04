'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

export default function HomePrinceton() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="relative bg-ink text-bone overflow-hidden grain">
      <div ref={ref} className="container-x max-w-7xl py-32 lg:py-48">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <SectionEyebrow light>Costa Rica · 1996</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight text-balance"
            >
              Doce mil toneladas de cáscaras de naranja{' '}
              <span className="italic-display font-normal">cambiaron la ciencia.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 space-y-6 text-bone/70 text-base lg:text-lg leading-relaxed max-w-xl"
            >
              <p>
                En 1996, dos investigadores de Princeton, Daniel Janzen y Winnie Hallwachs, propusieron un experimento: depositar 12.000 toneladas de residuos de naranja sobre 3 hectáreas de bosque tropical degradado.
              </p>
              <p>
                El experimento fue olvidado durante décadas. Cuando volvieron en 2014, no encontraron lo que esperaban: encontraron algo mejor.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-12 border-t border-bone/15"
            >
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-bone/40 mb-4">
                El resultado
              </p>
              <p className="text-display-lg font-semibold tracking-tight leading-none">
                <span className="italic-display font-normal text-bone/95">+</span>176%
              </p>
              <p className="mt-4 text-bone/60 max-w-md leading-relaxed">
                Más biomasa arbórea respecto al control. Es la prueba científica de que los residuos orgánicos son un acelerador de bosques.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ y: imageY }}
            className="lg:col-span-6 order-1 lg:order-2 relative"
          >
            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm"
            >
              <Image
                src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895096/princeton-naranjas_forgqn.png"
                alt="Naranjas frescas como símbolo del descubrimiento de Princeton"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </motion.div>
            <p className="mt-4 text-xs font-mono text-bone/40 uppercase tracking-[0.2em]">
              Foto: estudio inspirado en Janzen & Hallwachs (Princeton)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
