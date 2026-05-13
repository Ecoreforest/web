'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProyectoCTA() {
  return (
    <section className="relative py-32 lg:py-40 bg-bone">
      <div className="container-x max-w-5xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1]"
        >
          Ahora ya conoces el{' '}
          <span className="italic-display font-normal">por qué.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-smoke max-w-2xl mx-auto leading-relaxed"
        >
          Descubre cómo lo hacemos, con qué tecnología, y cuándo planta el primer árbol.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/proceso"
            className="px-8 py-4 bg-ink text-bone rounded-full font-medium hover:bg-forest transition-colors"
          >
            Ver el proceso
          </Link>
          <Link
            href="/colabora"
            className="px-8 py-4 border border-ink/20 rounded-full font-medium hover:border-ink/60 transition-colors"
          >
            Únete al proyecto
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
