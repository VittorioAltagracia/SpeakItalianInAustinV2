"use strict";
// logic for mouseover/ mouseout
const firstImg = $(".firstImg");
const firstCard = $(".firstCard");
const secondImg = $(".secondImg");
const secondCard = $(".secondCard");

function ShowCard(img, card) {
  if (img) {
    $(img).on("mouseover", () => {
      if ($(card).hasClass("hidden")) {
        $(card).removeClass("hidden");
      }
    });

    $(img).on("mouseout", () => {
      $(card).addClass("hidden");
    });
  }
}

ShowCard(firstImg, firstCard);
ShowCard(secondImg, secondCard);
