import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portal Imigração USA | Informação confiável sobre a vida nos EUA',
  description: 'Informações educativas em português sobre vistos, Green Card, cidadania, trabalho e vida nos Estados Unidos, com acesso a fontes governamentais oficiais.',
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
