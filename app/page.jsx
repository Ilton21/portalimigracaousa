import Link from 'next/link'

export default function Home() {
  return (
    <section className="text-center py-12 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-5xl font-extrabold text-blue-600 drop-shadow-lg">
        Portal Imigração Legal pro EUA
      </h1>
      <p className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto">
        Informação prática sobre direitos e deveres de imigrantes nos EUA — conteúdo educativo.
      </p>

      <div className="mt-10 flex justify-center gap-6">
        <Link href="/articles" className="bg-blue-600 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-blue-700 transition">
          Ver Dicas
        </Link>
        <Link href="/ebooks" className="border border-blue-600 text-blue-600 py-3 px-6 rounded-xl hover:bg-blue-50 transition">
          E-books
        </Link>
      </div>
    </section>
  )
}
