'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function ShopHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.7]);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-ivory"
    >
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895101/camiseta-1_u1asrg.png"
          alt="EcoReforest Wear"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/20 via-transparent to-ink/60"
      />

      <motion.div
        style={{ y: contentY }}
        className="relative h-full flex flex-col justify-between pt-32 pb-12 lg:pb-20 container-x"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-bone/80 mb-3">
            EcoReforest
          </p>
          <p
            className="font-semibold tracking-tighter text-bone leading-none italic-display font-normal"
            style={{ fontSize: 'clamp(4rem, 14vw, 16rem)' }}
          >
            Wear
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h1 className="text-display-md font-semibold text-bone tracking-tight text-balance leading-[1.05]">
            Moda que{' '}
            <span className="italic-display font-normal">planta árboles.</span>
          </h1>
          <p className="mt-6 text-bone/85 text-lg lg:text-xl font-light max-w-xl leading-relaxed">
            Prendas elaboradas con algodón orgánico, lino europeo y fibras
            recicladas. Cada compra está vinculada a un árbol real plantado en
            nuestros proyectos de reforestación.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
