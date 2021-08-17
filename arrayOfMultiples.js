//Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


function arrayOfMultiples(num, length) {
    let result = [];

    for (let i = 1; i <= length; i++) {
     
       result.push(num *i)
        
    }
    return result;
}

console.log(arrayOfMultiples(7, 5) )

console.log(arrayOfMultiples(12, 10) )

console.log(arrayOfMultiples(17, 6) )



//while solution


const array = [];
function arrayOfMultiples(num,length) {
    while (length > 0) {
        array.push(num * (array.length+1))
        length --;
    }
    return array
}
console.log(arrayOfMultiples(7,5));