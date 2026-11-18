import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { adminConfigured, authOptions, isAuthorizedAdmin } from '../../lib/admin-auth';
import { news } from '../../lib/news';
import { guides } from '../../lib/guides';
import AdminSignOutButton from '../../components/AdminSignOutButton';

export const metadata: Metadata = { title: 'Painel administrativo | Portal Imigração USA', robots: { index: false, follow: false } };
export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  if (!adminConfigured) redirect('/admin/login');
  const session = await getServerSession(authOptions);
  if (!isAuthorizedAdmin(session)) redirect('/admin/login');

  return <main className="admin-panel">
    <header className="admin-header"><div className="container admin-header-inner"><a href="/" className="admin-wordmark">Portal Imigração <span>USA</span></a><AdminSignOutButton /></div></header>
    <div className="container admin-content">
      <span className="section-kicker">ÁREA ADMINISTRATIVA PRIVADA</span>
      <h1>Visão geral do portal</h1>
      <p>Indicadores atuais e etapas do fluxo editorial. Esta versão é somente leitura: nenhuma publicação pode ser criada ou alterada pelo painel.</p>
      <div className="admin-stats">
        <div><span>Publicações cadastradas</span><strong>{news.length}</strong></div>
        <div><span>Guias educativos</span><strong>{guides.length}</strong></div>
        <div><span>Publicações pendentes</span><strong>—</strong><small>Fila ainda não conectada</small></div>
      </div>
      <section className="admin-section">
        <h2>Notícias cadastradas</h2>
        <div className="admin-news-list">{news.map(item=><div key={item.slug}><div><strong>{item.title}</strong><span>{item.topic} · {item.publishedAt}</span></div><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer">Fonte oficial ↗</a></div>)}</div>
      </section>
      <section className="admin-section admin-notice"><h2>Publicação com revisão</h2><p>O controle editorial segue pelo GitHub e pelas Pull Requests. Cadastro, aprovação, armazenamento e permissões ainda não foram implantados neste painel. Não há botões de edição ou publicação fictícios.</p><a href="https://github.com/Ilton21/portalimigracaousa/issues/new/choose" target="_blank" rel="noopener noreferrer">Registrar sugestão de notícia no GitHub ↗</a></section>
    </div>
  </main>;
}
