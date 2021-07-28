//write a Javascript program to find the number of even values up to a given number

function findEvenValues(num){
    let counter =0;


    for(let i = 0; i < num; i++) {
        if(i % 2 === 0){
            counter++;

        }
    }

return counter;
}

console.log(findEvenValues(9));




//second solution


function findEvenValues(num){
    let myArray = [];

    
}