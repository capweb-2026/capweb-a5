import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { replyTo, validateMessage } from '../public/js/brain.js';
import { appelerIA, construireMessages } from '../api/ia.js';

// Liste explicite : seuls ces chemins publics sont servis.
const FICHIERS = {
  '/': 'index.html',
  '/index.html': 'index.html',
  '/styles.css': 'styles.css',
  '/js/app.js': 'js/app.js',
  '/js/brain.js': 'js/brain.js',
  '/js/view.js': 'js/view.js',
  '/js/persona.js': 'js/persona.js'
};

// MIME corrects pour chaque fichier servi.
const TYPES = {
  'index.html': 'text/html; charset=utf-8',
  'styles.css': 'text/css; charset=utf-8',
  'js/app.js': 'text/javascript; charset=utf-8',
  'js/brain.js': 'text/javascript; charset=utf-8',
  'js/view.js': 'text/javascript; charset=utf-8',
  'js/persona.js': 'text/javascript; charset=utf-8'
};

// Messages connus du cerveau à règles : restent immédiats (SPEC.md).
const MESSAGES_IMMEDIATS = new Set(['salut', 'bonjour', 'aide', 'test']);

function envoyerJson(res, statut, objet) {
  const corps = JSON.stringify(objet);
  res.writeHead(statut, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(corps),
  });
  res.end(corps);
}

// Lit un corps JSON (route locale /api/chat uniquement).
function lireCorpsJson(req) {
  return new Promise((resolve, reject) => {
    let brut = '';
    req.on('data', (morceau) => {
      brut += morceau;
      if (brut.length > 1000000) {
        reject(new Error('corps JSON invalide'));
      }
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
    req.on('error', () => {
      reject(new Error('corps JSON invalide'));
    });
  });
}

async function traiterApiChat(req, res) {
  const methode = (req.method ?? 'GET').toUpperCase();
  // Sonde conservée de l'étape 1.
  if (methode === 'GET') {
    envoyerJson(res, 200, { pret: true });
    return;
  }
  if (methode !== 'POST') {
    envoyerJson(res, 405, { erreur: 'Méthode non autorisée' });
    return;
  }
  let corps;
  try {
    corps = await lireCorpsJson(req);
  } catch {
    envoyerJson(res, 400, { erreur: 'Corps JSON invalide' });
    return;
  }
  const messageBrut = corps !== null && typeof corps === 'object' && corps !== undefined ? corps.message : undefined;
  const historiqueBrut = corps !== null && typeof corps === 'object' && corps !== undefined ? corps.historique : undefined;
  const controle = validateMessage(messageBrut);
  if (controle.ok !== true) {
    envoyerJson(res, 400, { erreur: controle.error });
    return;
  }
  const message = controle.value;
  // Règles immédiates : pas d'appel IA, pas de mode dégradé.
  if (MESSAGES_IMMEDIATS.has(message.trim().toLowerCase())) {
    envoyerJson(res, 200, { reponse: replyTo(message), source: 'regles', degrade: false });
    return;
  }
  // Autres demandes : IA puis repli (SPEC.md : délai max + mode dégradé visible).
  try {
    const messages = construireMessages(message, historiqueBrut);
    const reponse = await appelerIA(messages);
    envoyerJson(res, 200, { reponse, source: 'ia', degrade: false });
  } catch {
    envoyerJson(res, 200, { reponse: replyTo(message), source: 'regles', degrade: true });
  }
}

export function createApp({ publicDir, version = 'dev' } = {}) {
  const serveur = http.createServer((req, res) => {
    traiter(req, res).catch(() => {
      // Dernier filet : ne jamais laisser la requête sans réponse.
      if (!res.headersSent) {
        res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
      }
      res.end('Erreur interne');
    });
  });

  async function traiter(req, res) {
    const methode = (req.method ?? 'GET').toUpperCase();
    let chemin = '/';
    try {
      // URL puis décodage : tout encodage suspect hors liste donne 404.
      const url = new URL(req.url ?? '/', 'http://127.0.0.1');
      chemin = decodeURIComponent(url.pathname);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Non trouvé');
      return;
    }
    // Route locale /api/chat (Vercel en production) : réutilise le module IA dédié.
    if (chemin === '/api/chat') {
      await traiterApiChat(req, res);
      return;
    }
    // Seules GET et HEAD sont autorisées (outillage statique J1).
    if (methode !== 'GET' && methode !== 'HEAD') {
      res.writeHead(405, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Méthode non autorisée');
      return;
    }
    // Métadonnée de version fournie au démarrage.
    if (chemin === '/version.json') {
      const corps = JSON.stringify({ version });
      res.writeHead(200, { 'content-type': 'application/json; charset=utf-8', 'content-length': Buffer.byteLength(corps) });
      res.end(methode === 'HEAD' ? '' : corps);
      return;
    }
    const relatif = FICHIERS[chemin];
    // Inconnu : 404 neutre, sans fuite du dépôt.
    if (!relatif) {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Non trouvé');
      return;
    }
    try {
      // Chemin construit depuis la liste, pas depuis l’URL brute.
      const fichier = path.join(publicDir, relatif);
      const corps = await readFile(fichier);
      res.writeHead(200, { 'content-type': TYPES[relatif], 'content-length': corps.length });
      res.end(methode === 'HEAD' ? '' : corps);
    } catch {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
      res.end('Non trouvé');
    }
  }

  return serveur;
}
