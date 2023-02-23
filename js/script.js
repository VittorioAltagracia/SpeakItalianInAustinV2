"use strict";
import { content } from "/js/data.js";

// selecting dropdown links
const englishLink = document.getElementById("englishLink");
const italianLink = document.getElementById("italianLink");

englishLink.addEventListener("click", () => changeLang("en"));
italianLink.addEventListener("click", () => changeLang("it"));
// Selecting html tag and assigning lang value to a variable and adding it to a local storage
const html = document.querySelector(".html");
let language = html.getAttribute("lang");
console.log(language);

// storing current language in local storage
// const storeLang = localStorage.setItem("lang", language);
// retrieving current language from a local storage

const allLangEls = document.querySelectorAll(
  Object.keys(content)
    .map((key) => `.${key}`)
    .join(", ")
);

//Overall, the query will get all HTML elements whose first class matches any of the content object keys above
function changeLang(newLangCode) {
  for (const el of allLangEls) {
    //Loop through all of those HTML elements that have a class from our content object
    el.textContent = content[el.classList[0]][newLangCode]; //Replace the text for that element with the right text from the content object
    localStorage.setItem("lang", language);
  }
}

const storedLang = localStorage.getItem("lang");

if (storedLang === "en") {
  changeLang("it");
} else if (storedLang === "it") {
  changeLang("en");
} else if (storedLang === "en-it") {
  italianLink.addEventListener("click", () => changeLang("it"));
  englishLink.addEventListener("click", () => changeLang("en"));
}

// const currentLang = storedLang ? storedLang : "en";

// Calling a function each time someone clicks on a link
