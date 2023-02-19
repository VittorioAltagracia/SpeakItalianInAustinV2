"use strict";

// Selecting elements on Index Italian version
const chiSiamo = document.querySelector(".chi-siamo");
const carouselIt = document.getElementById("showCarIt");

// Selecting elements on Index English version
const lookAtUs = document.querySelector(".lookAtUs");
const carouselEn = document.getElementById("showCarEn");

// Variable that keeps track of the language on the page
let language = document.body.id;

switch (language) {
  case "it":
    chiSiamo.addEventListener("click", function () {
      carouselIt.classList.toggle("hidden");
    });
    break;

  case "en":
    lookAtUs.addEventListener("click", function () {
      carouselEn.classList.toggle("hidden");
    });
    break;
}
