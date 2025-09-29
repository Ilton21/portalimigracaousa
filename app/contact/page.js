export default function ContactPage() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Contato</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Seu email"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Sua mensagem"
            rows="4"
            className="w-full p-3 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg 
hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

