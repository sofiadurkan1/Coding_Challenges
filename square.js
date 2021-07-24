

//define a object called square, contain two methods area and perimeter.
//area should accepts the length of a side and return side squared



let square = {
    area: function(side) {
        return side *side;
    },
    perimeter:function(side){
        return side* 4;
    }

}
console.log(square.area(10));
console.log(square.perimeter(10));



