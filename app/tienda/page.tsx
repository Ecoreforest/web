import PageHero from '../components/PageHero';

export const metadata = {
  title: 'Tienda',
  description: 'Compost certificado, adopta un árbol, créditos de carbono y línea de ropa EcoReforest.',
};

export default function Tienda() {
  return (
    <PageHero
      eyebrow="06 — Tienda"
      title="Cada compra es un árbol."
      italicWord="árbol."
      description="Compost certificado UNE 142500, adopta un árbol con certificado, créditos de carbono y la línea de ropa EcoReforest. Cada producto es una contribución directa al bosque."
    />
  );
}
