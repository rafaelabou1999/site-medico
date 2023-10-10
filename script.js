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

//Saiba mais
const boxH2 = document.querySelectorAll(".boxH2");

const boxP = document.querySelectorAll(".box p");

boxH2.forEach((box, index) => {
  box.addEventListener("click", function (e) {
    boxP.forEach((p, i) => {
      if (index == i) {
        p.classList.toggle("display");
      }
    });
  });
});

const span = document.querySelectorAll("span");
const mais = document.querySelectorAll(".mais");
const menos = document.querySelectorAll(".menos");

boxH2.forEach((box, index) => {
  box.addEventListener("click", function () {
    span.forEach((spn, i) => {
      if (index == i - 1) {
        if (spn.innerHTML == "+") {
          spn.innerHTML = "-";
        } else {
          spn.innerHTML = "+";
        }
      }
    });
  });
});
