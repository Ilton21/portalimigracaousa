import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-6 px-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold">PI</div>
          <div>
            <Link href="/" className="text-xl font-semibold">Portal Imigração USA</Link>
            <div className="text-sm text-gray-500">Dicas práticas e informações para imigrantes nos EUA</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#direitos" className="hover:text-blue-600">Direitos</a>
          <a href="#dicas" className="hover:text-blue-600">Dicas</a>
          <a href="#conteudo" className="hover:text-blue-600">Conteúdo</a>
          <a href="#contato" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow">Contato</a>
        </nav>
      </div>
    </header>
  )
}

