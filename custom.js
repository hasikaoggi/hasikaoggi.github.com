// Get references to the navbar-toggler button and the collapse element
const navbarCollapse = document.getElementById("navbarNavAltMarkup");
// Add a click event listener to each navigation item
const navItems = navbarCollapse.querySelectorAll(".nav-link");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", (e) => {
    // Remove active class from all nav links
    navItems.forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to clicked nav link
    e.target.classList.add("active");

    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  });
});

document.addEventListener("scroll", function () {
  let fromTop = window.scrollY;

  navbarCollapse.querySelectorAll(".nav-link").forEach((link) => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      navItems.forEach((link) => {
        link.classList.remove("active");
      });

      link.classList.add("active");
    }
  });
});
