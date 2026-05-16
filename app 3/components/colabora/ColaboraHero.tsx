'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ColaboraHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-ink"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <Image
          src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778889347/colabora-hero-swales_ruy8nb.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/45 via-ink/40 to-ink/85"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative h-full flex flex-col justify-end pb-20 lg:pb-28 pt-32 container-x"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-bone/70 mb-8"
        >
          07 — Colabora
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold text-bone tracking-tight max-w-[18ch] text-balance"
        >
          Únete desde el{' '}
          <span className="italic-display font-normal">primer árbol.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-bone/85 text-lg md:text-xl font-light tracking-tight max-w-2xl"
        >
          Empresas, voluntariado, mecenazgo, inversores. Cuatro formas de
          formar parte del proyecto y un solo principio: nada se promete que
          no se pueda demostrar.
        </motion.p>
      </motion.div>
    </section>
  );
}
