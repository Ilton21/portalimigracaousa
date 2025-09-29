import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-between 
items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Portal 
Imigração USA</p>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-gray-400">Início</Link>
          <Link href="/about" className="hover:text-gray-400">Sobre</Link>
          <Link href="/contact" 
className="hover:text-gray-400">Contato</Link>
        </nav>
      </div>
    </footer>
  );
}

