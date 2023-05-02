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
    let passes = 0;

    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseenter", () => {
      if (passes < 10) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgb(${red}, ${green}, ${blue})`;
        const black = `rgb(0, 0, 0)`;

        // square.style.backgroundColor = randomColor;
        square.style.backgroundColor = mixColors(randomColor, black, passes / 10);

        passes++;
      }
    });

    gridContainer.appendChild(square);
  }
}

function mixColors(color1, color2, weight) {
  // Convert colors to RGB arrays
  const rgb1 = color1.substring(4, color1.length - 1).split(", ");
  console.log(rgb1);
  const rgb2 = color2.substring(4, color2.length - 1).split(", ");
  console.log(rgb2);

  // Calculate mixed RGB values
  const red = Math.round(parseInt(rgb1[0]) * (1 - weight) + parseInt(rgb2[0]) * weight);
  const green = Math.round(parseInt(rgb1[1]) * (1 - weight) + parseInt(rgb2[1]) * weight);
  const blue = Math.round(parseInt(rgb1[2]) * (1 - weight) + parseInt(rgb2[2]) * weight);

  // Construct and return mixed color string
  return `rgb(${red}, ${green}, ${blue})`;
}
