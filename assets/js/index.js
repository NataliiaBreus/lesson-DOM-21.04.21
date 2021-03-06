'use strict';
/*
const [firstButton, secondButton] = document.getElementsByTagName('button');
console.dir(firstButton);

const[mainSection] = document.getElementsByClassName ('main-section');
console.log(mainSection);

const buttons = [...document.getElementsByClassName('main-button')];
buttons.forEach((elem)=> {
    elem.addEventListener('click', alertOnClick)
})

function alertOnClick () {
    alert ("Ура! Работает!");
}
firstButton.addEventListener('click', alertOnClick);

const par = document.getElementById('unique');
console.log(par);


const mainSection = document.querySelector ('.main-section');
console.log(mainSection);

const buttons = document.querySelectorAll ('.main-button');
console.log(main-button);

const par = document.querySelector('#unique');
console.log(par);

const heading = document.querySelector(".main-section > h1");
console.log(heading);
*/
/*
const img = document.querySelector(".art > img");
console.log (img);

const heading2 = document.querySelector(".art > h1");
console.log(heading2);


const textSpan = document.querySelector(".art > p > span");

console.log(textSpan);

// или

const art = document.querySelector('.art');

const heading = art.querySelector('h1');
const img = art.querySelector('img');
const span = art.querySelector('p > span');

*/

const imageDB = [
"https://html5css.ru/css/img_lights.jpg",
"./assets/images/download.jpeg",
];
const slider = new Slider(imageDB);

const slideImage = document.querySelector('.slide');

const[prevButton, nextButton] = document.querySelectorAll('.slider-container > button')

updateView(slider.currentSlide);

function createButtonHandler (action = 'next') {
    return() => {
        const newImage = slider[action] ();
        updateView (newImage);
    }
}

const prevButtonHandler = createButtonHandler ('prev');
prevButton.addEventListener("click", createButtonHandler('prev'));

/*
prevButton.addEventListener("click", () => {
    const newImage = slider.prev();
    updateView (newImage);
});
nextButton.addEventListener ("click", () => {
    const newImage = slider.next();
    updateView(newImage);
});

*/

function updateView(imgLink) {
    slideImage.setAttribute('src', imgLink);
}