//! Find the missing letter
//! Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

//! You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//! The array will always contain letters in only one case.

//! Example:

//! ['a','b','c','d','f'] -> 'e'
//! ['O','Q','R','S'] -> 'P'





// function findMissingLetter(array)
// {
//     let isUppercase = array[0] == array[0].toUpperCase();
//     let first = isUppercase ? 65 : 97;
//     let second = isUppercase ? 90 : 122;

//     let original = [];
//     for (let i = first; i <= second; i++) {
//         original.push(String.fromCharCode(i));
//     }
//     const startIndex =original.indexOf(array[0]);
//     const endIndex =original.indexOf(array[array.length - 1]);
//     for(i=startIndex; i<endIndex; i++){
//         if(!array.includes(original[i])) return original[i]
//     }
//     return ' ';
// }

// console.log(findMissingLetter(['a','b','c','d','f']))
// console.log(findMissingLetter(['O','Q','R','S']))


function findMissingLetter(array){
    // let isUppercase = array[0] == array[0].toUpperCase();
    // let first = isUppercase ? 65 : 97;
    // let second = isUppercase ? 90 : 122;

    // let startIndex = array[0].charCodeAt(0)
    // let endIndex = array[array.length - 1].charCodeAt(0)
    for (let i = array[0].charCodeAt(0); i < array[array.length - 1].charCodeAt(0); i++) {
        let char = String.fromCharCode(i)
        if(!array.includes(char)) return char
    }
    return ' ';
}

console.log(findMissingLetter(['a','b','c','d','f']))
console.log(findMissingLetter(['O','Q','R','S']))