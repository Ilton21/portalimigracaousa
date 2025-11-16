// app/page.tsx - PREVIEW 2 (Design moderno, cards, layout mais 
profissional)

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans">

      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-20">
        <nav className="max-w-6xl mx-auto flex justify-between 
items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-blue-900">Portal 
Imigração USA</h1>

          <div className="space-x-6 font-medium">
            <a href="#inicio" className="hover:text-blue-600">Início</a>
            <a href="#sobre" className="hover:text-blue-600">Sobre</a>
            <a href="#servicos" 
className="hover:text-blue-600">Serviços</a>
            <a href="#contato" className="hover:text-blue-600">Contato</a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="inicio" className="bg-blue-900 text-white text-center 
py-28 px-4">
        <h2 className="text-5xl font-bold mb-4">Viva o Sonho 
Americano</h2>
        <p className="text-xl max-w-2xl mx-auto">
          Informações confiáveis e organizadas para quem deseja morar, 
trabalhar ou regularizar sua situação nos EUA.
        </p>
        <a href="#contato" className="inline-block bg-orange-500 mt-8 
px-10 py-3 text-lg rounded-lg font-semibold hover:bg-orange-600">
          Começar Agora
        </a>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-5xl mx-auto py-20 px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-blue-900">Quem Somos</h3>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Um portal criado para orientar imigrantes com conteúdo 
atualizado, objetivo e confiável.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg 
transition">
            <h4 className="text-xl font-semibold text-blue-900 mb-3">Guias 
Completos</h4>
            <p className="text-gray-600">Artigos, explicações e instruções 
para cada etapa do processo de imigração.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg 
transition">
            <h4 className="text-xl font-semibold text-blue-900 
mb-3">Informações Oficiais</h4>
            <p className="text-gray-600">Tudo baseado em fontes 
governamentais como USCIS, DHS e Consulados.</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow hover:shadow-lg 
transition">
            <h4 className="text-xl font-semibold text-blue-900 
mb-3">Atualizações Constantes</h4>
            <p className="text-gray-600">Mudanças em leis, novas regras e 
comunicados oficiais em tempo real.</p>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-blue-900 
mb-12">Serviços e Conteúdos</h3>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="border-l-4 border-blue-600 bg-gray-100 p-8 
rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-900 
mb-2">Vistos</h4>
              <p className="text-gray-600">Explicações completas sobre 
vistos de turismo, trabalho, estudos, investimento e imigração.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gray-100 p-8 
rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-900 mb-2">Green 
Card</h4>
              <p className="text-gray-600">Etapas, categorias, prazos, 
formulários e caminhos possíveis para a residência permanente.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gray-100 p-8 
rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-900 
mb-2">Cidadania Americana</h4>
              <p className="text-gray-600">Requisitos, testes, formulários 
e checklist completo do processo.</p>
            </div>

            <div className="border-l-4 border-blue-600 bg-gray-100 p-8 
rounded-lg shadow">
              <h4 className="text-xl font-bold text-blue-900 
mb-2">Regularização</h4>
              <p className="text-gray-600">Dicas para ajustes de status, 
permissões de trabalho e recursos oficiais.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-4xl mx-auto py-20 px-6">
        <div className="bg-blue-900 text-white p-10 rounded-xl shadow-lg 
text-center">
          <h3 className="text-3xl font-bold mb-4">Fale Conosco</h3>
          <p className="text-lg mb-6">Tem dúvidas? Precisa de orientação? 
Envie um e-mail e responderemos rapidamente.</p>

          <a
            href="mailto:contato@portalimigracaousa.com"
            className="inline-block bg-orange-500 px-8 py-3 rounded-lg 
text-lg font-semibold hover:bg-orange-600"
          >
            Enviar Mensagem
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-950 text-white py-6 text-center mt-10">
        © 2025 Portal Imigração USA — Todos os direitos reservados
      </footer>

    </main>
  );
}

