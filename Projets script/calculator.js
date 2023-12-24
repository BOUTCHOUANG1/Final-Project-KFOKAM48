let inputBox = document.getElementById('inputBox')

// on recupère tous les boutons et on les stockent 
let buttons = document.querySelectorAll('button')
let dot =0;
let regexSigne = /[0-9]/


//on declare une variable empty
let string = "0"


function displayResult() {
    if (string == Infinity) {
        string = "error"  
    } 
    inputBox.value = string;
}

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{  
        if(b.target.value == '='){
            string= String(eval(string))
            displayResult();
        }
        else if(b.target.innerText == "AC"){
            string = ""
            displayResult(); 
        }
        // gestion de la fonction DEL
        else if(b.target.innerText == "DEL"){
            string = string.substring(0, string.length-1)
            displayResult(); 
        }
        //percentage button
        // verifier si le texte du button cliqué est egal a %
        else if (b.target.value == "%"){
             // on convertit la chaine de caractère contenue dans la variable string en un nombre a virgurle flottante
             if (string.length >= 1) 
              /*    string = parseFloat(string.substring(-0,string))
                console.log(((0,string)));  */
                // on convertit le resultat du calcul en une chaine de caratère en utilisant la function "toString"
                string = (string/100).toString() 
                console.log(string);
            //la longueur de la chaine de caractère contenue dans la variable "string" 
            /*  if (string.length >= 1) {

               
             } */
         
        }
        else if (b.target.id == "plusMinus") {
            string= String(-eval(string))
            displayResult();
        }
        if (b.target.value== ".") {
            console.log(dot);
            if (dot==0) {
               
                string += ".";
                dot =1;
            } else {
               
            }
            displayResult();
        }
        else{
        
            
          
            if (b.target.classList== "opr") {
              
                if (b.target.id !="pourcentage") {
                    dot =0;
                    let dernierChiffre = string[string.length-1];
                    console.log(dernierChiffre);
                    if (dernierChiffre.match(regexSigne)) {
                       string += b.target.value;  
                    }else{
                        console.log("on ajoute plus");
                    }
                   
                }else{
                    dot =1;
                }
               
              } 

              else {
                
                if ((b.target.id != "eqBtn")&&(b.target.id != "plusMinus")) {
                    string += b.target.value;
                  
                }
              }
              
              displayResult();
            

          
        }
    })
    
})