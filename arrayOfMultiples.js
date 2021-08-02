//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


function arrayOfMultiples(num, length) {
    let result = [];
    let multi = 0;

    for (let i = 0; i < num.length; i++) {
         multi = num *i
       result.push(multi)
        
    }
    return result;
}

console.log(arrayOfMultiples(7, 5) )

console.log(arrayOfMultiples(12, 10) )

console.log(arrayOfMultiples(17, 6) )



//while solution


const array = [];
function arrayOfMultiples(a,b) {
    while (b > 0) {
        array.push(a * (array.length+1))
        b--;
    }
    return array
}
console.log(arrayOfMultiples(7,5));