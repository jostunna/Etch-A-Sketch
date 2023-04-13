const gridContainer = document.getElementById("grid-container");
const createGridButton = document.getElementById("create-grid");

createGridButton.addEventListener("click", () => {
  let size = +prompt("Enter number of squares");
  if (size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a valid number between 1 and 100");
  }
});

function createGrid(size) {
  // Remove existing squares
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }

  // Create new squares
  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
  }
}
