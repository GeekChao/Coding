/*
* Question: all permutations of a string of unique characters
* Solution: base case and build approach 
* Time / Space Complexity: O(n!) / O(n!), which n is the length of the string
* Author: Mingchao Zou, July 26th, 2017
*/

function permutateStr(str, len){
    if(str.length == 0) throw new Error("empty string");
    if(len == 1) { //error: [].push(str);
        var arr = []
        arr.push(str);
        return arr;
    }

    var ch = str.charAt(len - 1);
    var strings = permutateStr(str.substr(0, len - 1), len - 1);
    var results = [];
    strings.forEach(function(str){
        for(var i = 0; i <= str.length; i++)
            results.push(str.substr(0, i) + ch + str.substr(i, str.length));
    });  
    
    return results;
}

module.exports = permutateStr;

//unit test
console.log(permutateStr("ab", 2));
console.log(permutateStr("abc", 3));
console.log(permutateStr("abcd", 4));
console.log(permutateStr("", 0)); //String "" is not equal to 'null'

/*
* lesson: [].push() returns the new length of the array.
*/