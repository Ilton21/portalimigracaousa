import './globals.css';

export const metadata = {
  title: 'Portal Imigração USA',
  description: 'Informações sobre imigração para os EUA',
};

export default function RootLayout({ children }: { children: 
React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

