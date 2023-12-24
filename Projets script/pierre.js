const contenantChoixOrdinateur = document.getElementById('choix-ordinateur');
const contenantChoixUtilisateur = document.getElementById('choix-utilisateur');
const contenantResultat = document.getElementById('resultat');
/* console.log(resultat); */
const choixPossible = document.querySelectorAll('button');
 let choixUtilisateur;
 let choixOrdinateur;
  let resultat; 

/* console.log(choixPossible) */
// ajouter un evenement "click sur les boutons"
choixPossible.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
//recuperation de l'id du bouton cliqué
  choixUtilisateur = e.target.id;
  /* console.log(choixUtilisateur) */
    // on ajoute l'image qui correspond au choix
   contenantChoixUtilisateur.innerHTML = `<img src ="../images/png/${choixUtilisateur}.png">`
  generer_choix_ordinateur() 
  verification()
}))


// function pour génerer le choix de l'utilisateur

function generer_choix_ordinateur(){
    //genéer les nombres compris entre 0 et 3
    random = Math.floor(Math.random()*3)+1 
    if (random === 1) { // single choix de l'utilisateur =1
        choixOrdinateur = "pierre"
   }
    if (random === 2) {
        choixOrdinateur = "papier"
   }
    if (random === 3) {
        choixOrdinateur = "ciseaux"
    
   }
    // on ajoute l'image qui correspond  au choix
    contenantChoixOrdinateur.innerHTML =`<img src="../images/png/${choixOrdinateur}.png">`
   
}

 //fonction pour verifier si le joueur a gagne
 function verification() {
    if (choixUtilisateur == choixOrdinateur) {
        resultat = "Egalité!" ;
     }
     if (choixUtilisateur =="pierre" && choixOrdinateur == "papier" ) {
        resultat = "perdu!"
     }
     if (choixUtilisateur == "papier" && choixOrdinateur == "ciseaux" ) {
         resultat = "perdu !"
     }
     if (choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre") {
        resultat = "perdu!"
     }
     // les gains
     if (choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux") {
        resultat ="gagné!"
     }
     if (choixUtilisateur == "ciseaux" && choixOrdinateur == "papier") {
        resultat ="gagné!"
     }
     if (choixUtilisateur == "papier" && choixOrdinateur == "pierre") {
        resultat ="gagné !"
     }
     contenantResultat.innerHTML = resultat;
 }
 


 