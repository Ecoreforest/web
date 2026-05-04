import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Proceso',
  description: 'Los cuatro pasos de nuestra economía circular: del residuo al bosque.',
};

export default function Proceso() {
  return (
    <PageHero
      eyebrow="02 — Proceso"
      title="Del residuo al bosque, en cuatro pasos."
      italicWord="cuatro pasos."
      description="Recolección, compostaje acelerado, plantación y monitoreo. Un ciclo cerrado entre la basura urbana y el suelo árido."
    />
  );
}
