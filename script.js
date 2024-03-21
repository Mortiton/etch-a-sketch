const gridNumber = 16; // number of div containers grids by default
const gameContainer = document.querySelector("#game-container");
let sides = 0.0;


function createDiv(numberOfGrids){
    gameContainer.innerHTML='';
    let grids = numberOfGrids * numberOfGrids;
    sides = calcMeasurements(numberOfGrids);

    for(i=0; i<grids; i++){
        let grid= document.createElement("div");


        grid.setAttribute("class", "grid");
        grid.style.flexBasis=sides;
        gameContainer.appendChild(grid);

        setGridSize(grid, sides)
        //Store grid elements in an array
        // grids.push(grid);
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

//grid buttons
let gridSelectBtn = document.querySelector("#grid-select")

gridSelectBtn.addEventListener("click", gridSelectClickEvent)




//Page start
window.onload = () => {
    createDiv(16);
}
