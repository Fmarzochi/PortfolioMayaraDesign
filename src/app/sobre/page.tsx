import type { Metadata } from 'next';
import { SobreContent } from '@/features/sobre/SobreContent';

export const metadata: Metadata = {
  title: 'Sobre — Talessa Rodrigues',
  description: 'UX/UI Designer focada em transformar ideias em produtos digitais eficientes.',
};

export default function SobrePage() {
  return <SobreContent />;
}
