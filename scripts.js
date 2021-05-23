const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

//Using method checking the background Color. 

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(red).backgroundColor;
}

console.log(getBGColor(red));