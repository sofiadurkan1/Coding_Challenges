//Question 1:Create Create a function that takes the age in years and returns the age in days.

//Convert Age to Days

// const age = parseInt(prompt("Please enter your age.."));
// const days = 365;
// function ageToDays(age) {
// let result = age * days;
// console.log(result);

// }
// ageToDays(10)

//question  2: Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

//Find the Smallest and Biggest Numbers
//Solution with for loop
let numLi= [1,5,5,6,8,9];
let min = numLi[0];
let max = numLi[0];

function minMax (number) {
    for(let i = 0;i < number.length; i++){
        for (let j = 0; j < number.length; j++){
        if(number[i] > max) max = number[i]; 
            if (number[j] < min) 
            min = number[j]
        }   
    }
        result = Array(min, max)
        return result
}

console.log(minMax(numLi));

//Sort Method

let result = [];

function minMax (number) {
    let numLi=numLi.sort((a,b) => (a-b));
    result = Array(numLi[0], numli[numLi.length-1]);
    return result;
    

}
console.log(minMax());


// MAth.max method
let numLi= [1,5,5,6,8,9];
let min;
let max;

function minMax () {
    max = Math.max(...numLi)
    min = Math.min(...numLi)
    
    return Array(min,max)
}
console.log(minMax());
//reduce method




