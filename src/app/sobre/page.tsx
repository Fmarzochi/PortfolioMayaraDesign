import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/Typography';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça Mayara e sua trajetória no design gráfico e UI/UX.',
};

export default function SobrePage() {
  return (
    <Container className="py-12">
      <Typography variant="h1" className="mb-4">
        Sobre mim
      </Typography>
      <Typography variant="lead" className="max-w-2xl">
        Designer gráfica e UI/UX com foco em identidade visual, editorial e interfaces digitais.
        Conteúdo completo em breve.
      </Typography>
    </Container>
  );
}
