//get an input from user (use prompt) until you get a valid number between 0 and 100.

//first solution
// while (true){
//     let num = parseInt(prompt("Please enter a number between 0 and 100"))
//     if(num > 0 && num<=100){
//         console.log('It is a valid number');
//         break;
//     }else{
//         console.log('Please enter valid number');
//     }
// }

//second Solution
// do{
//     num1 = parseInt(prompt("Please enter a number between 0 and 100"))
   
//    }while(num1<0 || num1>100)
   
//    console.log('you entered a valid number');


//Solution correct
   while (true){
    let input = prompt("Please enter a number between 0 and 100")
    let num = parseInt(input)
    if(!isNaN(input) && num > 0 && num <= 100){
        console.log('It is a valid number');
        break;
    }else{
        console.log('Please enter valid number');
    }
}


while (true){
    let input = prompt("Please enter a number between 0 and 100")
    let num = Number(input)
    if(!isNaN(input) && num > 0 && num <= 100){
        console.log('It is a valid number');
        break;
    }else{
        console.log('Please enter valid number');
    }
}


//LAST SOLUTION
while (true){
    let input = prompt("Please enter a number between 0 and 100")
    let num = Number(input)
    if(Number(input) && num > 0 && num <= 100){
        console.log('It is a valid number');
        break;
    }else{
        console.log('Please enter valid number');
    }
}