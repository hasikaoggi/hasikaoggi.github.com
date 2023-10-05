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
function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Function to enable Dark Mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("mode", "dark");
}

// Function to enable Light Mode
function enableLightMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("mode", "light");
}

// Check user's preference from local storage
const savedMode = localStorage.getItem("mode");

// Apply saved mode (if available) on page load
if (savedMode === "dark") {
  enableDarkMode();
} else {
  enableLightMode();
}

// Dark Mode button click event
const darkModeButton = document.getElementById("darkModeButton");
darkModeButton.addEventListener("click", enableDarkMode);

// Light Mode button click event
const lightModeButton = document.getElementById("lightModeButton");
lightModeButton.addEventListener("click", enableLightMode);

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







