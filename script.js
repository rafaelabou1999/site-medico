
function initLoader(){
  let loader = document.querySelector("#pre-loader");

  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
}
initLoader();



function initBurger(){
  const navbar = document.querySelector(".navbar");
  const navMenu = document.querySelector(".nav-menu");
  const hamburger = document.querySelector(".navbar");
  
  navbar.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}
initBurger();


const articleBtn = document.querySelectorAll(".articleBtn");
const header = document.querySelector("header");
const main = document.querySelector("main");
  
const artigo = document.querySelectorAll(".articleText");
const cardArtigo = document.querySelectorAll(".article");
const exit = document.querySelectorAll(".exit");
  
artigo.forEach((item) => {
  item.style.display = "none"
})

function desaturateBg(){
  header.style.opacity = .6;
  main.style.opacity =.6;
}
  
function toExit(index){
  artigo[index].style.display ='none';
  main.style.opacity = 1;
  header.style.opacity = 1;
  header.style.filter = 'brightness(100%)';
}
  
exit.forEach((eachExit, index) => {
  eachExit.addEventListener("click", () => {
    toExit(index);
  })
})
  
function displayArticle(index){
  artigo[index].style.display = 'block';
  artigo[index].classList.toggle("active");
  desaturateBg();
}
  
  
cardArtigo.forEach((card,index) => {
  card.addEventListener('click', () => {
    displayArticle(index)
  })
})




function initScroll(){
  const btnHref = document.querySelectorAll("a[href^='#']")
  function toScroll(e){
     e.preventDefault();
     const href = e.currentTarget.getAttribute('href');
     const section = document.querySelector(href);
     section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
     })
  }
  
  
  btnHref.forEach((btn, e) => {
    btn.addEventListener("click", toScroll)
  })  
}
initScroll();
