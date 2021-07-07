
//Find the most common character within the string

let str = "CClaCla"
max = 0
mostCOMMON=""
for (i = 0; i< str.length; i++){
    let counter = 0
    for(j = 0; j< str.length; j++){
        if(str[i]=== str[j]){
            counter++;
        }
        

    }
    if(counter > max){
        max= counter;
        mostCOMMON = str[i];
    }

}
console.log(mostCOMMON);