import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Hoja de ruta',
  description: 'De 2026 a 2030: nuestra hoja de ruta paso a paso.',
};

export default function HojaDeRuta() {
  return (
    <PageHero
      eyebrow="04 — Hoja de ruta"
      title="Lo que ya hicimos, lo que viene, lo que soñamos."
      italicWord="soñamos."
      description="Transparencia total: dónde estamos hoy y plan a cinco años. Sin promesas vacías, solo compromisos verificables."
    />
  );
}
