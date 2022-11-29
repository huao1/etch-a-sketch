
function sliderDisplay() {
    const slider = document.querySelector("#myRange");
    const value = document.querySelector("#slider-value");

    value.textContent = `${slider.value}x${slider.value}`;

    slider.oninput = function () {
        console.log(slider.value);
        value.textContent = `${this.value}x${this.value}`;
    }
}

function createGrid(size = 16) {
    const sketchContainer = document.querySelector(".grid-container");

    let totalWidth = 560;
    //width = Math.round(width * 100) / 100;
    //console.log(width);

    for (let i = 0; i < size; i++) {
        const divRow = document.createElement("div");
        sketchContainer.appendChild(divRow);

        for (let j = 0; j < size; j++) {
            const sketchGrid = document.createElement("div");
            sketchGrid.classList.add("grid");
            sketchGrid.style.cssText = `width: ${totalWidth/size}px; height: ${totalWidth/size}px;`;
            sketchGrid.classList.add("grid:hover");
            divRow.appendChild(sketchGrid);
        }
    }
}

function submitGridSize() {
    const btn = document.querySelector("button");
    btn.addEventListener("click", updateGrid);
}

function updateGrid() {
    const size = document.querySelector("#myRange");
    let gridDiv = document.querySelector(".grid-container > div");

    while (gridDiv != null) {
        gridDiv.remove();
        gridDiv = document.querySelector(".grid-container > div");
    }

    createGrid(size.value);
}

createGrid();
sliderDisplay();
submitGridSize();
