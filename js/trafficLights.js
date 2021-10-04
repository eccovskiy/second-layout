'use strict';

let reverse = false;
let newTrafficLight;
let counter = 0;

function showNewTrafficLight() {
    
    switch(counter) {
    // case 0:
    //     newTrafficLight = 'желтый';
    //     counter++; 
    //     break;
    case 0:
        newTrafficLight = reverse ? 'красный' : 'зеленый';
        reverse = !reverse;
        counter++;
        break;
    case 1:
        newTrafficLight = 'желтый';
        counter--;
        break;  
    default:
       newTrafficLight = 'красный';
    }

    return newTrafficLight;
}

console.log(showNewTrafficLight());
console.log(showNewTrafficLight());
console.log(showNewTrafficLight());
console.log(showNewTrafficLight());
console.log(showNewTrafficLight());
console.log(showNewTrafficLight());