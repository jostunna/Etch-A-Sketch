const gridContainer = document.getElementById("grid-container");
const createGridButton = document.getElementById("create-grid");
const square = document.createElement("div");
square.classList.add("square");
gridContainer.appendChild(square);

createGridButton.addEventListener("click", () => {
  let size = +prompt("Enter number of squares");
  console.log(Number.isInteger(size));
});
