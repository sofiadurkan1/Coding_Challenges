//accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
let result = ''
 let myNumber = prompt("Enter a number");
 for (let i = 0; i<myNumber.length-1; i++){
     if(myNumber[i] % 2 ===0){
         result+= myNumber[i] + '-'

     }else{
         result+=myNumber[i]
     }
 }
console.log(result);