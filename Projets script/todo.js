var addToDoButton = document.getElementById("addToDo");
var toDoContainer = document.getElementById("toDoContainer");
var inputField = document.getElementById("inputField");


addToDoButton.onclick = function(){
  //Verifier si l'input est vide
  if (inputField != "") {
    //si l'input n'estpas vide on crée un paragraphe
    var paragraphe = document.createElement('p')
  } else {
  }
    //Valorisé ce paragraphe avec le contenu de l'input
  paragraphe.innerText = inputField.value ;

  //Styliser le paragraphe
  paragraphe.classList.add('paragraphe_style')

  //inserer le paragraphe dans l'element toDoContainer
  toDoContainer.appendChild(paragraphe);

  //vider l'input quand le paragraphe est ajouter
  inputField.value = "";

  //barré le paragraphe quand on  clique dessus 
  paragraphe.addEventListener('click', function () {
    paragraphe.classList.add("paragraphe_click")
  })

  //supprimer la tache quand on  double clique sur la tache
  paragraphe.addEventListener('dblclick', function (e) {
    e.target.remove();
  }) 
}