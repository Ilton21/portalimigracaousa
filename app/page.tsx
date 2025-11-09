"use client";
import { Globe2, Users, Headphones } from "lucide-react";

export default function Home() {
  const recursos = [
    {
      icon: <Globe2 className="w-10 h-10 text-blue-600 mb-3" />,
      title: "Documentação e Vistos",
      desc: "Guias e informações atualizadas sobre processos migratórios e 
documentação."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600 mb-3" />,
      title: "Comunidades Locais",
      desc: "Descubra redes de apoio e associações próximas a você."
    },
    {
      icon: <Headphones className="w-10 h-10 text-blue-600 mb-3" />,
      title: "Atendimento e Orientação",
      desc: "Conecte-se com especialistas e voluntários para suporte 
prático."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white 
text-gray-800">
      {/* Cabeçalho */}
      <header className="text-center py-16 bg-white shadow-sm">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Portal 
Imigração USA</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Informações, orientações e apoio para quem deseja iniciar ou 
continuar sua jornada nos Estados Unidos.
        </p>
      </header>

      {/* Seção principal */}
      <section className="py-20 px-6">
        <h2 className="text-2xl font-semibold text-center text-blue-700 
mb-10">Recursos Essenciais</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {recursos.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md 
text-center hover:shadow-xl transition-shadow">
              {item.icon}
              <h3 className="text-xl font-semibold mb-3 
text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-center py-10 border-t text-gray-500 
text-sm">
        © {new Date().getFullYear()} Portal Imigração USA — Todos os 
direitos reservados.
      </footer>
    </main>
  );
}

