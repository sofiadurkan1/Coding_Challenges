//Question1:
//get the first element of an array.Passing a parameter 'n' will return the first 'n' elements of the array

function first (array, n=0){
   if(n === 0){
       return array[0];
   }else if (n<0){
       return []

   }else{
       return (array.slice(0,n));
   }

}

console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));