# Carte des défenses

Chaque ligne dit quelle connerie est arrêtée, par quoi, et **où est la preuve** : le lien d'un run rouge ou d'une PR bloquée. Une barrière sans preuve ne compte pas.

| Connerie | Barrière qui l'arrête | Preuve (lien) | Checkpoint |
|---|---|---|---|
| Régression | Tests de contrat et CI obligatoire sur `main` | https://github.com/capweb-2026/capweb-a5/actions/runs/34954204197  -  Erreurs avec app.js ('submit' doit être utilisé pour une fonction avec event click, 'event' était dans des fonctions comme variables mais pas utiles) et brain.js ('text' is never reassigned. Use 'const' instead).  | CP1 |
| Régression | Tests de contrat et CI obligatoire sur `main` | [PR #5] hhttps://github.com/capweb-2026/capweb-a5/pull/5 — la PR modifie la limite de 280 à 300 caractères, contrairement au contrat existant. | CP2 |
| Test affaibli ou supprimé | `check:tests` (TEST-CHANGE obligatoire) et relecture | [PR #6] https://github.com/capweb-2026/capweb-a5/pull/6 - `check:tests` bloque la modification de `brain.contrat.test.js` sans justification `TEST-CHANGE`.| CP2 |
| Dépendance ajoutée | `check:deps` et `dependances-autorisees.json` | [PR #7] https://github.com/capweb-2026/capweb-a5/pull/7 - ajoutée sans justification `HARNAIS-CHANGE`.| CP2 |
| Secret exposé | | | CP3 |
| IA qui sort de son thème | | | CP3 |
| Faille (`innerHTML`, injection) | | | CP4 |
| Contrôle désactivé | | | CP4 |
| Action destructrice | | | CP4 |
    

    https://codea-zeta.vercel.app/