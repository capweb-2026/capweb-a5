import { test, expect } from '@playwright/test';
/* global localStorage -- callbacks exécutés dans la page */

// Critères 1 à 5 de SPEC.md — identité CODEA vérifiée dans un vrai navigateur.
// Style Playwright comme browser/contrat.spec.js.
// Ces tests échouent d'abord (index.html affiche encore « Cap Web » sans suggestions) : RED attendu avant code.

const SUGGESTIONS_ATTENDUES = [
  'Comment puis-je améliorer mon anglais technique ?',
  'Comment puis-je expliquer clairement mon code en anglais ?',
  'Quel vocabulaire dois-je connaître pour les revues de code ?',
];

function surveiller(page) {
  const erreurs = [];
  page.on('pageerror', (e) => erreurs.push(e.message));
  return erreurs;
}

async function pageNeuve(page) {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
}

async function envoyer(page, texte) {
  await page.locator('#message').fill(texte);
  await page.getByRole('button', { name: /envoyer/i }).click();
}

const lignes = (page) => page.locator('#messages li');

test.describe('Identité CODEA — critères 1 à 5', () => {
  test('critères 1+2 — l’identité affichée contient CODEA et 📝', async ({ page }) => {
    const erreurs = surveiller(page);
    await pageNeuve(page);
    await expect(page.locator('header')).toContainText('CODEA');
    await expect(page.locator('header')).toContainText('📝');
    expect(erreurs).toHaveLength(0);
  });

  test('critère 3 — un message d’accueil visible contient CODEA et 📝', async ({ page }) => {
    const erreurs = surveiller(page);
    await pageNeuve(page);
    await expect(page.locator('#accueil')).toBeVisible();
    await expect(page.locator('#accueil')).toContainText('CODEA');
    await expect(page.locator('#accueil')).toContainText('📝');
    expect(erreurs).toHaveLength(0);
  });

  test('critère 4 — exactement trois suggestions avec les textes exacts', async ({ page }) => {
    const erreurs = surveiller(page);
    await pageNeuve(page);
    await expect(page.locator('#suggestions li')).toHaveCount(3);
    for (const [index, texte] of SUGGESTIONS_ATTENDUES.entries()) {
      await expect(page.locator('#suggestions li').nth(index)).toHaveText(texte);
    }
    expect(erreurs).toHaveLength(0);
  });

  test('critère 5 — après envoi, la réponse assistant contient CODEA', async ({ page }) => {
    const erreurs = surveiller(page);
    await pageNeuve(page);
    await envoyer(page, 'salut');
    await expect(lignes(page)).toHaveCount(2);
    await expect(lignes(page).nth(1)).toContainText('CODEA');
    expect(erreurs).toHaveLength(0);
  });

  test('critère 5 — la réponse assistant ne contient pas Cap Web', async ({ page }) => {
    const erreurs = surveiller(page);
    await pageNeuve(page);
    await envoyer(page, 'salut');
    await expect(lignes(page)).toHaveCount(2);
    await expect(lignes(page).nth(1)).not.toContainText('Cap Web');
    expect(erreurs).toHaveLength(0);
  });
});
