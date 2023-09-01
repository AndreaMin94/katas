//! Task
//! You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//! Examples
//! [7, 1]  =>  [1, 7]
//! [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//! [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
function sortArray(array) {
    //! array di dispari
    const odds = [];
    //! array di posizioni dei dispari
    const oddsPositions = [];
    array.forEach((element, i) => {
        if(element % 2 !== 0){
            odds.push(element);
            oddsPositions.push(i);
        }
    });

    //! ordino gli odds
    odds.sort((a,b) => a-b);
    //! ciclo le posizioni e, per ogni posizione, inserisco nella posizione corrente il numero
    oddsPositions.forEach((position, i) => {
        array[position] = odds[i]
    })
    return array;
}

const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
sortArray(array)

//! altra soluzione
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}