'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

type Props = {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  imagen: string;
};

export default function ServicioHero({
  eyebrow,
  title,
  italicWord,
  description,
  imagen,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const renderTitle = () => {
    if (!italicWord) return title;
    const parts = title.split(italicWord);
    return (
      <>
        {parts[0]}
        <span className="italic-display font-normal">{italicWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      ref={ref}
      className="relative h-[90svh] min-h-[560px] overflow-hidden bg-ink"
    >
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0"
      >
        <Image
          src={imagen}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/40 to-ink/85"
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative h-full flex flex-col justify-end pb-20 lg:pb-24 pt-32 container-x"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-bone/70 mb-8"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold text-bone tracking-tight max-w-[20ch] text-balance"
        >
          {renderTitle()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-bone/85 text-lg md:text-xl font-light max-w-2xl"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
