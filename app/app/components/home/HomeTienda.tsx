'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

export default function HomeTienda() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section ref={ref} className="relative bg-bone overflow-hidden">
      <div className="container-x max-w-7xl py-32 lg:py-48">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-7 lg:order-2"
          >
            <motion.div
              style={{ scale: imageScale }}
              className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm bg-ivory will-change-transform"
            >
              <Image
                src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895101/camiseta-1_u1asrg.png"
                alt="Camiseta línea EcoReforest"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 lg:order-1">
            <SectionEyebrow>Tienda</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-md font-semibold tracking-tight text-balance"
            >
              Cada compra{' '}
              <span className="italic-display font-normal">es un árbol.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-base lg:text-lg text-smoke leading-relaxed max-w-md"
            >
              Camisetas, sudaderas y gorras de algodón orgánico con identidad propia. Una colección streetwear donde cada prenda planta un árbol en nuestras restauraciones.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 space-y-3 text-base"
            >
              <li className="flex items-baseline gap-3">
                <span className="text-forest font-mono text-xs">01</span>
                <span>Algodón orgánico certificado GOTS</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-forest font-mono text-xs">02</span>
                <span>Producción local en España</span>
              </li>
              <li className="flex items-baseline gap-3">
                <span className="text-forest font-mono text-xs">03</span>
                <span>Trazabilidad del árbol que tu compra planta</span>
              </li>
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/tienda/ropa"
                className="px-7 py-3.5 bg-ink text-bone rounded-full font-medium hover:bg-forest transition-colors"
              >
                Ver colección
              </Link>
              <Link
                href="/tienda"
                className="px-7 py-3.5 border border-ink/20 rounded-full font-medium hover:border-ink/60 transition-colors"
              >
                Toda la tienda
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
