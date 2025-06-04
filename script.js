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
