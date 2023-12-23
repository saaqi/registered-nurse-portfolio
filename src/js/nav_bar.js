// Navigation
/* ## Set Mobile Navigation stuff
--------------------------------------------- */
// selecting the element
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav.nav-primary");

// Functionality for main menu-toggle button
menuButton.addEventListener("click", function () {
  // Show site navigation
  navigation.classList.toggle("show");

  // toggle activated class
  menuButton.classList.toggle("activated");
  menuButton.classList.toggle("bx-x");

  // toggle attrs
  if (menuButton.getAttribute("aria-expanded") === "true") {
    menuButton.setAttribute("aria-expanded", "false");
  } else {
    menuButton.setAttribute("aria-expanded", "true");
  }

  if (menuButton.getAttribute("aria-pressed") === "true") {
    menuButton.setAttribute("aria-pressed", "false");
  } else {
    menuButton.setAttribute("aria-pressed", "true");
  }

  // Show Main Navigation
});

// Collapse menu on click
const menuLinks = document.querySelectorAll(
  ".primary-menu .menu-item a, a.top-link, .site-title a"
);
// Functionality of individual links
menuLinks.forEach((eachLink) => {
  eachLink.addEventListener("click", function () {
    // Hide Main Navigation on click
    navigation.classList.remove("show");

    // remove activated class and attrs from menu-toggle button
    menuButton.classList.remove("activated");
    menuButton.classList.remove("bx-x");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-pressed", "false");
  });
});

/* ## Add dark claass to the header and top link
--------------------------------------------- */
window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    document.querySelector("body").classList.add("dark");
  } else {
    document.querySelector("body").classList.remove("dark");
  }
});



/* ## Scrol Behavious
--------------------------------------------- */
// const navHeight = document.getElementById('header').offsetHeight
