'use client';

import { motion } from 'framer-motion';

/**
 * Paso 21: envoltorio de las páginas legales.
 *
 * No usa PageHero a propósito: PageHero ocupa 100svh, que está bien para
 * una portada de sección pero obliga a pasar una pantalla entera antes de
 * leer la primera línea de un texto que la gente abre para consultar algo
 * concreto. Aquí la cabecera es compacta y el contenido empieza arriba,
 * manteniendo la misma tipografía y los mismos tonos que el resto del sitio.
 */
export function LegalLayout({
  title,
  italicWord,
  description,
  actualizado,
  children,
}: {
  title: string;
  italicWord?: string;
  description?: string;
  actualizado?: React.ReactNode;
  children: React.ReactNode;
}) {
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
    <>
      <section className="pt-[72px] bg-ivory border-b border-ash">
        <div className="container-x max-w-4xl py-20 lg:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-7"
          >
            Legal
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-sm lg:text-display-md font-semibold tracking-tight text-balance"
          >
            {renderTitle()}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-base lg:text-lg text-smoke max-w-2xl leading-relaxed mt-6"
            >
              {description}
            </motion.p>
          )}
        </div>
      </section>

      <section className="bg-bone">
        <div className="container-x max-w-3xl py-16 lg:py-24">
          {children}

          {actualizado && (
            <p className="mt-16 pt-8 border-t border-ash text-xs font-mono uppercase tracking-[0.2em] text-smoke">
              Actualizado: {actualizado}
            </p>
          )}
        </div>
      </section>
    </>
  );
}

/** Sección numerada. */
export function Bloque({
  n,
  titulo,
  children,
}: {
  n: string;
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-14">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-xs font-mono text-smoke/70">{n}</span>
        <h2 className="text-xl lg:text-2xl font-semibold tracking-tight text-ink">
          {titulo}
        </h2>
      </div>
      <div className="space-y-4 text-base text-smoke leading-relaxed pl-0 sm:pl-10">
        {children}
      </div>
    </section>
  );
}

/** Fila de una tabla de datos (responsable, finalidad, plazo…). */
export function Fila({
  clave,
  children,
}: {
  clave: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid sm:grid-cols-[180px_1fr] gap-1 sm:gap-6 py-4 border-b border-ash">
      <p className="text-xs font-mono uppercase tracking-[0.15em] text-smoke/80 sm:pt-1">
        {clave}
      </p>
      <div className="text-base text-ink leading-relaxed">{children}</div>
    </div>
  );
}

/**
 * Dato que todavía no está registrado o decidido. Se ve a propósito:
 * ninguno de estos debería seguir aquí cuando un abogado dé el visto bueno.
 */
export function Pendiente({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-ash/70 border border-ash px-2 py-0.5 text-sm font-mono text-ink rounded-sm">
      [ completar: {children} ]
    </span>
  );
}
