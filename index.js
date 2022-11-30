
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

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
    const btn = document.querySelector("#submit");
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

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${blue}, ${green});`;

}

function toggleMode() {
    const rainbow = document.querySelector("#rainbow");
    rainbow.addEventListener("click", rainbowMode);

    const eraser = document.querySelector("#eraser");
    eraser.addEventListener("click", eraserMode);

    console.log(rainbow);
    console.log(eraser);
}

function rainbowMode(e) {
    const grids = document.querySelectorAll(".grid");

    const buttons = document.querySelectorAll(".setting-buttons");
    for (const button of buttons) {
        button.classList.remove("on");
        button.classList.add("off");
    }
    e.target.classList.add("on");

    grids.forEach((grid) => {
        grid.addEventListener("mousedown", () => {
            grid.style.cssText += `background-color: ${randomColor()}`;
        });
        grid.addEventListener("mouseenter", () => {
            if (mouseDown == true) {
                grid.style.cssText += `background-color: ${randomColor()}`;
            }
        });
    });
}

function eraserMode(e) {

    const buttons = document.querySelectorAll(".setting-buttons");
    for (const button of buttons) {
        button.classList.remove("on");
        button.classList.add("off");
    }
    e.target.classList.add("on");

    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.addEventListener("mousedown", () => {
            grid.style.cssText += "background-color: white";
        });
        grid.addEventListener("mouseenter", () => {
            if (mouseDown == true) {
                grid.style.cssText += "background-color: white";
            }
        });
    });
}

createGrid();
sliderDisplay();
submitGridSize();
console.log(randomColor());
toggleMode();