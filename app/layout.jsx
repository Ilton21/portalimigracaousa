}import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Portal Imigração EUA',
  description: 'Informações sobre imigração legal para os EUA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
