let error =  document.querySelector('.error_message');
let longLink =  document.querySelector('.long_link');
let short =  document.querySelector('.result');


async function shortLinkFunct() {

  //verificatin input
  if(!longLink.value == "") {
      //vider l'erreur
      error.innerHTML = "";
      //connection API
      let url = `https://tinyurl.com/api-create.php?url=${encodeURI(longLink.value)}`;

      fetch(url)
          .then(response => response.text())

          .then(data => {short.innerHTML = data})

          short.style.display = "block";
    //vider l'erreur
    //connection a API
    if(short.innerHTML.length ==0){
      short.innerHTML="lien non Valide !"
    }
  }
  
  else{
    error.innerHTML = "veuillez remplir le champ!";
    short.style.display = "none";
  }

}