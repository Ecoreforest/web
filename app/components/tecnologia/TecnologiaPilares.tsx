'use client';

import { motion } from 'framer-motion';
import SectionEyebrow from '../SectionEyebrow';

const pilares = [
  {
    id: '01',
    titulo: 'Compostaje acelerado',
    rol: 'Transformación',
    descripcion:
      'Biorreactores termófilos con control automático de temperatura, humedad y oxígeno. Reducen a tres semanas un proceso natural que tardaría seis meses.',
    spec: '65 °C · 21 días · UNE 142500',
  },
  {
    id: '02',
    titulo: 'Sensores IoT en parcela',
    rol: 'Monitoreo de suelo',
    descripcion:
      'Estaciones de campo con LoRaWAN que registran humedad, temperatura, conductividad y nutrientes del suelo. Datos cada 15 minutos, batería autónoma.',
    spec: 'LoRa · 15 min · 5 años batería',
  },
  {
    id: '03',
    titulo: 'Drones multiespectrales',
    rol: 'Salud vegetal',
    descripcion:
      'Vuelos periódicos con cámara multibanda (NDVI, NDRE) para detectar estrés hídrico, enfermedades y mortalidad antes de que sean visibles a simple vista.',
    spec: 'NDVI · 5 bandas · vuelo mensual',
  },
  {
    id: '04',
    titulo: 'Torre Warka',
    rol: 'Captación de agua',
    descripcion:
      'Estructura textil de bajo coste capaz de condensar agua atmosférica en zonas áridas. Hasta 100 litros al día por torre en condiciones favorables.',
    spec: '≤ 100 L / día · sin red eléctrica',
  },
  {
    id: '05',
    titulo: 'Análisis satelital',
    rol: 'Escala territorial',
    descripcion:
      'Imágenes Sentinel-2 procesadas para evaluar el avance de la masa forestal, el contenido de carbono y la evolución del NDVI a escala de hectárea.',
    spec: 'Sentinel-2 · 10 m / px · semanal',
  },
];

export default function TecnologiaPilares() {
  return (
    <section className="relative py-24 lg:py-32 bg-bone">
      <div className="container-x max-w-7xl">
        <div className="max-w-3xl mb-20 lg:mb-28">
          <SectionEyebrow>Cinco pilares</SectionEyebrow>

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
            className="mt-8 text-lg lg:text-xl text-smoke leading-relaxed max-w-2xl"
          >
            Nada de esto es nuevo: lo nuevo es el conjunto. Combinamos
            herramientas maduras del sector forestal, agrícola y aeroespacial
            para llevarlas a un solo proyecto.
          </motion.p>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {pilares.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline border-b border-ash pb-10 lg:pb-14"
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
