import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal Imigração USA",
  description: "Informações, apoio e orientação para imigrantes nos Estados Unidos.",
};

export default function RootLayout({ children }: { children: 
React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {/* Cabeçalho */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Portal Imigração USA
            </Link>
            <nav className="space-x-6 text-gray-700">
              <Link href="/" className="hover:text-blue-600">Início</Link>
              <Link href="/contact" className="hover:text-blue-600">Contato</Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="min-h-screen py-12 px-6">{children}</main>

        {/* Rodapé */}
        <footer className="bg-white border-t mt-16">
          <div className="max-w-6xl mx-auto py-10 px-6 text-center">
            <p className="text-gray-600 mb-4">
              © {new Date().getFullYear()} Portal Imigração USA — Todos os direitos reservados.
            </p>

            <div className="flex justify-center gap-6">
              <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contato@portalimigracaousa.com" className="text-gray-600 hover:text-blue-600">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

