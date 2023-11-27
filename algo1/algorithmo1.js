// Prompt pour insérer un nombre
let number = parseInt(prompt('Entrez le nombre :'));

// Vérification de la parité du nombre
if (number % 2 === 0) {
  for (let i = number; i >= 0; i -= 2) {
    // La réponse est renvoyé dans la console
    console.log(i);
  }
} else {
  for (let i = number; i >= 1; i -= 2) {
    // La réponse est renvoyé dans la console
    console.log(i);
  }
}
