import negativeConnotation from "../src/negativeConnotation";

describe("negative connotation", () => {
    it("should return true for A big brown fox caught a bad bunny", () => {
        expect(negativeConnotation("A big brown fox caught a bad bunny"))
            .toBe(true);
    })
    it("should return true for Xylophones can obtain Xenon", () => {
        expect(negativeConnotation("Xylophones can obtain Xenon"))
            .toBe(false);
    })
    it("should return true for CHOCOLATE MAKES A GREAT SNACK", () => {
        expect(negativeConnotation("CHOCOLATE MAKES A GREAT SNACK"))
            .toBe(true);
    })

    it("should return true for Is  this the  best  Kata?", () => {
        expect(negativeConnotation("Is  this the  best  Kata?"))
            .toBe(true);
    })

});