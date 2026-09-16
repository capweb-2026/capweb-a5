import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { getName, getEmoji, getGreeting, getSuggestions, getSignature } from '../public/js/persona.js';

// Critères 1 à 5 de SPEC.md — identité CODEA.
// Style node:test comme tests/brain.test.js.
// Ces tests échouent d'abord (public/js/persona.js n'existe pas) : RED attendu avant code.

const SUGGESTIONS_ATTENDUES = [
  'Comment puis-je améliorer mon anglais technique ?',
  'Comment puis-je expliquer clairement mon code en anglais ?',
  'Quel vocabulaire dois-je connaître pour les revues de code ?',
];

describe('Identité CODEA — critères 1 à 5', () => {
  it('critère 1 — getName() retourne CODEA', () => {
    assert.equal(getName(), 'CODEA');
  });

  it('critère 2 — getEmoji() retourne exactement un emoji 📝', () => {
    const emoji = getEmoji();
    assert.equal(emoji, '📝');
    assert.equal([...emoji].length, 1);
  });

  it('critère 3 — getGreeting() contient CODEA et 📝', () => {
    const accueil = getGreeting();
    assert.equal(typeof accueil, 'string');
    assert.ok(accueil.trim().length > 0);
    assert.ok(accueil.includes('CODEA'));
    assert.ok(accueil.includes('📝'));
  });

  it('critère 4 — getSuggestions() retourne les trois phrases exactes dans l’ordre', () => {
    assert.deepEqual(getSuggestions(), SUGGESTIONS_ATTENDUES);
  });

  it('critère 4 — getSuggestions() contient exactement trois suggestions', () => {
    const suggestions = getSuggestions();
    assert.equal(Array.isArray(suggestions), true);
    assert.equal(suggestions.length, 3);
  });

  it('critère 5 — getSignature() contient CODEA', () => {
    const signature = getSignature();
    assert.equal(typeof signature, 'string');
    assert.ok(signature.includes('CODEA'));
  });

  it('critère 5 — getSignature() ne contient pas Cap Web', () => {
    assert.ok(!getSignature().includes('Cap Web'));
  });

  it('cohérence — persona.js reste pur, sans accès à la page', async () => {
    const sansCommentaires = (code) => code.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1');
    const code = sansCommentaires(await readFile(new URL('../public/js/persona.js', import.meta.url), 'utf8'));
    assert.doesNotMatch(code, /\bdocument\b|\bwindow\b|localStorage/, 'persona.js reste pur : aucun accès à la page');
  });
});
