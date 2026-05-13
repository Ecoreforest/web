'use client';

import { motion } from 'framer-motion';

type Props = {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description?: string;
};

export default function PageHero({
  eyebrow,
  title,
  italicWord,
  description,
}: Props) {
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
    <section className="min-h-[100svh] pt-[72px] flex items-center bg-bone">
      <div className="container-x w-full max-w-6xl py-24 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs font-mono uppercase tracking-[0.25em] text-smoke mb-8"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-5xl text-balance"
        >
          {renderTitle()}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-smoke max-w-2xl leading-relaxed mt-8"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
