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
        let convert = prompt("1. F to C \n2. C to F\n3.exit ")
        if(convert==1 || convert==2 || convert == 3){

            return convert;
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


function convertTempAndLog(convert,temp){
    if (convert == 1){
        console.log(convertCelcius(temp) + " C");
    
    }else if(convert==2){
        console.log(convertFahrenheit(temp)+ " F");
    
    }else if (convert == 3){
        console.log("No problem,see you later");
    }else{
        console.log("Please enter proper value");
    }
}






let temp = askFromUserAboutTemp();
let convert = askFromUserAboutConversionType();
convertTempAndLog(convert,temp);





















