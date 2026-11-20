# Modelo de registro de notícia

Use este roteiro antes de adicionar um item a `lib/news.ts`.

- **Título fiel à fonte:**
- **Categoria:** Vistos | Green Card | Cidadania | Trabalho | Direitos | Vida nos EUA
- **Órgão/organização responsável:**
- **URL HTTPS direta da fonte original:**
- **Data original da publicação (AAAA-MM-DD):**
- **Data da revisão humana (AAAA-MM-DD):**
- **Tipo de informação:** regra vigente | proposta | orientação administrativa | decisão judicial | programa-piloto | alerta
- **Público afetado e alcance:**
- **Exceções, prazos ou ressalvas relevantes:**
- **Resumo em português (até 1.000 caracteres):**
- **Conferido novamente na fonte original por:**

## Checklist antes da Pull Request

- [ ] O link abre e aponta para a fonte primária.
- [ ] A data original foi confirmada na própria fonte.
- [ ] O texto diferencia regra vigente de proposta, orientação ou alegação.
- [ ] Valores, prazos, categorias e exceções foram conferidos.
- [ ] O resumo não promete resultados nem generaliza casos individuais.
- [ ] O domínio está na allowlist editorial ou foi aprovado para inclusão.
- [ ] `npm run check:news` passou.
- [ ] A prévia da Vercel foi revisada antes do merge.
