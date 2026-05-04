import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Impacto',
  description: 'Datos en vivo de árboles plantados, hectáreas restauradas y CO₂ capturado.',
};

export default function Impacto() {
  return (
    <PageHero
      eyebrow="05 — Impacto"
      title="Cada dato, cada hectárea, cada árbol."
      italicWord="cada árbol."
      description="Contadores en vivo, mapas de proyectos y reportes de transparencia descargables. Lo que medimos lo enseñamos."
    />
  );
}
