# portal-imigracao-app (Next.js App Router)

Projeto usando o **App Router** do Next.js 14 com TailwindCSS.

## 🚀 Como usar

1. Instale dependências:
   ```bash
   npm install
   ```

2. Rode em dev:
   ```bash
   npm run dev
   ```
   Abra [http://localhost:3000](http://localhost:3000).

3. Build de produção:
   ```bash
   npm run build
   npm start
   ```

## 📂 Estrutura

- `app/layout.jsx` → Layout raiz (Header + Footer)
- `app/page.jsx` → Página inicial
- `app/about/page.jsx` → Página "Sobre"
- `components/` → Componentes reutilizáveis (Header, Footer)
- `styles/globals.css` → Tailwind base
- `public/logo.svg` → Logo

## 🔧 TailwindCSS

Já configurado:
- `tailwind.config.js`
- `postcss.config.js`
