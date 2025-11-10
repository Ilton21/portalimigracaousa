import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from 
"lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal Imigração USA",
  description: "Informações, apoio e orientação para imigrantes nos Estados Unidos, sem acessória jurídica.",
};

export default function RootLayout({ children }: { children: 
React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${inter.className} bg-gray-50 text-gray-800`}>
        {/* Cabeçalho */}
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-900">
              Portal Imigração USA
            </Link>
            <nav className="space-x-6 text-gray-700 font-medium">
              <Link href="/" className="hover:text-blue-700 transition">Início</Link>
              <Link href="/contact" className="hover:text-blue-700 transition">Contato</Link>
            </nav>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="min-h-screen py-16 px-6">
          {children}
        </main>

        {/* Rodapé */}
        <footer className="bg-blue-50 border-t mt-16">
          <div className="max-w-6xl mx-auto py-10 px-6 text-center">
            <p className="text-gray-700 mb-4">
              © {new Date().getFullYear()} Portal Imigração USA — Todos os direitos reservados.
            </p>

            <div className="flex justify-center gap-6 mb-4">
              <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800 transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900 transition">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:contato@portalimigracaousa.com" className="text-gray-600 hover:text-blue-600 transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>

            {/* Botão WhatsApp */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full shadow-md transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

