import PageHero from '../components/PageHero';

export const metadata = { title: 'Condiciones de venta' };

export default function Condiciones() {
  return (
    <PageHero
      eyebrow="Legal"
      title="Condiciones de venta."
      description="Términos y condiciones aplicables a la compra de productos en EcoReforest."
    />
  );
}
