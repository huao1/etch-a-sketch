
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
    const sketchContainer = document.querySelector(".sketch-container");

    //let width = 960/17;
    //width = Math.round(width * 100) / 100;
    //console.log(width);

    for (let i = 0; i < size; i++) {
        const divRow = document.createElement("div");
        sketchContainer.appendChild(divRow);

        for (let j = 0; j < size; j++) {
            const sketchGrid = document.createElement("div");
            sketchGrid.classList.add("sketch-grid");
            sketchGrid.classList.add("sketch-grid:hover");
            divRow.appendChild(sketchGrid);
        }
    }

}

createGrid();
sliderDisplay();