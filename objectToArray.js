//Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.


let entries =''

function toArray(obj) {

entries = Object.entries(obj);

console.log(entries);

}






console.log(toArray({ a: 1, b: 2 }) )

toArray({ shrimp: 15, tots: 12 }) 

toArray({})