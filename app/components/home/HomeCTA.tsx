'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomeCTA() {
  return (
    <section className="relative bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-6xl py-32 lg:py-48 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-bone/50 mb-8"
        >
          Únete
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance max-w-5xl mx-auto"
        >
          El primer árbol{' '}
          <span className="italic-display font-normal">se planta en octubre.</span>{' '}
          ¿Estarás ahí?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-bone/65 max-w-2xl mx-auto leading-relaxed"
        >
          Empresas, voluntarios, mecenas, inversores. Cada perfil tiene su forma de sumar al primer capítulo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/colabora"
            className="px-8 py-4 bg-bone text-ink rounded-full font-medium hover:bg-bone/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Únete al proyecto
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border border-bone/30 text-bone rounded-full font-medium hover:bg-bone/10 transition-all"
          >
            Hablemos
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
