var myInput = document.getElementById("psw");
var letter = document.getElementById('letter');
var capital = document.getElementById('capital');
var number = document.getElementById('number');
var length = document.getElementById('lenght');

/* lorsque l'utilisateur clique sur le champ du mot de passe affichez  la boite message*/
myInput.onfocus = function() {
     document.getElementById("message").style.display = "block"

}
myInput.onblur = function() {
    document.getElementById("message").style.display = "none"
    
}
/* lorsque l'utilisateur commence a taper chose dans le champ  mot d paase*/
myInput.onkeyup = function() {
    /* valider les lettres minuscules */
 var lowerCaseLetters = /[a-z]/g
 if(myInput.value.match( lowerCaseLetters)){
    /* si le mot de passe contient une lettre minuscule enlever la classe "invalid" et ajouter la classe valid */
    letter.classList.remove('invalid');
    letter.classList.add('valid');
 } else{
    /* si non enlever la classe "valid"et ajouter la classe "invalid" */
    letter.classList.remove('valid');
    letter.classList.add('invalid');
 }
 /* valider les lettres majuscules */
 var upperCaseLetters = /[A-Z]/g
 if(myInput.value.match( upperCaseLetters)){
    /* si le mot de passe contient une lettre majuscule enlever la classe "invalid" et ajouter la classe valid */
    capital.classList.remove('invalid');
    capital.classList.add('valid');
 } else{
    /* si on enlever la classe "valid"et ajouter la classe "invalid" */
    capital.classList.remove('valid');
    capital.classList.add('invalid');
 }
 /* valider les nombres  */
 var numbers = /[0-9]/g
 if(myInput.value.match(numbers)){
    /* si le mot de passe contient un chiffre enlever la classe "invalid" et ajouter la classe valid */
    number.classList.remove('invalid');
    number.classList.add('valid');
 } else{
    /* si non enlever la classe "valid"et ajouter la classe "invalid" */
    number.classList.remove('valid');
    number.classList.add('invalid');
 }
 /* validerla longueur */
 
 if(myInput.value.length >=8){
    /* si le mot de passe contient un minimun de 8 caractère enlever la classe "invalid" et ajouter la classe valid */
    length.classList.remove('invalid');
    length.classList.add('valid');
 } else{
    /* si non enlever la classe "valid"et ajouter la classe "invalid" */
    length.classList.remove('valid');
    length.classList.add('invalid');
 }
    
}