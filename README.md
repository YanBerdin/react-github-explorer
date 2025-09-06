# `React GitHub Explorer`

Done with React-Model

A SPA Github Repository finder using React & GitHub API

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

- Une page de recherche directement à la racine `/` qui affiche le champ de recherche et les résultats
- Une page FAQ à l'adresse `/faq` qui affiche des questions et des réponses. 
- une page d'erreur si l'on saisit une mauvaise adresse
- un menu pour naviguer entre les pages. 
