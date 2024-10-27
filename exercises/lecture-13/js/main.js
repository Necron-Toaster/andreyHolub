'use strict';

const classes = ['first', 'second', 'third', 'fourth'];

const classOne = document.querySelector('#p1');
classOne.style.backgroundColor = "gold";

const classTwo = document.querySelector('#p2');
classTwo.style.backgroundColor = "gold";
classTwo.style.color = "blue";
classTwo.style.fontSize = "2rem";

const classThree = document.querySelector('#p3');
classThree.classList.add('third');

const classFour = document.querySelector('#p4');
classFour.classList.add('fourth', 'border');

const button = document.querySelector('#p1 button');
button.style.backgroundColor = "gold";
button.style.color = "blue";

const button2 = document.querySelector('#p2 button');

var hiddenPOne = () => {
    classOne.style.display = 'none';
}

function hideClassP() {
    button2.addEventListener('click', hiddenPOne);
}

hideClassP();

const button3 = document.querySelector('#p3 button');

var displayPOne = () => {
    classOne.style.display = 'block';
}

function displayP() {
    button3.addEventListener('click', displayPOne);
}

displayP();

var button4 = document.querySelector('#p4 button');
var body = document.body;

const darkTheme = () => {
    if (body.style.backgroundColor === 'black') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'black';
    }
}

function darkThemeBody() {
    button4.addEventListener('click', darkTheme);
}

darkThemeBody();