import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/Typography';
import { ContactForm } from '@/features/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com Mayara para projetos e colaborações.',
};

export default function ContatoPage() {
  return (
    <Container className="py-12">
      <Typography variant="h1" className="mb-4">
        Contato
      </Typography>
      <Typography variant="lead" className="mb-8 max-w-xl">
        Tem um projeto em mente? Vamos conversar.
      </Typography>
      <ContactForm />
    </Container>
  );
}
