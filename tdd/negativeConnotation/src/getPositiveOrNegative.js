export default function positiveOrNegative(char){
    // se letter < n => -1
    // se letter > n => 1
    return char.toLowerCase() > 'n';
}