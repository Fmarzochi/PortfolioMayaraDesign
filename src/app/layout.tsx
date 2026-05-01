import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { LenisProvider } from '@/components/providers/LenisProvider';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Portfólio | Designer UI/UX',
    template: '%s | Portfólio',
  },
  description:
    'Portfólio de Mayara — Designer UI/UX especialista em product design, branding e design de interfaces digitais. Transformo problemas complexos em soluções que convertem, engajam e escalam.',
  keywords: [
    'designer ui ux',
    'ui ux design',
    'product design',
    'design de interfaces',
    'branding',
    'identidade visual',
    'figma',
    'design digital',
    'ux research',
    'design de produto',
    'portfólio designer',
    'designer freelancer',
    'design responsivo',
    'design de aplicativo',
    'design de website',
    'prototipagem',
    'wireframe',
    'design system',
    'usabilidade',
    'experiência do usuário',
  ],
  authors: [
    { name: 'Mayara' },
    { name: 'Felipe Marzochi', url: 'https://github.com/fmarzochi' },
  ],
  creator: 'Felipe Marzochi',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Portfólio | Designer UI/UX',
    description:
      'Designer UI/UX especialista em product design, branding e interfaces digitais.',
    siteName: 'Portfólio Designer UI/UX',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${manrope.variable}`}
    >
      <head>
        <meta name="theme-color" content="#F4F5F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0C0E0F" media="(prefers-color-scheme: dark)" />
        {/* Desenvolvido por Felipe Marzochi — https://github.com/fmarzochi */}
        <meta name="developer" content="Felipe Marzochi" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Mayara',
              jobTitle: 'UI/UX Designer',
              description:
                'Designer UI/UX especialista em product design, branding, identidade visual e design de interfaces digitais.',
              knowsAbout: [
                'UI Design',
                'UX Design',
                'Product Design',
                'Branding',
                'Identidade Visual',
                'Figma',
                'Design de Aplicativos',
                'Design de Websites',
                'Prototipagem',
                'UX Research',
                'Design System',
                'Usabilidade',
              ],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'UI/UX Designer',
                occupationLocation: { '@type': 'Country', name: 'Brasil' },
              },
            }),
          }}
        />
      </head>
      <body
        className="flex min-h-screen flex-col font-sans antialiased transition-colors duration-300"
        style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
        suppressHydrationWarning
      >
        <LanguageProvider>
          <ThemeProvider>
            <LenisProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </LenisProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
