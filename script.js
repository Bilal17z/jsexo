const resultat = 54;
let chiffre = window.prompt("Donner un chiffre", "");

function jeu() {

   
    while (chiffre != resultat) {
        chiffre = window.prompt("Donner un chiffre", "");
        if (chiffre == resultat ){
            alert("félicitation c'est le bon résultal")
        }
        else if (chiffre > resultat) {
        alert("Le résultat est trop haut")
        }
        else if (chiffre < resultat) {
            alert("Le résultat est trop bas ")
        } 
      }
   

}

console.log(jeu());