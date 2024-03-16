# Github API

Aujourd'hui, on se fait plaisir et on met en pratique tout ce qu'on a vu pour se créer une application qui fonctionne avec une véritable API, celle de github !

![resultat](docs/resultat.png)

**Objectif**

Faire un annuaire qui permette de chercher des repos sur github

Github fourni une API qui permet de chercher dans tous les repos, à cette adresse:

***

https://api.github.com/search/repositories?q=REPOACHERCHER

***

En remplaçant REPOACHERCHER par ce qui a été saisi par l'utilisateur, vous obtiendrez une liste de resultats.

### Astuces

Pour gagner du temps sur la mise en forme, nous allons utiliser une bibliothèque: Semantic-UI

https://react.semantic-ui.com/

Pour l'installation vous trouverez les instructions ici:

https://react.semantic-ui.com/usage

**Si Semantic-UI te fait peur, tu n'es pas obligé de l'utiliser, ce n'est pas le plus important sur ce challenge. Sache toutefois que ca peut te faire gagner pas mal de temps pour la partie CSS mais aussi car tu auras moins de composants a créer ! Dans tous les cas, essaye de réaliser une jolie intégration 👍🏻**

### Composants REACT à créer

* SearchBar

* ReposResults (pour afficher les repos correspondant à la recherche)

* Message (pour afficher les erreurs et les informations)

### Comportement

Lorsque je submit le formulaire de recherche en appuyant sur entrer, une requête est faite pour récupérer les résultats. En cas de resultats, ils s'affichent sous la barre de recherche, sous forme de cartes, comme sur l'image.

> # ATTENTION !
> Si vous arrivez à afficher sous forme de cartes les résultats fournis par github, c'est vraiment énorme !!
> La partie bonus, c'est uniquement si vous êtes très très très gourmands...

### Conseils méthodologiques

* Je fais déjà l'affichage avec des composants statiques (sans props)
  * la search bar
  * le message
  * la liste de cartes
* Je suis libre d'utiliser Semantic UI quand bon mon semble, je peux d'abord me concentrer sur les fonctionnalités puis la mise en forme ou l'inverse
* Je donne des props (et vérifie les prop-types) avec des données que je crée moi même, pour tester
* Je commence à introduire des hooks d'état dans mon composant racine
* Je mets mes fausses données dans les états, et je les passe aux composants
* Je gère le changement dans l'input de recherche
* Je gère le submit
* J'essaie d'utiliser axios pour obtenir des résultats
* J'utilise axios pour obtenir des résutlats liés à la recherche de l'user (text de l'input)
* J'utilise les résultats pour donner à mon state les datas, formattées au besoin pour coller aux props attendues

Ah et une dernière chose, le logo est fourni dans le dossier `assets`, tu trouveras aussi des datas dans le dossier `data` qui peuvent servir dans un premier temps aussi pour faire des tests

### Bonus : Router

On va maintenant faire en sorte d'avoir plusieurs pages sur notre applications. Pour cela tu vas utiliser `react-router-dom` pour avoir belles url et un historique qui évolue. Au besoin reprend [la doc](https://reactrouter.com/docs/en/v6/getting-started/tutorial).

On veut

- Une page de recherche directement à la racine `/` qui affiche le champ de recherche et les résultats que tu viens de créer
- Une page FAQ à l'adresse `/faq` qui affiche des questions et des réponses. Tu peux prendre les textes suivants
```
A quoi ça sert ?
Cette application permet de trouver une liste de dépôts GitHub pour un critère donné.

Comment faire une recherche ?
Sur la page recherche, complétez le champ de recherche et valider la recherche.

Puis-je chercher n'importe quel terme ?
Oui, c'est fou.
```
- Tu peux aussi prévoir une page d'erreur si on tape une mauvaise adresse

Ajoute un petit menu pour naviguer entre les pages. Avec semantic ui ça peut donner quelque chose comme ça :

<details>
  <summary>
    Résultat
  </summary>

![Bonus](docs/resultat-bonus.png)

</details>

### Super Bonus : Plus de résultats

Par défaut l'api github retourne les 30 premiers résultats, changeons ça

***

https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9

***

- On modifie l'url appelée avec des paramètres get supplémentaires, ainsi on demande 9 repos par page, on commence à la page 1 et on tri les résultats par nombre d'étoiles décroissantes
- On ajoute un bouton à la suite des résultats _Plus de résultats_
- Au clic sur ce bouton on charge les 9 repos suivants, qu'on affiche à la suite des 9 premiers, et ainsi de suite

(node_modules supprimés pour libérer espace disque VM)
