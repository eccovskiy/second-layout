let reverse = false;

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