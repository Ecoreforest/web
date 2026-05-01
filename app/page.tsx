'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import HomeUrgencia from './components/home/HomeUrgencia';
import HomePrinceton from './components/home/HomePrinceton';
import HomeProceso from './components/home/HomeProceso';
import HomeLineas from './components/home/HomeLineas';
import HomeTecnologia from './components/home/HomeTecnologia';
import HomeHojaRuta from './components/home/HomeHojaRuta';
import HomeTienda from './components/home/HomeTienda';
import HomeEquipo from './components/home/HomeEquipo';
import HomeAliados from './components/home/HomeAliados';
import HomeCTA from './components/home/HomeCTA';

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

      <HomeUrgencia />
      <HomePrinceton />
      <HomeProceso />
      <HomeLineas />
      <HomeTecnologia />
      <HomeHojaRuta />
      <HomeTienda />
      <HomeEquipo />
      <HomeAliados />
      <HomeCTA />
    </>
  );
}
