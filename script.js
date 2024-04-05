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


const articleBtn = document.querySelectorAll(".articleBtn");
const atero = document.querySelector("#atero");
const filosofia = document.querySelector("#filosofia");
const risco = document.querySelector("#risco");
const exit = document.querySelectorAll(".exit");
const header = document.querySelector("header");
const main = document.querySelector("main");

const ateroArtigo = document.querySelector("#ateroArtigo");
const filosofiaArtigo = document.querySelector("#filosofiaArtigo");
const riscoArtigo = document.querySelector("#riscoArtigo");

const articleText = document.querySelectorAll(".articleText");

const riscoExit= document.querySelector(".riscoExit");
const ateroExit= document.querySelector(".ateroExit");
const filosofiaExit = document.querySelector(".filosofiaExit");
function desaturateBg(){
  header.style.filter = 'saturate(0)';
  main.style.filter = 'saturate(0)';
}
exit.forEach((eachExit) => {
  eachExit.addEventListener("click", () => {
    text.style.display ='none';
    header.style.filter = 'saturate(100%)';
    main.style.filter = 'saturate(100%)';
  })
})

atero.addEventListener("click", () => {
  desaturateBg();
  ateroArtigo.style.display = 'block';
})

filosofia.addEventListener("click", () => {
  desaturateBg();
  filosofiaArtigo.style.display = 'block';
})

risco.addEventListener("click", () => {
  desaturateBg();
  riscoArtigo.style.display = 'block';
})

ateroExit.addEventListener("click", () => {
  ateroArtigo.style.display = 'none';
  header.style.filter = 'saturate(100%)';
  main.style.filter = 'saturate(100%)';
})
filosofiaExit.addEventListener("click", () => {
  filosofiaArtigo.style.display = 'none';
  header.style.filter = 'saturate(100%)';
  main.style.filter = 'saturate(100%)';
})
riscoExit.addEventListener("click", () => {
  riscoArtigo.style.display = 'none';
  header.style.filter = 'saturate(100%)';
  main.style.filter = 'saturate(100%)';
})
