//Write a function which accepts a single argument an array of numbers.
//it should return the sum of all the numbers in the array


function sumArray(num){
    let total =0;
    for (let i = 0; i < num.length; i++){
        total += num[i];
    }
    return total;
}

console.log(sumArray([1,2,3,4,5,6]));