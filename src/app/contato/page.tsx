import type { Metadata } from 'next';
import { ContatoContent } from '@/features/contact/ContatoContent';

export const metadata: Metadata = {
  title: 'Contato — Talessa Rodrigues',
  description: 'Entre em contato para novos projetos e colaborações.',
};

export default function ContatoPage() {
  return <ContatoContent />;
}
