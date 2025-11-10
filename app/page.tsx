"use client";
import { Globe2, Users, Headphones, MessageCircle, Mail } from "lucide-react";

export default function Home() {
  const recursos = [
    {
      icon: <Globe2 className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Documentação e Vistos",
      desc: "Guias e informações atualizadas sobre processos migratórios e documentação."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600 mb-4" />,
      title: "Comunidades Locais",
      desc: "Descubra redes de apoio e associações próximas a você."
    },
    {
      icon: <Headphones className="w-12 h-12 text-purple-600 mb-4" />,
      title: "Atendimento e Orientação",
      desc: "Conecte-se com especialistas e voluntários para suporte prático."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Cabeçalho Hero */}
      <header className="text-center py-24">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Portal Imigração USA</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700">
          Informações, orientações e apoio para quem deseja iniciar ou continuar sua jornada nos Estados Unidos.
        </p>
      </header>

      {/* Seção de Cartões */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Recursos Essenciais</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recursos.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.desc}</p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Fale no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-100 border-t mt-16">
        <div className="max-w-6xl mx-auto py-10 px-6 text-center">
          <p className="text-gray-600 mb-4">
            © {new Date().getFullYear()} Portal Imigração USA — Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800 transition">
              <Globe2 className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" className="text-pink-500 hover:text-pink-700 transition">
              <Users className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900 transition">
              <Headphones className="w-6 h-6" />
            </a>
            <a href="mailto:contato@portalimigracaousa.com" className="text-gray-600 hover:text-blue-600 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

