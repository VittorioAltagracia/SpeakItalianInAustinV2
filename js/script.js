"use strict";
import { content } from "/js/data.js";

// Selecting html tag and assigning lang value to a variable and adding it to a local storage
const html = document.querySelector(".html");
let language = html.getAttribute("lang");
console.log(language);
const storeLang = localStorage.setItem("lang", language);
const getLang = localStorage.getItem("lang");

const allLangEls = document.querySelectorAll(
  Object.keys(content)
    .map((key) => `.${key}`)
    .join(", ")
);

function changeLang(newLangCode) {
  for (const el of allLangEls) {
    //Loop through all of those HTML elements that have a class from our content object
    el.textContent = content[el.classList[0]][newLangCode]; //Replace the text for that element with the right text from the content object
    localStorage.setItem("lang", newLangCode);
  }
}

if (getLang === "en") {
  changeLang("en");
} else if (getLang === "it") {
  changeLang("it");
}

// selecting dropdown links
const englishLink = document.getElementById("englishLink");
const italianLink = document.getElementById("italianLink");

//Overall, the query will get all HTML elements whose first class matches any of the content object keys above

// Calling a function each time someone clicks on a link
englishLink.addEventListener("click", () => changeLang("en"));
italianLink.addEventListener("click", () => changeLang("it"));
