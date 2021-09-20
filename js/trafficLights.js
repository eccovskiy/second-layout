let reverse = false;

function showNewTrafficLight(currentTrafficLight) {
    let newTrafficLight;
  
    switch(currentTrafficLight) {
    case 'красный':
        newTrafficLight = 'желтый';
        break;
    case 'желтый':
        newTrafficLight = reverse ? 'красный' : 'зеленый';
        reverse = !reverse;
        break;
    case 'зеленый':
        newTrafficLight = 'желтый';
        break;  
    default:
       newTrafficLight = 'красный';
    }

    return newTrafficLight;
}

console.log(showNewTrafficLight('красный'));
console.log(showNewTrafficLight('желтый'));
console.log(showNewTrafficLight('зеленый'));
console.log(showNewTrafficLight('желтый'));
console.log(showNewTrafficLight('красный'));
console.log(showNewTrafficLight('желтый'));
console.log(showNewTrafficLight('зеленый'));
console.log(showNewTrafficLight('желтый'));