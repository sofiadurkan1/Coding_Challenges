//write a function takes one parameter and returnsthe day of the week..
//if the number is less than 1 or greater than 7,return null


function returnDay(num) {
    const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    if(num<1 || num>7){
        return null;
    }else{
        return days[num-1];
    }

}
console.log(returnDay(1));
console.log(returnDay(3));
console.log(returnDay(0));
console.log(returnDay(8));
console.log(returnDay(7));
