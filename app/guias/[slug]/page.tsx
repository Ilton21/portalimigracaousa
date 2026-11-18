import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { guides, getGuide } from '../../../lib/guides';

export function generateStaticParams(){return guides.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{
 const {slug}=await params; const guide=getGuide(slug);
 return {title:guide?guide.title+' | Portal Imigração USA':'Guia não encontrado',description:guide?.summary};
}
export default async function GuidePage({params}:{params:Promise<{slug:string}>}){
 const {slug}=await params; const guide=getGuide(slug); if(!guide)notFound();
 return <div className="guide-page">
  <div className="guide-top"><div className="container"><a href="/" className="guide-back">← Voltar ao portal</a><div className="guide-brand">Portal Imigração <span>USA</span></div></div></div>
  <main><section className="guide-hero"><div className="container"><span className="section-kicker">{guide.eyebrow}</span><h1>{guide.title}</h1><p>{guide.summary}</p><a href="/#assuntos" className="guide-crumb">Início / Assuntos / {guide.title}</a></div></section>
  <section className="guide-main container"><article className="guide-article"><div className="guide-intro">{guide.intro}</div>{guide.sections.map((section,i)=><section key={section.heading} className="guide-section"><span className="guide-number">0{i+1}</span><div><h2>{section.heading}</h2><p>{section.body}</p></div></section>)}</article>
  <aside className="guide-aside"><h2>Fontes oficiais</h2><p>Confira os requisitos e procedimentos mais recentes nas páginas do governo.</p>{guide.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>)}<div className="guide-disclaimer"><strong>Informação educativa</strong><p>Este portal não é afiliado ao governo americano e não oferece aconselhamento jurídico. Regras podem mudar. Para situações individuais, procure um profissional autorizado.</p></div></aside></section></main>
  <footer className="guide-footer"><div className="container"><span>© {new Date().getFullYear()} Portal Imigração USA</span><a href="/">Voltar à página inicial ↑</a></div></footer>
 </div>
}
