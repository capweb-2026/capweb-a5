// persona.js — identité de CODEA (SPEC.md identité).
// Module pur : aucune interaction avec la page, uniquement des données et fonctions.

const NOM = 'CODEA';
const EMOJI = '📝';
const ACCUEIL =
  'Bonjour, je suis CODEA 📝, votre coach d\u2019anglais technique.';

const SUGGESTIONS = [
  'Comment puis-je améliorer mon anglais technique ?',
  'Comment puis-je expliquer clairement mon code en anglais ?',
  'Quel vocabulaire dois-je connaître pour les revues de code ?',
];

const SIGNATURE = 'CODEA : ';

export function getName() {
  return NOM;
}

export function getEmoji() {
  return EMOJI;
}

export function getGreeting() {
  return ACCUEIL;
}

export function getSuggestions() {
  return [...SUGGESTIONS];
}

export function getSignature() {
  return SIGNATURE;
}
