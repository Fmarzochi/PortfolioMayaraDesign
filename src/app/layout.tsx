import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Manrope } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
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
    'Transformo problemas complexos em soluções digitais — design de produtos que convertem, engajam e escalam.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${jakarta.variable} ${manrope.variable}`}
    >
      <body
        className="flex min-h-screen flex-col font-sans antialiased transition-colors duration-300"
        style={{ background: 'var(--bg-primary)', color: 'var(--text-primary)' }}
      >
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
