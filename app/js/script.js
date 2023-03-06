const header = document.querySelector(".header");
const body = document.body;
const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector("#overlay");
const fadeElements = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    body.classList.remove("no-scroll");
    header.classList.remove("open");
    fadeElements.forEach((e) => {
      e.classList.remove("fade-in");
      e.classList.add("fade-out");
    });
  } else {
    body.classList.add("no-scroll");
    header.classList.add("open");
    fadeElements.forEach((e) => {
      e.classList.add("fade-in");
      e.classList.remove("fade-out");
    });
  }
});
