
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


function initArticle(){
  const articleBtn = document.querySelectorAll(".articleBtn");
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  
  const artigo = document.querySelectorAll(".articleText");
  const cardArtigo = document.querySelectorAll(".article");
  const exit = document.querySelectorAll(".exit");
  
  function desaturateBg(){
    header.style.filter = 'brightness(40%)';
    main.style.filter = 'brightness(40%)';
  }
  
  function toExit(index){
    artigo[index].style.display ='none';
    main.style.filter =  'brightness(100%)';
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
}
initArticle();


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
