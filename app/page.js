// app/page.js

export default function Home() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 
text-white min-h-[80vh] flex flex-col justify-center items-center 
text-center px-6">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Portal Imigração USA
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-100">
        Informações claras e educativas sobre imigração nos Estados 
Unidos.
        Tudo o que você precisa para entender processos, documentos e 
novidades.
      </p>
      <div className="flex gap-4">
        <a
          href="/about"
          className="bg-white text-blue-700 font-semibold px-6 py-3 
rounded-lg shadow hover:bg-gray-100 transition"
        >
          Saiba Mais
        </a>
        <a
          href="#artigos"
          className="bg-transparent border border-white px-6 py-3 
rounded-lg hover:bg-white hover:text-blue-700 transition"
        >
          Acessar Artigos
        </a>
      </div>
    </section>
  );
}

