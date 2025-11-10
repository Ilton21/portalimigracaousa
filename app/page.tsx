"use client";
import { Globe2, Users, Headphones, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const recursos = [
    {
      icon: <Globe2 className="w-12 h-12 text-blue-600 mb-4" />,
      title: "Documentação e Vistos",
      desc: "Guias e informações atualizadas sobre processos migratórios e documentação.",
      color: "from-blue-50 to-blue-100",
    },
    {
      icon: <Users className="w-12 h-12 text-green-600 mb-4" />,
      title: "Comunidades Locais",
      desc: "Descubra redes de apoio e associações próximas a você.",
      color: "from-green-50 to-green-100",
    },
    {
      icon: <Headphones className="w-12 h-12 text-purple-600 mb-4" />,
      title: "Atendimento e Orientação",
      desc: "Conecte-se com especialistas e voluntários para suporte prático.",
      color: "from-purple-50 to-purple-100",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800">
      {/* Cabeçalho Hero */}
      <header className="text-center py-24">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-blue-700 mb-4"
        >
          Portal Imigração USA
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700"
        >
          Informações, orientações e apoio para quem deseja iniciar ou continuar sua jornada nos Estados Unidos.
        </motion.p>
      </header>

      {/* Seção de Cartões */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Recursos Essenciais
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {recursos.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl bg-gradient-to-br ${item.color} p-8 text-center shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-700 mb-6">{item.desc}</p>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Fale no WhatsApp
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">
            © {new Date().getFullYear()} Portal Imigração USA — Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com" target="_blank" className="hover:text-blue-400 transition">
              <Globe2 className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
              <Users className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-blue-500 transition">
              <Headphones className="w-6 h-6" />
            </a>
            <a href="mailto:contato@portalimigracaousa.com" className="hover:text-green-400 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

