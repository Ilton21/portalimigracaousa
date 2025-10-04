import './globals.css';
import SocialLinks from '../components/SocialLinks';

export const metadata = {
  title: 'Portal Imigração USA',
  description: 'Informação prática sobre direitos e deveres de imigrantes nos EUA - conteúdo educativo.',

}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-800 font-sans">
        {/* Header */}
        <header className="bg-blue-600 text-white py-6 text-center">
          <h1 className="text-3xl font-bold">Portal Imigração USA</h1>
          <p className="mt-2 text-lg">Informação prática sobre direitos e 
deveres de imigrantes</p>
        </header>

        {/* Main content */}
        <main className="max-w-4xl mx-auto p-6">
          {children}
        </main>

        {/* Footer com redes sociais */}
        <footer className="bg-gray-100 text-center py-6 mt-12">
          <p className="mb-3">Siga-nos nas redes sociais:</p>
          <SocialLinks />
          <p className="mt-3 text-sm text-gray-600">© 2025 Portal 
Imigração USA</p>
        </footer>
      </body>
    </html>
  )
}

