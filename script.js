// Select the grid container
gridContainer = document.querySelector(".container");

const gridSize = 16;
function createGrid(gridSize) {
  for (let i = 1; i <= gridSize; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("grid-column", "grid-cell");
  
    for (let j = 1; j <= gridSize; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("grid-row", "grid-cell");
      gridColumn.appendChild(gridRow);
  
    }
    gridContainer.appendChild(gridColumn);
  }
}

// Create grid
createGrid(gridSize);

// Add  button to resize the grid
const resizeGridBtn = document.createElement('button');
resizeGridBtn.textContent = 'Grid Size';
resizeGridBtn.classList.add('resize-grid-btn');
gridContainer.parentNode.insertBefore(resizeGridBtn, gridContainer);

resizeGridBtn.addEventListener('click', () => {
  input = prompt('Enter a number between 1 and 100');
  input = Math.abs(parseInt(input));
  if (input !== NaN) {
    if (input > 0 && input <= 100) {
      // cells.forEach((cell) => cell.style.backgroundColor = 'white');
      gridContainer.replaceChildren();
      createGrid(input);
      colorGrid();
    } else {
      alert('Please enter a number between 1 - 100!')
    }
  }
});


function colorGrid() {
  // Apply colorCell() to all the cells in the grid
  const cells = document.querySelectorAll('.grid-cell');
cells.forEach((cell) => colorCell(cell));
}
colorGrid();

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