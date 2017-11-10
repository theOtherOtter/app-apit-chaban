Tentative de projet d'application pour afficher les fermetures du pont Chaban d'après les consignes de Papswell (https://github.com/papswell/client-chaban).

I'm a js noob, please be gentle.

### `npm install`

### `npm start` ou `PORT=WantedPortNumber npm start`

La fonction Search ne fonctionne pas. Je passe les dates au state mais le délai me dérange. Je peux modifier plusieurs fois les dates pour que le state ait au moins la valeur du clic d'avant, mais même comme ça mon filtre ne marche pas. Pourtant j'ai loggé toutes mes valeurs et cela devrait fonctionner.

__EDIT: la recherche marche maintenant, et j'ai bypass le décalage de la MAJ du state en accédant directement au state et en forçant l'update de ce dernier. C'est caca mais c'est fonctionnel, et les commits précédents attestent de ce qui était fait avant.__

Pour le bouton Next dans les vues single, on cherche la data.length complète de l'api et comme pour les dates, on met directement le state à jour pour que ça réagisse de suite.

__Done :__
- Loading: Etat de chargement lors d'un appel à l'api
- Error: Afficher une boite d'alerte lorsque l'api renvoie une erreur (Dans un premier temps gérer tous les types d'erreur indifféremment de façon  a ce que l'appli ne crash pas.)
- Routing : depuis la liste vers page single
- Routing : Single vers homepage
- Error: Différencier les types d'erreurs pour afficher des erreurs plus utiles à l'utilisateur. (dates fournies invalides, erreur interne au serveur, ...)
- Search : pouvoir envoyer un paramètre `from` et / ou `to` pour filtrer la liste (pour l'exercice, on refait un appel a l'API, on ne filtre pas la liste en mémoire). __C'est la partie la plus difficile et la plus importante !__. A vous de voir quel composant doit faire les appels à l'API, qui gère les états de chargement, les erreurs, etc...
- Routing : Prev / next sur la single
- Error: Afficher une page 404 si une ID est invalide
- Gérer le cas ou l'api ne renvoie pas de données. (Ce n'est pas une erreur, mais rien ne correspond aux dates fournies)
- Search : gérer le cas ou on envoie des dates invalides, par exemple si `from` est postérieur à `to`. Il est possible que vous deviez casser ce que vous avez déjà fait jusque la. __Pensez à commit avant de vous lancer, ou changez de branche :)__

__TODO :__
- Refactoring: Extraire les appels HTTP des composants dans un ficher/une classe à part