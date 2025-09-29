export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center 
min-h-[70vh] bg-gradient-to-b from-gray-50 to-gray-200 text-center p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Bem-vindo ao Portal Imigração EUA
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
        Informações claras e educativas sobre o processo de imigração
        para os Estados Unidos. Tudo em um só lugar.
      </p>
      <a
        href="/about"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow 
hover:bg-blue-700 transition"
      >
        Saiba Mais
      </a>
    </section>
  );
}

