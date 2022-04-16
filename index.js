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
// function getDivisorsCnt(n){
//     let counter = 2; //// partiamo da 2 perché diamo per scontato che ogni numero è divisibile per 1 e per se stesso
//     //// il ciclo cicla fino a n / 2 perchè nessun numero è divisibile per un numero superiore alla sua metà
//     for (let index = 2; index <= n / 2; index++) {
//         if( n % index == 0) counter++;
//     }
//     return counter;
// }
// console.log(getDivisorsCnt(30))


// function compareTriplets(a, b) {
//     let ranks = [0,0];
//     for(let i = 0; i <= a.length; i++){
//         console.log(a[i], b[i])
//         if(a[i] > b[i]){
//             ranks[0] += 1;
//         } else if(a[i] < b[i]){
//             ranks[1] += 1;
//         }
//     }
//     return ranks;
// }
// console.log(compareTriplets([1,2,3], [3,2,1]));


////Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// function diagonalDifference(arr) {
//    let first = [];
//    let second = [];
//    for(let i = 0; i < arr.length; i++){
//         first.push(arr[i][i])
//         second.push(arr[i][arr[i].length - 1 - i])
//    }
//     return Math.abs(first.reduce((a,b) => a + b) - second.reduce((a,b) => a + b))
// }
   
// let arr = [
//     [1,2,3,],
//     [4,5,6],
//     [7,8,9]
// ];
// console.log(diagonalDifference(arr));


////Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// function plusMinus(arr) {
//     let length = arr.length;
//     let positives = 0;
//     let negatives = 0;
//     let zeros = 0;
//     arr.forEach(el => {
//         if(el > 0) positives++;
//         if(el < 0) negatives++;
//         if(el == 0) zeros++;
//     })
//     console.log(positives, negatives, zeros);
//     positives = (positives / length).toPrecision(6);
//     negatives = (negatives / length).toPrecision(6);
//     zeros = (zeros / length).toPrecision(6);
//     console.log(positives);
//     console.log(negatives);
//     console.log(zeros);

// }
// let arr = [-4, 3, -9, 0, 4, 1]
// console.log(plusMinus(arr));