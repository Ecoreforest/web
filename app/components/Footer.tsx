'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

/**
 * Footer con newsletter funcional vía Web3Forms (paso 9).
 * Misma access key que el formulario de /contacto. Los envíos de newsletter
 * llegan al mismo email (hola@ecoreforest.com) pero con subject distinguible
 * para que se puedan filtrar a una carpeta dedicada.
 */
const WEB3FORMS_ACCESS_KEY = 'c3a3728f-67f5-4c60-b68c-be8d2393189e';

const footerSections = [
  {
    title: 'Proyecto',
    links: [
      { href: '/proyecto', label: 'El proyecto' },
      { href: '/equipo', label: 'Equipo' },
      { href: '/proceso', label: 'Proceso' },
      { href: '/tecnologia', label: 'Tecnología' },
      { href: '/colabora', label: 'Colabora' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { href: '/servicios/compost', label: 'Compost' },
      { href: '/servicios/reforestacion', label: 'Reforestación' },
      { href: '/servicios/forest-clean', label: 'Forest Clean' },
      { href: '/servicios/auditorias', label: 'Auditorías' },
      { href: '/servicios/creditos-carbono', label: 'Créditos de carbono' },
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

type NewsletterStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<NewsletterStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('email', email);
    formData.append('from_name', 'EcoReforest · Newsletter');
    formData.append('subject', 'Nueva suscripción al newsletter');
    formData.append(
      'message',
      `Nueva suscripción al newsletter desde el footer de la web.\n\nEmail: ${email}\n\nFecha: ${new Date().toLocaleString('es-ES')}`
    );

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setEmail('');
        // Después de 6s volvemos al estado inicial por si el usuario quiere
        // suscribir otro email
        setTimeout(() => setStatus('idle'), 6000);
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'No hemos podido procesar la suscripción.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error de conexión. Inténtalo de nuevo en unos minutos.');
    }
  };

  return (
    <footer className="bg-ink text-bone relative overflow-hidden">
      <div className="container-x pt-20 pb-10 lg:pt-28">
        <div className="max-w-3xl mb-20 lg:mb-24">
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
            {/* Honeypot anti-spam — invisible para humanos */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              disabled={status === 'submitting' || status === 'success'}
              className="flex-1 bg-transparent border border-bone/20 rounded-full px-5 py-3 text-bone placeholder:text-bone/40 focus:border-bone/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="px-6 py-3 bg-bone text-ink rounded-full font-medium hover:bg-bone/90 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' && 'Enviando…'}
              {status === 'success' && '¡Te has suscrito!'}
              {status === 'error' && 'Reintentar'}
              {status === 'idle' && 'Suscribirme'}
            </button>
          </form>

          {/* Mensajes de estado bajo el form */}
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-sm text-bone/70"
            >
              Gracias por sumarte. El próximo email te llega cuando haya algo que contar
              de verdad — sin ruido.
            </motion.p>
          )}

          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-sm text-bone/70"
            >
              {errorMessage} Si el problema persiste, escríbenos a{' '}
              <a
                href="mailto:hola@ecoreforest.com"
                className="underline hover:text-bone transition-colors"
              >
                hola@ecoreforest.com
              </a>
              .
            </motion.p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-10 lg:gap-8 mb-16">
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
