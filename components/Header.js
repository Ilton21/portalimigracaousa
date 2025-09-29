import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-6 flex justify-between 
items-center">
        <h1 className="text-xl font-bold">Portal Imigração USA</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-blue-200 
transition">Início</Link>
          <Link href="/about" className="hover:text-blue-200 
transition">Sobre</Link>
          <Link href="/contact" className="hover:text-blue-200 
transition">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

