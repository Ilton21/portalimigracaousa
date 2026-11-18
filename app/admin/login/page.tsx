import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { adminConfigured, authOptions, isAuthorizedAdmin } from '../../../lib/admin-auth';
import AdminSignInButton from '../../../components/AdminSignInButton';

export const metadata: Metadata = { title: 'Acesso administrativo | Portal Imigração USA', robots: { index: false, follow: false } };

export default async function AdminLogin() {
  if (adminConfigured) {
    const session = await getServerSession(authOptions);
    if (isAuthorizedAdmin(session)) redirect('/admin');
  }
  return <main className="admin-login"><section className="admin-login-card">
    <a href="/" className="admin-back">← Voltar ao portal</a>
    <div className="admin-logo">PI<span>.</span></div>
    <span className="section-kicker">ÁREA RESTRITA</span>
    <h1>Painel administrativo</h1>
    <p>O acesso é reservado à administração do Portal Imigração USA. O login usa o GitHub e somente a conta autorizada pode entrar.</p>
    {adminConfigured ? <AdminSignInButton /> : <div className="admin-locked" role="status"><strong>Acesso ainda não ativado.</strong><p>A configuração segura de autenticação precisa ser concluída na Vercel antes de liberar o login. Nenhum dado confidencial deve ser enviado pelo chat ou salvo no GitHub.</p></div>}
    <p className="admin-security-note">Não é necessário criar uma nova senha para este portal.</p>
  </section></main>;
}
