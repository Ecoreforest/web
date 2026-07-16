'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionEyebrow from '../SectionEyebrow';

/**
 * Paso 13: Pilar 01 rebrandeado tras la externalización del compost.
 * Antes hablaba de biorreactores termófilos propios. Ahora habla de
 * selección y validación de compost UNE 142500 producido por partners
 * certificados.
 */

const pilares = [
  {
    id: '01',
    titulo: 'Selección y validación de compost',
    rol: 'Aseguramiento de calidad',
    descripcion:
      'Trabajamos con productores españoles certificados UNE 142500. Cada lote entrante pasa un análisis fisicoquímico (relación C/N, humedad, patógenos, metales pesados) antes de aprobarse para uso en parcela. Solo entra al proyecto compost que cumple los parámetros.',
    spec: 'UNE 142500 · Análisis por lote · Trazabilidad de origen',
  },
  {
    id: '02',
    titulo: 'Conservación de agua y suelo',
    rol: 'Retención hídrica',
    descripcion:
      'Técnicas tradicionales y modernas combinadas para retener cada gota en el suelo árido y multiplicar la supervivencia: zanjas de infiltración, pozos zai, terrazas de piedra, medias lunas y mulching orgánico.',
    spec: 'Zai · Mulching · Microcuencas',
  },
  {
    id: '03',
    titulo: 'Torre Warka',
    rol: 'Captación de agua',
    descripcion:
      'Estructura textil de bajo coste capaz de condensar agua atmosférica en zonas áridas. Hasta 100 litros al día por torre en condiciones favorables.',
    spec: '≤ 100 L / día · sin red eléctrica',
  },
  {
    id: '04',
    titulo: 'Sensores IoT en parcela',
    rol: 'Monitoreo de suelo',
    descripcion:
      'Estaciones de campo con LoRaWAN que registran humedad, temperatura, conductividad y nutrientes del suelo. Datos cada 15 minutos, batería autónoma.',
    spec: 'LoRa · 15 min · 5 años batería',
  },
  {
    id: '05',
    titulo: 'Drones multiespectrales',
    rol: 'Salud vegetal',
    descripcion:
      'Vuelos periódicos con cámara multibanda (NDVI, NDRE) para detectar estrés hídrico, enfermedades y mortalidad antes de que sean visibles a simple vista.',
    spec: 'NDVI · 5 bandas · vuelo mensual',
  },
  {
    id: '06',
    titulo: 'Análisis satelital',
    rol: 'Escala territorial',
    descripcion:
      'Imágenes Sentinel-2 procesadas para evaluar el avance de la masa forestal, el contenido de carbono y la evolución del NDVI a escala de hectárea.',
    spec: 'Sentinel-2 · 10 m / px · semanal',
  },
];

export default function TecnologiaPilares() {
  return (
    <section className="relative py-12 lg:py-20 bg-bone overflow-hidden">
      <div className="container-x max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-4 lg:mb-8">
          <div className="lg:col-span-5">
            <SectionEyebrow>Seis pilares</SectionEyebrow>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-semibold tracking-tight text-balance"
            >
              La pila tecnológica,{' '}
              <span className="italic-display font-normal">sin humo.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-lg"
            >
              Nada de esto es nuevo: lo nuevo es el conjunto. Combinamos
              herramientas maduras del sector forestal, agrícola y aeroespacial
              para llevarlas a un solo proyecto.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-[3/4] lg:aspect-auto lg:h-[560px] w-full max-w-md mx-auto lg:max-w-none"
          >
            <Image
              src="https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1778869819/torre-warka_gi12ej.png"
              alt="Torre Warka: estructura de captación de agua atmosférica"
              fill
              sizes="(max-width: 1024px) 80vw, 60vw"
              className="object-contain lg:scale-[1.05] origin-center"
            />
          </motion.div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {pilares.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline border-b border-ash pb-6 lg:pb-8"
            >
              <div className="lg:col-span-1">
                <p className="font-mono text-sm tracking-[0.25em] text-forest">
                  {p.id}
                </p>
              </div>

              <div className="lg:col-span-4">
                <h3
                  className="font-semibold tracking-tight leading-[0.95]"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
                >
                  {p.titulo}
                  <span className="italic-display font-normal text-forest">.</span>
                </h3>
                <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-smoke">
                  {p.rol}
                </p>
              </div>

              <div className="lg:col-span-5">
                <p className="text-base lg:text-lg text-smoke leading-relaxed">
                  {p.descripcion}
                </p>
              </div>

              <div className="lg:col-span-2">
                <p className="font-mono text-xs lg:text-sm text-ink/80 leading-relaxed">
                  {p.spec}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
