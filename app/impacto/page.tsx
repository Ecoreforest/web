import ImpactoHero from '../components/impacto/ImpactoHero';
import ImpactoPromesa from '../components/impacto/ImpactoPromesa';
import ImpactoMetricas from '../components/impacto/ImpactoMetricas';
import ImpactoMetodologia from '../components/impacto/ImpactoMetodologia';
import ImpactoReportes from '../components/impacto/ImpactoReportes';
import ImpactoCTA from '../components/impacto/ImpactoCTA';

export const metadata = {
  title: 'Impacto',
  description:
    'Lo que mediremos cuando el bosque crezca. Cifras objetivo, metodología transparente y reportes anuales auditados por terceros. Cero greenwashing.',
};

export default function Impacto() {
  return (
    <>
      <ImpactoHero />
      <ImpactoPromesa />
      <ImpactoMetricas />
      <ImpactoMetodologia />
      <ImpactoReportes />
      <ImpactoCTA />
    </>
  );
}
