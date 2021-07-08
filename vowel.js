//1)Kullanıcıdan bir cümle alalım.
//2)Cümledeki sesli harfleri bulan bir fonksiyon yapalım.
// 3)Console bölümüne kullanıcıdan aldığımız cümleyi, cümle içinde geçen
// sesli harfleri ve sesli harf sayılarını yazdıralım.
// P.S.: Cümlede birden fazla aynı sesli harf var ise sadece bir tanesini yazdırmak zorunda... Günlük Sorular bundan sonra devam edebilir.



// const vowels = ["a", "e", "i", "o", "u"];
// let sentence = prompt("please enter a sentence");

// for (i = 0; i<sentence.length; i++){
//     if (vowels.includes(sentence[i])){
//         console.log(sentence[i]);
//     }
// }

let sentence = prompt("please enter a sentence");

counterA= 0
counterE= 0
counterI= 0
counterO= 0
counterU = 0

for (i = 0 ; i < sentence.length ; i++){
    if("a" ===sentence[i]){
        counterA ++
    } else if("e" ===sentence[i]){
        counterE ++
    }else if("i" ===sentence[i]){
        counterI ++
    }else if("o" ===sentence[i]){
        counterO ++
    }else if("u" ===sentence[i]){
        counterU ++
    }
}
console.log("a: "+counterA);
console.log("e: "+counterE);
console.log("i: "+counterI);
console.log("o: "+counterO);
console.log("u: "+counterU);




