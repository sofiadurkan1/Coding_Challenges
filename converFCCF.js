function askFromUserAboutTemp(){
    while (true){
      let temp = parseInt(prompt("what is the temprature"));
      if(!isNaN(temp)){
          return temp;
      }

    }
}

function askFromUserAboutConversionType(){
    while (true){
        let option = prompt("1. F to C \n2. C to F\n3.exit ")
        if(option==1 || option==2 || option == 3){

            return option;
        }

    }
}

function decimal(num){
    return (Math.round(num * 100) / 100).toFixed(2);
}

function convertFahrenheit (num){
    return decimal((num*1.8+32))
}
function convertCelcius(num){
    return decimal((num -32)/1.8)
}


function convertTempAndLog(option,temp){
    if (option == 1){
        console.log(convertCelcius(temp) + " C");
    
    }else if(option==2){
        console.log(convertFahrenheit(temp)+ " F");
    
    }else if (option == 3){
        console.log("No problem,see you later");
    }else{
        console.log("Please enter proper value");
    }
}






let temp = askFromUserAboutTemp();
let option = askFromUserAboutConversionType();
convertTempAndLog(option,temp);





















