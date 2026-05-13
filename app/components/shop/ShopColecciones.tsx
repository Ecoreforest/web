'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

const colecciones = [
  {
    numero: '01',
    nombre: 'Forest Basics',
    titulo: 'Lo esencial, hecho como debe ser.',
    italicWord: 'como debe ser.',
    descripcion:
      'Camisetas, sudaderas y gorras en algodón orgánico certificado GOTS. Las piezas básicas que querrás llevar todos los días, con la calidad y durabilidad que el algodón convencional ya no ofrece.',
    items: ['Camisetas', 'Sudaderas', 'Gorras', 'Tote bags'],
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895103/camiseta-02_tkllqu.png',
  },
  {
    numero: '02',
    nombre: 'EcoWork',
    titulo: 'Para los que pasan el día fuera.',
    italicWord: 'fuera.',
    descripcion:
      'Ropa técnica para voluntariado, trabajo de campo y actividades al aire libre. Resistente, funcional y elaborada con fibras recicladas de botellas PET. Pensada para durar tantos años como un buen árbol.',
    items: ['Chaquetas técnicas', 'Pantalones cargo', 'Camisas', 'Accesorios'],
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895103/camiseta-03_obbqrw.png',
  },
  {
    numero: '03',
    nombre: 'Forest Fiber',
    titulo: 'Prendas que vienen del bosque.',
    italicWord: 'del bosque.',
    descripcion:
      'Edición limitada con fibras vegetales obtenidas en nuestros propios procesos de limpieza forestal. Esparto, retama y otras plantas mediterráneas tratadas con retting natural. Una narrativa de origen que ninguna otra marca puede replicar.',
    items: ['Camisas exclusivas', 'Capas', 'Bolsos', 'Edición limitada'],
    imagen: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1777895101/camiseta-1_u1asrg.png',
  },
];

export default function ShopColecciones() {
  return (
    <section className="relative bg-ivory">
      <div className="container-x max-w-7xl pt-24 lg:pt-32 pb-16">
        <SectionEyebrow>Colecciones</SectionEyebrow>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-semibold tracking-tight max-w-4xl text-balance"
        >
          Tres líneas, una{' '}
          <span className="italic-display font-normal">misma misión.</span>
        </motion.h2>
      </div>

      <div className="space-y-20 lg:space-y-32 pb-24 lg:pb-32">
        {colecciones.map((c, i) => {
          const isReverse = i % 2 === 1;
          return (
            <motion.article
              key={c.numero}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="container-x max-w-7xl"
            >
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className={`lg:col-span-7 ${isReverse ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden rounded-sm bg-bone">
                    <Image
                      src={c.imagen}
                      alt={c.nombre}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-5 ${isReverse ? 'lg:order-1' : 'lg:order-2'}`}>
                  <p className="font-mono text-xs tracking-[0.25em] text-forest mb-4">
                    Colección {c.numero}
                  </p>
                  <p className="text-display-md font-semibold tracking-tight leading-[1] mb-3">
                    {c.nombre}
                  </p>
                  <p className="text-2xl lg:text-3xl font-light italic-display text-smoke leading-snug mb-10 max-w-md">
                    {c.titulo.split(c.italicWord)[0]}
                    <span className="italic-display font-normal text-ink/85">{c.italicWord}</span>
                  </p>
                  <p className="text-base lg:text-lg text-smoke leading-relaxed mb-10 max-w-md">
                    {c.descripcion}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {c.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm font-medium py-3 border-t border-ash flex items-baseline gap-2"
                      >
                        <span className="text-forest font-mono text-xs">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
