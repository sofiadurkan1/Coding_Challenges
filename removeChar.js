//Remove specific characters from a string

//first solution
function removeCharacters(str){
    str = str.substring(1);
    return str;


}

console.log(removeCharacters("TbestSolution"));


//second Solution

function removeCharacters(str){
    
    str = str.slice(1);
    return str;
}
 console.log(removeCharacters("TbestSolution"));

