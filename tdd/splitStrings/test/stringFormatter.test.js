import stringFormatter from "../src/stringFormatter";

/*
!Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
describe("string formatter", () => {
    it("should return the same string if string lentgh is 2", () => {
        expect(stringFormatter('ab')).toBe('ab');
    });

    it("should return char * + _ if string lentgh is 1", () => {
        expect(stringFormatter('a')).toBe('a_');
    });
});
