import "./globals.css";
import React from "react";

export const metadata = {
  title: "Portal Imigração USA",
  description: "Apoio e informação para imigrantes nos EUA"
};

export default function RootLayout({ children }: { children: 
React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}

