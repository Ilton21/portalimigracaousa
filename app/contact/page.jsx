import Link from 'next/link';

export const metadata = {
  title: 'Contato | Portal Imigração USA',
  description: 'Envie sugestões editoriais e comunique correções ao Portal Imigração USA.',
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <header className="contact-header">
        <div className="contact-header-inner">
          <Link href="/" className="contact-brand">Portal Imigração <span>USA</span></Link>
          <Link href="/" className="contact-back">← Voltar ao portal</Link>
        </div>
      </header>
      <section className="contact-content">
        <p className="contact-kicker">FALE COM O PORTAL</p>
        <h1>Sua contribuição ajuda a melhorar este conteúdo.</h1>
        <p className="contact-lead">O Portal Imigração USA é um projeto independente de informação educativa. Você pode enviar sugestões de pauta, apontar um link quebrado ou solicitar a correção de uma informação.</p>
        <div className="contact-card">
          <h2>Como enviar uma sugestão</h2>
          <ol>
            <li>Abra o formulário de sugestões no GitHub.</li>
            <li>Escolha o tipo de pauta ou correção e descreva o assunto.</li>
            <li>Se possível, inclua o link da fonte oficial que sustenta a sugestão.</li>
          </ol>
          <a className="contact-button" href="https://github.com/Ilton21/portalimigracaousa/issues/new/choose" target="_blank" rel="noopener noreferrer">Enviar sugestão ou correção ↗</a>
        </div>
        <div className="contact-warning"><strong>Proteja seus dados:</strong> não envie passaporte, número A, Social Security, recibos de processos, senhas, documentos médicos ou detalhes confidenciais de um caso. Este canal não oferece análise de casos nem aconselhamento jurídico.</div>
        <p className="contact-legal">Precisa de orientação jurídica sobre uma situação individual? Consulte a <a href="https://www.justice.gov/eoir/find-legal-representation" target="_blank" rel="noopener noreferrer">lista oficial de representação jurídica do Departamento de Justiça</a>.</p>
      </section>
      <footer className="contact-footer">© {new Date().getFullYear()} Portal Imigração USA · Informação educativa independente.</footer>
    </main>
  );
}
