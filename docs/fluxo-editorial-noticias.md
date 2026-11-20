# Fluxo editorial da Central de Notícias

## Objetivo

Manter a Central de Notícias do Portal Imigração USA atualizada com informação útil, rastreável e apresentada em português claro. O portal é independente e educativo; não representa o governo dos Estados Unidos e não presta aconselhamento jurídico individual.

## Fluxo obrigatório: pauta → revisão → publicação

1. **Encontrar uma pauta:** priorizar comunicados, páginas de política, alertas e documentos da fonte original.
2. **Registrar a sugestão:** abrir uma issue usando o formulário **Sugestão de notícia para revisão**. A issue é uma fila editorial, não uma publicação.
3. **Verificar a fonte:** abrir o link original, confirmar órgão responsável, data, escopo, público afetado e se o conteúdo está vigente. Não usar apenas manchetes, snippets de busca ou postagens de terceiros.
4. **Classificar corretamente:** distinguir regra vigente, proposta, decisão judicial, orientação administrativa, programa-piloto e anúncio. Não apresentar proposta como regra final.
5. **Redigir em português:** título fiel, resumo neutro, consequências sem exagero e ressalvas necessárias. Não prometer resultados nem sugerir que a notícia se aplica automaticamente a todos.
6. **Preparar a alteração:** incluir o registro em `lib/news.ts` numa branch e abrir Pull Request para `main`.
7. **Validar automaticamente:** a verificação `npm run check:news` confere campos, categorias, datas, slugs, tamanho do resumo e domínio HTTPS permitido.
8. **Revisar humanamente:** conferir novamente a fonte e o texto, especialmente números, prazos, exceções, situação processual e data original.
9. **Publicar somente após aprovação:** revisar a prévia da Vercel e fazer merge da Pull Request apenas com aprovação explícita do responsável pelo portal.
10. **Monitorar e corrigir:** se a fonte mudar, houver decisão posterior ou o conteúdo ficar desatualizado, atualizar `reviewedAt`, resumo e link; arquivar/remover informação que deixou de ser útil ou correta.

## Campos obrigatórios

Cada item em `lib/news.ts` deve conter:

- `slug`: identificador único, minúsculo e separado por hífens.
- `title`: título objetivo e fiel à fonte.
- `summary`: resumo em português, até 1.000 caracteres.
- `topic`: uma das seis categorias do portal.
- `publishedAt`: data original da publicação, não a data em que a equipe encontrou a notícia.
- `reviewedAt`: data em que a equipe abriu e conferiu novamente a fonte.
- `source`: nome do órgão ou organização responsável.
- `sourceUrl`: link HTTPS direto para a fonte primária.

## Política de fontes

O verificador automático usa uma allowlist em `scripts/check-news.cjs`. Atualmente ela contempla USCIS, Departamento de Estado, Departamento do Trabalho, Departamento de Justiça/EOIR, USA.gov e ACLU. A inclusão de um novo domínio exige avaliação editorial deliberada; não se deve ampliar a lista apenas para fazer uma validação passar.

Uma fonte fora da allowlist pode ser relevante, mas deve ser analisada por uma pessoa antes de qualquer alteração no código. Não usar encurtadores, links com credenciais ou páginas que não sustentem diretamente o resumo.

## Revisão periódica

- **A cada nova pauta:** conferir a fonte original e o estado atual da informação.
- **A cada 30 dias:** revisar notícias sobre processos, programas temporários, taxas, prazos, políticas e ações judiciais.
- **A cada 90 dias:** revisar as demais notícias ainda exibidas.
- **Imediatamente:** revisar quando houver nova decisão judicial, atualização oficial, correção ou alerta de segurança.

A data `reviewedAt` só deve mudar depois de uma nova conferência real. Não atualizar datas em lote sem revisar cada publicação.

## Limites de segurança e qualidade

- Nenhuma notícia sugerida por formulário ou issue é publicada automaticamente.
- Não inserir dados pessoais de leitores, números de processos ou documentos confidenciais.
- Não publicar aconselhamento individual, garantias de aprovação ou interpretações jurídicas categóricas.
- Identificar alegações de uma parte como alegações, e não como fatos decididos pelo tribunal.
- Preservar o histórico por Pull Requests; não editar diretamente a branch `main`.
- A validação automática verifica estrutura e domínio, não prova que o conteúdo é verdadeiro ou que a regra continua vigente.
