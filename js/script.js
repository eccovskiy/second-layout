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

/*Callback*/

// let rus = 'russian';

// function first(lanf, callback) {
//     setTimeout(function () {
//         console.log(lanf);
//         callback();
//         console.log(`${lanf} per ${rus}`);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first('JS', second);

// rus = 'Eng';

// first('Cplus', second);

// function learnJS(lang, callback) {
//     console.log(`Я изучаю ${lang}`);
//     callback();
// }

// learnJS('JS', function() {
//     console.log("I'm good");
// });

/*Объекты, деструктуризация*/

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('test');
//     }
// };

// options.makeTest();

// console.log(Object.keys(options));

// console.log(Object.keys(options).length);

// const {border, bg} = options.colors;

// console.log(border);

// console.log(options.name);

// delete options.colors.bg;

// console.log(options);

// let counter = 0;

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let j in options[key]) {
//             console.log(`У нас есть следующие опции: ${j} и имеют значения ${options[key][j]}`);
//             counter++;
//         }
//     } else {
//         console.log(`У нас есть следующие опции: ${key} и имеют значения ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);

/*Массивы*/

// const arr = [2, 13, 26, 8, 10];

// arr.sort(compareNum);

// console.log(arr);


// function compareNum(a, b) {
//     return a - b;
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} из массива ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');

// products.sort();

// console.log(products);
// console.log(products.join(' - '));

// const massiv = [5, 6, 7, 8, 9];
// const stroka = massiv.join('; ');

// console.log(stroka);

// arr[99] = 0;

// console.log(arr.length);
// console.log(arr);

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

/*Передача по ссылке или по значению, Spread оператор*/

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     name: 'Ron',
//     age: 25
// };

// const copy = obj; // Ссылка на obj

// copy.age = 30;

// console.log(obj);
// console.log(copy);

// function copy(mainObj) {
//     let objCopy = {};
    
//     let key;
//     for(key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// //

// function clone(mainObj) {
//     const cloneObj = {};

//     for (let key in mainObj) {
//         cloneObj[key] = mainObj[key];
//     }

//     return cloneObj;
// }

// const original = {
//     a: 5,
//     b: 10
// };

// const cloneObj = clone(original);

// cloneObj.b = 20;

// console.log(cloneObj);
// console.log(original);

// const newObj = {
//     a: 1,
//     b: 2
// };

// const secObj = {
//     c: 7
// };

// console.log(Object.assign(newObj, secObj));

// const thirdObj = Object.assign({}, secObj);

// thirdObj.c = 20;

// console.log(thirdObj);
// console.log(secObj);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'd';

// console.log(oldArray);
// console.log(newArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['worpress', 'livejounal', 'blogger'],
//       internet = [...video, 5, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newArray2 = [...array];

// console.log(newArray2);

// const q = {
//     one: 1,
//     two: 2
// };

// const u = {...q};

// let c = 5;

// function newMass(lang, callback) {
//     c += lang;
//     console.log(c);
//     callback();
// }

// function dom() {
//     console.log('Love Kharkov');
// }

// newMass(5, dom);

// const obj = {
//     a: 1,
//     b: 3,
//     c: 5,
//     d: {
//         e: 6,
//         f: 8
//     }
// };

// let {e, f} = obj.d;
// console.log(f);


// obj.forEach(function(item, i, arr) {
//     console.log(`We have ${i} keys ${item} in array ${arr}`);
// });

// for (let key in obj) {
//     if(typeof(obj[key]) === 'object') {
//         for (let i in obj[key]) {
//             console.log(`We have next keys: ${i} with values: ${obj[key][i]}`);
//         }
//     } else {
//         console.log(`We have next keys: ${key} with values: ${obj[key]}`);
//     }    
// }

// console.log(obj);

// const arr = [2, 4, 5, 7];

// arr.pop();
// arr.push(15);

// console.log(arr.length);

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) {
//     console.log(`${i} index ${item} in array ${arr}`);
// });

// const str = prompt('', '');
// const products = str.split(', ');

// products.sort();
// console.log(products.join(' - '));

// const num = [25, 17, 5, 12];

// num.sort(compareNum);

// console.log(num);

// function compareNum(a, b) {
//     return a - b;
// }

// const obj = {
//     a: 2,
//     b: 4,
//     c: {
//         x: 3,
//         y: 5
//     }
// };

// function clone(mainObj) {
//     let newObj = {};

//     for (let key in mainObj) {
//         newObj[key] = mainObj[key];
//     }

//     return newObj;
// }

// const cloneObj = clone(obj);

// cloneObj.b = 12;

// console.log(obj);


// const cloner = {
//     r: 17,
//     v: 25
// };

// Object.assign(cloneObj, cloner);
// console.log(cloneObj);

// const arr = ['a', 'b', 'c'];
// const newArray = arr.slice();

// newArray[1] = 'ddd';

// console.log(arr);
// console.log(newArray);

// let num = [1, 2, 3];

// function numbers(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// numbers(...num);

// let val = 7;

// function creatAdder() {
//     function addNumbers(a, b) {
//         let ret = a + b;
//         return ret;
//     }
//     return addNumbers;
// }

// let adder = creatAdder(),
//     sum = adder(val, 8);

// console.log(sum);

// function creatCounter() {
//     let counter = 0;
//     const myFunction = function() {
//         counter++;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = creatCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// function makeCounter() {
//     function counter() {
//         return counter.currentCount++;
//     }
//     counter.currentCount = 1;

//     return counter;
// }

// let counter = makeCounter();
// console.log(counter());
// console.log(counter());

// function test() {

//     console.log( window );
  
//     var window = 5;
  
//     console.log( window );
//   }
  
//   test();

// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;

// Object.setPrototypeOf(john, soldier);

// john.sayHello();

// console.log(john.armor);

// let num = '50';

// switch(num) {
//     case 49:
//         console.log('False');
//         break;
//     case 51:
//         console.log('Much false');
//         break;
//     case 50:
//         console.log('True');
//         break;
//     default:
//         console.log('Something');
// }

// console.log(null + true);

// console.log([] + 1 + 2);

/*Динамическая типизация*/

//В строку

// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(null + ''));

// const num = 5;

// console.log('http://vk.com/catalog/' + num);

// const fontSize = 26 + 'px';

//В Число

// console.log(typeof(Number(null)));

// console.log(typeof(+'null'));

// console.log(typeof(parseInt('15px, 10')));

//В Boolean

// let switcher = null;

// if (switcher) {
//     console.log('Working');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working');
// }

// console.log(typeof(Boolean(4)));

// console.log(typeof(!!4));

// var look;

// function food() {
//     var look = 10;
//     console.log(look);
// }

// food();

// console.log(look);

// console.log(typeof([] + 1 + 2));

/*Получение элементов со страницы*/

// let quiz = +prompt('Number', '');

// if (quiz > 0) {
//     alert('1');
// } else if (quiz < 0) {
//     alert('-1');
// } else if (quiz == 0) {
//     alert('0')
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let login = prompt('Qq', '');

// let message = (login == 'Сотрудник') ? 'Привет' : (login == 'Директор') ? 'Здравствуйте' : (login == '') ? 'Нет логина' : (login == null) ? 'Error' : '';

// alert(message);

// console.log(typeof('12' - 6));

/*Рекурсия*/

// const serfaceAreaCalc = (radius) => {
//     return 4 * 3.14 * square(radius);
// };

// const square = (n) => {
//     return n * n;
// };

// const surfaceOfMars = serfaceAreaCalc(3390);

// console.log(surfaceOfMars);

// const factorial = (n) => {
//     if (n === 1) {
//         return 1;
//     } else {
//         // console.log(n);
//         return n * factorial(n - 1);
//     }
// };

// console.log(factorial(3));

// function fibanacci(n) {
//     if (n < 2) {
//         return n;
//     } else {
//         // console.log(n);
//         return (fibanacci(n - 1) + fibanacci(n - 2)); 
//     }
// }

// let fib = fibanacci(3);

// console.log(fib);

/*Функции конструкторы*/

// const num = new Function(3);

// console.log(num);

// function User(name, id, gender) {
//     this.name = name;
//     this.id = id;
//     this.gender = gender;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// class User {
//     constructor(name, id, gender) {
//         this.name = name;
//         this.id = id;
//         this.gender = gender;
//         this.human = true;
//         this.hello = function() {
//         console.log(`Hello ${this.name}`);
//         };
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушёл`);
// };

// User.prototype.number = 15;

// const ivan = new User('Ivan', 28, 'Male');
// const alex = new User('Alex', 20, 'Male');

// ivan.exit();
// console.log(ivan.number);

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// function polz(name, id) {
//     this.name = name;
//     this.id = id;
//     this.polzHi = function() {
//         console.log(`${this.name} и ${this.id}`);
//     };
// }

// polz.prototype.age = 22;

// const luke = new polz('Luke', 2585);

// luke.polzHi();
// luke.age();

// console.log(luke.age);

/*Массив*/

// let arr = [100, 0, 50];

// let min = Math.min( ...arr ),
//     max = Math.max( ...arr );

// console.log(min);
// console.log(max);

/*Контекст вызова This*/

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }

//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// const ivan = new User('Iven', 20);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
// } 

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(12));

// class Test {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         console.log(`Моё имя ${this.name} и мой возраст ${this.age}`);
//     }
// }

// const Shura = new Test('Shura', 25);

// console.log(Shura);

// const obj2 = {
//     a: 13,
//     b: 'Ron',
//     calling: function() {
//         console.log(`${this.a} в ${this.b}`);
//     }
// };

// obj2.calling();

// let a = 5;
// let b = 7;

// function proba() {
//     return a + b;
// }

// proba();

// let d = proba();

// console.log(d);

// function test2(name) {
//     this.name = name;
//     console.log(this.name);
// }

// const user2 = {
//     name: 'Rita'
// };

// test2.call(user2, 'Rita');
// test2.apply(user2, ['Rita']);

// function test3(num) {
//     return this + num;
// }

// const plus = test3.bind(5+5);

// console.log(plus(5));

// const btn = document.querySelector('button');

// btn.style.cssText = 'width: 200px; height: 50px; background: pink';

// btn.addEventListener('click', (e) => {
//     e.target.style.background = 'yellow';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };

//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2;

// console.log(double(5));

// function Sum(a, b) {
//     return this + a + b;
// }

// const slozh = Sum.bind(2);

// console.log(slozh(4, 4));

// function fib(n) {
//     console.log(n);
//     return n <= 1 ? n : fib(n - 1) + fib(n - 2);
//   }

/*Функции-генераторы*/
// function* generator(n) {
//     yield 'S';
//     yield 'C';
//     yield 'R';
//     yield 'I';
//     yield 'P';
//     yield 'T';
//     yield n;
// }

// for(let k of generator('D')) {
//     console.log(k);
// }

// const str = generator();

// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());

// function* count(n) {
//     for (let i = 0; i < n; i++) {
//         yield i;
//     }
// }

// for (let k of count(7)) {
//     console.log(k);
// }

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);


/*map, filter.reduce*/
//filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// let arr = [2,4,6,7,8,5,8,8,9,2,1,24];

// let result = arr.filter((value) => value % 2 !== 0);
// console.log(result);

// function filter(arr, callback){
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if(callback(arr[i])){
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(filter(arr, (value) => value % 2 === 1));

//map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

// let arr = [2,4,6,8,8,8,2,24];

// // let result = arr.map((value) => value * 2);
// // console.log(result);

// function map(arr, callback){
//     let result = [];
//     let counter = -1;

//     for (let i = 0; i < arr.length; i++) {
//         counter++;
//         result[counter] = (callback(arr[i]));
//     }

//     return result;
// }

// console.log(map(arr, (value) => value * 3));

// every / some

// const some = [4, 'qwr', 'dsdsdssd'];

// console.log(some.some(item => typeof(item) === 'number'));

// let arr = [2,4,5,7,8,5,3,4,5,6,7];

// let result = arr.some((value) => value % 2 === 0);
// console.log(result);

// function some(arr, callback){
//     for (let i = 0; i < arr.length; i++) {
//         if(callback(arr[i])){
//             return true;
//         }
//     }

//     return false;
// }

// console.log(some(arr, (value) => value % 2 === 0));

// let arr = [2,4,5,7,8,5,3,4,5,6,7];

// let result = arr.every((value) => value % 2 === 0);
// console.log(result);

// function every(arr, callback){
//     for (let i = 0; i < arr.length; i++) {
//         if(callback(arr[i])){
//             return false;
//         }
//     }

//     return true;
// }

// console.log(every(arr, (value) => value % 2 === 0));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];
// let result = arr.reduce((sum, nextNum) => sum + nextNum);

// console.log(result);

// function reduce(arr, callback, initial) {
//     let result = initial || 0;

//     for( let i = 0; i < arr.length; i++) {
//         result = callback(result, arr[i]);
//     }

//     return result;
// }

// console.log(reduce(arr, (sum, nextNum) => sum + nextNum));

// const arr = ['apple', 'pear', 'plum'];
// let result = arr.reduce((sum, current) => `${sum}, ${current}`, 'Products:');

// console.log(result);

// const obj = {
//     ivan: 'person',
//     ann: 'person',
//     dog: 'animal',
//     cat: 'animal'
// };

// let newArr = Object.entries(obj)
// .filter(item => item[1] === 'person')
// .map(item => item[0]);

// console.log(newArr);

// function someFilter(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (callback(arr[i])) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

// console.log(someFilter(newArr, item => item[1] === 'person'));

// for (let key in obj) {
//     if (obj[key] === 'person') {
//         console.log(key);
//     }
// }

/*-Примеры массивов*/

const arr = [45, {a: 7}, 69, 'ads', {b: 17}, 'bbc'];

// let result = arr.filter(value => (typeof(value) === 'string'));

// console.log(result);

function someFilter(arr, callback) {
    let result = [];
    let counter = -1;

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            counter++;
            result[counter] = arr[i];
        }
    }

    return result;
}

console.log(someFilter(arr, value => typeof(value) === 'object'));

const obj = {
    a: 7,
    b: 6,
    c: 9,
    d: 10
};

let newArray = Object.entries(obj)
.map((value, nextValue) => (value[1] + nextValue[1]));

console.log(newArray);

let arrs = ['Ann', 'Piter'];
let arrs2 = ['Mary', 'Dan'];

let newArs = arrs.reduce((value, next) => `${value} + ${next} = LOVE`);

arrs2[1] = 'Liam';
console.log(arrs2);
arrs2 = arrs2.reduce((value, next) => `${value} + ${next} = LOVE`);

console.log(newArs);
console.log(arrs2);

// let obj3 = {
//     a: 4,
//     c: 10,
//     b: 7,
//     1: 3,
//     6: 7,
//     0: 4,
//     2: 3,
//     10: 10,
//     *[Symbol.iterator]() {
//         for(let prop in this){
//             yield this[prop];
//         }
//     },
// };

// let sum = 0;
// for(let item of obj3){
//     sum += item;
// }
// console.log(sum);

/*Геттеры и сеттеры*/

// const person = {
//     name: 'Alex',
//     age: 25,

//     get userAge() {
//         return this.age;
//     },

//     set userAge(num) {
//         this.age = num;
//     }
// };

// console.log(person.userAge = 30);
// console.log(person.userAge);


// let rectangle = {
//     width: 100,
//     height: 100,
//     get square(){
//         return this.width * this.height;
//     },

//     set square(value){
//         this.width = value;
//     }
// };

// rectangle.square = 45;

// console.log(rectangle.square);

/*setTimeout and setInterval*/

// В файле setTimeout

/*Promise*/

// console.log('Запрос данных');

// const req = new Promise(function(resolve, reject) {

//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
    
//     }, 2000);

// });

// req.then((product) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then((data) => {
//         data.modify = true;
//         return data;
//     }).then((data) => {
//         console.log(data);
//     });
// }).catch(() => {
//     console.error('Произошла ошибка');
// }).finally(() => {
//     console.log('Finally');
// });

// const test = time => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000'));
// test(2000).then(() => console.log('2000'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('Race');
// });

// Promise repeat

// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 2000
//         };
    
//         resolve(product);
        
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//             // reject();
//         }, 2000);
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then((data) => {
//         console.log(data);
//     }).catch(() => {
//         console.error('Error');
//     }).finally(() => {
//         console.log('Finally');
//     });

// });

// const test = time => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//             reject();
//         }, time);
//     });
// };

// test(1000).then(() => {
//     console.log('1000 ms');
// });

// test(2000).then(() => {
//     console.log('2000 ms');
// });

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('Race');
// });

/*Локальные сервера*/ // В конспекте про MAMP и Open Server

/*JSON*/

// const person = {
//     name: 'Alex',
//     tel : '+74444444',
//     parents: {
//         mom: 'Olga',
//         dad: 'Mike'
//     },
// };

// const clone = JSON.parse(JSON.stringify(person));

// clone.parents.mom = 'Ann';

// console.log(person);
// console.log(clone);

// const obecting = {
//     name: 'Alex',
//     age: 17
// };

// function cloning(obj) {
//     let newObj = {};

//     for(let key in obj) {
//         newObj[key] = obj[key];
//     }

//     return newObj;
// }

// const newObjecting = cloning(obecting);

// newObjecting.age = 25;

// console.log(obecting);
// console.log(newObjecting);

// let lucky = Object.create(obecting);



// console.log(lucky);

/*AJAX*/

// В папке calc

/*Local storage*/

localStorage.setItem('number', 5);

//Задача на определения этажа и подъезда по номеру квартиры

// let n = 4; // под
// let k = 9; // этаж
// let m = 4; // кварт
// let number = 72;

// let km = k * m;
// let pod = Math.ceil(number / km);
// let lastFlat = km * pod;
// let res = Math.ceil((km - (lastFlat - number)) / m);
// console.log(km, pod, lastFlat, res);

// let a = [1, 2, 3];
// let b = a;

// b.push(4);

// let c = [1, 2, 3, 4];

// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log(a === c);

// const iterator = {
//     [Symbol.iterator](n = 10) {
//         let i = 0;

//         return {
//             next() {
//                 if (i < n) {
//                     return {value: ++i, done: false};
//                 }
//             return {value: undefined, done: true};
//             }
//         };
//     }
// };

// for(let k of iterator) {
//     console.log(k);
// }

function* iter(n = 10) {
    for(let i = 0; i < n; i++) {
        yield i;
    }
}

// let nord = iter();

// console.log(nord.next().value);
// console.log(nord.next().value);
// console.log(nord.next().value);

for(let k of iter(6)) {
    console.log(k);
}

function changeColor(color) {
	console.log('traffic-light ', color);
}
function main() {
	changeColor('red');
	setTimeout(()=>{
		changeColor('yellow');
		setTimeout(() => {
			changeColor('green');
			setTimeout(main, 2000);
		}, 1000);
	}, 2000);
}
main();

function iterationFibonacci (n) {
    if (n <= 0) {
        return 0;
    }
    if (n < 2) {
        return 1;
    }
    let prev = 1,
        result = 1;
    
    for(let i = 0; i < n - 2; i++) { // 2
        let temp = result; // 3
        result += prev; // 5
        prev = temp; // 3
    }
    return result;
}

console.log(iterationFibonacci(5));

/*************************************/


/*Задания*/


/*(((1))) Фибоначчи*/
/*1) Рекурсия*/
let arr = [];

function fibonacci(n) {
    if (n < 2) {
        return arr[n] = n;
    } else {
        return arr[n] = (fibonacci(n - 1) + fibonacci(n - 2));
    }
}
  
console.log(fibonacci(5));

console.log(arr);

/*2) Мемоизация*/
let fibonacciMemo = (function() {
    let memo = {};

    return function f(n) {
        let value;
        
        if (n in memo) {
            value = memo[n];
        } else if (n < 2) {
            value = n;
        }
        else {
            value = f(n - 1) + f(n - 2);
            memo[n] = value;
        }

        return value;
    };
  
})();

let inputFibonacciNumber = fibonacciMemo(3);

console.log(inputFibonacciNumber);

/*3) Иттерируемый объект*/
let fibonacciObject = {
    fn1: 0,
    fn2: 1,
    fibonacci: function* (){
        let fn1 = this.fn1,
            fn2 = this.fn2;

        while (true){
            let current = fn1;
            fn1 = fn2;
            fn2 += current;
            yield current;
            // if (reset){
            //     fn1 = 0;
            //     fn2 = 1;
            // }
        }
    }
};

let fibonacciNew = fibonacciObject.fibonacci();

console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);
console.log(fibonacciNew.next().value);

let objectFibonacci = {
    a: 0,
    b: 1,
  
    [Symbol.iterator]() {
        return {
            next: () => {
                const c = this.a + this.b;
                this.a = this.b;
                this.b = c;
                return {
                    value: this.b,
                    done: false,
                };
            },
        };
    }
};
  
for (const n of objectFibonacci) {
    console.log(n);
  
    if (n > 5) {
        break;
    }
}



let fibonacciObject2 = {
    fn1: 0,
    fn2: 1,
    [Symbol.iterator]: function* (){
        let fn1 = this.fn1;
        let fn2 = this.fn2;

        while (true){
            let current = fn1;
            fn1 = fn2;
            fn2 = fn2 + current;
            yield current;
            console.log(current);
            // if (reset){
            //     fn1 = 0;
            //     fn2 = 1;
            // }
        }
    }
};

let fibonacciNew2 = fibonacciObject2;

console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);
console.log(fibonacciNew2.next().value);

/*4) Функция генератор Фибоначчи */
function* fibonacci(){
    let fn1 = 0;
    let fn2 = 1;
    while (true){
        let current = fn1;
      fn1 = fn2;
      fn2 = fn2 + current;
      let reset = yield current;
      if (reset){
          fn1 = 0;
          fn2 = 1;
      }
    }
  }
  
  let sequence = fibonacci();
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  console.log(sequence.next().value);     // 3
  console.log(sequence.next().value);     // 5
  console.log(sequence.next().value);     // 8
  console.log(sequence.next().value);     // 13
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value);     // 1
  console.log(sequence.next().value);     // 2
  console.log(sequence.next().value);     // 3
    
/*3)*/
const result = [0, 1];

function fib(num) {

    for(let i = 2; i < num; i++) {
        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }
    
    return result[num];
}

console.log(fib(5));
console.log(result);

/*4)*/
function fibShort(num) {
    let a = 0,
        b = 1;
        let c = 0;

        for (let i = 2; i < num; i++) {
            let c = a + b;
                a = b;
                b = c;
                // [a, b] = [b, c]; // кортокая форма
                // [a, b] = [b, a + b];  // кортокая форма
        }

    return b;

}

console.log(fibShort(5));

/*(((2))) Площади и периметры */

// Triangle

function trianglePerimeter(a, b, c) {
    return a + b + c;
}

console.log(trianglePerimeter(15, 20, 20));

class TrianglePerimeter {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.perimeterСalculating = function() {
            return this.a + this.b + this.c;
        };
    }
}

const newTrianglePerimeter = new TrianglePerimeter(15, 15, 15);

console.log(newTrianglePerimeter.perimeterСalculating());

function triangleSquare(a, h) {
    return 0.5 * (a * h);
}

console.log(triangleSquare(15, 20));

class TriangleSquare {
    constructor(a, h) {
        this.a = a;
        this.h = h;
        this.squareСalculating = function() {
            return 0.5 * (this.a * this.h);
        };
    }
}

const newTriangleSquare = new TriangleSquare(15, 20);

console.log(newTriangleSquare.squareСalculating());

// Rectangle
function rectanglePerimeter(a, b) {
    return 2 * (a + b);
}

console.log(rectanglePerimeter(15, 20));

class RectanglePerimeter {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.perimeterСalculating = function() {
            return 2 * (this.a + this.b);
        };
    }
}

const newRectanglePerimeter = new RectanglePerimeter(15, 20);

console.log(newRectanglePerimeter.perimeterСalculating());

function rectangleSquare(a, b) {
    return a * b;
}

console.log(rectangleSquare(15, 20));

class RectangleSquare {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.SquareСalculating = function() {
            return (this.a * this.b);
        };
    }
}

const newRectangleSquare = new RectangleSquare(15, 20);

console.log(newRectangleSquare.SquareСalculating());

// circle
function circlePerimeter(r) {
    let pi = 3.14;

    return 2 * pi * r;
}

console.log(circlePerimeter(15));

class CirclePerimeter {
    constructor(r) {
        this.r = r;
        this.perimeterСalculating = function() {
            let pi = 3.14;

            return 2 * pi * this.r;
        };
    }
}

const newCirclePerimeter = new CirclePerimeter(15);

console.log(newCirclePerimeter.perimeterСalculating());

function circleSquare(r) {
    let pi = 3.14;

    return pi * (r**2);
}

console.log(circleSquare(15));

class CircleSquare {
    constructor(r) {
        this.r = r;
        this.perimeterСalculating = function() {
            let pi = 3.14;

            return pi * (this.r**2);
        };
    }
}

const newCircleSquare = new CircleSquare(15);

console.log(newCircleSquare.perimeterСalculating());

/*(((3))) Массивы*/

// min and max values

let array = [6, 7, 3, 8, -7, 3, 0, -4, 2, 9];

let i = 0,
    minValue = array[0],
    maxValue = minValue;
    
function recursionArray(arr) {
    if(i >= (arr.length)){
        return;
    } else if (arr[i] < minValue) {
        minValue = arr[i];
    } else if (arr[i] > maxValue) {
        maxValue = arr[i];
    }

    i++;
    recursionArray(arr); 
}

recursionArray(array);
console.log(`В массиве [${array}], у нас минимальное значение: ${minValue}, максимальное значение: ${maxValue}`);

// zero numbers

let array3 = [6, 7, 3, 8, -7, 3, 0, -4, 2, 9];

let i = 0,
    zeroValues = 0,
    positiveValues = 0,
    negativeValues = 0;

function recursionArray(arr) {
    
    if(i >= (arr.length)){
        return;
    } else if (arr[i] === 0) {
        zeroValues++;
    } else if (arr[i] > 0) {
        positiveValues++;
    } else if (arr[i] < 0) {
        negativeValues++;
    }

    i++;
    recursionArray(arr); 
}

recursionArray(array3);
console.log(`В массиве [${array3}], у нас - нулевых элементов: ${zeroValues}, положительных чисел: ${positiveValues}, отрицательных чисел: ${negativeValues}`);

/*(((4)))Из 10 в 2*/

function decToBin(number) {
    let decNumber = '';
    
    while (number > 0) {
        decNumber = ('' + (number % 2)) + decNumber;
        if ((number % 2) === 1) {
            number = ((number - 1) / 2);
        } else {
            number = number / 2;
        }
        // n = Math.trunc(n);
    }

    return +decNumber;
}

console.log(decToBin(18));

function binToDec(number) {
    let result = 0;

    number = '' + number;

    function reverse(string) {
        let reverseString = '';

        for (let i = string.length - 1; i >= 0; i--) {
            console.log(string[i]);
            reverseString += string[i];
        }

        return reverseString;
    }
    
    number = (reverse(number));

    console.log(number);

    for (let i = 0; i < number.length; i++) {
        // console.log(n[i]);
        result += number[i] * (2**i);
    }

    return +result;
}

console.log(binToDec(110));

/*(((5))) Факториал*/
/*
0! = 1
n! = n * (n-1)
*/

/*1)*/
function factorial(num) {
    if (num < 0) {
        console.log('Error');
    }
    else if (num === 0) {
        return 1;
    } else {
        // console.log(num);
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));

/*2)*/
function factorialTern(num) {
    return (num < 0) ? console.log('Error') : (num === 0) ? 1 : num * factorialTern(num - 1);
}

console.log(factorialTern(4));

let factorialMemo = (function() {
    let memo = {};
  
    return function f(n) {
        let value;
      if (n in memo) {
        value = memo[n];
      } else if (n === 1) {
          value = 1;
        }
        else {
          value = n * f(n - 1);
        memo[n] = value;
      }
  
      return value;
    };
  
  })();

  let factorialResult = factorialMemo(3);

  console.log(factorialResult);

/*(((6))) Матрица 1*/

// Транспонировать матрицу

let matrix = [[1, 2], [1, 2]];

function transpose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        // console.log(matrix[i]);
        for (let j = 0; j < i; j++) {
            console.log(matrix[i][j]);
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
        console.log(matrix[i][j]);
      }
    }
  }

  transpose(matrix);

  console.log(matrix);

  // Сложить две матрицы

let matrix2 = [
    [1,2,3],
    [1,2,3],
    [1,2,3],
];

let matrix3 = [
    [4,5,6],
    [4,5,6],
    [4,5,6],
];

// let matrix4 = [...matrix2, ...matrix3];

// console.log(matrix4);

let matrix5 = [];

function SumMatrix(matrix2, matrix3) {   
    
    var m = matrix2.length, n = matrix2[0].length;
    for (var i = 0; i < m; i++) {
        matrix5[i] = [];
        console.log(matrix5);
        for (var j = 0; j < n; j++) {
            matrix5[i][j] = matrix2[i][j] + matrix3[i][j];
        }
}

    // return matrix5;
}

SumMatrix(matrix2, matrix3);
console.log(matrix5);

// console.log(matrix5);

// for (let i=0; i < matrix2.length; i++) {
//     for (var j = 0; j < i; j++){
//         matrix5.push(matrix2[i][j] + matrix3[i][j]);
//     }
// }

let matrix9 = [
    [0,6,1],
    [43,7,0],
    [15,8,0],
    [12,0,0],
    [34,9,1]
];

let matrix6 = [];

function SumMatrix2(matrix9) {   
    
    var m = matrix9.length, n = matrix9[0].length;
    for (var i = 0; i < m; i++) {
        matrix6[i] = [];
        // console.log(matrix6);
        for (var j = 0; j < n; j++) {
            if(matrix9[i][j] !== 0) {
                matrix6[i][j] = matrix9[i];
            } else if (matrix9[i][j] == 0) {
                // console.log('Break');
                // matrix6[i][j] = matrix9[i][j];
                break;
            }
        }
}

    // return matrix5;
}

SumMatrix2(matrix9);
console.log(matrix6);

// let arr1 = [
//     [1, 2],
//     [1, 2]
// ];

let arr5 = [
    [0,-6,1],
    [43,7,0],
    [15,8,0],
    [12,0,0],
    [34,9,1]
];

function zeroArray(arr) {
    let filterArray = [];
    let counter = 0;
    
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        // let min = el[0];
        // console.log(min);
        for(j = 0; j < el.length; j++) {
            // if(el[j] < min) {
            //     min = el[j];
            //     console.log(min);
            // }
            // }

        // return min;
            // console.log(el[j]);
            // if (el[2] != 0) {
            //     //   alert(el);
            //     //   arr5.splice(i--, 1);
        
            //     filterArray[i] = arr[i];
            //     } 
                if (el[j + counter] == 0) {
                    // console.log(el[j]);
                    // filterArray[counter] = el;
                    // counter++;
                    continue;
                } else {
                    filterArray[counter] = el;
                    counter++;
                }
              }
        }
        
        
            return filterArray;
            }

// zeroArray(arr5);
console.log(zeroArray(arr5));

const compact = (coll) => {
    // Инициализация результата
    // Для пустой входной коллекции результатом будет пустой массив
    const result = [];
  
    for (const item of coll) {
      if (typeof(item) !== 0) {
        result.push(item);
      }
    }
  
    return result;
  };
  
  console.log(compact([0, 7]));

        // let filterArray = function someFilter(arr, callback) {
        //     let result = [];
        //     let counter = 0;
        
        //     for (let i = 0; i < arr.length; i++) {
        //         if(callback(arr[i])){
        //             result[counter] = arr[i];
        //             counter++;
        //         }
        //     }
        
        //     return result;
        // };

    
    // return filterArray;
// }

        
// console.log(someFilter(arr[i], (el) => (el[2]) === 0));
    //     if (el[2] != 0) {
    //     //   alert(el);
    //     //   arr5.splice(i--, 1);

    //     filterArray[i] = arr[i];
    //     } else if (el[2] === 0) {
    //         delArray[i]= arr[i];
    //     }
    //   }

    // return filterArray;
//     }
// }

// console.log(zeroArray(arr5));

const arr67 = [45, {a: 7}, 69, 'ads', {b: 17}, 'bbc'];

function someFilter(arr, callback) {
    let result = [];
    let i = 0;

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            result[counter] = arr[i];
            counter++;
        }
    }

    return result;
}

console.log(someFilter(arr67, (value) => (value) === 0));

// console.log(arr67);

    // arr5 = arr5.filter(function (item) {
    //     return item[2] != 0;
    // });
    
    // for (let i = arr5.length-1; i >= 0; --i) {
       
        
    // }

// console.log(arr5);

let mainArray = [[1, 0, 2], [2, 1, 1], [3, 2, 2]];

function zeroArr(arr) {
    let sum = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {

            
        }
    }

    return sum;
}

console.log(zeroArr(mainArray));

/*(((9))) Filter, map, reduce, foreach */

// filter

const arr = [45, {a: 7}, 69, 'ads', {b: 17}, 'bbc'];

function someFilter(arr, callback) {
    let result = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            result[counter] = arr[i];
            counter++;
        }
    }

    return result;
}

console.log(someFilter(arr, value => typeof(value) === 'object'));

// map

let arr = [2,4,6,8,8,8,2,24];

function map(arr, callback){
    let result = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        result[counter] = (callback(arr[i]));
        counter++;
    }

    return result;
}

console.log(map(arr, (value) => value * 3));

// reduce 

const arr = [4, 5, 1, 3, 2, 6];

function reduce(arr, callback, initial) {
    let result = initial || 0;

    for( let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }

    return result;
}

console.log(reduce(arr, (sum, nextNum) => (sum + nextNum), 12));

// forEach

let arr = [2,4,6,7,8,5,8,8,9,2,1,24];

function forEach(arr, callback){
    // let result = [];

    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
        // result[i] = ((` ${i + 1} : ${arr[i]} из массива ${arr}`));
    }
    
    // return result;
}

forEach(arr, (value, number, array) => console.log(`№${number + 1} имеет значение ${value} из массива ${array}`));


///////////////////////////////////

  function show(min, max){
    if(min <= max) {
        show(++min, max);
        console.log(min);
    }
}

show(-3, 3);

function fibo(n){
    var ret=[1,1];
    function recurs(n){
      if(!ret[n-1]) {
        recurs(n-1);
        ret[n]=ret[n-1]+ret[n-2];
    }
}
    if(n>2) { 
    recurs(n-1);
    return ret;
  }
}

 console.log(fibo(15).join());

 /*flatten*/

 function flatten(...data) {
    // console.log(data);
    const result = [];
    for (let i = 0; i < data.length; i++) {
        const currentElement = data[i];
        if (Array.isArray(currentElement)) {
            result.push(...flatten(...currentElement));
        } else {
            result.push(currentElement);
        }
    }

    return result;
 }

console.log(flatten(1, [2, [[3]], 4, 5, [7]]));



function sort(arr){
    for(let i = 0; i < arrSort.length; i++){
        for(let j = i+1; j < arrSort.length; j++){
            if (arr[i] > arr[j]){
                let temp = arrSort[i]; //6
                arrSort[i] = arrSort[j]; //2
                arrSort[j] = temp; //6
            }
        }
    }
}

let arrSort = [6,2,8,2,4,7,6,1,2,0,9,5,4];
sort(arrSort);
// sort(arrSort, (value1, value2) => value1 > value2);
console.log(arrSort);

let myArray = [6,2,8,2,4,7,6,1,2,0,9,5,4];

let min = myArray[0],
    max = min;

  for (let i = 1; i < myArray.length; ++i) {
      if (myArray[i] > max) { //9
          max = myArray[i]; 
          console.log(max);
      } else if (myArray[i] < min) { //0
        min = myArray[i]; 
        console.log(min);
      }
  }

  console.log(min, max);

  let f2 = function(a){
    this.bunny = a;
};
f2.a = 7;

let obj3 = new f2(23);
let obj4 = new f2(11);
console.log(f2);
console.log(obj3);
console.log(obj4);


let myArray3 = [6,2,8,2,4,7,6,1,2,0,9,5,4];

let max4 = myArray3[0];

  for (let i = 1; i < myArray3.length; ++i) {
      if (myArray3[i] > max4) {
          max4 = myArray3[i]; 
      }
  }

  console.log(max4);

var array = ['a', 'b', 'c', 'd', 'f'];
var i = 0;
 
function consoleRec(arr) {
   console.log(arr[i]);
   i++;
   if (i < arr.length) {
       consoleRec(arr);
}
}
 
consoleRec(array);

let arr2 = [6, 2, 8, 2, 4, 7, 6, 1, 2, 0, 9, 5, 4];
let j = 0;

function recursion(arr) {
    console.log(arr[j]);
    j++;
    if (j < arr.length) {
        recursion(arr2);
    }
}

recursion(arr2);

// a simple function to add something
const add = function(n) {
    if (n < 0) {
        console.log('Error');
    }
    else if (n === 0) {
        return 1;
    } else {
        // console.log(num);
        return n * (n - 1);
    }
    };
add(4);
// a simple memoized function to add something
const memoizedAdd = function() {
  let cache = {};
  return function(n) {
    if (n in cache) {
      console.log('Fetching from cache');
      return cache[n];
    }
    else {
      console.log('Calculating result');
      let result = add(n - 1);
      cache[n] = result;
      return result;
    }
  };
};
// returned function from memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(5)); // calculated
console.log(newAdd(5)); // cached

function* f1(min, max){
    for(let i = min; i < max; i++){
        yield* f2(min-2, max+2);
    }
}

function* f2(min, max){ // 8, 22
    for(let i = min; i < max; i++){
        yield i; // {value: 8, done: false}
    }
}

let sum = 0;
for(let item of f1(10, 20)){
    if(item % 3 === 0){
        sum += item;
    }
}

console.log(sum);


let myArray = [6, 7, 3, 8, 7, 2, 9];

let min = myArray[0],
    max = min;

  for (let i = 1; i < myArray.length; ++i) {
      if (myArray[i] > max) { //9
          max = myArray[i]; 
          console.log(max);
      } else if (myArray[i] < min) { //0
        min = myArray[i]; 
        console.log(min);
      }
  }

  console.log(min, max);

function summa(array, sum){
    sum += array.shift();

    if(array.length !=0){
        sum = summa(array, sum);
    }

    return sum;
}

console.log(summa([1,2,3], 0));

// let lights = [
//     "red",
//     "yellow",
//     "green",
//     "yellow",
//    ];

//    console.log(lights.length);
   
// let index = 0;
   
//    function ChangeLights() {
   
//     //  setInterval(function () {ChangeLights();}, 1000);
     
//     index = index + 1;
    
//     if (index == lights.length) {
//         console.log(lights);
//         index++;
//     }
    
//     // var image = document.getElementById('traffic');
//     //    image.src=lights[index];
   
//    }

//    ChangeLights();

let trafficLights = ['red', 'yellow', 'green'];

for(let k = 0; k < 3; k++) {
    for(let i = 0; i < trafficLights.length; i++) {
        console.log(trafficLights[i]);
        if(i === (trafficLights.length - 1)) {
            console.log(trafficLights[1]);
        }
    }
}

function showNewColor(currentColor) {
    let newColor;
  
    switch(currentColor) {
    case 'красный':
        newColor = 'желтый';
        break;
    case 'желтый':
        newColor = reverse ? 'красный' : 'зеленый';
        reverse = !reverse;
        break;
    case 'зеленый':
        newColor = 'желтый';
        break;  
    default:
       newColor = 'красный';
    }

    return newColor;
}

console.log(showNewColor('красный'));
console.log(showNewColor('желтый'));
console.log(showNewColor('зеленый'));
console.log(showNewColor('желтый'));
console.log(showNewColor('красный'));
console.log(showNewColor('желтый'));
console.log(showNewColor('зеленый'));
console.log(showNewColor('желтый'));

reverse = true;

function showNewColor(currentColor) {
    let newColor;
  
    switch(currentColor) {
    case 'красный':
        newColor = 'желтый';
        break;
    case 'желтый':
        newColor = reverse ? 'красный' : 'зеленый';
        reverse = !reverse;
        console.log(reverse);
        break;
    case 'зеленый':
        newColor = 'желтый';
        break;  
    default:
       newColor = 'красный';
    }

    console.log(reverse);
    return newColor;
}

console.log(showNewColor('желтый'));

let reverse = false;

function showNewColor2(currentColor = 'желтый') {
    let newColor;
    
    switch(currentColor) {
     case 'красный':
       newColor = 'желтый';
       break;
     case 'желтый':
        console.log(reverse);
       newColor = reverse ? 'красный' : 'зеленый';
       reverse = !reverse;
       console.log(reverse);
       break;
       case 'зеленый':
        newColor = 'желтый';
        break;  
      default:
       newColor = 'красный';
    }
    console.log(reverse);
    return newColor;
  }

  console.log(showNewColor2());

let a = false;

function testik() {
    a = true;
    console.log(a);
}

testik();
console.log(a);

window.reverse2 = false;

function showNewColor3(currentColor = 'красный') {
  let newColor;

  switch(currentColor) {
   case 'красный':
     newColor = 'желтый';
     break;
   case 'желтый':
     newColor = reverse ? 'красный' : 'зеленый';
     window.reverse2 = !window.reverse2;
     break;
   case 'зеленый':
       newColor = 'желтый';
       break;
    default:
     newColor = 'красный';
  }

  return newColor;
}

showNewColor3();

async function f(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hi");
        }, 2000);
    }).then((value) => {
        return "then: " + value;
    });
}

f().then((value) => console.log(value));

let obj = {
    min: 10,
    max: 20,
    [Symbol.asyncIterator](){
        let current = this.min;
        let max = this.max;
        return {
            next(){
                return new Promise((resolve, reject) => {
                    if(current > max){
                        resolve({value: undefined, done: true});
                    }else {
                        resolve({value: ++current, done: false});
                    }
                });
            },
        };
    },
};

(async () => {
    for await(let item of obj){
        console.log(item);
    }
})();

function f(word, key, encode){
    let result = '';
    let alph = 'qwertyuio pasdfghjklzxcvbnm';
    let startAlph = alph.slice(key) + alph.slice(0, key);
    

    if(encode) {
        let temp = startAlph;
        startAlph = alph; // qwertyuio pasdfghjklzxcvbnm
        alph = temp; // rtyuio pasdfghjklzxcvbnmqwe
    }

    for(let character of word){
        console.log(character);
        let index = alph.indexOf(character);
        console.log(index);
        result += startAlph[index];
       
    }

    return result;
}

let word = 'asd';
let key = 3;
console.log(f(word, key));


let alph3 = 'qwertyuio pasdfghjklzxcvbnm';
let startAlph2 = alph3.slice(3) + alph3.slice(0, 3);

console.log(startAlph2);

function sort(arr, callback){
    for(let i = 0; i < arr.length; i++){
        // console.log(arr[i]);
        for(let j = i+1; j < arr.length; j++){
            console.log(arr[j]);
            if(callback(arr[i], arr[j])){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                
            }
        }
    }
}

let arr = [2,6,8,4];
sort(arr, (value1, value2) => value1 < value2);
console.log(arr);

// 2,6,8,4
// 6,2,8,4
// 6,8,2,4
// 6,8,4,2

// const array4 = Array(100).fill(null).map(() => Math.floor(Math.random() * 2000) - 1000);
const array4 = [2,6,5,8,4];

function sortBubble(arr) {
    for (let n = 0; n < arr.length; n++) {
        for(let i = 0; i < arr.length - 1 - n; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }    
}

sortBubble(array4);
console.log(array4);

let a = "asdasdasd";
let b = "dsadsadsa";

for(let ch of a){
    let counter = 0;
    for(let ch2 of a){
        if(ch === ch2){
            counter++;
        }
    }    
}