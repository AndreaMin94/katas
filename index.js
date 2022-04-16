//// camel case method
// String.prototype.camelCase=function(ARGUMENT){
//     let str = this;
//     return str.split(" ").map(el => 
//         el != '' && el != ' ' ? el.replace(el[0], el[0].toUpperCase()): ''
//         ).join('');
// }
// console.log("hello word".camelCase())


//// split strings
////Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// function solution(str){
//    let splitted = str.match(/.{1,2}/g) || [];
//    return splitted.map(el => el.length == 1 ? el+'_' : el )
// }
// console.log(solution('abcdefg'))

////Count the divisors of a number
//// Count the number of divisors of a positive integer n.
////Random tests go up to n = 500000.
////
////Examples (input --> output)
////4 --> 3 (1, 2, 4)
////5 --> 2 (1, 5)
////12 --> 6 (1, 2, 3, 4, 6, 12)
////30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
function getDivisorsCnt(n){
    let counter = 2; //// partiamo da 2 perché diamo per scontato che ogni numero è divisibile per 1 e per se stesso
    //// il ciclo cicla fino a n / 2 perchè nessun numero è divisibile per un numero superiore alla sua metà
    for (let index = 2; index <= n / 2; index++) {
        if( n % index == 0) counter++;
    }
    return counter;
}
console.log(getDivisorsCnt(30))