'use client';
import { useMemo, useState } from 'react';
import { news, officialSources, type Topic } from '../../lib/news';

const topics = ['Todos', 'Vistos', 'Green Card', 'Cidadania', 'Trabalho', 'Direitos', 'Vida nos EUA'] as const;
type Filter = typeof topics[number];

export default function NoticiasPage() {
  const [filter, setFilter] = useState<Filter>('Todos');
  const [query, setQuery] = useState('');
  const normalized = query.trim().toLocaleLowerCase('pt-BR');
  const filteredNews = useMemo(() => news.filter(n => (filter === 'Todos' || n.topic === filter) && [n.title,n.summary,n.source].join(' ').toLocaleLowerCase('pt-BR').includes(normalized)).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)), [filter,normalized]);
  const filteredSources = useMemo(() => officialSources.filter(s => (filter === 'Todos' || s.topic === filter || (filter === 'Cidadania' && s.name === 'USCIS')) && [s.name,s.description].join(' ').toLocaleLowerCase('pt-BR').includes(normalized)), [filter,normalized]);
  const formatDate = (date:string) => new Intl.DateTimeFormat('pt-BR',{timeZone:'UTC',day:'2-digit',month:'long',year:'numeric'}).format(new Date(date+'T12:00:00Z'));

  return <div className="news-page">
    <header className="news-nav"><div className="container news-nav-inner"><a className="news-logo" href="/">PI<span>.</span> <strong>Portal Imigração USA</strong></a><nav aria-label="Navegação da central"><a href="/">Página inicial</a><a href="/#assuntos">Guias</a><a className="news-nav-active" href="/noticias" aria-current="page">Notícias</a></nav></div></header>
    <main>
      <section className="news-hero"><div className="container"><span className="section-kicker">INFORMAÇÃO • FONTES OFICIAIS</span><h1>Central de Notícias <span>& Atualizações</span></h1><p>Acompanhe canais governamentais e encontre publicações selecionadas, em português, com a fonte original identificada.</p><div className="news-hero-points"><span>✓ Fontes identificadas</span><span>✓ Datas de publicação</span><span>✓ Verificação editorial</span></div></div></section>
      <section className="news-main container" aria-label="Explorar notícias e fontes">
        <div className="news-head"><div><span className="section-kicker">EXPLORE AS INFORMAÇÕES</span><h2>O que você precisa acompanhar?</h2><p>Filtre por assunto ou procure palavras-chave. Não exibimos notícias sem uma fonte verificável.</p></div><label className="news-search"><span aria-hidden="true">⌕</span><input aria-label="Pesquisar notícias e fontes" type="search" placeholder="Pesquisar por assunto..." value={query} onChange={e=>setQuery(e.target.value)}/></label></div>
        <div className="news-filters" aria-label="Filtrar por categoria">{topics.map(topic=><button key={topic} type="button" onClick={()=>setFilter(topic)} className={filter===topic?'active':''} aria-pressed={filter===topic}>{topic}</button>)}</div>
        <div className="news-section-title"><div><span className="section-kicker">PUBLICAÇÕES DO PORTAL</span><h2>Notícias verificadas</h2></div><span className="news-count">{filteredNews.length} publicação{filteredNews.length===1?'':'ões'}</span></div>
        {filteredNews.length ? <div className="news-articles">{filteredNews.map(item=><article className="news-article" key={item.slug}><div className="news-article-top"><span className="news-topic">{item.topic}</span><time dateTime={item.publishedAt}>{formatDate(item.publishedAt)}</time></div><h3>{item.title}</h3><p>{item.summary}</p><div className="news-article-footer"><span>Fonte: {item.source} · Conferido em {formatDate(item.reviewedAt)}</span><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Ler publicação original ↗</a></div></article>)}</div> : <div className="news-empty"><div className="news-empty-icon">◈</div><h3>{news.length===0?'Publicações editoriais em preparação':'Nenhuma notícia encontrada'}</h3><p>{news.length===0?'Nossa central está preparada para receber notícias após checagem das fontes. Enquanto isso, consulte diretamente os canais oficiais abaixo.':'Experimente outra categoria ou termo de pesquisa.'}</p></div>}
        <div className="news-section-title" id="canais"><div><span className="section-kicker">CONSULTE DIRETAMENTE</span><h2>Canais oficiais</h2></div><span className="news-count">{filteredSources.length} fonte{filteredSources.length===1?'':'s'}</span></div>
        {filteredSources.length?<div className="news-source-grid">{filteredSources.map(source=><a className="news-source-card" key={source.name} href={source.url} target="_blank" rel="noopener noreferrer"><span className="news-source-mark">{source.icon}</span><div><span className="news-topic">{source.topic}</span><h3>{source.name}</h3><p>{source.description}</p><span className="news-source-link">Visitar fonte oficial ↗</span></div></a>)}</div>:<p className="news-no-results">Nenhuma fonte correspondente. Limpe a pesquisa ou selecione “Todos”.</p>}
        <div className="news-editorial"><div><strong>Compromisso com a informação responsável</strong><p>Os links acima direcionam para órgãos oficiais. O portal não é afiliado ao governo dos EUA. A existência de um link não significa que um anúncio novo foi publicado hoje. Antes de agir, confirme datas, regras e orientações na fonte original.</p></div><a href="/#assuntos">Conheça nossos guias ↗</a></div>
      </section>
    </main>
    <footer className="news-footer"><div className="container"><div><strong>Portal Imigração <span>USA</span></strong><p>Informação educativa, sem aconselhamento jurídico individual.</p></div><a href="/">Voltar ao início ↑</a></div></footer>
  </div>;
}
