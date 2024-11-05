'use strict';
/* лекция 5 инфа тут  */
/*Вызываю элемент штмл по его селектору - ул*/
var elementUl = document.querySelector('ul');

/*вызываю локальное хранилище - ищу предметы по ключу items */
let itemsFromStorage = localStorage.getItem('items');

/*Объявляю будующий массив*/
var arrayItems;

/* Если пришел не пустой сторедж -  если не пустой , то читаю что пришло  */
if (itemsFromStorage) {
    arrayItems = JSON.parse(itemsFromStorage);
} else {
    arrayItems = [];
}


console.log(arrayItems);


function addTask(text) {
    let li = document.createElement('li');
    li.textContent = text;
    elementUl.appendChild(li);
}

var tasks = ['first', 'second', 'third'];
tasks.forEach(task => {
    addTask(task);
});

let input = document.querySelector('input');

function add() {
    const inputText = input.value;
    if (inputText) {
        arrayItems.push(inputText);
        localStorage.setItem('items', JSON.stringify(arrayItems));
        addTask(inputText);
        input.value = '';
    } else {
        alert('Please, enter your value.');
    }
}

function del() {
    localStorage.clear();
    arrayItems = [];
    elementUl.innerHTML = '';
}