import Link from 'next/link';
import { Container } from './Container';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Mayara Design. Todos os direitos reservados.
          </p>
          <nav aria-label="Links do rodapé" className="flex gap-6">
            <Link
              href="/projetos"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Projetos
            </Link>
            <Link
              href="/sobre"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              Contato
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
