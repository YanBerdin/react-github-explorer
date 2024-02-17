# SPA Github API

**Objectif**

Faire un annuaire qui permette de chercher des repos sur github

Pour gagner du temps sur la mise en forme, utilisation de la bibliothèque: Semantic-UI

### `Composants REACT`

* SearchBar

* ReposResults (pour afficher les repos correspondant à la recherche)

* Message (pour afficher les erreurs et les informations)

### `Comportement`

Au submit du formulaire de recherche, une requête à l'API de GITHUB est faite pour récupérer les résultats.
En cas de resultats, ils s'affichent sous la barre de recherche, sous forme de cartes, comme sur l'image.
Ils sont triés selon leur nombre de 
### `Router`

- Une page de recherche directement à la racine `/` qui affiche le champ de recherche et les résultats que tu viens de créer
- Une page FAQ à l'adresse `/faq` qui affiche des questions et des réponses. Tu peux prendre les textes suivants
- une page d'erreur si on tape une mauvaise adresse
- un menu pour naviguer entre les pages. 
