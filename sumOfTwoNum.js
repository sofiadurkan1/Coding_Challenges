//Write a Js program to check two numbers and return true if one of the number is 100 or if the si=um of the two numbers is 100...

function sumOfTwoNum (num1,num2){
    if (num1 + num2 === 100 || num1 === 100 || num2 === 100){
        return true;
    }else{
        return false;
    }
}
console.log(sumOfTwoNum(45,55));

console.log(sumOfTwoNum(0,100));
