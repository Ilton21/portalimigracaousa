import './globals.css'

export const metadata = {
  title: 'Portal Imigração USA',
  description: 'Informação prática sobre direitos e deveres de imigrantes 
nos EUA - conteúdo educativo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}

