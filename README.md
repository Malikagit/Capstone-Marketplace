# Vue d'ensemble
Place Marquette est une marketplace sur laquelle les utilisateurs peuvent acheter et  vendre tous types de produits, neufs et d’occasion.
C2C signifie “Customer to Customer”, c’est-à-dire que les utilisateurs n’achètent pas à un fournisseur, mais directement à d’autres utilisateurs.


# Technique
## Langages et Framework
* Front-end :  ReactJs, MaterialUI
* Back-end : NodeJs, ExpressJs
    
## Base de données
* Postgres, Sequelize


# Fonctionnalités
## Utilisateur non connecté
* Effectuer une recherche
* Consulter une annonce


## Utilisateur connecté :
* Créer une annonce
* Contacter un vendeur par message
* Modifier son profil
* Modifier / Supprimer son annonce
* Mettre une note à un vendeur dont il a acheté le produit
* Ajouter un item dans ses annonces favorites

## Administrateur
* Confirmer une annonce
* Supprimer une annonce
* Supprimer une note
* Supprimer un compte utilisateur


# Architecture du site
* Accueil
* Catégories
* Recherche
* Détail du produit
* Page d’authentification :
* - Log in
* - Sign up
* Profil utilisateur
* Annonces favorites
* Messages
* Panel admin
