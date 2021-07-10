// here is a simple challenge:
// write a function
input: string => "21/06/2019"
output: string => "2019-06-21"
//lets make it more generic and complex.
//input: string => "21/06/2019" or "21.06.2019" or "21 06 2019" etc.
//output: string => "2019-06-21"
let correctEntry = true;
while (correctEntry) {
    var input = window.prompt("Enter your date using DD/MM/YYYY, DD.MM.YYYY or DD MM YYYY format to organize: ")
    console.log(input);
    if (input.length == 10);
    correctEntry = false;
}
let output  = function (inpt) {
    let char = /[ ./]/g;
    inpt = inpt.replace(char, " ").split(' ');
    inpt = [inpt[2], inpt[1], inpt[0]].join('-');
    return inpt;
}
console.log(output(input));