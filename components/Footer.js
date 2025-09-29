import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto flex justify-between items-center 
px-6">
        <p>&copy; {new Date().getFullYear()} Portal Imigração USA</p>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-white">
            Início
          </Link>
          <Link href="/about" className="hover:text-white">
            Sobre
          </Link>
        </nav>
      </div>
    </footer>
  );
}

