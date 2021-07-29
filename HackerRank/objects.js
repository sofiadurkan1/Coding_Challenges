
    function printObjectProperty(input){
        //    
    
           let arr = input.split('-');
           let myObject = new Object;
            myObject.type =arr[0];
            myObject.model = arr[1];
            myObject.color = arr[2];
            myObject.price = arr[3];
            console.log(myObject);
        }
        console.log(printObjectProperty("fiat-500-white-$1200"))
    