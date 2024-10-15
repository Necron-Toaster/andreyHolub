'use strict';

let message1 = 'Test message';
let message2 = 'FullStack';
alert(message1 + message2);


let x = prompt('Enter value X', 0);
let y = prompt('Enter value y', 0);
console.log(parseInt(x) + parseInt(y));

let value = prompt('Choose your number', 'Your number is');
switch (value) {
    case "0":
        console.log('The number is short');
        break;
    case "1":
        console.log('The number is short');
        break;
    case "2":
        console.log('The number is short');
        break;
    case "3":
        console.log('Congratulations, You did it!');
        break;
    case "4":
        console.log('The number is too long');
        break;
    case "5":
        console.log('The number is too long');
        break;
    default:
        console.log('The value you specified is not in the range 0 to 5')
}


let day = prompt('Enter your day (Monday-Friday and enter your day in EN or UA language)', 'Your day is');

switch (day){
    case "Понеділок":
        console.log("Start of the work week!");
        break;
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Вівторок":
        console.log("A regular day");
        break;
    case "Tuesday":
        console.log("A regular day");
        break;
    case "Середа":
        console.log("A regular day");
        break;
    case "Wednesday":
        console.log("A regular day");
        break;
    case "Четвер":
        console.log("A regular day");
        break;
    case "Thursday":
        console.log("A regular day");
        break;
    case "П'ятниця":
        console.log("End of the work week!");
        break;
    case "Friday":
        console.log("End of the work week!");
        break;
}

let score = prompt('Enter your score number', 'Your score is');
switch (score) {
    case "50":
        console.log("F");
        break;
    case "70":
        console.log("D");
        break;
    case "80":
        console.log("C");
        break;
    case "90":
        console.log("B");
        break;
    default:
        console.log("A");
}