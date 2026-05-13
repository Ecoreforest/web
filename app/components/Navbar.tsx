'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { href: '/proyecto', label: 'Proyecto' },
  { href: '/proceso', label: 'Proceso' },
  { href: '/tecnologia', label: 'Tecnología' },
  { href: '/hoja-de-ruta', label: 'Hoja de ruta' },
  { href: '/impacto', label: 'Impacto' },
  { href: '/tienda', label: 'Tienda' },
  { href: '/colabora', label: 'Colabora' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  // Solo el home tiene hero oscuro con video. El resto de páginas tienen fondo claro.
  const isHome = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 60);
    if (latest > previous && latest > 200 && !menuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // En el home: logo blanco arriba (sobre el video) + logo color tras hacer scroll.
  // En el resto: siempre logo color (porque las páginas tienen fondo claro).
  const onDarkBackground = isHome && !scrolled && !menuOpen;
  const navbarHasBg = scrolled || menuOpen || !isHome;

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navbarHasBg
            ? 'bg-bone/85 backdrop-blur-xl border-b border-ash/40'
            : 'bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between h-[72px]">
          <Link href="/" aria-label="EcoReforest inicio" onClick={() => setMenuOpen(false)}>
            <Logo color={onDarkBackground ? 'white' : 'forest'} />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-medium transition-colors duration-300 ${
                  onDarkBackground
                    ? 'text-bone/90 hover:text-bone'
                    : 'text-ink/75 hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/colabora"
              className={`text-[14px] font-medium px-5 py-2.5 rounded-full transition-colors duration-300 ${
                onDarkBackground
                  ? 'bg-bone text-ink hover:bg-bone/90'
                  : 'bg-ink text-bone hover:bg-forest'
              }`}
            >
              Únete
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label="Menú"
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`w-6 h-[1.5px] origin-center transition-colors ${
                onDarkBackground ? 'bg-bone' : 'bg-ink'
              }`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={`w-6 h-[1.5px] transition-colors ${
                onDarkBackground ? 'bg-bone' : 'bg-ink'
              }`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`w-6 h-[1.5px] origin-center transition-colors ${
                onDarkBackground ? 'bg-bone' : 'bg-ink'
              }`}
            />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bone lg:hidden pt-[72px]"
          >
            <div className="container-x flex flex-col h-full pt-12 pb-12">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-display-sm font-medium tracking-tight py-3 border-b border-ash/50"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="mt-auto"
              >
                <Link
                  href="/colabora"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center text-base font-medium px-6 py-4 bg-ink text-bone rounded-full"
                >
                  Únete al proyecto
                </Link>
                <p className="text-center text-sm text-smoke mt-6">
                  hola@ecoreforest.com
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
