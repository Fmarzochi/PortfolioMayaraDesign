import { Typography } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center md:py-32">
      <Typography variant="h1" className="mb-4 max-w-3xl">
        Design que comunica, encanta e converte.
      </Typography>
      <Typography variant="lead" className="mb-8 max-w-xl">
        Portfólio de design gráfico e UI/UX com foco em identidade visual e experiências digitais.
      </Typography>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button as="a" href="/projetos" size="lg">
          Ver projetos
        </Button>
        <Button as="a" href="/contato" size="lg" variant="outline">
          Entrar em contato
        </Button>
      </div>
    </section>
  );
}
