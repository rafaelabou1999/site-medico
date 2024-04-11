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
const header = document.querySelector("header");
const main = document.querySelector("main");

const artigo = document.querySelectorAll(".articleText");
const cardArtigo = document.querySelectorAll(".article");
const exit = document.querySelectorAll(".exit");

function desaturateBg(){
  header.style.filter = 'saturate(0)';
  main.style.filter = 'saturate(0)';
}

function toExit(index){
  artigo[index].style.display ='none';
  header.style.filter = 'saturate(100%)';
  main.style.filter = 'saturate(100%)';
}

exit.forEach((eachExit, index) => {
  eachExit.addEventListener("click", () => {
    toExit(index);
  })
})

function displayArticle(index){
  artigo[index].style.display = 'block';
  desaturateBg();
}


cardArtigo.forEach((card,index) => {
  card.addEventListener('click', () => {
    displayArticle(index)
  })
})
