import './globals.css'

import Header from '../components/Header'
import Footer from '../components/footer.js import { Facebook, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://facebook.com"
          aria-label="Facebook"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="w-6 h-6 hover:text-blue-600 transition" />
        </a>
        <a
          href="https://instagram.com"
          aria-label="Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="w-6 h-6 hover:text-pink-500 transition" />
        </a>
        <a
          href="https://linkedin.com"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-blue-700 transition" />
        </a>
      </div>

      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Portal Imigração Legal pro EUA
      </p>
    </footer>
  )
}



export const metadata = {
  title: 'Portal Imigração EUA',
  description: 'Informações educativas sobre imigração nos EUA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container-max py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
