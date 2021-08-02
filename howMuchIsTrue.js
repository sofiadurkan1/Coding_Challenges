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
  
  
	
       console.log(countTrue([true, false, false, true, false]) )

       console.log(countTrue([false, false, false, false]) )
       
       console.log(countTrue([]) )