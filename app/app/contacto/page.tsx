'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export const dynamic = 'force-static';

export default function Contacto() {
  return (
    <section className="min-h-[100svh] pt-[72px] flex items-center bg-bone">
      <div className="container-x w-full max-w-6xl py-24 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-8"
        >
          Contacto
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          Hablemos sobre el{' '}
          <span className="italic-display font-normal">bosque.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg lg:text-xl text-smoke max-w-2xl leading-relaxed mt-8"
        >
          Empresas, prensa, alianzas, voluntariado. Escríbenos directamente y respondemos en menos de 48 horas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid md:grid-cols-2 gap-12 lg:gap-20 max-w-4xl"
        >
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-4">
              Email
            </p>
            <a
              href="mailto:hola@ecoreforest.com"
              className="text-display-sm font-semibold tracking-tight hover:text-forest transition-colors"
            >
              hola@ecoreforest.com
            </a>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-4">
              Síguenos
            </p>
            <div className="flex flex-col gap-2">
              <a href="https://www.instagram.com/ecoreforest" className="text-lg font-medium hover:text-forest transition-colors w-fit" target="_blank" rel="noopener noreferrer">
                Instagram →
              </a>
              <a href="https://www.linkedin.com/company/ecoreforest/" className="text-lg font-medium hover:text-forest transition-colors w-fit" target="_blank" rel="noopener noreferrer">
                LinkedIn →
              </a>
              <a href="https://www.tiktok.com/@ecoreforest_" className="text-lg font-medium hover:text-forest transition-colors w-fit" target="_blank" rel="noopener noreferrer">
                TikTok →
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 pt-12 border-t border-ash"
        >
          <p className="text-sm text-smoke">
            Respondemos en menos de 48 horas laborables.{' '}
            <Link href="/" className="underline underline-offset-4 hover:text-ink transition-colors">
              Volver al inicio →
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
