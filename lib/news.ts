/**
 * Central de Notícias — conteúdo editorial revisado manualmente.
 * Adicione aqui somente notícias verificadas diretamente na fonte original.
 * Não inclua chamadas automáticas sem checagem editorial.
 * publishedAt = data ORIGINAL da matéria (AAAA-MM-DD); reviewedAt = última conferência (AAAA-MM-DD).
 * URL deve apontar diretamente para a publicação que sustenta o título e o resumo.
 */
export type Topic = 'Vistos' | 'Green Card' | 'Cidadania' | 'Trabalho' | 'Direitos' | 'Vida nos EUA';
export type NewsItem = {
  slug: string;
  title: string;
  summary: string;
  topic: Topic;
  publishedAt: string;
  reviewedAt: string;
  source: string;
  sourceUrl: string;
};

/** Resumos editoriais baseados nos comunicados originais, conferidos em 18/11/2026. */
export const news: NewsItem[] = [
  {"slug":"revisao-redes-sociais-vistos-outubro-2026","title":"Departamento de Estado amplia verificação de presença online em categorias de visto","summary":"Comunicado de 18 de setembro informa que, a partir de 1º de outubro de 2026, a análise de presença online foi ampliada para solicitantes de vistos I, TN e TD. O órgão orienta esses candidatos a manter perfis de redes sociais públicos durante a avaliação.","topic":"Vistos","publishedAt":"2026-09-18","reviewedAt":"2026-11-18","source":"Departamento de Estado dos EUA","sourceUrl":"https://travel.state.gov/en/newsroom/visas/2026/announcement-of-expanded-screening-and-vetting-for-visa-applicants.html"},
  {"slug":"orientacao-entrevistas-visto-residencia-2026","title":"Entrevistas para vistos de não imigrante: orientação sobre país de residência ou nacionalidade","summary":"Em comunicado de 15 de julho, o Departamento de Estado orientou solicitantes a agendar entrevistas em embaixadas ou consulados no país de nacionalidade ou residência, com exceções previstas. Pedidos fora desses locais podem enfrentar maior espera e taxas não transferíveis.","topic":"Vistos","publishedAt":"2026-07-15","reviewedAt":"2026-11-18","source":"Departamento de Estado dos EUA","sourceUrl":"https://travel.state.gov/en/newsroom/visas/2026/adjudicating-nonimmigrant-visa--niv--applicants-in-their-country.html"},
  {"slug":"piloto-agendamento-acelerado-vistos-b-2026","title":"Programa-piloto oferece opção paga de entrevista antecipada para determinados vistos B","summary":"O Departamento de Estado anunciou em agosto um projeto-piloto voluntário em postos consulares selecionados, previsto até 31 de dezembro de 2026. Candidatos elegíveis podem pagar taxa adicional de US$ 750 por agendamento, sujeito à disponibilidade. A medida não garante aprovação do visto.","topic":"Vistos","publishedAt":"2026-08-18","reviewedAt":"2026-11-18","source":"Departamento de Estado dos EUA","sourceUrl":"https://travel.state.gov/en/newsroom/visas/2026/nonimmigrant-visa-expedited-appointment-pilot-program.html"},
  {"slug":"orientacao-emissao-vistos-diversidade-agosto-2026","title":"Departamento de Estado publica orientação sobre pausa na emissão de vistos de diversidade","summary":"Nota de 31 de agosto informa que, apesar da suspensão anterior ter deixado de vigorar por decisão judicial, o Departamento de Estado determinou uma nova pausa na emissão de vistos do programa Diversity Visa. O comunicado informa que entrevistas podem continuar, mas sem emissão de vistos durante a pausa. Consulte a fonte para verificar alterações posteriores.","topic":"Green Card","publishedAt":"2026-08-31","reviewedAt":"2026-11-18","source":"Departamento de Estado dos EUA","sourceUrl":"https://travel.state.gov/en/newsroom/visas/2025/diversity-visa-issuance-updated-guidance.html"},
  {"slug":"proposta-salarios-h1b-perm-marco-2026","title":"Departamento do Trabalho apresentou proposta de revisão dos salários de referência para H-1B e PERM","summary":"Comunicado de 26 de março descreve uma proposta de alteração na metodologia de cálculo dos salários prevalecentes em determinados programas de trabalho e certificação laboral. Trata-se de proposta, não de confirmação de regra definitiva; consulte o andamento regulatório oficial.","topic":"Trabalho","publishedAt":"2026-03-26","reviewedAt":"2026-11-18","source":"Departamento do Trabalho dos EUA","sourceUrl":"https://www.dol.gov/index.php/newsroom/releases/eta/eta20260326-0"}
];

export const officialSources = [
  { name: 'USCIS', description: 'Comunicados e informações sobre imigração, residência e naturalização.', url: 'https://www.uscis.gov/newsroom', topic: 'Green Card' as Topic, icon: 'US' },
  { name: 'Departamento de Estado', description: 'Notícias e avisos sobre vistos, viagens e serviços consulares.', url: 'https://travel.state.gov/content/travel/en/News.html', topic: 'Vistos' as Topic, icon: 'DS' },
  { name: 'Departamento de Justiça — EOIR', description: 'Informações sobre procedimentos e recursos dos tribunais de imigração.', url: 'https://www.justice.gov/eoir', topic: 'Direitos' as Topic, icon: 'DJ' },
  { name: 'Departamento do Trabalho', description: 'Comunicados e orientações sobre direitos trabalhistas.', url: 'https://www.dol.gov/newsroom', topic: 'Trabalho' as Topic, icon: 'DT' },
  { name: 'USA.gov', description: 'Acesso a informações e serviços oficiais do governo americano.', url: 'https://www.usa.gov/immigration-and-citizenship', topic: 'Vida nos EUA' as Topic, icon: 'GV' }
];
