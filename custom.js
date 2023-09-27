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
  let fromTop = window.scrollY+1;
  navbarCollapse.querySelectorAll(".nav-link").forEach((link) => {
    let section = document.querySelector(link.hash);
   if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      navItems.forEach((link) => {
        link.classList.remove("active");
      });
      link.classList.add("active");
    }
  });
});
 
// Function to open the modal and display the image
function openModal() {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = "images/ai.jpg";
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModal");
  if (event.target == modal) {
      modal.style.display = "none";
  }
}






