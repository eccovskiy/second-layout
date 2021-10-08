'use strict';

/*Задания*/

/*(((1))) Фибоначчи*/

// Рекурсия Фибоначчи
let array = [];

function fibonacci(number) {
    if (number < 2) {
        return array[number] = number;
    } else {
        return array[number] = (fibonacci(number - 1) + fibonacci(number - 2));
    }
}
  
console.log(fibonacci(5));

console.log(array);

// Мемоизация Фибоначчи
let fibonacciMemo = (function() {
    let memo = {};

    return function fibonacci(number) {
        let value;
        
        if (number in memo) {
            value = memo[number];
        } else if (number < 2) {
            value = number;
        } else {
            value = fibonacci(number - 1) + fibonacci(number - 2);
            memo[number] = value;
        }

        return value;
    };
  
})();

let inputFibonacciNumber = fibonacciMemo(3);

console.log(inputFibonacciNumber);

// Иттерируемый объект
let objectFibonacci = {
    prevValue: 0,
    nextValue: 1,
    [Symbol.iterator]() {
        return {
            next: () => {
                let currentValue = this.prevValue;
                this.prevValue = this.nextValue;
                this.nextValue += currentValue;
                
                return {
                    value: this.nextValue,
                    done: this.nextValue === 13,
                };
            },
        };
    },
};
  
for(let values of objectFibonacci) {
    console.log(values);
}

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
let array = [6, 7, 3, 8, -7, 3, 0, -4, 2, 9];

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

recursionArray(array);
console.log(`Массив [${array}], нулевых: ${zeroValues}, положительных: ${positiveValues}, отрицательных: ${negativeValues}`);

/*(((2))) Площади и периметры */

// Функциями
let figures = {
    trianglePerimeter(a, b, c) {
        return a + b + c;
    },
    triangleSquare(a, h) {
        return 0.5 * (a * h);
    },
    rectanglePerimeter(a, b) {
        return 2 * (a + b);
    },
    rectangleSquare(a, b) {
        return a * b;
    },
    circlePerimeter(r) {
        let pi = 3.14;
    
        return 2 * pi * r;
    },
    circleSquare(r) {
        let pi = 3.14;
    
        return pi * (r**2);
    },
};

console.log(figures.trianglePerimeter(15, 20, 20));
console.log(figures.triangleSquare(15, 20));
console.log(figures.rectanglePerimeter(15, 20));
console.log(figures.rectangleSquare(15, 20));
console.log(figures.circlePerimeter(15));
console.log(figures.circleSquare(15));

// Классами
// triangle
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

/*(((4)))Из 10-й в 2-ю и наоборот*/

// decToBin
function decToBin(number) {
    let decNumber = '';
    
    while (number > 0) {
        decNumber = ('' + (number % 2)) + decNumber;
        if ((number % 2) === 1) {
            number = ((number - 1) / 2);
        } else {
            number = number / 2;
        }
    }

    return +decNumber;
}

console.log(decToBin(18));

// binToDec
function binToDec(number) {
    let result = 0;

    number = '' + number;

    function reverse(string) {
        let reverseString = '';

        for (let i = string.length - 1; i >= 0; i--) {
            reverseString += string[i];
        }

        return reverseString;
    }
    
    number = (reverse(number));

    for (let i = 0; i < number.length; i++) {
        result += number[i] * (2**i);
    }

    return +result;
}

console.log(binToDec(110));

/*(((5))) Факториал*/

// Рекурсия факториал
function factorial(number) {
    return (number < 0) ? console.log('Error') : (number === 0) ? 1 : number * factorial(number - 1);
}

console.log(factorial(4));

// Мемоизация Факториал
let factorialMemo = (function() {
    let memo = {};
  
    return function f(number) {
        let value;

        if (number in memo) {
            value = memo[number];
        } else if (number === 1) {
            value = 1;
        }
        else {
            value = number * f(number - 1);
            memo[number] = value;
        }
  
        return value;
    };
  
})();

let factorialResult = factorialMemo(3);

console.log(factorialResult);

/*(((6))) Матрица 1*/

// Транспонировать матрицу
let matrix = [
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
];

function matrixTranspose(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < i; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}

matrixTranspose(matrix);

console.log(matrix);

// Сложить две матрицы
let matrixSum1 = [
    [1,2,3],
    [1,2,3],
    [1,2,3]
];

let matrixSum2 = [
    [4,5,6],
    [4,5,6],
    [4,5,6]
];

function matrixSum(matrix1, matrix2) { 
    let matrixSum = [];
    
    var m = matrix1.length, n = matrix1[0].length;
    for (var i = 0; i < m; i++) {
        matrixSum[i] = [];
        for (var j = 0; j < n; j++) {
            matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return matrixSum;
}

console.log(matrixSum(matrixSum1, matrixSum2));

/*(((9))) Filter, map, reduce, foreach */

// filter
const arrayFilter = [45, {a: 7}, 69, 'ads', {b: 17}, 'bbc'];

function someFilter(arr, callback) {
    let result = [],
        index = 0;

    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
            result[index] = arr[i];
            index++;
        }
    }

    return result;
}

console.log(someFilter(arrayFilter, value => typeof(value) === 'object'));

// map
let arrayMap = [2,4,6,8,8,8,2,24];

function map(arr, callback){
    let result = [],
        index = 0;

    for (let i = 0; i < arr.length; i++) {
        result[index] = (callback(arr[i]));
        index++;
    }

    return result;
}

console.log(map(arrayMap, (value) => value * 3));

// reduce 
const arrayReduce = [4, 5, 1, 3, 2, 6];

function reduce(arr, callback, initial) {
    let result = initial || 0;

    for(let i = 0; i < arr.length; i++) {
        result = callback(result, arr[i]);
    }

    return result;
}

console.log(reduce(arrayReduce, (sum, nextNum) => (sum + nextNum), 12));

// forEach
let arrayForEach = [2,4,6,7,8,5,8,8,9,2,1,24];

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

forEach(arrayForEach, (value, number, array) => console.log(`№${number + 1} имеет значение ${value} из массива ${array}`));