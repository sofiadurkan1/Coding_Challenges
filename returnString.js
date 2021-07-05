//Write a function that returns the string "something" joined with a space " " and the given argument a.

//***first */
// function addToStart (a) {
//     return "something" + " " + a
// }
// console.log(addToStart("bob Jane"));

//***second */
// let x = 'something';
// let y = ' '
// function addToStart (a) {
//     return x.concat(y,a)
// }
// console.log(addToStart("bob Jane"));

//third

let x = 'something';
function addToStart (a) {
    return x.concat(" ", a)
}
console.log(addToStart("bob Jane"));