# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom :
- Binôme :
- Atelier utilisé (le mien, celui du binôme, la reprise) :

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP6 

- J'ai prédit :
- Nous avons fait :jai cloner le projet de ma binome sur mon pc et jai pull toute les modifications dont on a copier le app.js et on a fait cd atelier et npm start et du coup on a toute les deux tout qui est configurer sur nos deux pc 
- J'ai observé : il n yavais pas derreur dans la console 
- J'ai compris :qu on allait faire un chatboot et quon allait tout organiser pour quil nous reponde celon notre theme 
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP : le event.preventDefault(); empeche le serveur de se recharger qui est normalement son comportement par defaut 



### TP07

- J'ai prédit :Je pensais qu'apres avoir écrit un message dans la zone de texte il allait directement être ajouté à la conversation sans avoir besoin de recharger la page.
- Nous avons fait :on a recuperer la zone ou lutilisateur ecrit son message avec querySelector apr on a recuperer la liste des message et quand il en envoie un on le recupere avec .value et on enleve les espaces avec.trim() si il est vide on affiche un message derreur sinon on lajoute dans la liste 
- J'ai observé :le message apparait directement dans la discussion et la zone de texte se vide 
- J'ai compris :pour afficher les messages on cree une liste dabord et apres on la remplit et que value vas permetre de recuperer ce que lutilisateur ecrit
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP : textcontent permet dafficher le contenue comme du text cest plus sur que innerhtml pour afficher un texte ecrit par lutilisateur car le navigateur ne vas pas interpreter les balises ecrite dans le message donc avec innerhtml  `<b>gras</b>` ca se serai afficher avec les `<b>


### TP8

- J'ai prédit :
- Nous avons fait :nous avons cree le fichier brain.js pour mettre les regle de validation et les reponses du chatbot dans un autre fichier nous avons ensuite importe ces fonctions dans app.js. Quand on envoie un message app.js demande a brain.js si le message est correct et récupere ensuite la reponse de Cap Web.
- J'ai observé :le programme peut reconnaître certains messages  et donner une réponse différente
- J'ai compris :Jai aussi compris que app.js n'a pas besoin de connaitre toutes les regles du chatbot il utilise simplement les fonctions de brain.js.
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :parce que brain.js contient seulement les regles du chatbot sinon le serveur pourrait donner accès à des fichiers qui ne sont pas destinés à être vus par les utilisateurs




### Tp9

- J'ai prédit : je pensais que jallait juste separer encore et cree le view.js pour que sa sois plus organiser et structurer et que app.js aller continuer a tout afficher 
- Nous avons fait :nous avons cree un  fichier view.js pour afficher les messages dans la page.
Nous avons aussi cree un tableau historique dans app.js pour garder les messages de la conversation.
Dans app.js, nous avons utilisé historique.push() pour ajouter le message de l'utilisateur et la réponse de Cap Web. Ensuite, on utilise renderMessages() pour afficher les messages.
Nous avons aussi modifié server/app.js pour ajouter view.js dans les fichiers autorisés par le serveur.
- J'ai observé :quand j'envoie un message, il reste affiché avec les anciens messages. J'ai aussi observé que si un fichier JavaScript n'est pas autorisé dans le serveur, le navigateur affiche une erreur 404 dans la console.
- J'ai compris :J'ai compris que chaque fichier a maintenant un rôle différent. brain.js s'occupe des règles et des réponses, view.js s'occupe de l'affichage et app.js fait le lien entre les deux.
- Je n'ai pas compris :j'ai aussi rencontré une erreur 404 pour view.js. J'ai utilisé F12 et la console du navigateur pour trouver l'erreur. J'avais fait une erreur dans le type de view.js dans server/app.js, et après correction le problème a été résolu mais jai pas compris pourquoi il fallait lajouter dans les types aussi 
- Réponse à la question « Dans le suivi » du TP :Le rôle de app.js est de gérer l'application et de faire le lien entre les différents fichiers. brain.js contient les règles pour vérifier le message et donner une réponse. view.js s'occupe seulement de l'affichage des messages. L'historique permet de conserver toute la conversation.

### Tp10

- J'ai prédit : Je pensais que les messages allaient rester apres avoir actualise la page
- Nous avons fait :on a utiliser le localestorage pour sauvegarder la conversation nous avons cree une fonction sauvegarder() qui transforme l'historique en texte avec JSON.stringify() et l'enregistre dans le navigateur et on recupere cette sauvegarde avec getItem() et nous utilisons JSON.parse() pour retrouver les messages et on a aussi ajouter un bouton pour effacer la conversation avec un confirm() qui existe deja sur js
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :
### TP…

- J'ai prédit :
- Nous avons fait :
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :
### TP…

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
