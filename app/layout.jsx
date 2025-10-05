// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Portal Imigração USA",
  description: "Informações e serviços para imigrantes nos Estados Unidos",

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

