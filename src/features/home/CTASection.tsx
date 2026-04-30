import Link from 'next/link';
import Image from 'next/image';

export function CTASection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100svh' }}
      aria-labelledby="cta-heading"
    >
      {/* Foto — rosto centralizado */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/cta-photo.png"
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition: 'center 42%' }}
          aria-hidden="true"
          sizes="100vw"
          priority
        />
        {/* Overlay sutil — só escurece levemente preservando o rosto */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.30)' }}
          aria-hidden="true"
        />
        {/* Vinheta radial nas bordas */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 80% at center, transparent 30%, rgba(0,0,0,0.60) 100%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo — centralizado sobre o rosto */}
      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-4 py-16 text-center">
        <div className="flex flex-col items-center gap-5 max-w-xs sm:max-w-sm">
          <h2
            id="cta-heading"
            className="fluid-h2 font-display font-semibold leading-tight text-white"
          >
            Comece hoje
          </h2>

          <p className="font-body text-sm leading-relaxed text-white/80 sm:text-base md:text-lg">
            Criar um novo padrão de vida começa<br />com uma decisão simples
          </p>

          <Link
            href="/contato"
            className="mt-2 inline-flex items-center gap-3 rounded-full px-6 py-3 font-sans text-sm font-medium transition-all duration-200 hover:opacity-90"
            style={{
              background: 'rgba(255,255,255,0.10)',
              border: '1px solid rgba(255,255,255,0.30)',
              color: '#fff',
              backdropFilter: 'blur(12px)',
            }}
          >
            Converse comigo agora
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: 'var(--accent)' }}
            >
              <Image
                src="/assets/icons/arrow-up-right.svg"
                alt=""
                width={13}
                height={13}
                aria-hidden="true"
                className="brightness-[10]"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
