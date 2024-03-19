const GRID_NUM = 16; // number of div containers needed for the grid
const container = document.querySelector(".container")

function createDiv(){
    for(i=0; i<GRID_NUM; i++){
        let grid= document.createElement("div");
        grid.setAttribute("class", "grid");
        container.appendChild(grid);
    }
}

createDiv();


