import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <h1>Portal Imigração USA</h1>
      <nav>
        <Link href="/" style={{ marginRight: "15px" }}>Início</Link>
        <Link href="/about">Sobre</Link>
      </nav>
    </header>
  );
}

