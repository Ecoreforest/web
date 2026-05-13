'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ShopCTA() {
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
    <section className="relative bg-ink text-bone overflow-hidden grain">
      <div className="container-x max-w-5xl py-24 lg:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-bone/50 mb-8"
        >
          Próximo lanzamiento
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight text-balance leading-[1]"
        >
          La primera colección{' '}
          <span className="italic-display font-normal">llega muy pronto.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg lg:text-xl text-bone/65 max-w-2xl mx-auto leading-relaxed"
        >
          Apúntate a la lista de espera y serás de los primeros en recibir
          EcoReforest Wear. Sin spam, solo una notificación cuando abramos la
          tienda.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
            className="flex-1 bg-transparent border border-bone/25 rounded-full px-5 py-3.5 text-bone placeholder:text-bone/40 focus:border-bone/60 transition-colors"
          />
          <button
            type="submit"
            className="px-7 py-3.5 bg-bone text-ink rounded-full font-medium hover:bg-bone/90 transition-colors whitespace-nowrap"
          >
            {submitted ? '¡Apuntado!' : 'Apuntarme'}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
