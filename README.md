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

- On modifie l'url appelée avec des paramètres get supplémentaires, ainsi on demande 9 repos par page, on commence à la page 1 et on tri les résultats par nombre d'étoiles décroissantes
- On ajoute un bouton à la suite des résultats _Plus de résultats_
- Au clic sur ce bouton on charge les 9 repos suivants, qu'on affiche à la suite des 9 premiers, et ainsi de suite

