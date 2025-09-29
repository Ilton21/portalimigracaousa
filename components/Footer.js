import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-8">
      <div className="container mx-auto flex justify-between items-center px-4">
        <p className="text-sm">© {new Date().getFullYear()} Portal Imigração USA</p>
        <nav className="flex space-x-4">
          <Link href="/" className="hover:text-gray-400">Início</Link>
          <Link href="/about" className="hover:text-gray-400">Sobre</Link>
        </nav>
      </div>
    </footer>
  );
}
