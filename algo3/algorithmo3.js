// Fonction pour calculer le salaire en fonction des heures travaillées et du taux horaire
function calculerSalaire() {
  // Prompt pour connaître les heures travaillées et du taux horaire
  const heuresTravaillees = parseFloat(
    prompt("Entrez le nombre d'heures travaillées :")
  );
  const tauxHoraire = parseFloat(prompt('Entrez le taux horaire :'));

  let salaire;

  // Vérification des heures travaillées pour déterminer le salaire
  if (heuresTravaillees > 40) {
    const heuresNormales = 40; // Heures normales (jusqu'à 40 heures)
    const heuresSupplementaires = heuresTravaillees - heuresNormales; // Heures supplémentaires

    // Calcul du salaire pour les heures normales et supplémentaires
    salaire =
      heuresNormales * tauxHoraire + heuresSupplementaires * tauxHoraire * 1.5;
  } else {
    // Si les heures travaillées sont inférieures ou égales à 40 heures
    salaire = heuresTravaillees * tauxHoraire;
  }

  // Affichage du salaire
  console.log(
    'Le salaire perçu par le travailleur est de : ' +
      salaire.toFixed(2) +
      ' euros'
  );
}

// Appel de la fonction pour calculer le salaire
calculerSalaire();
