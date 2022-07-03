"use strict";

// Define a global variable
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

const navbarChangeMode = "navbar__dark";

/**
 * A method to change navbar background when the scrolling position is higher than navbar height
 */
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add(navbarChangeMode);
  } else {
    navbar.classList.remove(navbarChangeMode);
  }
});
