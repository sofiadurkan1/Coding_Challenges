//Write a function ,which accepts two numbers as inputs, representing two dice.
// If two numbers are both 1's, please print "Snake eyes!,otherwise print "Not Snake eyes!"


function isSnakeEyes(num1,num2){
    if(num1 === 1 && num2 === 1){
        console.log('Snake Eyes!')

    }else{
        console.log('Not Snake Eyes!')
    }
   

}

isSnakeEyes(1,1);
isSnakeEyes(1,5);