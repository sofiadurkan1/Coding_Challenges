//Define a function that accepts a string argument and return a new string with the first letter capitalized..

function capitalize (veggie){
    return veggie[0].toUpperCase() + veggie.slice(1);
}

console.log(capitalize('eggplant'));
console.log(capitalize('banana'));