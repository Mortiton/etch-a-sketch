//DECLARATIONS
let gridNumber = 16;
let sides = 0.0;
let mouseDown = false;

//FUNCTIONS

// //creates the grid
function createDiv(numberOfGrids) {
  //Reset the grids
  gameContainer.innerHTML = "";

  let grids = numberOfGrids * numberOfGrids;
  sides = calcMeasurements(numberOfGrids);

  for (i = 0; i < grids; i++) {
    let grid = document.createElement("div");
    grid.setAttribute("class", "grid");
    grid.style.flexBasis = sides;
    grid.addEventListener("mousedown", changeColor);
    grid.addEventListener("mousemove", changeColor);

    gameContainer.appendChild(grid);

    setGridSize(grid, sides);
  }
}

//Calculate grid width and height
function calcMeasurements(numberOfGrids) {
  // Convert border size to percentage, 2 is the number of pixels to take into account for the border
  let borderSizeInPercentage =
    ((2 * numberOfGrids) / gameContainer.offsetWidth) * 100;

  // Subtract border size from total size and divide by number of grids
  let sides = (100 - borderSizeInPercentage) / numberOfGrids + "%";

  return sides;
}

//Draw effect
document.body.onmousedown = function () {
  mouseDown = true;
};
document.body.onmouseup = function () {
  mouseDown = false;
};
//Assigns a random colour to the draw effect
function changeColor(e) {
    if (mouseDown) {
      let color1 = Math.floor(Math.random() * 256);
      let color2 = Math.floor(Math.random() * 256);
      let color3 = Math.floor(Math.random() * 256);
  
      e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
  }

//set height and width attributes of the grids created in the createDiv function
function setGridSize(grid, sides) {
  grid.style.height = sides;
  grid.style.width = sides;
}

//Button functions
function gridSelectClickEvent() {
  gridNumber = prompt("How many grids do you want?");
  if (gridNumber > 100) {
    alert("Cannot set grids above 100!");
    gridNumber = 16;
  } else {
    createDiv(gridNumber);
  }
}

function clear() {
  createDiv(gridNumber);
}

//DOM ELEMENTS
const gameContainer = document.querySelector("#game-container");
const gridSelectBtn = document.querySelector("#grid-select");
const clearBtn = document.querySelector("#clear");

gridSelectBtn.addEventListener("click", gridSelectClickEvent);
clearBtn.addEventListener("click", clear);

//Page start with a default grid of 16 by 16
window.onload = () => {
  createDiv(16);
};
