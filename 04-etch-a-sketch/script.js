/*
 Consts and vars
*/
const colors = ['yellow', 'blue', 'green'];
let drawMode = false;
let rainbowMode = true;

/*
 HTML Elements
*/
// Grid elements
const gridContainer = document.getElementById("grid__container");
let gridItems = [...document.getElementsByClassName("grid__item")];
// Settings elements
let colorSelected = document.getElementById("color__input");
let drawModeButton = document.getElementById("draw-mode__button");
let rainbowButton = document.getElementById("rainbow-mode__button");
let gridSizeText = document.getElementById("grid-size__text");
let gridSizeInput = document.getElementById("grid-size__input");

/*
 Functions
*/
// Select a random rgb color
const randomRgbColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
}

// Utility function to toggle a value (i made this in a function because is more visual)
const toggle = (booleanValue) => {
    return booleanValue = !booleanValue;
}

// Generates a grid with the specified size
const createGrid = () => {
    const size = parseInt(gridSizeInput.value)

    // Create rows
    for(n = 0; n < size; n++) {
        let row = document.createElement("div");
        row.classList.add("grid__row");
        
        gridContainer.appendChild(row);
    }
}

/*
 Event listeners
*/
// Grid item
gridItems.forEach((element) => {
    if(drawMode) {
        element.addEventListener('click', () => {
            let color = rainbowMode ? randomRgbColor() : colorSelected.value;
            element.style.backgroundColor = color
        });
    } else {
        element.addEventListener('mouseover', () => {
            let color = rainbowMode ? randomRgbColor() : colorSelected.value;
            element.style.backgroundColor = color
        });
    }
})

// Settings listeners
drawModeButton.addEventListener('click', () => {
    drawMode = toggle(drawMode);
})

window.onload = () => {
    //createGrid();
}