
//first solution decrementing

let str = "Clarusway"
let newString = ""
for(let i = str.length-1;i >= 0; i--){
    newString += str[i];

}

console.log(newString);

//second Solution
function reverseString (str){
    let splitArray = str.split("");
    let reverseArray = splitArray.reverse();
    let joinArray = reverseArray.join("");
    return joinArray;
}
reverseString("Clarusway")

//third Solution 



