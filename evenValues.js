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


function findEvenValuesTwo(num){
    let myArray = [];

    for(let i = 0; i < num; i++) {
        if(i % 2 === 0){
            myArray.push(i);
        }
    }
return myArray.length;

}

console.log(findEvenValuesTwo(9));