import splitString from "../src/splitString";

/*
!Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
describe("splitString", () => {
    it("should return empty array if string is empty", () => {
        expect(splitString("")).toStrictEqual([]);
    });

    it("should return ['ab', 'cd'] for 'abcd'", () => {
        expect(splitString("abcd")).toStrictEqual(["ab", "cd"])
    })

    it("should return ['ab', 'cd', 'e_'] for 'abcde' ", () => {
        expect(splitString("abcde")).toStrictEqual(["ab", "cd", "e_"])
    })
});
