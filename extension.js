//Write a Js program to get the extension of a filename...

//first solution

// let fileName = 'hello.txt'
// const indexOfDot = fileName.indexOf(".");
// const extension = fileName.slice(indexOfDot + 1)
// console.log(extension);


//function solution

function getExtension(fileName) {
    const indexOfDot = fileName.indexOf(".");
    return fileName.slice(indexOfDot + 1);

}
console.log(getExtension
    ('image.jpg'));