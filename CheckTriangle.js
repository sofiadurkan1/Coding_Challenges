//Determine if a triangle is equilateral, isosceles, or scalene by using class structures.

//An equilateral triangle has all three sides the same length.

//An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)

//A scalene triangle has all sides of different lengths.

//Note: For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than or equal to the length of the third side. See Triangle Inequality.

//Dig Deeper: The case where the sum of the lengths of two sides equals that of the third is known as a degenerate triangle - it has zero area and looks like a single line.


// let  a;
// let b ;
// let c;
// if(a<1 || b<1 || c<1){
//     console.log("it is not a triangle")
// } else if(a+b==c || b+c==a || a+c==b){
//     console.log('this is a degenerate triangle')
// } else if(a==b && b==c){
//     console.log(`an equilateral triangle`)
// } else if(a==b ||b==c || c==a){
//     console.log(`An isosceles triangle`)
// }
// else{
//     console.log(`A scalene triangle`)
// }

class Triangle {
    constructor(a,b,c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
    checkTriangle(){

    }    
}

let triangle1 = new Triangle(4,7,9)
let triangle2 = new Triangle(5,5,5)
let triangle3 = new Triangle(4,4,8)
let triangle4 = new Triangle(0,7,9)



function checkTriangle(triangle){
    let a = triangle.a;
    let b =triangle.b;
    let c =triangle.c;
    if(a<1 || b<1 || c<1){
        return "it is not a triangle"
    } else if(a+b==c || b+c==a || a+c==b){
        return 'this is a degenerate triangle'
    } else if(a==b && b==c){
        return `an equilateral triangle`
    } else if(a==b ||b==c || c==a){
        return `An isosceles triangle`
    }
    else{
        return `A scalene triangle`
    }

}

console.log(checkTriangle(triangle1))
console.log(checkTriangle(triangle2))
console.log(checkTriangle(triangle3))
console.log(checkTriangle(triangle4))


