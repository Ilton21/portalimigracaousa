import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center 
py-4 px-6">
        <h1 className="text-xl font-bold">Portal Imigração USA</h1>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-400 transition">
            Início
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

