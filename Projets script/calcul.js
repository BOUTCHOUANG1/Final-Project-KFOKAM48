var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var Message = document.querySelector('.Message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section = document.querySelector('section');
var compteur= 0;
// nombre aleatoires Debut jeu 
 random1 = Math.floor(Math.random()*11) << 0;//pour generer des nombres entre 0 et11 
 random2 = Math.random()*11 << 0;
  console.log(random1);
  console.log(random2);
// inserer les nombres au hazard dans les variables nb1 et nb2
nb1.innerHTML = random1;
nb2.innerHTML = random2;

//fonction de verification

function verifier() {
    // recuperer le resultat entré par le joueur
    var res = document.querySelector('.res').value;
   /*  alert(res) */
    if(random1 + random2 == res){
     Message.style.background ="green";
     Message.innerHTML ="Correcte."
     //creer d'autres nombres aleatoire
      random1 = Math.floor(Math.random()*11) << 0;
     random2 = Math.random()*11 << 0;
     nb1.innerHTML = random1;
     nb2.innerHTML = random2;  
     compteur = compteur +1

   }
   else{
     Message.style.background ="red";
     Message.innerHTML ="vous avez perdu."
     section.innerHTML = " ";
     score.innerHTML = `<span>${compteur}</span></br> Score`
     link.style.display = "block"
   } 
}