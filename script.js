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

let links = document.querySelectorAll(".elementosHeader p a");
for (item of links) {
  item.addEventListener("click", function () {
    alert("oi");
  });
}
