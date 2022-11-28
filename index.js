
function createGrid() {
    const sketchContainer = document.querySelector("div");

    for (let i = 0; i < 16; i++) {
        const divRow = document.createElement("div");
        sketchContainer.appendChild(divRow);

        for (let j = 0; j < 16; j++) {
            const sketchGrid = document.createElement("div");
            sketchGrid.classList.add("sketch-grid");
            sketchGrid.classList.add("sketch-grid:hover");
            divRow.appendChild(sketchGrid);
        }
    }

}

createGrid();