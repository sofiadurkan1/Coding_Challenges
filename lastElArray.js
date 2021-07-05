
//Question 2:
//get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array

function last(array,n=1){
    return array.slice(-n)
}

console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));