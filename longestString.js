//Write a function that accepts an array of strings. Return the longest string.

const sentence = ['Gurol', 'Havanur','Sofia','Michael'];
let longestString = '';
for (let i = 0; i <sentence.length; i++) {
    if (sentence[i].length> longestString.length) {
        longestString = sentence[i]
       
}


}
console.log(longestString);
