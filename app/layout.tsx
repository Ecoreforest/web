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
  ],
  authors: [{ name: 'EcoReforest' }],
  creator: 'EcoReforest',
  publisher: 'EcoReforest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'EcoReforest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoReforest — Convertimos el desperdicio en bosque',
    description:
      'Asociación que combate la desertificación en España transformando residuos orgánicos en fertilizante natural.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${manrope.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body className="bg-bone text-ink antialiased">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
