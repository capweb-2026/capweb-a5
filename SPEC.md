# SPEC.md — Identité de CODEA

## Objectif

Le chatbot aide l’utilisateur à comprendre et utiliser le vocabulaire des entretiens, de la documentation et des revues de code. L’utilisateur attend des explications claires, simples et pertinentes sur les termes et expressions liés à ces trois domaines.

## Critères d'acceptation

1. **Nom**— Quand l’identité de l’assistant est affichée, le système affiche le nom `CODEA`.

2. **Emoji** — Quand l’identité de l’assistant est affichée, le système affiche exactement un emoji `📝`.

3. **Accueil** — Quand l’utilisateur ouvre l’assistant, le système affiche un message d’accueil contenant le nom `CODEA` et l'emoji '📝'.

4. **Suggestions** — Quand l’utilisateur arrive sur l’accueil, le système affiche exactement trois suggestions de questions liées au thème 'coach d'anglais technique':
- `Comment puis-je améliorer mon anglais technique ?`
- `Comment puis-je expliquer clairement mon code en anglais ?`
- `Quel vocabulaire dois-je connaître pour les revues de code ?`

5. **Réponses signées** — Quand l’assistant fournit une réponse, le système affiche une signature contenant le nom `CODEA` au lieu de 'Cap Web'.

6. **Contrat CP1** — Quand les tests du contrat CP1 dans tests/ sont exécutés, ils restent tous verts.


## Hors périmètre

* Ne jamais modifier le contrat CP1 existant ou ses tests.
* Ne jamais ajouter de nouvelles dépendances.
* Ne jamais modifier les fichiers de configuration, les scripts ou le CI.
* Ne jamais ajouter des fonctionnalités qui ne concernent pas l'identité de l'assistant.
* Ne jamais ajouter ou utiliser des données personnelles, des secrets ou des clés API.
* Ne jamais modifier `SPEC.md` ou `AGENTS.md`.
* Ne jamais modifier le fonctionnement général du chatbot au-delà de ce qui est nécessaire pour l'identité.

## Données et fonctions attendues

### Fichiers

* `public/js/persona.js` : contient les données et fonctions liées à l'identité de l'assistant.
* `public/index.html` : permet l'affichage de l'identité, de l'accueil et des suggestions.
* `public/js/app.js` : utilise les informations de l'identité pour l'affichage dans l'application.
* `server/app.js` : sert les fichiers nécessaires selon sa liste blanche.

### Données

L'identité de l'assistant doit contenir :

* un nom : `CODEA` ;
* un emoji : `📝` ;
* un message d'accueil contenant `CODEA` ;
* exactement trois suggestions liées au thème 'coach d'anglais technique'.

### Fonctions attendues

Dans `public/js/persona.js`, les fonctions liées à l'identité doivent permettre de :

* récupérer le nom de l'assistant ;
* récupérer l'emoji ;
* récupérer le message d'accueil ;
* récupérer les trois suggestions ;
* fournir la signature utilisée pour les réponses.

Les fonctions doivent retourner les valeurs nécessaires à l'affichage de l'identité.


### Questions ouvertes

Aucune.
