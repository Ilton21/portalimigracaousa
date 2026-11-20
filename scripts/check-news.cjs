#!/usr/bin/env node
/**
 * Validação estrutural do catálogo editorial.
 * Run: npm run check:news
 * A aprovação automática NÃO substitui a conferência humana da fonte e do conteúdo.
 */
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'lib', 'news.ts'), 'utf8');
const startMarker = 'export const news: NewsItem[] = [';
const endMarker = '\n];';
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start + startMarker.length);
if (start < 0 || end < 0) {
  console.error('Erro: catálogo de notícias não encontrado no formato esperado.');
  process.exit(1);
}

let entries;
try {
  entries = JSON.parse('[' + source.slice(start + startMarker.length, end).trim() + ']');
} catch (error) {
  console.error('Erro: notícias devem ser objetos JSON válidos:', error.message);
  process.exit(1);
}

const topics = new Set(['Vistos', 'Green Card', 'Cidadania', 'Trabalho', 'Direitos', 'Vida nos EUA']);
const requiredFields = ['slug', 'title', 'summary', 'topic', 'publishedAt', 'reviewedAt', 'source', 'sourceUrl'];
// Allowlist explícita: órgãos públicos e organizações primárias/reconhecidas usadas pelo portal.
// Novas fontes exigem revisão editorial e inclusão deliberada nesta lista.
const trustedDomains = [
  'uscis.gov',
  'state.gov',
  'dol.gov',
  'justice.gov',
  'usa.gov',
  'aclu.org'
];
const slugs = new Set();
const errors = [];

const dateValid = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T12:00:00Z');
  return Number.isFinite(date.valueOf()) && date.toISOString().slice(0, 10) === value;
};

entries.forEach((item, index) => {
  const ref = 'Notícia ' + (index + 1);
  if (!item || typeof item !== 'object' || Array.isArray(item)) {
    errors.push(ref + ': registro inválido');
    return;
  }

  for (const field of requiredFields) {
    if (typeof item[field] !== 'string' || !item[field].trim()) {
      errors.push(ref + ': campo obrigatório ausente: ' + field);
    }
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug || '')) {
    errors.push(ref + ': slug inválido');
  }
  if (item.slug && slugs.has(item.slug)) errors.push(ref + ': slug repetido: ' + item.slug);
  if (item.slug) slugs.add(item.slug);

  if (!topics.has(item.topic)) errors.push(ref + ': categoria desconhecida');
  if (!dateValid(item.publishedAt)) errors.push(ref + ': data original inválida');
  if (!dateValid(item.reviewedAt)) errors.push(ref + ': data de revisão inválida');

  if (dateValid(item.publishedAt) && dateValid(item.reviewedAt) && item.publishedAt > item.reviewedAt) {
    errors.push(ref + ': revisão anterior à publicação');
  }
  if (dateValid(item.reviewedAt) && item.reviewedAt > new Date().toISOString().slice(0, 10)) {
    errors.push(ref + ': data de revisão no futuro');
  }

  try {
    const url = new URL(item.sourceUrl);
    const trusted = trustedDomains.some(domain =>
      url.hostname === domain || url.hostname.endsWith('.' + domain)
    );
    if (url.protocol !== 'https:' || !trusted) {
      errors.push(ref + ': URL deve usar HTTPS e domínio presente na allowlist editorial (' + trustedDomains.join(', ') + ')');
    }
    if (url.username || url.password) errors.push(ref + ': URL não pode conter credenciais');
  } catch {
    errors.push(ref + ': URL da fonte inválida');
  }

  if ((item.summary || '').length > 1000) errors.push(ref + ': resumo longo demais (máximo 1.000 caracteres)');
});

if (entries.length === 0) errors.push('O catálogo não pode ficar vazio.');

if (errors.length) {
  console.error('Validação estrutural falhou:\n- ' + errors.join('\n- '));
  process.exit(1);
}

console.log('Validação estrutural aprovada: ' + entries.length + ' notícias.');
console.log('Domínios permitidos: ' + trustedDomains.join(', '));
console.log('A conferência humana do conteúdo, contexto, datas e fonte original continua obrigatória.');
