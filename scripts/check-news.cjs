#!/usr/bin/env node
/**
 * Checks the manually-reviewed news catalog without network access.
 * Run: npm run check:news
 * Human verification of source contents remains mandatory.
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
const fields = ['slug','title','summary','topic','publishedAt','reviewedAt','source','sourceUrl'];
const slugs = new Set();
const errors = [];

const dateValid = value => {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const d = new Date(value + 'T12:00:00Z');
  return Number.isFinite(d.valueOf()) && d.toISOString().slice(0,10) === value;
};
entries.forEach((item, index) => {
  const ref = 'Notícia ' + (index + 1);
  if (!item || typeof item !== 'object' || Array.isArray(item)) { errors.push(ref + ': registro inválido'); return; }
  for (const field of fields) {
    if (typeof item[field] !== 'string' || !item[field].trim()) errors.push(ref + ': campo obrigatório ausente: ' + field);
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(item.slug || '')) errors.push(ref + ': slug inválido');
  if (slugs.has(item.slug)) errors.push(ref + ': slug repetido: ' + item.slug);
  slugs.add(item.slug);
  if (!topics.has(item.topic)) errors.push(ref + ': categoria desconhecida');
  if (!dateValid(item.publishedAt)) errors.push(ref + ': data original inválida');
  if (!dateValid(item.reviewedAt)) errors.push(ref + ': data de revisão inválida');
  if (dateValid(item.publishedAt) && dateValid(item.reviewedAt) && item.publishedAt > item.reviewedAt) errors.push(ref + ': revisão anterior à publicação');
  if (dateValid(item.reviewedAt) && item.reviewedAt > new Date().toISOString().slice(0,10)) errors.push(ref + ': data de revisão no futuro');
  try {
    const u = new URL(item.sourceUrl);
    if (u.protocol !== 'https:' || (!u.hostname.endsWith('.gov') && u.hostname !== 'gov')) errors.push(ref + ': link deve usar HTTPS em domínio governamental .gov');
    if (u.username || u.password) errors.push(ref + ': link não pode conter credenciais');
  } catch { errors.push(ref + ': URL da fonte inválida'); }
  if ((item.summary || '').length > 1000) errors.push(ref + ': resumo longo demais');
});
if (errors.length) {
  console.error('Validação editorial falhou:\n- ' + errors.join('\n- '));
  process.exit(1);
}
console.log('Validação estrutural aprovada: ' + entries.length + ' notícias. A conferência humana do conteúdo e das fontes ainda é obrigatória.');
