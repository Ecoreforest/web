'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ImpactoCTA() {
  return (
    <section className="relative bg-bone overflow-hidden">
      <div className="container-x max-w-5xl mx-auto py-24 lg:py-36 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-10"
        >
          Primer reporte previsto: enero 2028
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1] max-w-4xl mx-auto"
        >
          Sigue el bosque{' '}
          <span className="italic-display font-normal text-forest">
            mientras crece.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-smoke max-w-2xl mx-auto leading-relaxed"
        >
          Suscríbete para recibir los reportes anuales en cuanto se publiquen,
          o únete al proyecto para tener parcelas, árboles y cifras propias.
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
            className="px-8 py-4 bg-ink text-bone rounded-full font-medium hover:bg-ink/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Colaborar con el proyecto
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border border-ink/20 text-ink rounded-full font-medium hover:bg-ink/5 transition-all"
          >
            Recibir los reportes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
