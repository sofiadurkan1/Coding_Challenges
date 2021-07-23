//Please write a function which accepts a single array argument.
//The function should return the last element of the array.
//if the arry is empty, function should return null. 


function lastElement (num){
    let size = num.length;
    if(size > 0){
        return num[size-1];
    }else{
        return null;
    }
}

lastElement ([3,5,7]);
lastElement([]);