
//first solution 

// var a,b;
// a = 0;
// b = 1;
// result =b;
// for (i = 1;i<50;i++){
//     result = a+b;
//     console.log(result);
//     a =b;
//     b = result;
// }

//second solution

// function fibonacci(num){
//     let x = 0;
//     let y = 1;
//     let result;

//     while (num>0){
//         result = x +y;
//         x = y;
//         y = result;
//         num = num - 1;
//         console.log(result);


//     }


function fibonacci(num) {
    if (num == 0) 
    return num
        let x = 0;
        let y = 1;
        let result;
        for (i = 2; i <= num; i++) {
            result = x + y;
            x = y;
            y = result;
        }
        return y;
}
console.log(fibonacci(9));
