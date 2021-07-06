var a,b;
a = 0;
b = 1;
result =b;
for (i = 1;i<50;i++){
    result = a+b;
    console.log(result);
    a =b;
    b = result;
}