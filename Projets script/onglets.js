 function openOnglet(evt,name){

    /*declaration des variables */

   var i, tabcontent , tablinks;

   /*recuperer tous les elements de la class tabcontent et les stocke dans le tableau tabcontent */

   tabcontent = document.getElementsByClassName("tabcontent");

   /*parcourir tous les elements du tableau et masqués */

   for ( i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "None";
   }

    tablinks = document.getElementsByClassName('tablinks');
    
    for ( i = 0;  i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace("active","");
        
       }

       document.getElementById(name).style.display = "block";
       evt.currentTarget.className += "active";
 }    