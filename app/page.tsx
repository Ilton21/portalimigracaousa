"use client";
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amber-50 text-gray-800">
      {/* HEADER */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/75 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <img src="/logo.svg" alt="Portal Imigração USA" className="h-12 w-auto" />
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:text-primary transition">Sobre</a>
          <a href="#recursos" className="hover:text-primary transition">Recursos</a>
          <a href="#contato" className="hover:text-primary transition">Contato</a>
        </nav>

        <div className="hidden md:block">
          <a href="#contato" className="inline-block bg-primary text-white px-4 py-2 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105">Entrar</a>
        </div>

        {/* mobile menu button */}
        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-md border border-gray-200 bg-white">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="#334155"/>
              <rect y="6" width="20" height="2" rx="1" fill="#334155"/>
              <rect y="12" width="20" height="2" rx="1" fill="#334155"/>
            </svg>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section
        className="relative flex items-center justify-center text-center px-6 py-28 overflow-hidden"
        style={{ backgroundColor: "transparent" }}
      >
        <img src="/hero.jpg" alt="Hero" className="absolute inset-0 w-full h-full object-cover brightness-90 saturate-95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-amber-50"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary leading-tight mb-4">Acolhimento, orientação e recursos para imigrantes</h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">Informações claras e apoio prático para quem busca uma nova vida nos Estados Unidos — guias, comunidades e atendimento.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#recursos" className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105">Comece Aqui</a>
            <a href="#contato" className="bg-white/90 text-primary px-5 py-3 rounded-full shadow-sm border border-gray-100 hover:translate-y-0.5 transition">Fale Conosco</a>
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE */}
      <section id="sobre" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-primary mb-4 text-center">Sobre o Portal</h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto">O Portal Imigração USA foi criado para oferecer informações confiáveis, orientação e suporte a imigrantes e suas famílias. Nosso objetivo é facilitar o acesso a direitos, serviços e oportunidades, promovendo integração e dignidade.</p>
      </section>

      {/* RECURSOS (CARDS) */}
      <section id="recursos" className="px-6 py-16 bg-primary-light">
        <h3 className="text-3xl font-semibold text-primary mb-10 text-center">Recursos e Apoio</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="rounded-2xl bg-white p-8 text-center shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <svg className="mx-auto mb-4" width="44" height="44" viewBox="0 0 24 24" fill="none"><path d="M12 2 L12 12" stroke="#2563EB" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="17" r="4" stroke="#2563EB" strokeWidth="2" fill="none"/></svg>
            <h4 className="text-xl font-bold text-primary mb-2">Documentação e Vistos</h4>
            <p className="text-gray-600">Guias passo a passo sobre processos migratórios, tipos de visto e documentação necessária.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <svg className="mx-auto mb-4" width="44" height="44" viewBox="0 0 24 24" fill="none"><path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="7" r="4" stroke="#2563EB" strokeWidth="2" fill="none"/></svg>
            <h4 className="text-xl font-bold text-primary mb-2">Comunidades Locais</h4>
            <p className="text-gray-600">Rede de apoio, grupos comunitários e serviços locais próximos a você.</p>
          </div>

          <div className="rounded-2xl bg-white p-8 text-center shadow-md hover:shadow-xl transition-transform hover:-translate-y-1">
            <svg className="mx-auto mb-4" width="44" height="44" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><polyline points="7 10 12 15 17 10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <h4 className="text-xl font-bold text-primary mb-2">Atendimento e Orientação</h4>
            <p className="text-gray-600">Conecte-se com especialistas, voluntários e serviços gratuitos de auxílio.</p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="text-center py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <svg className="w-12 h-12 mx-auto mb-4 text-primary" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0z" stroke="#2563EB" strokeWidth="2"/></svg>
          <h3 className="text-3xl font-semibold text-primary mb-4">Juntos por uma nova vida</h3>
          <p className="text-gray-600 mb-6">Cada jornada é única. Nosso compromisso é oferecer informação, empatia e acolhimento a todos.</p>
          <a href="#contato" className="bg-primary text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105">Fale Conosco</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-gray-100 text-center py-8 mt-12">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Portal Imigração USA — Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

