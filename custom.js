const navbarCollapse = document.getElementById("navbarNavAltMarkup");
const navItems = navbarCollapse.querySelectorAll(".nav-link");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    navItems.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});


document.addEventListener("scroll", function () {
  let fromTop = window.scrollY + 1;
  navbarCollapse.querySelectorAll(".nav-link").forEach((link) => {
    let section = document.querySelector(link.hash);
    if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navItems.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    }
  });
});

// Function to open the modal and display the image
// function openModal(imageSrc) {
//   var modal = document.getElementById("myModal");
//   var modalImg = document.getElementById("modalImg");
//   modal.style.display = "block";
//   modalImg.src = imageSrc;
// }

// // Function to close the modal
// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }

// // Close the modal if the user clicks outside of it
// window.onclick = function (event) {
//   var modal = document.getElementById("myModal");
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  
  // Add the blur class to the background elements
  var backgroundElements = document.querySelectorAll(".container > *");
  backgroundElements.forEach(function(element) {
    element.classList.add("blur-background");
  });
  
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("myModal");
  
  // Remove the blur class from the background elements
  var backgroundElements = document.querySelectorAll(".container > *");
  backgroundElements.forEach(function(element) {
    element.classList.remove("blur-background");
  });
  
  modal.style.display = "none";
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
})

const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const h2Elements = document.querySelectorAll('h2');
const h4Elements = document.querySelectorAll('h4');
const pElements = document.querySelectorAll('#Home p'); // Assuming 'Home' is the ID of the container for your paragraphs.

let isDarkMode = false;

moonIcon.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    headings.forEach((heading) => {
        heading.style.color = 'white'; // Set your dark mode heading color
    });

    // Set h2 elements to green in dark mode
    h2Elements.forEach((h2) => {
        h2.style.color = '#F08080';
    });
// Set h4 elements to green in dark mode
    h4Elements.forEach((h4) => {
        h4.style.color = '#A8D8B9';
    });

    // Set paragraphs to green in dark mode
    pElements.forEach((p) => {
        //p.style.color = '#FFDDBB';
    });

    isDarkMode = true;
    moonIcon.style.display = 'none'; // Hide the sun icon
    sunIcon.style.display = 'inline'; // Display the moon icon
    sunIcon.classList.remove('fa-moon');
    sunIcon.classList.add('fa-sun');
    sunIcon.style.color = 'black'; // Set the color of the sun icon to black
});
sunIcon.addEventListener('click', () => {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    headings.forEach((heading) => {
        heading.style.color = 'black'; // Set your light mode heading color
    });

    // Reset h2 elements to their default color in light mode
    h2Elements.forEach((h2) => {
        h2.style.color = '';
    });

    // Reset h4 elements to their default color in light mode
    h4Elements.forEach((h4) => {
        h4.style.color = '';
    });

    // Reset paragraphs to their default color in light mode
    pElements.forEach((p) => {
       p.style.color = '';
    });
isDarkMode = false;
    sunIcon.style.display = 'none'; // Hide the moon icon
    moonIcon.style.display = 'inline'; // Display the sun icon
    moonIcon.classList.remove('fa-sun');
    moonIcon.classList.add('fa-moon');
    moonIcon.style.color = 'black'; // Set the color of the moon icon to black
});

// Detect the initial mode (e.g., based on user preferences)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    moonIcon.click(); // If the user prefers dark mode, set it by default
}



window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i=0; i< reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint ){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}









