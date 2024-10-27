'use strict';

let age = 18;

let aNumber = 4;
let bNumber = 3;
let test = '';
/* */
for (let i = 0; i < 5; i++) {
    test = test + i;
}

console.log(test);

function min(aNumber, bNumber) {
    if (aNumber > bNumber) {
        return aNumber;
    } else if (aNumber < bNumber) {
        return bNumber;
    } else if (aNumber === bNumber) {
        return 'nothink';
    }
}

console.log(min(aNumber, bNumber));


function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm("Did parents allow you?");
    }
}

console.log(checkAge(age));

function checkAgeTernary(age) {
    return age >= 18 ? "true" : confirm("Did parents allow you?");
}

console.log(checkAgeTernary(age));

function pow() {
    let x = prompt('Enter first number for multiply');
    let n = prompt('Enter second number for multiply');
    if (Number.isInteger(n) && n > 0) {
        return 'wrong number n';
    } else if (n === 1) {
        return x;
    } else {
       return x * n;
    }

}

console.log(pow());

function callA() {
    console.log('A was called');
    return undefined;
}

function callB() {
    console.log('B was called');
    return false;
}

function callC() {
    console.log('C was called');
    return "foo";
}
console.log(callA(), callC());
console.log(callB(), callC());


const person = {
    name: 'Andrey',
    age: 23
};

person.name = {
    firstName: "Andrey",
    lastName: "Holub"
}

console.log(person);
const fruits = ['apple', 'banana', 'cantaloupe', 'blueberries', 'grapefruit'];

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

var i = 0;
while (i < fruits.length) {
    console.log(fruits[i]);
    i++;
}
var i = 0;

do {
    console.log(fruits[i]);
    i++;
} while (i < 5);

const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


for (var i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i])
    }
}

const Names = ['Batman'];
Names.unshift('Bane');
Names.push('Joker');
if (!Names.includes('Alfred')) {
    Names.push('Alfred');
    console.log(Names)
}
if (Names.includes('Batman')) {
    Names.splice(1, 1)
    console.log(Names);
}
