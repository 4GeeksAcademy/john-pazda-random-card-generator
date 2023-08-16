/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "🤴",
    "👸",
    "🂻",
    "A"
  ];
  let suits = ["❤️", "♠︎", "♣", "♦️"];

  const randomValueGenerator = Math.floor(Math.random() * cardValues.length);
  const randomSuitGenerator = Math.floor(Math.random() * suits.length);

  let cardValue = document.querySelector(".values");
  cardValue.textContent = cardValues[randomValueGenerator];

  let topSuit = document.querySelector("#top");
  let bottomSuit = document.querySelector("#bottom");

  topSuit.textContent = suits[randomSuitGenerator];
  bottomSuit.textContent = suits[randomSuitGenerator];
};
