let hen= {
    name: 'Mina',
    eggCount:0,
    layAnEgg(){
        this.eggCount ++;
        return 'EGG'
    }
   
};
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.eggCount);

