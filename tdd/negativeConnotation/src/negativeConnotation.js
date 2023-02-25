import positiveOrNegative from "./getPositiveOrNegative";

export default function negativeConnotation(str){
    let negative = 0;
    let positive = 0;
    str.split(" ").forEach(el => {
        if(positiveOrNegative(str[0])){
            negative++;
        } else {
            positive++;
        }
    })

    return positive > negative ? true : false;
}