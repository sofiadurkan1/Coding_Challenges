//Create a function which returns the number of true values there are in an array.
//Solution 1
function countTrue(arr) {
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === true) {
                result.push(arr[i]);
            }
        }
        return result.length;
       }
       


  //Solution 2:


function countTrue(arr){
    return arr.filter(word => word === true).length;
}

  
  
	
       console.log(countTrue([true, false, false, true, false]) )

       console.log(countTrue([false, false, false, false]) )
       
       console.log(countTrue([]) )



// Foreach function 

const booleanList = [];
const countTrue = [true, false, false, true, false]
// countTrue([false, false, false, false]) ➞ 0
array.forEach(element => {
    if (element == true) {
    return booleanList.push(element)
}});
console.log(booleanList);
