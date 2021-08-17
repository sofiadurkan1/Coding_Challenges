
function isPerfectNumber (givenNum){

let numSum= 0;
for(i=1; i<givenNum; i++) {

    if(givenNum % i === 0) {
        numSum +=i;
    }  

}
if(numSum>0 && numSum === givenNum) {
    return "It is a perfect number"
}
else{
    return "It is not a perfect number"
}



}

console.log(isPerfectNumber(9));
console.log(isPerfectNumber(213));
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(-1));
console.log(isPerfectNumber(0));



