'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.45, 0.85]);

  return (
    <>
      <section
        ref={heroRef}
        className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink"
      >
        <motion.div
          style={{ scale: heroScale, y: heroY }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/dekgmk73i/video/upload/v1777644762/forest_uhuenu.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>

        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full flex flex-col justify-end pb-16 lg:pb-20 pt-32 container-x"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold text-bone tracking-tight max-w-[16ch] text-balance"
          >
            Vamos a convertir el desperdicio en{' '}
            <span className="italic-display font-normal">bosque.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 lg:mt-8 text-bone/85 text-lg md:text-xl lg:text-2xl font-light tracking-tight max-w-2xl"
          >
            Juntos transformamos{' '}
            <span className="italic-display font-normal">desiertos</span> en{' '}
            <span className="italic-display font-normal">bosques</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-12 lg:mt-16"
          >
            <p className="text-bone/70 text-sm md:text-base max-w-md leading-relaxed">
              Únete desde el primer árbol. Asociación que combate la desertificación en España con economía circular.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/colabora"
                className="px-7 py-3.5 bg-bone text-ink rounded-full font-medium hover:bg-bone/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Únete al cambio
              </Link>
              <Link
                href="/proyecto"
                className="px-7 py-3.5 border border-bone/40 text-bone rounded-full font-medium hover:bg-bone/10 hover:border-bone/60 transition-all"
              >
                Conoce el proyecto
              </Link>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{ opacity: heroOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-bone/50">
            Desliza
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1px] h-8 bg-gradient-to-b from-bone/60 to-transparent"
          />
        </motion.div>
      </section>

      <section className="relative py-32 lg:py-48 bg-bone">
        <div className="container-x max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-8"
          >
            La urgencia
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
          >
            España se está{' '}
            <span className="italic-display font-normal">secando.</span>{' '}
            Y nosotros tenemos la respuesta.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke max-w-2xl leading-relaxed mt-8"
          >
            Mientras tres cuartas partes del territorio están en riesgo de desertificación, generamos millones de toneladas de residuos orgánicos que acaban en vertederos. La conexión entre ambos problemas es también su solución.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 mt-20 lg:mt-28 pt-16 border-t border-ash"
          >
            {[
              { value: '74%', label: 'Territorio español en riesgo de desertificación' },
              { value: '7.7M', label: 'Toneladas de residuos orgánicos al año' },
              { value: '176%', label: 'Aumento de biomasa en estudios con compost' },
              { value: '270', label: 'Hectáreas comprometidas en Galicia' },
            ].map((stat, i) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * i,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-display-md font-semibold tracking-tight mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-smoke leading-relaxed max-w-[20ch]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
