import stringFormatter from "./stringFormatter";
export default function splitString(string){
    if(string.length == 0) return [];
    let result = [];
    string.split(/(..)/g).forEach(el => {
        if(el) result.push(stringFormatter(el));
    })
    return result;
}

// * return string == "" ? [] : string.split(/(..)/g).filter(el => el).map(el => el.length == 2 ? el : el+'_');