"use strict";
import { content } from "/js/data.js";

// selecting dropdown links
const englishLink = document.getElementById("englishLink");
const italianLink = document.getElementById("italianLink");

englishLink.addEventListener("click", () => changeLang("en"));
italianLink.addEventListener("click", () => changeLang("it"));

const allLangEls = document.querySelectorAll(
  Object.keys(content)
    .map((key) => `.${key}`)
    .join(", ")
);

const storedLang = localStorage.getItem("site-lang");
const currentLang = storedLang ? storedLang : "en";
changeLang(currentLang);

function changeLang(newLangCode) {
  localStorage.setItem("site-lang", newLangCode);
  for (const el of allLangEls) {
    //Loop through all of those HTML elements that have a class from our content object
    el.textContent = content[el.classList[0]][newLangCode]; //Replace the text for that element with the right text from the content object
  }
}
