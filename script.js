let loader = document.querySelector("#pre-loader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

const navbar = document.querySelector(".navbar");

const navMenu = document.querySelector(".nav-menu");

const hamburger = document.querySelector(".navbar");
navbar.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".navbar a").addEventListener("click", () => {
  navbar.removeClass("active");
});

