const navBar = document.querySelector("nav");
     const menuLists = document.querySelectorAll("a.sidebar_link");
      // console.log(mainSection);
      // liens  = document.querySelectorAll("a")
      // console.log(menuLists);

      var btnLength = menuLists.length;
      
      /* ajouter un evenement au click pour chaque list */
  console.log(menuLists);
  const mainSection = document.querySelector('#section');

// for (const link of menuLists) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();
//      fetch(`${link.html}`)
//     fetch(event.target.href)
//       .then(response => response.text())
//       .then(htmlContent=> {
//         mainSection.innerHTML = htmlContent;
//       })
//       .catch(error => console.error('Error fetching link:', error));
//   });
// }

for (const link of menuLists) {
  const url = `${this.id}.html`;
  fetch(url)
    .then(response => response.text())
    .then(htmlContent => {
      // Process the fetched HTML content
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
      
        // Fetch the HTML content of the clicked link
        fetch(`${this.id}.html`)
          .then(response => response.text())
          .then(htmlContent => {
            // Replace the content of the section with the fetched HTML content
            const sectionElement = document.querySelector('#section');
            sectionElement.innerHTML = htmlContent;
          })
          .catch(error => console.error('Error fetching HTML content:', error));
      });
    })
}

for (var i = 0; i < btnLength; i++) {
  menuLists[i].addEventListener("blur", function() {
      // Lorsque le bouton perd le focus, changez sa couleur de fond
      this.style.backgroundColor = '#e8e8e8';
  });
}  
        
      
     
      // Démarrez une autre boucle pour ajouter un écouteur d'événements 'blur' à chaque bouton
