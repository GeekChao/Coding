var permutate = require("../src/permutateStr.js");

describe("permutations of a string of unique characters", function(){
    it("null string", function(){
        expect(permutate("")).toThrowError("null string");
    });

    it("string a", function(){
        expect(permutate("a", 1)).toBe(["a"]);
    });

    it("string abc", function(){
        var str = "abc";
        expect(permutate(str, str.length)).toBe(["cba", "bca", "bac", "cab", "acb", "abc"]);
    });
});