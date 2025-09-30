import Link from 'next/link';
import SocialLinks from './SocialLinks';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-xl font-bold">Portal Imigração USA</h1>
        <nav className="mt-2 md:mt-0 space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">Sobre</Link>
          <Link href="/contact" className="hover:underline">Contato</Link>
        </nav>
      </div>
      <SocialLinks />
    </header>
  );
}
