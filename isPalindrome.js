function isPalindrome  (someString) {
    let len = someString.length;
    for(let i = 0; i<len/2; i++){
        if(someString[i]!== someString[len -i-1]){
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("ey edip adanada pide ye"));