function findAll (str,char){
    if(str.includes(char)){
        for(let i = 0; i<str.length; i++){
            if(str[i]===char){
                console.log(`${i} "${char}"`);
            }
        }
    }else{
        console.log("Character not found");
    }
} 
findAll("ey edip adanada pide ye","e")