import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Colabora',
  description: 'Empresas, voluntariado, inversores y mecenas. Únete al proyecto.',
};

export default function Colabora() {
  return (
    <PageHero
      eyebrow="07 — Colabora"
      title="Únete desde el primer árbol."
      italicWord="primer árbol."
      description="Empresas, voluntariado, mecenazgo, inversores. Cuatro formas de formar parte del proyecto."
    />
  );
}
