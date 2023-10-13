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
});

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

const moonIcon = document.getElementById('moon-icon');
const sunIcon = document.getElementById('sun-icon');
const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
const h2Elements = document.querySelectorAll('h2');
const h4Elements = document.querySelectorAll('h4');
const pElements = document.querySelectorAll('#Home p'); // Assuming 'Home' is the ID of the container for your paragraphs.
const strongElements = document.querySelectorAll('#Home p strong'); // Select strong elements within 'p' elements.
const greenH5Elements = document.querySelectorAll('h5.green-h5'); // Select <h5> elements with the custom class.

let isDarkMode = false;

function enableDarkMode() {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    
    headings.forEach((heading) => {
        heading.style.color = 'white';
    });

    h2Elements.forEach((h2) => {
        h2.style.color = '#ADD8E6';
    });

    h4Elements.forEach((h4) => {
        h4.style.color = '#33b38b';
    });

    pElements.forEach((p) => {
        p.style.color = 'white';
    });

    strongElements.forEach((strong) => {
        strong.style.color = '#33b38b'; // Green color for strong in dark mode
    });

    greenH5Elements.forEach((h5) => {
        h5.style.color = '#33b38b'; // Green color for <h5> with the custom class in dark mode
    });

    isDarkMode = true;
}

function enableLightMode() {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    
    headings.forEach((heading) => {
        heading.style.color = 'black';
    });

    h2Elements.forEach((h2) => {
        h2.style.color = '';
    });

    h4Elements.forEach((h4) => {
        h4.style.color = '';
    });

    pElements.forEach((p) => {
        p.style.color = '';
    });

    strongElements.forEach((strong) => {
        strong.style.color = ''; // Reset to default color
    });

    greenH5Elements.forEach((h5) => {
        h5.style.color = ''; // Reset to default color for <h5> with the custom class
    });

    isDarkMode = false;
}

moonIcon.addEventListener('click', () => {
    enableDarkMode();
    moonIcon.style.display = 'none';
    sunIcon.style. display = 'inline';
    sunIcon.classList.remove('fa-moon');
    sunIcon.classList.add('fa-sun');
    sunIcon.style.color = 'black';
});

sunIcon.addEventListener('click', () => {
    enableLightMode();
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
    moonIcon.classList.remove('fa-sun');
    moonIcon.classList.add('fa-moon');
    moonIcon.style.color = 'black';
});

// Detect the initial mode (e.g., based on user preferences)
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    enableDarkMode(); // If the user prefers dark mode, set it by default
}

