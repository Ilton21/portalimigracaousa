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

/** Iniciamos sem manchetes fictícias. Publicações serão adicionadas após verificação. */
export const news: NewsItem[] = [];

export const officialSources = [
  { name: 'USCIS', description: 'Comunicados e informações sobre imigração, residência e naturalização.', url: 'https://www.uscis.gov/newsroom', topic: 'Green Card' as Topic, icon: 'US' },
  { name: 'Departamento de Estado', description: 'Notícias e avisos sobre vistos, viagens e serviços consulares.', url: 'https://travel.state.gov/content/travel/en/News.html', topic: 'Vistos' as Topic, icon: 'DS' },
  { name: 'Departamento de Justiça — EOIR', description: 'Informações sobre procedimentos e recursos dos tribunais de imigração.', url: 'https://www.justice.gov/eoir', topic: 'Direitos' as Topic, icon: 'DJ' },
  { name: 'Departamento do Trabalho', description: 'Comunicados e orientações sobre direitos trabalhistas.', url: 'https://www.dol.gov/newsroom', topic: 'Trabalho' as Topic, icon: 'DT' },
  { name: 'USA.gov', description: 'Acesso a informações e serviços oficiais do governo americano.', url: 'https://www.usa.gov/immigration-and-citizenship', topic: 'Vida nos EUA' as Topic, icon: 'GV' }
];
