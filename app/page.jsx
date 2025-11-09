'use client'

import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 
'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">

      {/* Seção Hero com gradiente sofisticado */}
      <section className="text-center py-24 px-4 bg-gradient-to-tr 
from-blue-500 via-indigo-500 to-pink-500 text-white">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold drop-shadow-lg 
mb-6 text-yellow-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Portal Imigração Legal pro EUA
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-12"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Sonhar em viver na América é fácil - conquistar isso com informação é o primeiro passa - conteúdo educativo sem acessória jurídica.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row justify-center gap-6 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link href="/articles" className="bg-yellow-400 text-blue-900 
font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-yellow-300 
hover:scale-105 transition transform">
            Ver Dicas
          </Link>
          <Link href="/ebooks" className="border-2 border-white text-white 
font-semibold py-3 px-8 rounded-xl hover:bg-white hover:text-purple-600 
transition">
            E-books
          </Link>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 text-2xl"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a href="#" className="text-blue-600 hover:text-blue-400 
transition"><FaFacebookF /></a>
          <a href="#" className="text-pink-500 hover:text-pink-300 
transition"><FaInstagram /></a>
          <a href="#" className="text-blue-400 hover:text-blue-200 
transition"><FaLinkedinIn /></a>
          <a href="#" className="text-red-600 hover:text-red-400 
transition"><FaYoutube /></a>
          <a href="#" className="text-black hover:text-gray-300 
transition"><SiTiktok /></a>
        </motion.div>
      </section>

      {/* Seção de Destaques com fundo claro */}
      <section className="py-20 px-4 bg-gray-50 text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12">Destaques do 
Portal</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: 'Dica de Imigração', color: 'blue', text: 'Aprenda os principais direitos e deveres de imigrantes nos EUA de forma prática.' },
            { title: 'E-books Gratuitos', color: 'pink', text: 'Baixe e-books com informações importantes sobre processos legais e vistos nos EUA.' },
            { title: 'Últimas Notícias', color: 'yellow', text: 'Fique atualizado com notícias e mudanças na legislação de imigração americana.' }
          ].map((card, index) => (
            <motion.div
              key={index}
              className={`bg-${card.color}-100 rounded-xl p-6 shadow-lg 
hover:shadow-2xl hover:scale-105 transform transition`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className={`text-xl font-semibold mb-4 
text-${card.color}-800`}>{card.title}</h3>
              <p className="text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seção adicional com cor suave */}
      <section className="py-20 px-4 bg-indigo-50 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">Por que usar 
nosso portal?</h2>
        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl">
          Nosso portal oferece informações confiáveis e práticas, 
atualizadas e apresentadas de forma clara, para ajudar imigrantes a 
navegar pelas leis e direitos nos EUA com segurança e facilidade.
        </p>
      </section>

      {/* Seção de Chamada final */}
      <section className="py-20 px-4 bg-purple-100 text-gray-900 
text-center">
        <h2 className="text-3xl font-bold mb-6">Comece agora</h2>
        <p className="mb-8 max-w-2xl mx-auto">Explore dicas, artigos e 
e-books para se informar e garantir seus direitos nos EUA.</p>
        <Link href="/articles" className="bg-yellow-400 text-blue-900 
font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-yellow-300 
hover:scale-105 transition transform">
          Ver Dicas
        </Link>
      </section>

      {/* Rodapé com gradiente */}
      <footer className="bg-gradient-to-r from-purple-600 via-indigo-500 
to-blue-400 text-white py-8 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row 
justify-between items-center px-4">
          <p className="mb-4 md:mb-0">&copy; 2025 Portal Imigração USA. 
Todos os direitos reservados.</p>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-yellow-300 
transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500 
transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400 
transition"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-red-600 
transition"><FaYoutube /></a>
            <a href="#" className="hover:text-black transition"><SiTiktok 
/></a>
          </div>
        </div>
      </footer>

    </main>
  )
}

