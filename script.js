// Select the grid container
gridContainer = document.querySelector(".container");

// Create grid cells
for (let i = 1; i <= 16; i++) {
  const gridColumn = document.createElement("div");
  gridColumn.classList.add("grid-column", "grid-cell");

  for (let j = 1; j <= 16; j++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row", "grid-cell");
    gridColumn.appendChild(gridRow);

  }
  gridContainer.appendChild(gridColumn);
}

// Apply colorCell() to all the cells in the grid
const cells = document.querySelectorAll('.grid-cell');
cells.forEach((cell) => colorCell(cell));


function generateRandomNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}

// Function to color a cell on mouse hover event
function colorCell(cell) {
  cell.addEventListener('mouseover', (event) => {
    event.stopPropagation();
    randomColor = `rgb(${generateRandomNumber(255)} ${generateRandomNumber(255)} ${generateRandomNumber(255)})`
    cell.style.backgroundColor = randomColor;
  })
}