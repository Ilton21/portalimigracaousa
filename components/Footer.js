export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row 
justify-between items-center">
        {/* Logo / Título */}
        <h2 className="text-lg font-bold text-white">
          Portal Imigração EUA
        </h2>

        {/* Links */}
        <nav className="flex space-x-6 my-4 md:my-0">
          <a href="/" className="hover:text-white 
transition-colors">Início</a>
          <a href="/about" className="hover:text-white 
transition-colors">Sobre</a>
          <a href="/contact" className="hover:text-white 
transition-colors">Contato</a>
        </nav>

        {/* Direitos autorais */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

