import PageHero from '../components/PageHero';

export const metadata = {
  title: 'El proyecto',
  description: 'Quiénes somos, qué hacemos y por qué EcoReforest existe.',
};

export default function Proyecto() {
  return (
    <PageHero
      eyebrow="01 — El proyecto"
      title="La historia detrás del bosque."
      italicWord="bosque."
      description="Una asociación nacida para revertir la desertificación con una idea simple: el residuo de unos puede ser el alimento de un bosque entero."
    />
  );
}
