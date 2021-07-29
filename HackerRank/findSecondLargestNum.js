//Store them in an array and find the second largest number.


let mySetNum = [-2, 3, 6, 6, 5];

function largestSecondNum(arr){
    
    if(arr.length < 2){
        return `invalid array`

    }
    let maxNum = Number.MIN_SAFE_INTEGER;;
    let secondMax =Number.MIN_SAFE_INTEGER; ;
    
    for(let i = 0; i <arr.length; i++){
        if(maxNum<arr[i]){
            secondMax =maxNum;
            maxNum = arr[i];
        }else if(arr[i]<maxNum && secondMax<arr[i]){
            secondMax =arr[i];
        }
        

    }
    if(secondMax === Number.MIN_SAFE_INTEGER){
        return `There is no second max number`;
    }
    return secondMax;



}
console.log(largestSecondNum(mySetNum));