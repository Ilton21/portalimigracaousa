# Painel administrativo — configuração segura (Etapa 6)

O painel está **bloqueado por padrão**. O login só fica disponível quando as quatro variáveis abaixo são configuradas no servidor da Vercel. Não coloque segredos no GitHub nem envie credenciais por mensagens.

## Autenticação
- NextAuth 4 + OAuth do GitHub (login pela conta GitHub).
- Apenas o **ID numérico** do GitHub definido em `GITHUB_ADMIN_ID` recebe acesso. O nome de usuário, isoladamente, não concede permissão.
- Sessão JWT por até 8 horas; `/admin` verifica a sessão no servidor antes de renderizar dados.
- Sem credenciais configuradas, `/admin/login` mostra uma mensagem de ativação pendente e `/admin` redireciona para essa página.

## Variáveis de ambiente — Vercel
| Nome | Valor |
| --- | --- |
| `GITHUB_OAUTH_CLIENT_ID` | Client ID de uma GitHub OAuth App criada para o portal |
| `GITHUB_OAUTH_CLIENT_SECRET` | Client Secret da mesma OAuth App, **secreto** |
| `GITHUB_ADMIN_ID` | ID numérico da conta GitHub autorizada |
| `NEXTAUTH_SECRET` | Segredo aleatório longo, gerado com `openssl rand -base64 32` |
| `NEXTAUTH_URL` | URL HTTPS estável do deployment em que o OAuth será usado |

Usar uma URL estável é importante: o GitHub OAuth aceita callback configurado para uma URL concreta. Para habilitar primeiro só em testes, crie uma URL de preview estável e associe a OAuth App **exclusiva de teste**, sem alterar o domínio de produção. Se forem criados ambientes separados, cada um deve usar seus próprios segredos e URL de retorno.

## Configuração da OAuth App
1. Na conta GitHub administradora, abra Settings → Developer settings → OAuth Apps → New OAuth App.
2. Em **Homepage URL**, informe a URL HTTPS estável escolhida para a instância de testes.
3. Em **Authorization callback URL**, informe `https://SEU-DOMINIO/api/auth/callback/github`.
4. Copie o Client ID e gere o Client Secret.
5. Na Vercel, selecione o projeto → Settings → Environment Variables e configure os nomes listados acima somente para o ambiente previsto.
6. Depois do novo deployment, visite `/admin/login`, autentique com a conta permitida e valide bloqueio para uma conta não autorizada.

## Segurança e escopo atual
- O painel é **somente leitura**: mostra contagens dos guias e notícias do catálogo versionado. Não existem edição, upload ou botões falsos de publicação.
- Não armazena dados de visitantes e não tem banco de dados.
- Publicações seguem pelo processo de revisão em `docs/PROCESSO_EDITORIAL.md`.
- Autenticação deve ser testada em Preview antes de qualquer publicação em produção.
- Não exponha variáveis `GITHUB_OAUTH_CLIENT_SECRET` ou `NEXTAUTH_SECRET` com prefixo `NEXT_PUBLIC_`.
- Para impedir tentativas abusivas, considere limites de acesso adicionais (WAF e proteção de ambiente) ao habilitar o painel publicamente.
