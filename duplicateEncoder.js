// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

/*
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("
*/

function duplicateEncode(word){
    let result = '';
    let splitted = word.toLowerCase().split('');
    splitted.forEach(letter => {
        result += splitted.indexOf(letter) != splitted.lastIndexOf(letter) ? ')' : '(';
    });
    return result;
  }