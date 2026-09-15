# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom : GENTILINI Irene
- Binôme : GENTILINI Irene et LOUKKAL Sarah
- Atelier utilisé (le mien, celui du binôme, la reprise) : le mien

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP06

- J'ai prédit : Rien, ce n'était qu'une mise en place pour le programme.
- Nous avons fait : Nous avons créé le projet GitHub partagé.
Nous avons vérifié que le programme réalisé dans la matinée fonctionnait correctement, sans erreur.
Nous avons ajouté les éléments nécessaires pour la partie de l'après-midi.
- J'ai observé : J'ai remarqué qu'il n'y avait pas d'erreur 404.
- J'ai compris : J'ai compris ce que nous allons faire dans les prochains jours et comment gérer GitHub avec ma collègue.
- Je n'ai pas compris : Rien, je pense que pour l'instant c'était facile.
- Réponse à la question « Dans le suivi » du TP : C'est la ligne « event.preventDefault(); » parce que normalement, le navigateur recharge par défaut, mais la ligne l'empêche de faire ça. La preuve est que quand on retire la ligne, le navigateur recharge après envoi.

### TP07

- J'ai prédit : quand le message est vide, la fonction champ.focus() redonne la couleur bleu du focus à la text area.
- Nous avons fait : On a ajouté l'affichage du message « Le message ne doit pas être vide » dans la même fonction que pour le statut, car les deux sont liées au même event.
On a ajouté un élément de liste au document HTML, puis on l'a rempli avec le texte demandé, et après on l'a ajouté à la unordered list.
- J'ai observé : Les messages s'affichent au-dessus du champ pour le texte.
Quand le message est seulement des espaces, le curseur n'est pas renvoyé au début du text area. Du coup, on vide le même si le message était techniquement déjà vide.
- J'ai compris : Pour créer les messages, il faut d'abord créer un list item, et après l'avoir rempli, l'assigner à la unordered list. Le mot "document" nous lie au document HTML et ses éléments. La partie "?.addEventlistener" nous permet de rendre un élément du HTML un élément qui attend des événements et causes des changements.
- Je n'ai pas compris : pourquoi le bouton est de type submit et pas click
- Réponse à la question « Dans le suivi » du TP : innerHTML ne lit pas le texte comme du plain text, mais comme HTML, donc <b>gras</b> aurait été en gras et sans les <b>.

### TP08

- J'ai prédit : Les réponses de Cap Web ne sembleront pas partie d'un chat, parce que tous les messages sont du même côté.
- Nous avons fait : On a créé Brain.js avec deux fonctions. La première fait un contrôle du texte renseigné dedans la textarea et crée un message d'erreur dans le cas où le texte ne respecte pas les attentes. La deuxième fonction fonctionne comme cerveau, et elle répond à certains mots avec des messages spéciaux. On a changé app.js pour qu'elle utilise les fonctions de brain.js.
- J'ai observé : Même si un input comme 123 semble être un numéro, il est toujours une chaîne et donc ça passe au contrôle.
- J'ai compris : J'ai compris comment faire interagir différents fichiers de JavaScript.
- Je n'ai pas compris : Pourquoi les checks pour les erreurs ne pouvaient pas être faits dans app.js
- Réponse à la question « Dans le suivi » du TP : Parce que c'est important de séparer pour raisons de cybersécurité.

### TP09

- J'ai prédit : 
- Nous avons fait : Nous avons créé un nouveau fichier " view.js ", qui, comme brain.js, n'a pas accès au document HTML. Dans ce fichier, on a une fonction qui, à chaque nouveau message, repopule la " unordered list " avec tous les messages et réponses de Cap Web..
Cela sert à maintenir un historique complet.
- J'ai observé : les trois points ne sont pas pour un simple exemple, mais ils sont un vrai opérateur qui sépare un array en ses éléments.
- J'ai compris : À chaque fois qu'il y a un nouveau message, on parcourt tout l'historique, et on replace tous les éléments de la « unordered list » avec et les anciens messages et le nouveau avec la nouvelle réponse de Cap Web.
- Je n'ai pas compris : pourquoi, comme pour brain.js, on doit mettre le fichier dans la liste de fichiers blancs au-dessus de app.js.
- Réponse à la question « Dans le suivi » du TP : app.js interagit avec le fichier HTML.
brain.js « pense », et donc filtre les messages et crée une réponse pour chaque message.
view.js gère comme les messages sont vus, en recréant la « ul » indirectement à chaque fois qu'un message est envoyé, sans accès direct au html.

### TP10

- J'ai prédit : Avec ces modifications, on aura un comportement de la page où, même si on la recharge, la conversation reste affichée, et on pourra l'effacer manuellement avec le nouveau bouton.
- Nous avons fait : On utilise localStorage, qui sauvegarde la conversation dans le navigateur. Au début, on a utilisé localStorage dans "formulaire?.addEventListener", pour qu'il soit rempli à chaque fois qu'un nouveau message est créé.
Après, on l'a utilisé au début du fichier, pour que, au démarrage, il soit lu pour afficher la conversation sauvegardée. On l'a fait en remplissant "historique" avec les contenus de "localStorage" et en l'affichant avec la fonction créée pendant le TP09 « renderMessages ».
Après, on a créé un nouveau bouton dans l'HTML.
On l'a lié au JavaScript avec "const effacer = document.querySelector('#effacer')". Cet élément écoute un event click, et quand le bouton est cliqué, grâce à "confirm()", un pop up est affiché pour demander la confirmation. Si l'utilisateur confirme, et l'historique et le localStorage sont vidés dans la fonction pour l'event click.
- J'ai observé : Les messages sont sauvegardés même si le serveur est stoppé et redémarré. Ça veut dire que localStorage stocke les données, pas sur le serveur, mais dans le navigateur.
- J'ai compris : J’ai compris comment localStorage permet de sauvegarder et de récupérer des données dans le navigateur.
- Je n'ai pas compris : Je ne suis pas sûre si les données sont sauvegardées même si on ferme le navigateur.
- Réponse à la question « Dans le suivi » du TP : Je pensais que http://localhost:3000 et http://127.0.0.1:3000/ étaient la même chose, et donc je pensais que les deux allaient montrer la même conversation.
En réalité, ce n'est pas le cas et donc je pense que le serveur les voit comme deux choses différentes, et les deux ont des stockages locales différentes.

### TP11

- J'ai prédit : Je pense que ce fichier sert à faire des tests automatiques pour voir si le programme respecte les règles définies avant, sans devoir écrire manuellement dans notre navigateur.
Je pense que les tests vont passer parce que tout fonctionne et normalement, on a respecté les règles.
- Nous avons fait : 
- J'ai observé : 
- J'ai compris : 
- Je n'ai pas compris : 
- Réponse à la question « Dans le suivi » du TP : 

### TP12

- J'ai prédit : 
- Nous avons fait : 
- J'ai observé : 
- J'ai compris : 
- Je n'ai pas compris : 
- Réponse à la question « Dans le suivi » du TP : 

### TP13

- J'ai prédit : 
- Nous avons fait : 
- J'ai observé : 
- J'ai compris : 
- Je n'ai pas compris : 
- Réponse à la question « Dans le suivi » du TP : 

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :
