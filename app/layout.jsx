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
        {/* Header / Banner */}
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 
text-white py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Portal Imigração 
USA</h1>
          <p className="mt-3 text-lg md:text-xl">Dicas práticas e 
informações sobre direitos e deveres de imigrantes nos EUA</p>
        </header>

        {/* Main content */}
        <main className="max-w-6xl mx-auto p-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 text-center py-8 mt-12">
          <p className="mb-3 font-semibold">Siga-nos nas redes sociais</p>
          <SocialLinks />
          <p className="mt-4 text-sm text-gray-600">© 2025 Portal 
Imigração USA. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  )
}

