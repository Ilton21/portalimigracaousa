// app/page.tsx - Versão Final com TikTok e animações de entrada

'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const toggleFaq = (index: number) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    { q: 'Como solicitar visto de turismo?', a: 'Você pode consultar guias educativos e sites oficiais do governo.' },
    { q: 'Como aplicar para Green Card?', a: 'Existem várias categorias, consulte nossos cards educativos.' },
    { q: 'Posso obter cidadania diretamente?', a: 'Normalmente é necessário passar por residência permanente e naturalização.' }
  ];

  const testimonials = [
    { name: 'Maria S.', text: 'Os guias educativos foram essenciais para meu planejamento nos EUA.' },
    { name: 'João P.', text: 'Os ebooks me ajudaram a entender melhor os processos de imigração.' }
  ];

  return (
    <main className="min-h-screen bg-gray-100 font-sans">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-6 shadow-lg sticky top-0 z-30">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Portal Imigração USA</h1>
          <div className="space-x-6 font-semibold">
            <a href="#inicio" className="hover:text-yellow-300">Início</a>
            <a href="#sobre" className="hover:text-yellow-300">Sobre</a>
            <a href="#recursos" className="hover:text-yellow-300">Recursos</a>
            <a href="#ebooks" className="hover:text-yellow-300">Ebooks</a>
            <a href="#faq" className="hover:text-yellow-300">FAQ</a>
            <a href="#depoimentos" className="hover:text-yellow-300">Depoimentos</a>
            <a href="#contato" className="hover:text-yellow-300">Contato</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-32 px-4">
        <h2 className="text-5xl font-bold mb-4">Aprenda sobre Imigração nos EUA</h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Conteúdos educativos, guias e ebooks para entender processos de imigração sem assessoria jurídica.
        </p>
        <a href="#ebooks" className="inline-block bg-yellow-400 text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-yellow-500 transition transform hover:scale-105">Ver Ebooks</a>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">Sobre Nós</h3>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">
          Um portal educativo criado para informar sobre imigração nos EUA. Todo o conteúdo é educativo e não constitui assessoria jurídica.
        </p>
      </section>

      {/* CARDS INFORMATIVOS */}
      <section id="recursos" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">Nossos Conteúdos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {['Vistos de Estudo','Green Card','Cidadania'].map((title,i)=>(
            <div key={i} className={`p-8 rounded-xl shadow-lg transition transform hover:scale-105 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} duration-700 bg-${i===0?'yellow':'green'}-200`}>
              <h4 className="text-xl font-bold mb-2 text-blue-900">{title}</h4>
              <p className="text-gray-800">Conteúdo educativo sobre {title} nos EUA.</p>
            </div>
          ))}
        </div>
      </section>

      {/* EBOOKS */}
      <section id="ebooks" className="max-w-6xl mx-auto py-20 px-6">
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">Ebooks Educativos</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {['Guia de Vistos','Green Card Passo a Passo','Naturalização Americana'].map((title,i)=>(
            <div key={i} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 border-l-4 border-${i===0?'yellow':i===1?'green':'pink'}-400` }>
              <h4 className="text-xl font-bold mb-2 text-blue-900">{title}</h4>
              <p className="text-gray-700 mb-4">Resumo educativo do {title}.</p>
              <button className={`bg-${i===0?'yellow':i===1?'green':'pink'}-400 text-gray-900 px-4 py-2 rounded hover:bg-${i===0?'yellow':i===1?'green':'pink'}-500 transition`}>Baixar Ebook</button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-5xl mx-auto py-20 px-6">
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">Perguntas Frequentes</h3>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transition" onClick={() => toggleFaq(index)}>
              <h4 className="text-xl font-bold text-blue-900">{item.q}</h4>
              {faqOpen === index && <p className="text-gray-700 mt-2">{item.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="max-w-6xl mx-auto py-20 px-6 bg-gray-50">
        <h3 className="text-4xl font-bold text-center text-blue-800 mb-12">Depoimentos</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105">
              <p className="text-gray-700 italic">"{t.text}"</p>
              <p className="text-gray-900 font-bold mt-2">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-blue-900 text-white p-10 rounded-xl shadow-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Fale Conosco</h3>
          <p className="text-lg mb-6">Dúvidas ou sugestões? Envie um e-mail e responderemos rapidamente.</p>
          <a href="mailto:contato@portalimigracaousa.com" className="inline-block bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-500 transition">Enviar Mensagem</a>
          {/* Redes Sociais */}
          <div className="flex justify-center space-x-6 mt-6">
            {/* Facebook */}
            <a href="#" className="hover:text-yellow-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8.94 8.5v3.3H7.2v-3.3H6v-2h1.2V5.1c0-.9.5-1.4 
1.3-1.4h1v2H9.6c-.2 0-.5.1-.5.5v1.4h1.6l-.2 2H9.1z"/></svg></a>
            {/* Twitter */}
            <a href="#" className="hover:text-yellow-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M5 15c6 0 9.3-5 9.3-9.3v-.4A6.6 6.6 0 0 0 16 3a6.5 6.5 0 0 
1-1.9.5A3.3 3.3 0 0 0 15.5 2a6.6 6.6 0 0 1-2 .8A3.3 3.3 0 0 0 7.9 5.3a9.3 9.3 0 0 1-6.8-3.5A3.3 3.3 0 0 0 2.3 5a3.3 3.3 0 0 1-1.5-.4v.1a3.3 3.3 0 0 0 2.6 3.2 3.3 3.3 0 0 1-1.5.1 3.3 3.3 0 0 0 3.1 2.3A6.6 6.6 0 0 1 0 13a9.3 9.3 0 0 
0 5 1.5"/></svg></a>
            {/* Instagram */}
            <a href="#" className="hover:text-yellow-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 3a5 5 0 1 0 0 10A5 5 0 0 0 8 3zM8 0a8 8 0 1 1 0 16A8 8 0 
0 1 8 0z"/></svg></a>
            {/* LinkedIn */}
            <a href="#" className="hover:text-yellow-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M1.146 1.146A.5.5 0 0 1 1.5 1h13a.5.5 0 0 1 .354.146.5.5 0 0 
1 .146.354v13a.5.5 0 0 1-.146.354.5.5 0 0 1-.354.146h-13a.5.5 0 0 1-.354-.146.5.5 0 0 1-.146-.354v-13a.5.5 0 0 1 .146-.354zM4.5 6h-2v6h2V6zm-1-3.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm5.5 3.5h-2v6h2V9c0-1.5 2-1.625 2 
0v3h2v-3c0-3-3-2.875-4-1.875z"/></svg></a>
            {/* TikTok */}
            <a href="#" className="hover:text-yellow-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 5.5 4.46 9.96 9.96 
9.96 5.5 0 9.96-4.46 9.96-9.96v-6h-2v6c0 4.38-3.58 7.96-7.96 7.96-4.38 0-7.96-3.58-7.96-7.96s3.58-7.96 7.96-7.96v2z"/></svg></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-6 text-center mt-10">
        © 2025 Portal Imigração USA — Conteúdo educativo, sem assessoria jurídica
      </footer>

    </main>
  );
}

