'use strict';

/*let number = 6.4;

console.log(-4/0);
console.log('string' * 9);

const person = '5';

const bool = true;

// console.log(Something);

let und;

console.log(und);

const obj = {
    name: 'Alex',
    age: 25,
    isMaried: false
};

console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

console.log(arr[1]);*/

/*const ans = +prompt('Here?', '18+');
console.log( ans + 5 );

const answers = [];

answers[0] = prompt('Your name', '');
answers[1] = prompt('Your lastname', '');
answers[2] = prompt('Your age', '');

console.log(typeof (answers) );

console.log(typeof (null) );*/

/*const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);*/

/*console.log('arr' + ' - object');
console.log(4 + +'5');

let incr = 10,
    decr = 10;

++incr;
--decr;

console.log(incr++);
console.log(--decr);

console.log(2 + 2 * 2 !== '8');

const isChecked = true,
      isClose = false;

console.log(isChecked && !isClose);*/

/*if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Wrong');
}

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Too much');
} else {
    console.log('Ok');
}

(num === 50) ? console.log('Ok') : console.log('Error');

const num = '50';

switch (num) {
    case '49':
        console.log('Error');
        break;
    case '100':
        console.log('Error 2');
        break;
    case '50':
        console.log('OK!');
        break;
    default:
        console.log('Some going wrong');
        break;
} */

/*let num = 50;

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        // break;
        continue;
    }

    console.log(i);
}*/

/*Функции*/

/*let num = 20;

function showFirstMassage(text, arg) {
    console.log(text + ' ' + arg);
    let num = 10;
    console.log(num);
}

showFirstMassage('Hello', 'World');
console.log(num);

function calc (a, b) {
    return (a + b);
}

console.log(calc(5, 6));
console.log(calc(15, 6));

function ret () {
    let num = 50;
    return num;
}

let num2 = ret();

console.log(num2);

const logger = function() {
    console.log('Hayushki');
};

logger();

let calc = (a) => a + 5;

console.log(calc(15));*/

/*const str = 'teSt';
const arr = [1, 2, 3];

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('q'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const num = 12.2;

console.log(Math.round(num));

const test = '12.2px';

console.log(parseInt(test));
console.log(parseFloat(test));*/

/*function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('I done this lesson');
}

learnJS('JS', done);*/

/*Сравнение объектов*/

// let options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'blue',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// let options2 = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'blue',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// console.log(options.name == options2.name);

// const {border, bg} = options.colors;

// console.log(border);

// console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

// delete options.name;
// delete options.height;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) == 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

/*Function*/

// let num = 20;

// function showFirstMassage(text) {
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMassage('Hello world');
// console.log(num);

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(5, 8));

// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();

// console.log(anotherNum);

// let logger = function() {
//     console.log('Hello');
// };

// logger();

// const calculator = (a, b) => {
//     return a + b
// };

// console.log(calculator(5, 8));

/*Методы строк и чисел*/

// let str = 'test';
// let arr = [1, 2, 4];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// let str2 = str.toUpperCase();

// console.log(str2);

// let fruit = 'Some fruit';

// // console.log(fruit.indexOf('q'));

// if (fruit.indexOf('fruit') == 5) {
//     console.log('Block');
// } else {
//     console.log('Good');
// }

// const logg = 'Hello World';

// console.log(logg.slice(6, 11));
// console.log(logg.substring(6, 11));
// console.log(logg.substr(6, 5));

// const num = 12.2;

// console.log(Math.round(num));

// const test = '12.2px';

// console.log(parseInt(test));
// console.log(parseFloat(test));