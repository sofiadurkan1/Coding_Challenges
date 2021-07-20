//Write a function that accepts an array of strings. Return the longest string.

// const sentence = ['Gurol', 'Havanur','Sofia','Michael'];
// let longestString = '';
// for (let i = 0; i <sentence.length; i++) {
//     if (sentence[i].length> longestString.length) {
//         longestString = sentence[i]
       
// }


// }
// console.log(longestString);


//forEach Method

const myArray = ['Gurol', 'Havanur','Sofia','Michael'];
let longestString = '';

myArray.forEach(function(element){
    if (element.length> longestString.length) {
        longestString = element
    }

})
    
console.log(longestString);



//sort Method
// const myArray = ['Michael', 'Sofia', 'Havvanur'];
// console.log(myArray.sort((a, b) => b.length - a.length)[0])