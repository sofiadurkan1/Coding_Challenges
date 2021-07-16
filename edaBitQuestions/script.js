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
// let numLi= [1,5,5,6,8,9];
// let min = numLi[0];
// let max = numLi[0];

// function minMax (number) {
//     for(let i = 0;i < number.length; i++){
//         for (let j = 0; j < number.length; j++){
//         if(number[i] > max) max = number[i]; 
//             if (number[j] < min) 
//             min = number[j]
//         }   
//     }
//         result = Array(min, max)
//         return result
// }

// console.log(minMax(numLi));

// //Sort Method

// let result = [];

// function minMax (number) {
//     let numLi=numLi.sort((a,b) => (a-b));
//     result = Array(numLi[0], numli[numLi.length-1]);
//     return result;
    

// }
// console.log(minMax());


// // MAth.max method
// let numLi= [1,5,5,6,8,9];
// let min;
// let max;

// function minMax () {
//     max = Math.max(...numLi)
//     min = Math.min(...numLi)
    
//     return Array(min,max)
// }
// console.log(minMax());
//reduce method








// let numLi= [1,5,5,6,8,9];
// let min = numLi[0];
// let max = numLi[0];

// function minMax (number) {
//     for(let i = 0;i < number.length; i++){
//         // for (let j = 0; j < number.length; j++){
//         if(number[i] > max) max = number[i]; 
//             if (number[i] < min) 
//             min = number[i]
//         }   
//     }
//         result = Array(min, max)
//         return result


// console.log(minMax(numLi));




//question 3: 
//Check if One Array can be Nested in Another
//Create a function that returns true if the first array can be nested inside the second.


// function canNest(arr1,arr2){
//     if (Math.min(...arr1)>Math.min(...arr2) && Math.max(...arr1)<Math.max(...arr2)){
//         return true;
//     }else{
//         return false;
//     }
    
// }
// console.log(canNest([1, 2, 3, 4], [0, 6])); 
// console.log(canNest([9, 9, 8], [8, 9]));



//questin 4: Older Than Me

//Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

//{other person name} is {older than / younger than / the same age as} me.


// p1 = Person("Samuel", 24)
// p2 = Person("Joel", 36)
// p3 = Person("Lily", 24)



// p1.compareAge(p2) ➞ "Joel is older than me."

// p2.compareAge(p1) ➞ "Samuel is younger than me."

// p1.compareAge(p3) ➞ "Lily is the same age as me."






//question 5: Find the Amount of Potatoes
//Create a function to return the amount of potatoes there are in a string.
// function potatoes(str) {
//     return str.match(/potato/g).length
	
// }
// console.log(potatoes("potatopotato"));


//extra example

// let str = 'Obama was US president';
// let result  = str.search('was');
// console.log(result);


//question6:Largest Swap
//Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.
//deneme


// let largestSwap = '45'
// if (largestSwap[0]>largestSwap[1]){
//     return console.log(false); 

// }else if(largestSwap[0]<largestSwap[1]){
//     return true;
// }else{
//     return true;
// }

function largestSwap(num) {
    num = num.toString();
    if (num[0] < num[1]) {
        return false;
    } else if (num[0] > num[1]) {
        return true;
    } else if (num.length != 2){
        return false;
       
    } else {
        return true;
    }
	
}

console.log(largestSwap(14));
console.log(largestSwap(53));
console.log(largestSwap(9));
console.log(largestSwap(99));
