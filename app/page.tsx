"use client";
import { Globe2, Users, Headphones, Mail, MessageCircle } from "lucide-react";

export default function Home() {
  const recursos = [
    {
      icon: <Globe2 className="w-10 h-10 text-white mb-3" />,
      title: "Documentação e Vistos",
      desc: "Guias e informações atualizadas sobre processos migratórios e documentação."
    },
    {
      icon: <Users className="w-10 h-10 text-white mb-3" />,
      title: "Comunidades Locais",
      desc: "Descubra redes de apoio e associações próximas a você."
    },
    {
      icon: <Headphones className="w-10 h-10 text-white mb-3" />,
      title: "Atendimento e Orientação",
      desc: "Conecte-se com especialistas e voluntários para suporte prático."
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">

      {/* Cabeçalho Hero */}
      <header className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Portal Imigração USA</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Informações, orientações e apoio para quem deseja iniciar ou continuar sua jornada nos Estados Unidos.
        </p>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
        >
          <MessageCircle className="w-5 h-5" /> Fale Conosco
        </a>
      </header>

      {/* Seção de Recursos */}
      <section className="py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">Recursos Essenciais</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recursos.map((item, index) => (
            <div
              key={index}
              className="bg-blue-600 hover:bg-blue-700 transition p-8 rounded-3xl shadow-xl text-center text-white"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-white/90">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-100 border-t border-gray-300 py-10 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-700 mb-4">
            © {new Date().getFullYear()} Portal Imigração USA — Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6 mb-4">
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

