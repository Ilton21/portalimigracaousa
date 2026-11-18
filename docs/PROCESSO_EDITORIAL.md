# Processo editorial — Portal Imigração USA

## Objetivo
Publicar notícias úteis sobre imigração com rastreabilidade e revisão humana. Uma IA pode propor pauta ou rascunho, **mas nunca publicar sozinha**.

## Fluxo de aprovação
1. **Identificar:** encontrar um comunicado em site oficial. Registrar URL direta, órgão e a data original (não a data da consulta).
2. **Verificar:** ler a publicação integral, identificar se é regra vigente, proposta, decisão judicial, programa piloto ou orientação. Conferir a quem se aplica, início e exceções.
3. **Redigir:** escrever título e resumo originais em português, sem prometer benefícios, resultados nem generalizar categorias.
4. **Revisar:** um editor humano verifica o texto contra a fonte e registra `reviewedAt` com a data real de conferência.
5. **Cadastrar:** editar `lib/news.ts`, acrescentando um objeto ao array `news`, usando as chaves existentes. Não alterar links nem datas sem rechecagem.
6. **Validar:** rodar `npm run check:news` e `npm run build`; abrir um Pull Request e conferir a prévia da Vercel, inclusive filtros, busca e links.
7. **Aprovar:** só após aprovação editorial e visual fazer merge na branch principal.

## Checklist
- [ ] Fonte oficial aberta e verificada
- [ ] Data original da publicação conferida
- [ ] Contexto, elegibilidade, exceções e vigência preservados
- [ ] Status da informação explícito (ex.: proposta versus regra em vigor)
- [ ] Título/resumo em português revisados
- [ ] URL direta aponta para o comunicado específico
- [ ] `reviewedAt` reflete a última verificação real
- [ ] Nenhum dado pessoal ou informação sensível publicado
- [ ] Validação estrutural e build aprovados
- [ ] Preview e versão mobile revisados

## Automação e IA
O projeto **não possui** coleta automática, integração com modelos de IA, fila de aprovação ou login administrativo. Qualquer futura integração deve armazenar chaves apenas no servidor, apresentar rascunhos para revisão humana e jamais fazer deploy sem autorização explícita.

## Limites da validação automática
`npm run check:news` confirma estrutura, datas, duplicatas, categorias e formato de URLs governamentais. **Não prova** que o conteúdo da notícia está correto, que a página de origem continua disponível nem que uma medida está vigente. Esses passos exigem verificação editorial.
