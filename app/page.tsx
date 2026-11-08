'use client';

import { useState } from 'react';

const categories = [
  { icon: '✈', title: 'Vistos e entrada', desc: 'Conheça categorias de visto e os caminhos para estudar, visitar ou trabalhar.', href: '/guias/vistos', label: 'Departamento de Estado' },
  { icon: '▣', title: 'Green Card', desc: 'Entenda as principais categorias de residência permanente.', href: '/guias/green-card', label: 'USCIS' },
  { icon: '★', title: 'Cidadania', desc: 'Informações oficiais sobre naturalização e elegibilidade.', href: '/guias/cidadania', label: 'USCIS' },
  { icon: '✓', title: 'Trabalho e EAD', desc: 'Saiba onde consultar autorização de emprego e documentação.', href: '/guias/trabalho', label: 'USCIS' },
  { icon: '⌂', title: 'Vida nos EUA', desc: 'Serviços públicos, adaptação e recursos para o dia a dia.', href: '/guias/vida-nos-eua', label: 'USA.gov' },
  { icon: '◎', title: 'Direitos e apoio', desc: 'Encontre informações e organizações de assistência jurídica.', href: '/guias/direitos', label: 'Departamento de Justiça' }
];

const faqs = [
  { q: 'Onde posso consultar informações sobre vistos?', a: 'No site oficial do Departamento de Estado dos EUA, que apresenta as categorias e instruções pertinentes a cada caso.', href: 'https://travel.state.gov/content/travel/en/us-visas.html' },
  { q: 'Como verificar informações sobre Green Card?', a: 'O USCIS publica as categorias de elegibilidade, formulários e instruções oficiais.', href: 'https://www.uscis.gov/green-card' },
  { q: 'O portal oferece consultoria jurídica?', a: 'Não. Compartilhamos informações educativas e links oficiais. Para aconselhamento sobre seu caso, procure um advogado licenciado ou representante credenciado.', href: 'https://www.justice.gov/eoir/recognition-accreditation-program' }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');
  const filtered = categories.filter(c => (c.title + ' ' + c.desc).toLocaleLowerCase('pt-BR').includes(search.toLocaleLowerCase('pt-BR').trim()));

  return (
    <div className="portal">
      <div className="topline"><div className="container topline-inner"><span>Informação educativa para brasileiros nos Estados Unidos</span><a href="#fontes">Fontes oficiais ↗</a></div></div>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="Portal Imigração USA — Início"><span className="brand-symbol">PI<span>.</span></span><span className="brand-copy"><strong>Portal Imigração <em>USA</em></strong><small>INFORMAÇÃO • ORIENTAÇÃO • CONFIANÇA</small></span></a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
          <nav className={menuOpen ? 'main-nav open' : 'main-nav'} aria-label="Menu principal">
            {[['Início','#inicio'],['Assuntos','#assuntos'],['Como funciona','#sobre'],['Dúvidas','#duvidas'],['Fontes','#fontes']].map(([name,href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}
            <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}>Contato <span>↗</span></a>
          </nav>
        </div>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-visual" role="img" aria-label="Estátua da Liberdade, símbolo de Nova York" />
          <div className="hero-overlay" />
          <div className="container hero-inner">
            <div className="hero-content">
              <div className="eyebrow"><span className="eyebrow-dot" /> SEU PORTAL DE INFORMAÇÃO NOS EUA</div>
              <h1>Sua jornada nos Estados Unidos começa com <span>informação confiável.</span></h1>
              <p>Explore orientações educativas sobre vistos, documentos, trabalho, residência e vida nos EUA. Tudo em português, com acesso a fontes oficiais.</p>
              <div className="hero-actions"><a href="#assuntos" className="btn btn-gold">Explorar assuntos <span>↗</span></a><a href="#sobre" className="btn btn-outline">Conheça o portal</a></div>
              <p className="hero-note">Conteúdo educativo • Sem aconselhamento jurídico individual</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Compromissos do portal"><div className="container trust-grid">
          <div><span className="trust-icon">✓</span><span><strong>Fontes governamentais</strong><small>Links diretos para órgãos oficiais</small></span></div>
          <div><span className="trust-icon">◈</span><span><strong>Conteúdo em português</strong><small>Informação clara e acessível</small></span></div>
          <div><span className="trust-icon">↗</span><span><strong>Orientação responsável</strong><small>Sem promessas ou garantias</small></span></div>
        </div></section>

        <section className="section categories-section" id="assuntos"><div className="container">
          <div className="section-head"><div><span className="section-kicker">EXPLORE POR ASSUNTO</span><h2>Encontre o que você <span>precisa saber.</span></h2><p>Um ponto de partida para explorar temas importantes da sua jornada.</p></div><label className="search-box"><span aria-hidden="true">⌕</span><input type="search" placeholder="Buscar assunto..." value={search} onChange={e => setSearch(e.target.value)} aria-label="Buscar assuntos" /></label></div>
          <div className="category-grid">{filtered.map((item,index) => <a key={item.title} className="category-card" href={item.href}><span className={'category-icon tone-' + index % 3}>{item.icon}</span><h3>{item.title}</h3><p>{item.desc}</p><span className="category-footer">Ler guia em português <span>↗</span></span></a>)}</div>
          {filtered.length === 0 && <p className="empty-state">Nenhum assunto encontrado. Experimente outra palavra.</p>}
        </div></section>

        <section className="section guidance-section" id="sobre"><div className="container guidance-grid">
          <div className="guidance-art"><div className="guidance-art-overlay"><span className="art-kicker">SEU PRÓXIMO PASSO</span><strong>Informação é o começo de toda boa decisão.</strong></div></div>
          <div className="guidance-content"><span className="section-kicker">COMO USAR O PORTAL</span><h2>Informação clara. <span>Decisões mais conscientes.</span></h2><p>O Portal Imigração USA reúne caminhos confiáveis para ajudar você a encontrar informações diretamente nas fontes responsáveis.</p><ol className="steps"><li><span>01</span><div><strong>Escolha seu assunto</strong><p>Selecione a categoria que corresponde à sua dúvida.</p></div></li><li><span>02</span><div><strong>Consulte as fontes oficiais</strong><p>Acesse orientações publicadas pelos órgãos americanos.</p></div></li><li><span>03</span><div><strong>Busque ajuda profissional quando necessário</strong><p>Situações individuais podem exigir orientação jurídica qualificada.</p></div></li></ol><a className="text-link" href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">Visitar o USCIS <span>↗</span></a></div>
        </div></section>

        <section className="section faq-section" id="duvidas"><div className="container faq-grid"><div><span className="section-kicker">PERGUNTAS FREQUENTES</span><h2>Respostas para começar <span>com segurança.</span></h2><p>Informações gerais para orientar sua pesquisa, sempre acompanhadas de links para consulta.</p></div><div className="faq-items">{faqs.map((item,index) => <details key={item.q} open={index === 0}><summary>{item.q}<span>+</span></summary><p>{item.a}</p><a href={item.href} target="_blank" rel="noopener noreferrer">Consultar fonte oficial ↗</a></details>)}</div></div></section>

        <section className="section sources-section" id="fontes"><div className="container"><div className="section-head"><div><span className="section-kicker">REFERÊNCIAS OFICIAIS</span><h2>Direto da <span>fonte.</span></h2><p>Acesse os canais dos órgãos responsáveis por informações imigratórias.</p></div></div><div className="source-grid"><a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer"><strong>USCIS</strong><span>Imigração e cidadania ↗</span></a><a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer"><strong>U.S. Department of State</strong><span>Vistos e serviços consulares ↗</span></a><a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer"><strong>USA.gov</strong><span>Serviços e informações públicas ↗</span></a></div><p className="source-note">Links para sites oficiais. O Portal Imigração USA não é afiliado ao governo americano.</p></div></section>

        <section className="contact-section" id="contato"><div className="container contact-inner"><div><span className="section-kicker">FALE COM O PORTAL</span><h2>Alguma sugestão ou dúvida sobre o conteúdo?</h2><p>Entre em contato para compartilhar comentários e sugestões editoriais. Não envie documentos pessoais ou dados sensíveis.</p></div><a href="mailto:contato@portalimigracaousa.com?subject=Contato%20Portal%20Imigra%C3%A7%C3%A3o%20USA" className="btn btn-gold">Enviar e-mail ↗</a></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><div><div className="footer-brand">Portal Imigração <span>USA</span></div><p>Informação educativa para sua jornada nos Estados Unidos.</p></div><div><strong>Navegação</strong><a href="#assuntos">Assuntos</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a></div><div><strong>Fontes oficiais</strong><a href="https://www.uscis.gov/" target="_blank" rel="noopener noreferrer">USCIS ↗</a><a href="https://travel.state.gov/" target="_blank" rel="noopener noreferrer">Departamento de Estado ↗</a><a href="https://www.usa.gov/" target="_blank" rel="noopener noreferrer">USA.gov ↗</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Portal Imigração USA. Todos os direitos reservados.</span><span>Este site é informativo e não presta aconselhamento jurídico.</span></div></footer>
    </div>
  );
}
