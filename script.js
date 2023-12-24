// Select all the links in the sidebar
const links = document.querySelectorAll('.sidebar_link');

// Assume your name-box has a class of 'names'
const names = document.getElementsByClassName("name-box");

// Assume your burger menu has a class of 'burger'
var burgers = document.getElementsByClassName('burger');

// Assume your address-box has a class of address
var address = document.getElementsByClassName("address-box");

// Get all elements with the class 'burger-menu'
var menuItems = document.getElementsByClassName('burger-menu');

// Create an iframe
const iframe = document.createElement('iframe');

// Add a click event listener to each link
links.forEach(link => {

  link.addEventListener('click', function(event) {

    // Prevent the default action of the link
    event.preventDefault();

    // Construct the path to the HTML file
    const path = `Projets html/${event.currentTarget.id}.html`;

    // Set the src of the iframe to the path
    iframe.src = path;
    
    // Select the section element
    const section = document.querySelector('section');

    // Clear the section
    section.innerHTML = '';

    // Append the iframe to the section
    section.appendChild(iframe);

    for (let index = 0; index < menuItems.length; index++) {
      
      menuItems[index].style.display = "none";
      
    }
    
  });

});
// Add a click event listener to each burger menu
for(var j = 0; j < burgers.length; j++) {

  burgers[j].addEventListener('click', function() {

    // Define the media query
    var mediaQuery = window.matchMedia('(max-width: 768px)');

    // Loop through all elements and toggle their display property
    for(var i = 0; i < menuItems.length; i++) {
      if(mediaQuery ) {
        // console.log('Screen width is between 600px and 600px')
        if (menuItems[i].style.display === 'block') {
          
          menuItems[i].style.display = 'none';

          for (let i = 0; i < names.length; i++) {
            names[i].style.display = 'block';
          }
  
          for (let j = 0; j < address.length; j++) {
            address[j].style.display = 'block';
          }

        } else {

          menuItems[i].style.display = 'block';

          for (let i = 0; i < names.length; i++) {
            names[i].style.display = 'none';
          }
  
          for (let j = 0; j < address.length; j++) {
            address[j].style.display = 'none';
          }
        }
        
        if (menuItems[i].style.display === 'block') {
          iframe.style.display = 'none';
        } else {
          iframe.style.display = 'block';
        }
      }  
    }
  });
}

// add a click event listener to each burger-menu
for (let index = 0; index < menuItems.length; index++) {

  menuItems[index].addEventListener('click', function() {

    for(var i = 0; i < menuItems.length; i++) {

      if (menuItems[i].style.display === 'block') {
        iframe.style.display = 'none';
      } else {
        iframe.style.display = 'block';
      }
    }
  })
  
}
