'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Sección de suscripción mensual con 4 tiers.
 *
 * Paso 10 — cambios:
 * - Cifras ajustadas a los beneficios reales: 12 / 36 / 144 plantones anuales
 *   (que se traducen en 1 / 3 / 12 al mes)
 * - Fondos con progresión cromática (ivory → forest.light → forest → ink)
 *   que cuenta visualmente la evolución de semilla a bosque
 * - Eliminadas las etiquetas "Tier 0X" que no aportaban información
 *
 * Los botones llevan a /contacto?tier=XXX de momento. Cuando Stripe esté
 * conectado, sustituir los hrefs por la URL del checkout correspondiente.
 */

type Tier = {
  id: string;
  nombre: string;
  precio: string;
  periodo: string;
  hook: string;
  ritmo: string;
  beneficios: string[];
  cta: string;
  href: string;
  tema: 'ivory' | 'verde-claro' | 'verde-oscuro' | 'oscuro';
};

const tiers: Tier[] = [
  {
    id: 'semilla',
    nombre: 'Semilla',
    precio: '5',
    periodo: '€/mes',
    hook: '12 plantones al año',
    ritmo: '1 plantón cada mes',
    beneficios: [
      'Reporte anual de impacto',
      'Newsletter trimestral del proyecto',
      'Tu nombre en el muro de socios',
      'Deducción fiscal · Régimen de Mecenazgo',
    ],
    cta: 'Hacerme socio Semilla',
    href: '/contacto?tier=semilla',
    tema: 'ivory',
  },
  {
    id: 'planton',
    nombre: 'Plantón',
    precio: '15',
    periodo: '€/mes',
    hook: '36 plantones al año',
    ritmo: '3 plantones cada mes',
    beneficios: [
      'Todo lo de Semilla',
      'Trazabilidad por parcela asignada',
      'Reporte trimestral por parcela',
      'Invitación a eventos del proyecto',
    ],
    cta: 'Hacerme socio Plantón',
    href: '/contacto?tier=planton',
    tema: 'verde-claro',
  },
  {
    id: 'bosque',
    nombre: 'Bosque',
    precio: '50',
    periodo: '€/mes',
    hook: '144 plantones al año',
    ritmo: '12 plantones cada mes',
    beneficios: [
      'Todo lo de Plantón',
      'Trazabilidad por árbol con ID único',
      'Invitación a una plantación al año',
      'Visita técnica a parcela en curso',
    ],
    cta: 'Hacerme socio Bosque',
    href: '/contacto?tier=bosque',
    tema: 'verde-oscuro',
  },
  {
    id: 'libre',
    nombre: 'Tú eliges',
    precio: 'Libre',
    periodo: 'desde 1 €/mes',
    hook: 'La cantidad que quieras',
    ritmo: 'Sin permanencia · beneficios proporcionales',
    beneficios: [
      'Aportación mensual a tu medida',
      'Cualquier cantidad construye bosque',
      'Beneficios proporcionales al importe',
      'Reporte personalizado anual',
    ],
    cta: 'Aportar lo que pueda',
    href: '/contacto?tier=libre',
    tema: 'oscuro',
  },
];

/**
 * Estilos por tema. Cada tier tiene su paleta coherente:
 * fondo, texto principal, texto secundario, borde, dot de lista, botón.
 */
const temas: Record<
  Tier['tema'],
  {
    bg: string;
    tituloColor: string;
    subtituloColor: string;
    hookColor: string;
    ritmoColor: string;
    dividerColor: string;
    beneficioColor: string;
    dotColor: string;
    botonBg: string;
    botonHover: string;
    eyebrowColor: string;
    precioColor: string;
  }
> = {
  ivory: {
    bg: 'bg-ivory',
    tituloColor: 'text-ink',
    subtituloColor: 'text-smoke',
    hookColor: 'text-forest',
    ritmoColor: 'text-smoke',
    dividerColor: 'border-ash',
    beneficioColor: 'text-ink/85',
    dotColor: 'bg-forest',
    botonBg: 'bg-ink text-bone',
    botonHover: 'hover:bg-ink/90',
    eyebrowColor: 'text-forest',
    precioColor: 'text-ink',
  },
  'verde-claro': {
    bg: 'bg-[#2D6A4F]', // forest.light
    tituloColor: 'text-bone',
    subtituloColor: 'text-bone/70',
    hookColor: 'text-bone',
    ritmoColor: 'text-bone/75',
    dividerColor: 'border-bone/20',
    beneficioColor: 'text-bone/85',
    dotColor: 'bg-bone',
    botonBg: 'bg-bone text-ink',
    botonHover: 'hover:bg-bone/90',
    eyebrowColor: 'text-bone/70',
    precioColor: 'text-bone',
  },
  'verde-oscuro': {
    bg: 'bg-forest', // #1B4332
    tituloColor: 'text-bone',
    subtituloColor: 'text-bone/70',
    hookColor: 'text-bone',
    ritmoColor: 'text-bone/75',
    dividerColor: 'border-bone/20',
    beneficioColor: 'text-bone/85',
    dotColor: 'bg-bone',
    botonBg: 'bg-bone text-ink',
    botonHover: 'hover:bg-bone/90',
    eyebrowColor: 'text-bone/70',
    precioColor: 'text-bone',
  },
  oscuro: {
    bg: 'bg-ink',
    tituloColor: 'text-bone',
    subtituloColor: 'text-bone/65',
    hookColor: 'text-bone',
    ritmoColor: 'text-bone/70',
    dividerColor: 'border-bone/15',
    beneficioColor: 'text-bone/80',
    dotColor: 'bg-forest',
    botonBg: 'bg-bone text-ink',
    botonHover: 'hover:bg-bone/90',
    eyebrowColor: 'text-forest',
    precioColor: 'text-bone',
  },
};

export default function HomeSuscripcion() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <SectionEyebrow>Hazte socio</SectionEyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-semibold tracking-tight text-balance"
          >
            Mil semillas,{' '}
            <span className="italic-display font-normal">un solo bosque.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Cuatro formas de sumar cada mes. Sin permanencia, con deducción
            fiscal y trazabilidad pública de a dónde va cada euro.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {tiers.map((tier, i) => {
            const t = temas[tier.tema];
            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col p-8 lg:p-10 rounded-sm transition-all duration-500 ${t.bg}`}
              >
                {/* Nombre + hook */}
                <div className="mb-8">
                  <h3
                    className={`font-semibold tracking-tight leading-[0.95] mb-3 ${t.tituloColor}`}
                    style={{ fontSize: 'clamp(1.75rem, 2.6vw, 2.25rem)' }}
                  >
                    {tier.nombre}
                    <span className="italic-display font-normal text-forest">.</span>
                  </h3>
                  <p
                    className={`text-base font-medium leading-tight ${t.hookColor}`}
                  >
                    {tier.hook}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mt-2 ${t.ritmoColor}`}
                  >
                    {tier.ritmo}
                  </p>
                </div>

                {/* Precio */}
                <div className={`mb-8 pb-8 border-b ${t.dividerColor}`}>
                  <p
                    className={`font-semibold tracking-tighter leading-none ${t.precioColor}`}
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}
                  >
                    {tier.precio}
                    <span
                      className="italic-display font-normal text-forest ml-1"
                      style={{ fontSize: '0.45em' }}
                    >
                      {tier.periodo}
                    </span>
                  </p>
                </div>

                {/* Beneficios */}
                <ul className="space-y-3 mb-10 flex-1">
                  {tier.beneficios.map((b) => (
                    <li
                      key={b}
                      className={`flex items-start gap-3 text-sm leading-relaxed ${t.beneficioColor}`}
                    >
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${t.dotColor}`}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={tier.href}
                  className={`block text-center px-6 py-3.5 rounded-full font-medium text-sm transition-all hover:scale-[1.02] active:scale-[0.98] ${t.botonBg} ${t.botonHover}`}
                >
                  {tier.cta}
                </Link>
              </motion.article>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 lg:mt-16 text-center text-sm text-smoke max-w-2xl mx-auto"
        >
          Cifras orientativas. Cada euro queda asociado a una parcela y a un
          reporte público. La aportación se desglosa anualmente en la memoria
          de impacto, sin redondeos.
        </motion.p>
      </div>
    </section>
  );
}
