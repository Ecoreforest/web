'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Logo from './Logo';

type SubLink = { href: string; label: string; description?: string };
type NavItem = { label: string; href?: string; children?: SubLink[] };

const navStructure: NavItem[] = [
  {
    label: 'Proyecto',
    children: [
      { href: '/proyecto', label: 'El proyecto', description: 'Quiénes somos y por qué' },
      { href: '/equipo', label: 'Equipo', description: 'Los tres fundadores' },
      { href: '/hoja-de-ruta', label: 'Hoja de ruta', description: 'Plan paso a paso' },
      { href: '/impacto', label: 'Impacto', description: 'Datos y transparencia' },
    ],
  },
  {
    label: 'Cómo lo hacemos',
    children: [
      { href: '/proceso', label: 'Proceso', description: 'Del residuo al bosque' },
      { href: '/tecnologia', label: 'Tecnología', description: 'Drones, IoT, satélite' },
      { href: '/colabora', label: 'Colabora', description: 'Únete al proyecto' },
    ],
  },
  {
    label: 'Servicios',
    children: [
      { href: '/servicios/compost', label: 'Compost', description: 'Fertilizante certificado UNE 142500' },
      { href: '/servicios/reforestacion', label: 'Reforestación', description: 'Proyectos integrales llave en mano' },
      { href: '/servicios/forest-clean', label: 'Forest Clean', description: 'Limpieza y gestión forestal' },
      { href: '/servicios/auditorias', label: 'Auditorías', description: 'Diagnóstico técnico forestal' },
      { href: '/servicios/creditos-carbono', label: 'Créditos de carbono', description: 'Compensación verificable' },
    ],
  },
  { label: 'Tienda', href: '/shop' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  const isHome = pathname === '/';

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 60);
    if (latest > previous && latest > 200 && !menuOpen && !openDropdown) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenSection(null);
  }, [pathname]);

  const onDarkBackground = isHome && !scrolled && !menuOpen && !openDropdown;
  const navbarHasBg = scrolled || menuOpen || !isHome || openDropdown !== null;

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          navbarHasBg
            ? 'bg-bone/90 backdrop-blur-xl border-b border-ash/40'
            : 'bg-transparent'
        }`}
        onMouseLeave={handleMouseLeave}
      >
        <div className="container-x flex items-center justify-between h-[72px]">
          <Link href="/" aria-label="EcoReforest inicio" onClick={() => setMenuOpen(false)}>
            <Logo color={onDarkBackground ? 'white' : 'forest'} />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navStructure.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              >
                {item.children ? (
                  <button
                    className={`px-4 py-2.5 text-[14px] font-medium transition-colors duration-300 ${
                      onDarkBackground
                        ? 'text-bone/90 hover:text-bone'
                        : 'text-ink/75 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href!}
                    className={`px-4 py-2.5 text-[14px] font-medium transition-colors duration-300 ${
                      onDarkBackground
                        ? 'text-bone/90 hover:text-bone'
                        : 'text-ink/75 hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
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
                onDarkBackground && !menuOpen ? 'bg-bone' : 'bg-ink'
              }`}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className={`w-6 h-[1.5px] transition-colors ${
                onDarkBackground && !menuOpen ? 'bg-bone' : 'bg-ink'
              }`}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`w-6 h-[1.5px] origin-center transition-colors ${
                onDarkBackground && !menuOpen ? 'bg-bone' : 'bg-ink'
              }`}
            />
          </button>
        </div>

        {/* Desktop dropdown */}
        <AnimatePresence>
          {openDropdown && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block absolute top-full left-0 right-0 bg-bone border-t border-ash/40 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.08)]"
            >
              <div className="container-x py-10">
                <div className="grid grid-cols-3 gap-4 max-w-5xl">
                  {navStructure
                    .find((i) => i.label === openDropdown)
                    ?.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="group p-5 rounded-sm hover:bg-ivory transition-colors duration-300"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <p className="text-base font-medium text-ink mb-1 group-hover:text-forest transition-colors">
                          {child.label}
                        </p>
                        {child.description && (
                          <p className="text-sm text-smoke leading-relaxed">
                            {child.description}
                          </p>
                        )}
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-bone lg:hidden pt-[72px] overflow-y-auto"
          >
            <div className="container-x flex flex-col min-h-full py-8">
              <nav className="flex flex-col">
                {navStructure.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + i * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-ash/50"
                  >
                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setMobileOpenSection(
                              mobileOpenSection === item.label ? null : item.label
                            )
                          }
                          className="flex items-center justify-between w-full py-5 text-2xl font-semibold tracking-tight"
                        >
                          {item.label}
                          <motion.span
                            animate={{
                              rotate: mobileOpenSection === item.label ? 45 : 0,
                            }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="text-2xl text-smoke font-light"
                          >
                            +
                          </motion.span>
                        </button>
                        <AnimatePresence>
                          {mobileOpenSection === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-5 pl-1 space-y-3">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="block py-2 text-lg text-smoke hover:text-ink transition-colors"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        onClick={() => setMenuOpen(false)}
                        className="block py-5 text-2xl font-semibold tracking-tight"
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="mt-10"
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
