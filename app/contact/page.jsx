import Link from 'next/link';

export const metadata = {
  title: 'Contato | Portal Imigração USA',
  description: 'Envie sugestões editoriais e comunique correções ao Portal Imigração USA.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold tracking-tight">Portal Imigração <span className="text-blue-700">USA</span></Link>
          <Link href="/" className="text-sm font-semibold text-blue-800 hover:underline">← Voltar ao portal</Link>
        </div>
      </header>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-800">Fale com o portal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">Sua contribuição ajuda a melhorar este conteúdo.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">O Portal Imigração USA é um projeto independente de informação educativa. Você pode enviar sugestões de pauta, apontar um link quebrado ou solicitar a correção de uma informação.</p>
        <div className="mt-9 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold">Como enviar uma sugestão</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-slate-700">
            <li>Abra o formulário de sugestões no GitHub.</li>
            <li>Escolha o tipo de pauta ou correção e descreva o assunto.</li>
            <li>Se possível, inclua o link da fonte oficial que sustenta a sugestão.</li>
          </ol>
          <a className="mt-7 inline-flex rounded-lg bg-blue-800 px-5 py-3 font-semibold text-white hover:bg-blue-900" href="https://github.com/Ilton21/portalimigracaousa/issues/new/choose" target="_blank" rel="noopener noreferrer">Enviar sugestão ou correção ↗</a>
        </div>
        <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm leading-6 text-amber-950">
          <strong>Proteja seus dados:</strong> não envie passaporte, número A, Social Security, recibos de processos, senhas, documentos médicos ou detalhes confidenciais de um caso. Este canal não oferece análise de casos nem aconselhamento jurídico.
        </div>
        <p className="mt-8 text-sm leading-6 text-slate-600">Precisa de orientação jurídica sobre uma situação individual? Consulte a <a className="font-semibold text-blue-800 underline" href="https://www.justice.gov/eoir/find-legal-representation" target="_blank" rel="noopener noreferrer">lista oficial de representação jurídica do Departamento de Justiça</a>.</p>
      </section>
      <footer className="border-t border-slate-200 bg-white px-6 py-6 text-center text-sm text-slate-500">© {new Date().getFullYear()} Portal Imigração USA · Informação educativa independente.</footer>
    </main>
  );
}
