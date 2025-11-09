"use client";
import { motion } from "framer-motion";
import { Heart, Globe2, Users, MessageSquare } from "lucide-react";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white 
text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 
bg-white shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-700">Portal Imigração 
USA</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#sobre" className="hover:text-blue-600 
transition">Sobre</a>
          <a href="#recursos" className="hover:text-blue-600 
transition">Recursos</a>
          <a href="#contato" className="hover:text-blue-600 
transition">Contato</a>
        </nav>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 
py-2 rounded-full">Entrar</button>
      </header>

      <section className="text-center px-6 py-20 bg-blue-100">
        <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, 
y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold 
text-blue-700 mb-4">
          Apoio e Informação para Imigrantes nos EUA
        </motion.h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Conectamos pessoas, recursos e oportunidades para quem busca uma 
nova vida nos Estados Unidos.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 
py-3 rounded-full text-lg">Comece Aqui</button>
      </section>

      <section id="sobre" className="px-6 py-16 max-w-5xl mx-auto">
        <h3 className="text-3xl font-semibold text-blue-700 mb-6 
text-center">Sobre o Portal</h3>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          O Portal Imigração USA nasceu para oferecer informações 
confiáveis, orientação e suporte
          a imigrantes e suas famílias. Nosso objetivo é facilitar o 
acesso a direitos, serviços e
          oportunidades, promovendo integração e dignidade.
        </p>
      </section>

      <section id="recursos" className="px-6 py-16 bg-blue-50">
        <h3 className="text-3xl font-semibold text-blue-700 mb-10 
text-center">Recursos e Apoio</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Globe2 className="w-10 h-10 text-blue-600 mb-3" />, 
title: "Documentação e Vistos", desc: "Guias e informações atualizadas 
sobre processos migratórios e documentação." },
            { icon: <Users className="w-10 h-10 text-blue-600 mb-3" />, 
title: "Comunidades Locais", desc: "Descubra redes de apoio e associações 
próximas a você." },
            { icon: <MessageSquare className="w-10 h-10 text-blue-600 
mb-3" />, title: "Atendimento e Orientação", desc: "Conecte-se com 
especialistas e voluntários prontos para ajudar." }
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 text-center 
shadow-md hover:shadow-lg transition">
              {item.icon}
              <h4 className="text-xl font-bold text-blue-700 
mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center py-16 px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ 
opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl 
mx-auto">
          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-3xl font-semibold text-blue-700 mb-4">Juntos 
por uma nova vida</h3>
          <p className="text-gray-600 mb-6">Cada jornada é única. Nosso 
compromisso é oferecer informações, empatia e acolhimento a todos.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 
py-3 rounded-full text-lg">Fale Conosco</button>
        </motion.div>
      </section>

      <footer className="bg-blue-700 text-white text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} Portal Imigração USA — Todos os 
direitos reservados.</p>
      </footer>
    </div>
  );
}

