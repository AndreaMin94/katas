
export default function stringFormatter(string){
    return string.length > 1 ? string : string + '_';
}