const body = document.querySelector("body");
const list = document.querySelector("ul"); // make parent a variable to put Event Delegation on this
const cells = document.querySelectorAll(".cell"); // returns an array of all the "cells"
const randomInt = Math.floor(Math.random() * 16); // 16 cells, but it starts at 0, so times by 16 not 17
cells[randomInt].id = "it"; //makes the id "it"

const clickFunction = (e) => {
  if (e.target.id === "it") {
    e.target.style.backgroundColor = "red";
    e.target.textContent = "IT";
    body.style.backgroundColor = "black";
    list.removeEventListener("click", clickFunction);
  } else if (e.target.classList.contains("cell")) {
    e.target.style.backgroundColor = "green";
  }
};

list.addEventListener("click", clickFunction);
