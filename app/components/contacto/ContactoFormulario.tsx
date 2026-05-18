'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Web3Forms integration.
 *
 * Sustituir 'YOUR_WEB3FORMS_ACCESS_KEY' por la access key real que llegará al
 * email hola@ecoreforest.com tras darse de alta en https://web3forms.com.
 *
 * No requiere backend ni env variables — el access key es público y vincula
 * los envíos a tu cuenta de Web3Forms, que reenvía cada mensaje al email
 * registrado.
 */
const WEB3FORMS_ACCESS_KEY = 'c3a3728f-67f5-4c60-b68c-be8d2393189e';

const tiposConsulta = [
  { value: 'empresa', label: 'Empresa / patrocinio' },
  { value: 'voluntariado', label: 'Voluntariado' },
  { value: 'mecenazgo', label: 'Mecenazgo y donaciones' },
  { value: 'inversores', label: 'Inversores' },
  { value: 'propietario', label: 'Propietario de terreno' },
  { value: 'prensa', label: 'Prensa / medios' },
  { value: 'tecnica', label: 'Consulta técnica' },
  { value: 'otro', label: 'Otro' },
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactoFormulario() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('from_name', 'EcoReforest · Formulario web');
    formData.append('subject', `Nueva consulta: ${formData.get('tipo') || 'sin tipo'}`);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'No hemos podido enviar el mensaje.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Error de conexión. Inténtalo de nuevo en unos minutos.');
    }
  };

  return (
    <section className="relative py-16 lg:py-24 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-ash">
              Escríbenos
            </p>

            <form onSubmit={handleSubmit} className="space-y-7">
              {/* Honeypot anti-spam (oculto) */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-ink mb-2">
                    Nombre <span className="text-forest">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full bg-transparent border-b border-ash py-3 text-base text-ink placeholder:text-smoke/60 focus:outline-none focus:border-forest transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email <span className="text-forest">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full bg-transparent border-b border-ash py-3 text-base text-ink placeholder:text-smoke/60 focus:outline-none focus:border-forest transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-ink mb-2">
                    Teléfono <span className="text-smoke">(opcional)</span>
                  </label>
                  <input
                    id="telefono"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="w-full bg-transparent border-b border-ash py-3 text-base text-ink placeholder:text-smoke/60 focus:outline-none focus:border-forest transition-colors"
                    placeholder="+34 600 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-ink mb-2">
                    Tipo de consulta <span className="text-forest">*</span>
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    required
                    defaultValue=""
                    className="w-full bg-transparent border-b border-ash py-3 text-base text-ink focus:outline-none focus:border-forest transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Selecciona…
                    </option>
                    {tiposConsulta.map((t) => (
                      <option key={t.value} value={t.value}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-ink mb-2">
                  Mensaje <span className="text-forest">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="message"
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-ash py-3 text-base text-ink placeholder:text-smoke/60 focus:outline-none focus:border-forest transition-colors resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte. Si es para una colaboración, incluye tipo, alcance estimado y plazo si lo tienes."
                />
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="mt-1 w-4 h-4 accent-forest cursor-pointer"
                />
                <label htmlFor="consent" className="text-sm text-smoke leading-relaxed cursor-pointer">
                  He leído la{' '}
                  <a href="/privacidad" className="underline hover:text-forest transition-colors">
                    política de privacidad
                  </a>{' '}
                  y acepto el tratamiento de mis datos para responder a esta
                  consulta.
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-bone rounded-full font-medium hover:bg-ink/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'submitting' ? 'Enviando…' : 'Enviar mensaje'}
                  {status !== 'submitting' && <span>→</span>}
                </button>
              </div>

              {/* Mensajes de estado */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 p-5 border border-forest/30 bg-forest/5 rounded-sm"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-forest mb-2">
                    Mensaje enviado
                  </p>
                  <p className="text-base text-ink leading-relaxed">
                    Gracias por escribirnos. Te responderemos a tu email en menos
                    de 48 horas hábiles.
                  </p>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-6 p-5 border border-ink/30 bg-ink/5 rounded-sm"
                >
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink mb-2">
                    Algo no fue bien
                  </p>
                  <p className="text-base text-ink leading-relaxed">
                    {errorMessage} Si el problema persiste, escríbenos directamente a{' '}
                    <a
                      href="mailto:hola@ecoreforest.com"
                      className="underline hover:text-forest transition-colors"
                    >
                      hola@ecoreforest.com
                    </a>
                    .
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Info panel */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-forest mb-8 pb-4 border-b border-ash">
              También directo
            </p>

            <div className="space-y-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-3">
                  Email
                </p>
                <a
                  href="mailto:hola@ecoreforest.com"
                  className="text-xl lg:text-2xl font-semibold tracking-tight text-ink hover:text-forest transition-colors"
                >
                  hola@ecoreforest.com
                </a>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-3">
                  Tiempo de respuesta
                </p>
                <p className="text-base lg:text-lg text-ink leading-relaxed">
                  &lt; 48 horas hábiles. Si tu consulta es urgente, márcalo en el
                  asunto.
                </p>
              </div>

              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-3">
                  Redes
                </p>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://www.instagram.com/ecoreforest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-ink hover:text-forest transition-colors"
                    >
                      Instagram →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/ecoreforest/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-ink hover:text-forest transition-colors"
                    >
                      LinkedIn →
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.tiktok.com/@ecoreforest_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base text-ink hover:text-forest transition-colors"
                    >
                      TikTok →
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-ash">
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke mb-3">
                  Para colaborar
                </p>
                <p className="text-base text-smoke leading-relaxed mb-4">
                  Si ya sabes cómo te interesa sumar al proyecto, puedes ir
                  directamente a la página de colaboración.
                </p>
                <a
                  href="/colabora"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-forest transition-colors"
                >
                  Ver formas de colaborar
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
