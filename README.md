# Probabilité disponibilité en AWS
----------------------------------------------------------------------------------------
## Q'est ce que la disponibilite
 __La disponibilité__ ou __availability__ ou encore __uptime__ est une mesure de performance.  C'est un
indicateur-qualité obtenu en divisant la durée durant laquelle ledit système est opérationnel  par
la durée totale pour laquelle on aurait souhaité qu’il le soit.  En d’autres termes, un ratio du
temps de disponibilité réelle sur le temps de disponibilité prévu, exprimé en général par un
pourcentage.
-------------------------------
## Composants
 *Nous allons utiliser les composants suivants pour implémenter notre architecture:*
* EC2: C’est un serveur privé virtuel qui tournera sous un système Windows ou Linux,
dans le contexte de ce chapitre chaque instance tournera sous un système Linux.
* Amazon RDS: C’est le service de base de données relationnelles distribué de la suite
AWS. Comme l’application dépendra d’une base de données, nous aurons besoin de
quelques serveurs de base de données.
* Elastic Load Balancer: Comme son nom l’indique, c’est load balancer ou un répartiteur
de charge. Comme nous utilisons plusieurs instances EC2, nous aurons besoin de
distribuer la charge entre chaque instance. ELB se charge d’acheminer ces charges à
chaque instance EC2 et cela, de façon équitable.
* Elastic File System: C’est un service de stockage en ligne fourni par AWS. Il est vrai qu’il
est tout à fait possible de stocker les données sur un serveur privé virtuel. Cependant, si
un jour il faudrait réinitialiser ou supprimer cette instance, alors tous les fichiers contenus
sur ce dernier seraient effacés.
--------------------------------
## la probabilite composants
*EC2 a probabilité de 90% ,RDS a probabilité de 99,95% ,ELB a probabilité de 99,99% ,EFS a probabilité de 99,99%*

---------------------------------------------------------------------------
## L'Etape à suivre pour la calcule la probabilité disponibilité 
* entre le nombre des composants EC2, RDS, ELB, EFS
* si le nombre des composants EC2, RDS, ELB, EF sont supérieur à un on doit faire  l’étape suivant de trouve l’indisponibilité sinon on a déjà une probabilité disponibilité de chaque instance EC2, RDS, ELB, EF
* pour calculer indisponibilité on doit le faire `(1-disponibilite)*nombre composant` c’est-à-dire l’évènement contraire de on doit l’expose le nombre d’instance que nous la mis 
* calcule la probabilité disponibilité de chaque instance  `(1-la probabilité d’indisponibilité de coposant EC2, RDS, ELB, EF)`
* la probabilité totale de disponibilité est la multiplié tous les probabilités de disponibilité pour avoir la probabilité disponibilité finale

