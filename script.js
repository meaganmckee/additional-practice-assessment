const body = document.querySelector("body");
const cellContainer = document.querySelector(".cell-container");
const cells = document.querySelectorAll(".cell"); // returns an array of all the "cells"
const randomInt = Math.floor(Math.random() * 16);

const chosenOne = cells[randomInt].setAttribute("id", "it"); //setting the attribute id of IT

const makeActive = (event) => {
  if (event.target.classList.contains("cell")) {
    // first we want to see if that square has a class of "cell"
    event.target.classList.add("active");
  }
};

cellContainer.addEventListener("click", makeActive);

cellContainer.addEventListener("click", (event) => {
  if (event.target.getAttribute("id") === "it") {
    //this is listening for id = to it to run different function
    body.classList.add("gameover"); // adds the class of game over
    event.target.classList.add("red"); // adds the class or red
    event.target.textContent = "IT"; // adds the text content when the box is clicked
    cellContainer.removeEventListener("click", makeActive); // removes the eventListener
  }
});
