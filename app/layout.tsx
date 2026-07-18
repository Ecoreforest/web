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

const OG_IMAGE =
  'https://res.cloudinary.com/dekgmk73i/image/upload/v1783079503/og-image-ecoreforest_eztm4z.jpg';

const FAVICON_URL =
  'https://res.cloudinary.com/dekgmk73i/image/upload/w_512,h_512,c_pad,b_transparent,f_png,q_auto/v1780502849/logo-hojita-verde_tum1zm.png';

const FAVICON_APPLE_URL =
  'https://res.cloudinary.com/dekgmk73i/image/upload/w_180,h_180,c_pad,b_transparent,f_png,q_auto/v1780502849/logo-hojita-verde_tum1zm.png';

export const metadata: Metadata = {
  metadataBase: new URL('https://ecoreforest.org'),
  alternates: {
    canonical: './',
  },
  title: {
    default: 'EcoReforest — Convertimos el desperdicio en bosque',
    template: '%s · EcoReforest',
  },
  description:
    'Asociación que combate la desertificación en España aplicando compost UNE 142500 certificado para reforestar zonas áridas. Economía circular al servicio del clima.',
  keywords: [
    'reforestación España',
    'desertificación',
    'economía circular',
    'compost UNE 142500',
    'compost ecológico certificado',
    'créditos de carbono',
    'asociación medio ambiente',
    'sostenibilidad',
    'biodiversidad',
    'restauración de suelos',
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
      'Asociación que combate la desertificación en España aplicando compost UNE 142500 certificado para reforestar zonas áridas.',
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
      'Asociación que combate la desertificación en España aplicando compost UNE 142500 certificado para reforestar zonas áridas.',
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

/**
 * Paso 13: `knowsAbout` actualizado. Fuera "Compostaje acelerado" (que
 * sugería que lo hacíamos nosotros); dentro "Selección y validación de
 * compost certificado" y "Aplicación de biocompost en restauración de
 * suelos", que reflejan lo que realmente hacemos.
 */
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
    'Asociación sin ánimo de lucro inscrita en el Registro Nacional de Asociaciones de España. Combate la desertificación aplicando compost UNE 142500 certificado en reforestación de suelos degradados. Externaliza la producción del compost a partners certificados y se concentra en diseño técnico, ejecución en campo y monitoreo científico.',
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
    'Selección y validación de compost UNE 142500',
    'Aplicación de biocompost en restauración de suelos',
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
