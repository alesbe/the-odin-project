// HTML Elements
const gridContainer = document.querySelector("#grid__container");
let gridItems = document.getElementsByClassName("grid__item");

// Consts and vars
const colors = ['yellow', 'blue', 'green'];

[...gridItems].forEach((element) => {
    element.addEventListener('mouseover', () => {element.style.backgroundColor = randomRgbColor()});
})

// Funcitons
const randomRgbColor = () => {
    return `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`
}