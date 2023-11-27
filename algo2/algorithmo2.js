// Définition de la structure pour chaque personne
class Person {
  constructor(sexe, age) {
    this.sexe = sexe;
    this.age = age;
  }
}

// Fonction pour lire les données des 50 personnes
function readPeople() {
  let people = [];

  // Boucle pour créer les données de chaque personne
  for (let i = 0; i < 50; i++) {
    let sexe = Math.random() < 0.5 ? 'Masculin' : 'Féminin'; // Attribution aléatoire du sexe
    let age = Math.floor(Math.random() * 100) + 1; // Attribution aléatoire de l'âge entre 1 et 100

    // Création d'une nouvelle personne et ajout à la liste
    people.push(new Person(sexe, age));
  }
  return people;
}

// Fonction pour calculer les statistiques des personnes
function calculateStatistics(people) {
  let majeures = 0;
  let mineures = 0;
  let majeuresMasculin = 0;
  let mineuresFeminin = 0;
  let personneFeminine = 0;

  // Calcul des différentes statistiques
  people.forEach((person) => {
    if (person.age >= 18) {
      majeures++;
      if (person.sexe === 'Masculin') {
        majeuresMasculin++;
      }
    } else {
      mineures++;
      if (person.sexe === 'Féminin') {
        mineuresFeminin++;
      }
    }
    if (person.sexe === 'Féminin') {
      personneFeminine++;
    }
  });

  // Calcul des pourcentages
  let pourcentageMajeures = (majeures / people.length) * 100;
  let pourcentageFemmes = (personneFeminine / people.length) * 100;

  // Affichage des résultats
  console.log('Nombre de personnes majeures :', majeures);
  console.log('Nombre de personnes mineures :', mineures);
  console.log(
    'Nombre de personnes majeures de sexe masculin :',
    majeuresMasculin
  );
  console.log('Nombre de femmes mineures :', mineuresFeminin);
  console.log(
    'Pourcentage de personnes majeures par rapport au nombre total de personnes :',
    pourcentageMajeures.toFixed(2) + '%'
  );
  console.log(
    'Pourcentage de femmes par rapport au nombre total de personnes :',
    pourcentageFemmes.toFixed(2) + '%'
  );
}

// Exécution du programme
let PEOPLE = readPeople(); // Charger les données des 50 personnes
calculateStatistics(PEOPLE); // Calculer et afficher les statistiques
