import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Tecnología',
  description: 'Compostaje acelerado, drones, sensores IoT y Torre Warka.',
};

export default function Tecnologia() {
  return (
    <PageHero
      eyebrow="03 — Tecnología"
      title="Ciencia, ingeniería y rigor en cada hectárea."
      italicWord="rigor"
      description="Compostaje acelerado, drones multiespectrales, sensores IoT, Torre Warka, análisis satelital. Tecnología real al servicio de un objetivo concreto."
    />
  );
}
