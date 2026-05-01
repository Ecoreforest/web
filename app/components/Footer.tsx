'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

const footerSections = [
  {
    title: 'Proyecto',
    links: [
      { href: '/proyecto', label: 'El proyecto' },
      { href: '/proyecto#equipo', label: 'Equipo' },
      { href: '/hoja-de-ruta', label: 'Hoja de ruta' },
      { href: '/impacto', label: 'Impacto' },
    ],
  },
  {
    title: 'Cómo lo hacemos',
    links: [
      { href: '/proceso', label: 'Proceso' },
      { href: '/tecnologia', label: 'Tecnología' },
      { href: '/colabora', label: 'Colabora' },
    ],
  },
  {
    title: 'Tienda',
    links: [
      { href: '/tienda', label: 'Tienda' },
      { href: '/tienda/compost', label: 'Compost' },
      { href: '/tienda/adopta', label: 'Adopta un árbol' },
      { href: '/tienda/ropa', label: 'Línea EcoReforest' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { href: '/contacto', label: 'Contacto' },
      { href: 'mailto:hola@ecoreforest.com', label: 'hola@ecoreforest.com' },
    ],
  },
];

const social = [
  { href: 'https://www.instagram.com/ecoreforest', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/ecoreforest/', label: 'LinkedIn' },
  { href: 'https://www.tiktok.com/@ecoreforest_', label: 'TikTok' },
];

const legal = [
  { href: '/aviso-legal', label: 'Aviso legal' },
  { href: '/privacidad', label: 'Privacidad' },
  { href: '/cookies', label: 'Cookies' },
  { href: '/condiciones', label: 'Condiciones de venta' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <footer className="bg-ink text-bone relative overflow-hidden">
      <div className="container-x pt-24 pb-10 lg:pt-32">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-bone/50 mb-4">
            Newsletter
          </p>
          <h2 className="text-display-md font-semibold tracking-tight mb-3 text-balance">
            Sigue cada{' '}
            <span className="italic-display font-normal">paso del bosque.</span>
          </h2>
          <p className="text-bone/60 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            Plantaciones, hitos, ciencia detrás del proyecto. Sin ruido, solo lo que importa.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 bg-transparent border border-bone/20 rounded-full px-5 py-3 text-bone placeholder:text-bone/40 focus:border-bone/60 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-bone text-ink rounded-full font-medium hover:bg-bone/90 transition-colors whitespace-nowrap"
            >
              {submitted ? '¡Gracias!' : 'Suscribirme'}
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-bone/40 mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-bone/80 hover:text-bone transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-bone/10 pt-10 mb-10">
          <Logo color="white" />
          <p className="mt-5 text-bone/55 text-base font-light tracking-tight max-w-md">
            Juntos transformamos{' '}
            <span className="italic-display font-normal">desiertos</span> en{' '}
            <span className="italic-display font-normal">bosques</span>.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 mb-12">
          <div className="max-w-md">
            <p className="text-bone/50 text-sm leading-relaxed">
              Asociación sin ánimo de lucro inscrita en el Registro Nacional de Asociaciones del Ministerio del Interior.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {social.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-bone/70 hover:text-bone transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 pt-8 border-t border-bone/10">
          <p className="text-xs text-bone/40">
            © {new Date().getFullYear()} EcoReforest. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-bone/40 hover:text-bone/70 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.06 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="absolute -bottom-32 left-0 right-0 pointer-events-none select-none overflow-hidden"
      >
        <p
          className="text-bone whitespace-nowrap font-semibold tracking-tighter leading-none"
          style={{ fontSize: 'clamp(8rem, 24vw, 22rem)' }}
        >
          EcoReforest
        </p>
      </motion.div>
    </footer>
  );
}
