
//DECLARATIONS

const gridNumber = 16; // number of div containers grids by default
const gameContainer = document.querySelector("#game-container");
let sides = 0.0;
let mouseDown = false;
gridArr = []

//FUNCTIONS

// //creates the grid
function createDiv(numberOfGrids){
    //Reset the grids
    gameContainer.innerHTML='';

    let grids = numberOfGrids * numberOfGrids;
    sides = calcMeasurements(numberOfGrids);

    for(i=0; i<grids; i++){

        let grid= document.createElement("div");
        grid.setAttribute("class", "grid");
        grid.style.flexBasis=sides;
        grid.addEventListener('mousedown', changeColor);
        grid.addEventListener('mousemove', changeColor);
        
        gameContainer.appendChild(grid);

        setGridSize(grid, sides)

        //keep grid references in an array
        gridArr.push(grid);
    }
}


//Calculate grid width and height
function calcMeasurements(numberOfGrids){
        // Convert border size to percentage, 2 is the number of pixels to take into account for the border
        let borderSizeInPercentage = (2 * numberOfGrids / gameContainer.offsetWidth) * 100;

        // Subtract border size from total size and divide by number of grids
        let sides = (100 - borderSizeInPercentage) / numberOfGrids + "%";
    
        return sides;
}

//Draw effect
document.body.onmousedown = function() {
  mouseDown = true;
};
document.body.onmouseup = function() {
  mouseDown = false;
};

function changeColor(e) {
    if (mouseDown) {  
      e.target.style.backgroundColor = "black";
    }
  }

//set height and width attributes of the grids created in the createDiv function
function setGridSize (grid, sides){
    grid.style.height=sides;
    grid.style.width=sides
}


function gridSelectClickEvent(){
    let gridNumber= prompt("How many grids do you want?");
    if (gridNumber > 100){
        alert("Cannot set grids above 100!");
        gridNumber=0;
    }
    else {
    createDiv(gridNumber);
    }
}

//DOM ELEMENTS
let gridSelectBtn = document.querySelector("#grid-select")
gridSelectBtn.addEventListener("click", gridSelectClickEvent)

console.log(gridArr);

//Page start
window.onload = () => {
    createDiv(16);
}
