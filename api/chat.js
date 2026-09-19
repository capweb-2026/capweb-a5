import { replyTo, validateMessage } from '../public/js/brain.js';
import { appelerIA, construireMessages } from './ia.js';

// Messages connus du cerveau à règles : restent immédiats (SPEC.md).
const MESSAGES_IMMEDIATS = new Set(['salut', 'bonjour', 'aide', 'test']);

function estImmediat(message) {
  return MESSAGES_IMMEDIATS.has(message.trim().toLowerCase());
}

// Lit un corps JSON lorsque la plateforme ne l'a pas déjà parsé (req.body absent).
function lireCorps(req) {
  return new Promise((resolve, reject) => {
    if (typeof req.on !== 'function') {
      resolve(undefined);
      return;
    }
    let brut = '';
    req.on('data', (morceau) => {
      brut += morceau;
    });
    req.on('end', () => {
      if (brut === '') {
        resolve(undefined);
        return;
      }
      try {
        resolve(JSON.parse(brut));
      } catch {
        reject(new Error('corps JSON invalide'));
      }
    });
    req.on('error', () => reject(new Error('corps JSON invalide')));
  });
}

export default async function handler(req, res) {
  // Sonde de l'étape 1 : conservée telle quelle.
  if (req.method === 'GET') {
    res.status(200).json({ pret: true });
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ erreur: 'Méthode non autorisée' });
    return;
  }
  let corps = req.body;
  if (corps === undefined) {
    try {
      corps = await lireCorps(req);
    } catch {
      res.status(400).json({ erreur: 'Corps JSON invalide' });
      return;
    }
  }
  const messageBrut = corps !== null && typeof corps === 'object' ? corps.message : undefined;
  const historiqueBrut = corps !== null && typeof corps === 'object' ? corps.historique : undefined;
  const controle = validateMessage(messageBrut);
  if (controle.ok !== true) {
    res.status(400).json({ erreur: controle.error });
    return;
  }
  const message = controle.value;
  // Règles immédiates : pas d'appel IA, pas de mode dégradé.
  if (estImmediat(message)) {
    res.status(200).json({ reponse: replyTo(message), source: 'regles', degrade: false });
    return;
  }
  // Autres demandes : IA via le module dédié (jamais de throw).
  // source 'ia' : réponse passerelle ; source 'regles' : fallback replyTo, mode dégradé visible.
  const messages = construireMessages(message, historiqueBrut);
  const resultat = await appelerIA(messages);
  if (resultat.source === 'ia') {
    res.status(200).json({ reponse: resultat.texte, source: 'ia', degrade: false });
  } else {
    res.status(200).json({ reponse: resultat.texte, source: 'regles', degrade: true });
  }
}
