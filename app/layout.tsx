import type { Metadata } from 'next';
import { Manrope, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-instrument',
  display: 'swap',
  weight: '400',
  style: ['normal', 'italic'],
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
});

/**
 * Imagen Open Graph / Twitter card — 1200×630 con marca propia.
 */
const OG_IMAGE =
  'https://res.cloudinary.com/dekgmk73i/image/upload/v1783079503/og-image-ecoreforest_eztm4z.jpg';

/**
 * Favicon — hojita verde con fondo transparente.
 * Cloudinary sirve la imagen ya escalada a los tamaños que piden Safari,
 * Chrome, Firefox e iOS Home Screen. Padding transparente con c_pad,b_transparent
 * asegura que quede cuadrada aunque el logo original no lo sea.
 *
 * IMPORTANTE: para que este favicon se use, hay que borrar el fichero
 * `app/icon.png` del repo (que tenía fondo negro). Si el fichero de la
 * convención sigue existiendo, Next.js le da prioridad sobre este metadata
 * y seguirás viendo el favicon viejo.
 */
const FAVICON_URL =
  'https://res.cloudinary.com/dekgmk73i/image/upload/w_512,h_512,c_pad,b_transparent,f_png,q_auto/v1780502849/logo-hojita-verde_tum1zm.png';

const FAVICON_APPLE_URL =
  'https://res.cloudinary.com/dekgmk73i/image/upload/w_180,h_180,c_pad,b_transparent,f_png,q_auto/v1780502849/logo-hojita-verde_tum1zm.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecoreforest.org'),
  title: {
    default: 'EcoReforest — Convertimos el desperdicio en bosque',
    template: '%s · EcoReforest',
  },
  description:
    'Asociación que combate la desertificación en España transformando residuos orgánicos en fertilizante natural para reforestar zonas áridas. Economía circular al servicio del clima.',
  keywords: [
    'reforestación España',
    'desertificación',
    'economía circular',
    'compost ecológico',
    'créditos de carbono',
    'asociación medio ambiente',
    'sostenibilidad',
    'biodiversidad',
    'restauración de suelos',
    'biocompost',
    'agricultura regenerativa',
    'LIFE 2027',
    'Pacto Verde Europeo',
  ],
  authors: [{ name: 'EcoReforest', url: 'https://ecoreforest.org' }],
  creator: 'EcoReforest',
  publisher: 'EcoReforest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: FAVICON_URL, type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: FAVICON_APPLE_URL, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: FAVICON_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://ecoreforest.org',
    siteName: 'EcoReforest',
    title: 'EcoReforest — Convertimos el desperdicio en bosque',
    description:
      'Asociación que combate la desertificación en España transformando residuos orgánicos en fertilizante natural para reforestar zonas áridas.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'EcoReforest — Convertimos el desperdicio en bosque',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecoreforest',
    creator: '@ecoreforest',
    title: 'EcoReforest — Convertimos el desperdicio en bosque',
    description:
      'Asociación que combate la desertificación en España transformando residuos orgánicos en fertilizante natural.',
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'gVgjHiwPodXXKILM_t2CQTqVEQGUenMuiDH87h0JceY',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': 'https://ecoreforest.org/#organization',
  name: 'EcoReforest',
  alternateName: 'EcoReforest Asociación',
  url: 'https://ecoreforest.org',
  logo: 'https://res.cloudinary.com/dekgmk73i/image/upload/q_auto/f_auto/v1780502849/logo-hojita-verde_tum1zm.png',
  image: OG_IMAGE,
  description:
    'Asociación sin ánimo de lucro inscrita en el Registro Nacional de Asociaciones de España. Combate la desertificación transformando residuos orgánicos en biocompost para restaurar suelos y reforestar zonas áridas.',
  email: 'hola@ecoreforest.com',
  foundingDate: '2026-04-22',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'ES',
  },
  areaServed: {
    '@type': 'Country',
    name: 'España',
  },
  sameAs: [
    'https://www.instagram.com/ecoreforest',
    'https://www.linkedin.com/company/ecoreforest/',
    'https://www.tiktok.com/@ecoreforest_',
  ],
  founder: [
    {
      '@type': 'Person',
      name: 'Àlex Frías Díez',
      jobTitle: 'Presidente',
    },
    {
      '@type': 'Person',
      name: 'Izan Jiménez Bernardo',
      jobTitle: 'Secretario',
    },
    {
      '@type': 'Person',
      name: 'Santiago Colino',
      jobTitle: 'Tesorero',
    },
  ],
  knowsAbout: [
    'Restauración ecológica',
    'Compostaje acelerado',
    'Economía circular',
    'Captura de carbono',
    'Lucha contra la desertificación',
    'Gestión forestal sostenible',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
