import type { Metadata } from 'next';
export const metadata: Metadata = {
 title: 'Central de Notícias e Atualizações | Portal Imigração USA',
 description: 'Acesse fontes oficiais sobre vistos, Green Card, cidadania, trabalho e imigração nos EUA. Notícias com datas e referências verificáveis.',
};
export default function NoticiasLayout({children}:{children:React.ReactNode}){return children;}
