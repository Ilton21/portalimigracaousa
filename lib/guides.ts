export type Guide = {
 slug:string; eyebrow:string; title:string; summary:string; reviewedAt:string;
 intro:string; sections:{heading:string; body:string}[];
 links:{label:string;url:string}[];
};

export const guides:Guide[]=[
{
 slug:'vistos',eyebrow:'VISTOS E ENTRADA',title:'Vistos para os Estados Unidos',
 summary:'Entenda as principais categorias de visto, as etapas gerais de solicitação e onde confirmar as regras oficiais.',
 reviewedAt:'19 de novembro de 2026',
 intro:'O visto adequado depende do objetivo da viagem e das circunstâncias de cada solicitante. As regras, documentos e procedimentos podem mudar. Use este guia como ponto de partida e confirme sempre os detalhes na embaixada, no consulado ou no órgão federal responsável.',
 sections:[
  {heading:'1. Identifique o objetivo da viagem',body:'Vistos de não imigrante são destinados a estadias temporárias, como turismo ou negócios (B-1/B-2), estudos (F ou M) e determinadas atividades profissionais. Vistos de imigrante atendem a caminhos de residência permanente, como certas categorias familiares e de emprego. A lista oficial explica as finalidades e categorias; não escolha uma categoria apenas pelo nome.'},
  {heading:'2. Consulte os critérios da categoria',body:'Leia a página oficial da categoria e confirme quem pode solicitar, quais documentos são exigidos e se há etapas anteriores, como aprovação de uma petição, registro SEVIS ou certificação trabalhista. A elegibilidade é avaliada pelas autoridades competentes e não pode ser garantida por intermediários.'},
  {heading:'3. Confira formulários, taxas e entrevista',body:'Para muitos vistos temporários, o processo inclui o formulário DS-160, pagamento da taxa aplicável e agendamento conforme as instruções do posto consular. Outras categorias utilizam formulários e etapas diferentes. Use apenas os portais oficiais e siga as instruções da embaixada ou consulado onde fará o pedido.'},
  {heading:'4. Acompanhe disponibilidade e regras especiais',body:'Algumas categorias de imigração sujeitas a limites numéricos dependem de datas de prioridade e do Visa Bulletin. Regras de entrevista, local de solicitação e disponibilidade de horários também podem variar. Verifique a informação novamente antes de pagar taxas ou viajar.'},
  {heading:'5. Entenda o limite do visto',body:'A emissão de um visto não garante a entrada nos Estados Unidos. A decisão de admissão e o período autorizado de permanência são tratados pelas autoridades de fronteira no momento da chegada. Respeite a finalidade e as condições da categoria concedida.'}
 ],
 links:[
  {label:'Diretório oficial de categorias de visto',url:'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/all-visa-categories.html'},
  {label:'Vistos dos EUA e Visa Wizard',url:'https://travel.state.gov/content/travel/en/us-visas.html'},
  {label:'Formulário DS-160 e instruções',url:'https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/forms/ds-160-online-nonimmigrant-visa-application.html'},
  {label:'Visa Bulletin',url:'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html'}
 ]
},
{
 slug:'green-card',eyebrow:'RESIDÊNCIA PERMANENTE',title:'Green Card e residência permanente',
 summary:'Conheça os caminhos gerais para residência permanente e as diferenças entre ajuste de status e processamento consular.',
 reviewedAt:'19 de novembro de 2026',
 intro:'O Green Card comprova a condição de residente permanente legal. Há diferentes categorias de elegibilidade e cada uma possui requisitos próprios. A existência de uma petição ou de um vínculo familiar ou profissional não significa, por si só, que a residência será concedida.',
 sections:[
  {heading:'1. Conheça as categorias de elegibilidade',body:'Os caminhos podem envolver familiares, emprego, investimento, proteção humanitária ou outras bases previstas em lei. Comece pela lista oficial do USCIS e leia os requisitos específicos da categoria. Nem todas as categorias estão disponíveis para todas as pessoas.'},
  {heading:'2. Entenda onde o processo acontece',body:'Algumas pessoas elegíveis e presentes nos Estados Unidos podem solicitar ajuste de status usando o Form I-485. Em outros casos, o processo ocorre por meio de processamento consular fora do país. A possibilidade de usar um caminho ou outro depende da categoria e de requisitos legais, incluindo possíveis impedimentos.'},
  {heading:'3. Verifique datas de prioridade',body:'Categorias sujeitas a limites anuais podem depender da data de prioridade e da disponibilidade de visto. O Visa Bulletin do Departamento de Estado é atualizado periodicamente. Uma petição aprovada não significa necessariamente que já exista um número de visto disponível.'},
  {heading:'4. Use formulários e instruções atuais',body:'Confira a edição vigente dos formulários, endereços de envio, taxas, documentos de apoio e eventuais exigências de exame médico ou biometria. Não envie documentos originais, pagamentos ou dados pessoais por links recebidos de desconhecidos.'},
  {heading:'5. Conheça as responsabilidades do residente',body:'A residência permanente traz direitos e deveres. Viagens longas, mudanças de endereço, certas condenações e outras circunstâncias podem afetar a situação migratória. Antes de viajar por períodos prolongados ou tomar decisões que possam afetar seu status, procure orientação jurídica individual.'}
 ],
 links:[
  {label:'Categorias de Green Card — USCIS',url:'https://www.uscis.gov/green-card/green-card-eligibility-categories'},
  {label:'Ajuste de status — USCIS',url:'https://www.uscis.gov/green-card/green-card-processes-and-procedures/adjustment-of-status'},
  {label:'Instruções do Form I-485',url:'https://www.uscis.gov/i-485'},
  {label:'Visa Bulletin — Departamento de Estado',url:'https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html'}
 ]
},
{
 slug:'cidadania',eyebrow:'NATURALIZAÇÃO',title:'Cidadania americana',
 summary:'Saiba como funciona a naturalização e quais requisitos gerais devem ser conferidos antes de solicitar.',
 reviewedAt:'19 de novembro de 2026',
 intro:'A naturalização é uma das formas de adquirir cidadania americana. A elegibilidade depende de vários requisitos legais e da história individual do solicitante. Este resumo não substitui a leitura das instruções oficiais nem a avaliação de um profissional autorizado.',
 sections:[
  {heading:'1. Verifique a base de elegibilidade',body:'A via mais comum exige que a pessoa seja residente permanente por um período determinado — geralmente cinco anos. Há uma regra de três anos para alguns residentes permanentes casados com cidadãos americanos, desde que todos os requisitos específicos sejam cumpridos. Existem outras exceções previstas em lei.'},
  {heading:'2. Analise residência e presença física',body:'O USCIS avalia residência contínua, presença física, tempo de residência no estado ou distrito e outros critérios. Viagens ao exterior podem afetar a análise, especialmente quando são longas ou frequentes. Guarde registros de viagens e consulte as instruções oficiais antes de apresentar o pedido.'},
  {heading:'3. Prepare-se para os requisitos e testes',body:'Em regra, o processo inclui avaliação de bom caráter moral, conhecimento de inglês e civismo, com exceções ou acomodações limitadas em determinadas situações. O USCIS disponibiliza materiais gratuitos de estudo e explica quais documentos levar à entrevista.'},
  {heading:'4. Entenda o Form N-400 e as etapas',body:'O pedido de naturalização é feito pelo Form N-400. Depois do protocolo, o processo pode incluir biometria, entrevista, testes e uma decisão. As instruções atuais do formulário explicam taxas, documentos e regras de apresentação; não use cópias antigas encontradas em sites de terceiros.'},
  {heading:'5. A cidadania só se conclui com o juramento',body:'Quando o pedido é aprovado, o candidato normalmente precisa participar da cerimônia e prestar o Oath of Allegiance. A pessoa não se torna cidadã apenas porque enviou o N-400 ou recebeu uma aprovação preliminar.'}
 ],
 links:[
  {label:'Cidadania e naturalização — USCIS',url:'https://www.uscis.gov/citizenship'},
  {label:'Elegibilidade para naturalização',url:'https://www.uscis.gov/citizenship/learn-about-citizenship/naturalization-eligibility'},
  {label:'Form N-400 e instruções',url:'https://www.uscis.gov/n-400'},
  {label:'Materiais gratuitos de estudo',url:'https://www.uscis.gov/citizenship/find-study-materials-and-resources'}
 ]
},
{
 slug:'trabalho',eyebrow:'TRABALHO E DOCUMENTOS',title:'Trabalho e autorização de emprego',
 summary:'Entenda a diferença entre autorização de trabalho, documento EAD e verificação de elegibilidade pelo empregador.',
 reviewedAt:'19 de novembro de 2026',
 intro:'O direito de trabalhar nos Estados Unidos depende da categoria ou condição migratória. Algumas pessoas têm autorização de emprego vinculada ao próprio status; outras precisam obter uma autorização específica antes de começar a trabalhar.',
 sections:[
  {heading:'1. Confirme se sua categoria permite trabalhar',body:'Não presuma que um visto, protocolo, pedido pendente ou número de Social Security autoriza automaticamente o emprego. As regras variam conforme a categoria e a situação do processo. Verifique a orientação oficial aplicável ao seu caso antes de aceitar trabalho.'},
  {heading:'2. Entenda o EAD e o Form I-765',body:'O Employment Authorization Document (EAD) é a prova documental de autorização de emprego para determinadas categorias. Pessoas elegíveis podem solicitar, renovar ou substituir o documento pelo Form I-765. A categoria de elegibilidade, os documentos e as taxas precisam ser conferidos nas instruções vigentes.'},
  {heading:'3. Não presuma que toda renovação tem a mesma extensão',body:'As regras de extensão automática, prazos e categorias elegíveis podem mudar e não se aplicam de forma igual a todos. Consulte o aviso oficial mais recente do USCIS e a validade indicada nos documentos antes de concluir que uma autorização continua válida.'},
  {heading:'4. Saiba o que o empregador verifica',body:'Empregadores geralmente precisam cumprir o processo federal de verificação de autorização de emprego, incluindo o Form I-9. A verificação deve seguir as regras oficiais e não autoriza discriminação por nacionalidade ou origem. O trabalhador pode consultar seus direitos nos canais do Departamento do Trabalho e do DOJ.'},
  {heading:'5. Consulte direitos e proteção no trabalho',body:'O Departamento do Trabalho oferece informações sobre salário mínimo federal, horas extras e outras normas trabalhistas. A aplicação de regras pode depender do tipo de emprego, da lei estadual e de exceções. Para reclamações ou dúvidas individuais, use os canais oficiais.'}
 ],
 links:[
  {label:'Trabalhar nos Estados Unidos — USCIS',url:'https://www.uscis.gov/working-in-the-united-states'},
  {label:'Form I-765 — autorização de emprego',url:'https://www.uscis.gov/i-765'},
  {label:'Tempos de processamento do Form I-765',url:'https://egov.uscis.gov/processing-times/'},
  {label:'Direitos trabalhistas — Departamento do Trabalho',url:'https://www.dol.gov/agencies/whd/workers'},
  {label:'Direitos de trabalhadores imigrantes — DOJ',url:'https://www.justice.gov/crt/immigrant-and-employee-rights-section'}
 ]
},
{
 slug:'vida-nos-eua',eyebrow:'ADAPTAÇÃO E SERVIÇOS',title:'Vida nos Estados Unidos',
 summary:'Encontre fontes públicas para documentação, benefícios, saúde, educação e serviços do dia a dia.',
 reviewedAt:'19 de novembro de 2026',
 intro:'A vida nos Estados Unidos envolve serviços federais, estaduais e locais. Regras e critérios de elegibilidade podem variar conforme o estado, o município, a idade, a renda e a situação migratória. Consulte sempre o órgão responsável antes de enviar documentos ou tomar decisões.',
 sections:[
  {heading:'1. Organize seus documentos',body:'Mantenha passaporte, documentos migratórios, correspondências oficiais, comprovantes de endereço e registros importantes em local seguro. Faça cópias digitais protegidas. Não envie números de identificação, documentos completos ou senhas a pessoas que prometem acelerar processos.'},
  {heading:'2. Social Security e identificação',body:'O Social Security Administration explica quem pode obter um número e como solicitar ou substituir um cartão. Um número de Social Security, por si só, não concede status migratório nem autorização de emprego. Confira os requisitos diretamente com a SSA.'},
  {heading:'3. Saúde, benefícios e assistência',body:'O USA.gov reúne informações sobre seguro de saúde, programas de alimentação, moradia, serviços públicos e benefícios. A elegibilidade pode depender de regras federais e estaduais e de circunstâncias pessoais. Não conclua que um benefício está disponível sem verificar as regras oficiais.'},
  {heading:'4. Educação, trabalho e serviços locais',body:'Escolas, licenças profissionais, carteira de motorista, transporte e outros serviços são frequentemente administrados por estados e municípios. Procure o site oficial do estado ou condado onde você mora e confirme documentos, custos e prazos.'},
  {heading:'5. Endereço, impostos e emergências',body:'Mantenha seus endereços atualizados junto aos órgãos com os quais tenha processos ou benefícios. As obrigações fiscais podem existir mesmo quando a situação migratória é complexa; use fontes oficiais ou um profissional tributário qualificado. Em uma emergência que exija polícia, bombeiros ou atendimento médico imediato, ligue 911.'}
 ],
 links:[
  {label:'Serviços e informações públicas — USA.gov',url:'https://www.usa.gov/'},
  {label:'Benefícios e assistência — USA.gov',url:'https://www.usa.gov/benefits'},
  {label:'Social Security: números e cartões',url:'https://www.ssa.gov/number-card'},
  {label:'Imigração e cidadania — USA.gov',url:'https://www.usa.gov/immigration-and-citizenship'}
 ]
},
{
 slug:'direitos',eyebrow:'DIREITOS E APOIO',title:'Direitos e assistência jurídica',
 summary:'Saiba quem pode prestar orientação jurídica em imigração, como encontrar assistência e reconhecer sinais de fraude.',
 reviewedAt:'19 de novembro de 2026',
 intro:'Questões de imigração podem ter consequências importantes. É essencial distinguir informação geral, preparação de documentos e aconselhamento jurídico individual. Este portal não analisa casos, não representa pessoas e não substitui um advogado ou representante credenciado.',
 sections:[
  {heading:'1. Saiba quem pode prestar aconselhamento jurídico',body:'Em geral, advogados habilitados e representantes credenciados pelo Departamento de Justiça, atuando por organizações reconhecidas, podem oferecer serviços jurídicos de imigração dentro dos limites de sua autorização. Verifique a licença ou acreditação antes de contratar alguém.'},
  {heading:'2. Cuidado com “notarios” e promessas',body:'Nos Estados Unidos, notário público não é necessariamente advogado. Preparadores de documentos, consultores de visto e notarios não autorizados não podem escolher benefícios migratórios para você, interpretar a lei como advogado ou representar você em tribunal de imigração. Desconfie de garantias de aprovação, conexões especiais ou pedidos de pagamento urgente.'},
  {heading:'3. Procure assistência gratuita ou de baixo custo',body:'A EOIR publica listas de prestadores de serviços pro bono e organizações reconhecidas com representantes credenciados. A presença em uma lista não garante disponibilidade, qualidade ou resultado; entre em contato diretamente e confirme escopo, custos e credenciais.'},
  {heading:'4. Entenda a diferença entre USCIS e tribunal de imigração',body:'Pedidos de benefícios administrativos geralmente são tratados pelo USCIS; processos de remoção e recursos podem envolver a EOIR e o Board of Immigration Appeals. Os canais, prazos e regras de mudança de endereço podem ser diferentes. Leia cuidadosamente cada notificação recebida e não ignore audiências ou prazos.'},
  {heading:'5. Proteja seus documentos e seus direitos',body:'Peça cópias de tudo o que for preparado ou protocolado em seu nome, leia os formulários antes de assinar e nunca assine documentos em branco ou com informações falsas. Guarde recibos, contratos e avisos oficiais. Se suspeitar de fraude, consulte os canais oficiais de denúncia.'}
 ],
 links:[
  {label:'Encontrar representação jurídica — EOIR',url:'https://www.justice.gov/eoir/find-legal-representation'},
  {label:'Lista de serviços jurídicos pro bono — EOIR',url:'https://www.justice.gov/eoir/list-pro-bono-legal-service-providers'},
  {label:'Programa de reconhecimento e acreditação — DOJ',url:'https://www.justice.gov/eoir/recognition-accreditation-program'},
  {label:'Evitar golpes de imigração — USCIS',url:'https://www.uscis.gov/avoid-scams'},
  {label:'Denúncias e reclamações — EOIR',url:'https://www.justice.gov/eoir/submit-complaint'}
 ]
}
];

export function getGuide(slug:string){return guides.find(guide=>guide.slug===slug)}
